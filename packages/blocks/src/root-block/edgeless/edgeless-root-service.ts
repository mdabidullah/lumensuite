import type { BlockStdScope } from '@lumensuite/block-std';
import type {
  GfxController,
  GfxModel,
  LayerManager,
  PointTestOptions,
} from '@lumensuite/block-std/gfx';
import type { IBound } from '@lumensuite/global/utils';

import {
  type ElementRenderer,
  elementRenderers,
  type Overlay,
  type ReorderingDirection,
  type SurfaceBlockModel,
  type SurfaceContext,
} from '@lumensuite/affine-block-surface';
import {
  ConnectionOverlay,
  MindmapElementModel,
  SurfaceGroupLikeModel,
} from '@lumensuite/affine-block-surface';
import {
  type ConnectorElementModel,
  type FrameBlockModel,
  type GroupElementModel,
  type ReferenceInfo,
  RootBlockSchema,
} from '@lumensuite/affine-model';
import { clamp } from '@lumensuite/affine-shared/utils';
import { GfxControllerIdentifier } from '@lumensuite/block-std/gfx';
import { ErrorCode, LumenSuiteError } from '@lumensuite/global/exceptions';
import { Bound, getCommonBound, last } from '@lumensuite/global/utils';
import { type BlockModel, Slot } from '@lumensuite/store';

import type { EdgelessToolConstructor } from './services/tools-manager.js';
import type { EdgelessTool } from './types.js';

import { getSurfaceBlock } from '../../surface-ref-block/utils.js';
import { RootService } from '../root-service.js';
import { GfxBlockModel } from './block-model.js';
import { EdgelessFrameManager, FrameOverlay } from './frame-manager.js';
import { getLastPropsKey } from './services/edit-session.js';
import { EdgelessSelectionManager } from './services/selection-manager.js';
import { TemplateJob } from './services/template.js';
import {
  createInsertPlaceMiddleware,
  createRegenerateIndexMiddleware,
  createStickerMiddleware,
  replaceIdMiddleware,
} from './services/template-middlewares.js';
import { EdgelessToolsManager } from './services/tools-manager.js';
import { FIT_TO_SCREEN_PADDING } from './utils/consts.js';
import { getCursorMode } from './utils/query.js';
import { EdgelessSnapManager } from './utils/snap-manager.js';
import {
  ZOOM_INITIAL,
  ZOOM_MAX,
  ZOOM_MIN,
  ZOOM_STEP,
  type ZoomAction,
} from './utils/zoom.js';

export class EdgelessRootService extends RootService implements SurfaceContext {
  static override readonly flavour = RootBlockSchema.model.flavour;

  private _frame: EdgelessFrameManager;

  private _selection: EdgelessSelectionManager;

  private _snap: EdgelessSnapManager;

  private _surface: SurfaceBlockModel;

  private _tool: EdgelessToolsManager;

  elementRenderers: Record<string, ElementRenderer> = elementRenderers;

  overlays: Record<string, Overlay> = {
    connector: new ConnectionOverlay(this.gfx),
    frame: new FrameOverlay(this),
  };

  slots = {
    edgelessToolUpdated: new Slot<EdgelessTool>(),
    pressShiftKeyUpdated: new Slot<boolean>(),
    cursorUpdated: new Slot<string>(),
    copyAsPng: new Slot<{
      blocks: LumenSuite.EdgelessBlockModelType[];
      shapes: LumenSuite.SurfaceModel[];
    }>(),
    readonlyUpdated: new Slot<boolean>(),
    draggingAreaUpdated: new Slot(),
    navigatorSettingUpdated: new Slot<{
      hideToolbar?: boolean;
      blackBackground?: boolean;
      fillScreen?: boolean;
    }>(),
    navigatorFrameChanged: new Slot<FrameBlockModel>(),
    fullScreenToggled: new Slot(),

    elementResizeStart: new Slot(),
    elementResizeEnd: new Slot(),
    toggleNoteSlicer: new Slot(),

    docLinkClicked: new Slot<ReferenceInfo>(),
    tagClicked: new Slot<{ tagId: string }>(),
    toolbarLocked: new Slot<boolean>(),
  };

  TemplateJob = TemplateJob;

  get blocks(): GfxBlockModel[] {
    return this.layer.blocks;
  }

  get connectorOverlay() {
    return this.overlays.connector as ConnectionOverlay;
  }

  /**
   * sorted edgeless elements
   */
  get edgelessElements(): GfxModel[] {
    return [...this.layer.canvasElements, ...this.layer.blocks].sort(
      this.layer.compare
    );
  }

  /**
   * sorted canvas elements
   */
  get elements() {
    return this.layer.canvasElements;
  }

  get frame() {
    return this._frame;
  }

  get frameOverlay() {
    return this.overlays.frame as FrameOverlay;
  }

  get frames() {
    return this.layer.blocks.filter(
      block => block.flavour === 'affine:frame'
    ) as FrameBlockModel[];
  }

  get gfx(): GfxController {
    return this.std.get(GfxControllerIdentifier);
  }

  override get host() {
    return this.std.host;
  }

  get layer(): LayerManager {
    return this.gfx.layer;
  }

  get locked() {
    return this.viewport.locked;
  }

  set locked(locked: boolean) {
    this.viewport.locked = locked;
  }

  get selection() {
    return this._selection;
  }

  get snap() {
    return this._snap;
  }

  get surface() {
    return this._surface;
  }

  get tool() {
    return this._tool;
  }

  get viewport() {
    return this.std.get(GfxControllerIdentifier).viewport;
  }

  get zoom() {
    return this.viewport.zoom;
  }

  constructor(std: BlockStdScope, flavourProvider: { flavour: string }) {
    super(std, flavourProvider);
    const surface = getSurfaceBlock(this.doc);
    if (!surface) {
      throw new LumenSuiteError(
        ErrorCode.NoSurfaceModelError,
        'This doc is missing surface block in edgeless.'
      );
    }
    this._surface = surface;
    this._frame = new EdgelessFrameManager(this);
    this._snap = new EdgelessSnapManager(this);
    this._selection = new EdgelessSelectionManager(this);
    this._tool = EdgelessToolsManager.create(this, []);
  }

  private _initReadonlyListener() {
    const doc = this.doc;

    let readonly = doc.readonly;
    this.disposables.add(
      doc.awarenessStore.slots.update.on(() => {
        if (readonly !== doc.readonly) {
          readonly = doc.readonly;
          this.slots.readonlyUpdated.emit(readonly);
        }
      })
    );
  }

  private _initSlotEffects() {
    const { disposables, slots } = this;

    disposables.add(
      slots.edgelessToolUpdated.on(edgelessTool => {
        slots.cursorUpdated.emit(getCursorMode(edgelessTool));
      })
    );

    disposables.add(
      slots.pressShiftKeyUpdated.on(pressed => {
        this.tool.shiftKey = pressed;
      })
    );
  }

  addBlock(
    flavour: string,
    props: Record<string, unknown>,
    parent?: string | BlockModel,
    parentIndex?: number
  ) {
    const key = getLastPropsKey(flavour as LumenSuite.EdgelessModelKeys, props);
    if (key) {
      props = this.editPropsStore.applyLastProps(key, props);
    }

    const nProps = {
      ...props,
      index: this.generateIndex(flavour),
    };
    return this.doc.addBlock(flavour as never, nProps, parent, parentIndex);
  }

  addElement<T extends Record<string, unknown>>(type: string, props: T) {
    const key = getLastPropsKey(type as LumenSuite.EdgelessModelKeys, props);
    if (key) {
      props = this.editPropsStore.applyLastProps(key, props) as T;
    }

    const nProps = {
      ...props,
      type,
      index: props.index ?? this.generateIndex(type),
    };
    return this._surface.addElement(nProps);
  }

  createGroup(elements: LumenSuite.EdgelessModel[] | string[]) {
    const groups = this.elements.filter(
      el => el.type === 'group'
    ) as GroupElementModel[];
    const groupId = this.addElement('group', {
      children: elements.reduce(
        (pre, el) => {
          const id = typeof el === 'string' ? el : el.id;
          pre[id] = true;
          return pre;
        },
        {} as Record<string, true>
      ),
      title: `Group ${groups.length + 1}`,
    });

    return groupId;
  }

  createGroupFromSelected() {
    const { selection } = this;

    if (
      selection.selectedElements.length === 0 ||
      !selection.selectedElements.every(
        element =>
          element.group === selection.firstElement.group &&
          !(element.group instanceof MindmapElementModel)
      )
    ) {
      return;
    }

    const parent = selection.firstElement.group as GroupElementModel;

    if (parent !== null) {
      selection.selectedElements.forEach(element => {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        parent.removeChild(element.id);
      });
    }

    const groupId = this.createGroup(selection.selectedElements);

    if (parent !== null) {
      parent.addChild(groupId);
    }

    selection.set({
      editing: false,
      elements: [groupId],
    });

    return groupId;
  }

  createTemplateJob(type: 'template' | 'sticker') {
    const middlewares: ((job: TemplateJob) => void)[] = [];

    if (type === 'template') {
      const currentContentBound = getCommonBound(
        (
          this.blocks.map(block => Bound.deserialize(block.xywh)) as IBound[]
        ).concat(this.elements)
      );

      if (currentContentBound) {
        currentContentBound.x +=
          currentContentBound.w + 20 / this.viewport.zoom;
        middlewares.push(createInsertPlaceMiddleware(currentContentBound));
      }

      const idxGenerator = this.layer.createIndexGenerator(true);

      middlewares.push(
        createRegenerateIndexMiddleware((type: string) => idxGenerator(type))
      );
    }

    if (type === 'sticker') {
      middlewares.push(
        createStickerMiddleware(this.viewport.center, () =>
          this.layer.generateIndex('affine:image')
        )
      );
    }

    middlewares.push(replaceIdMiddleware);

    return TemplateJob.create({
      model: this.surface,
      type,
      middlewares,
    });
  }

  generateIndex(type: string) {
    return this.layer.generateIndex(type);
  }

  getConnectors(element: LumenSuite.EdgelessModel | string) {
    const id = typeof element === 'string' ? element : element.id;

    return this.surface.getConnectors(id) as ConnectorElementModel[];
  }

  getElementById(id: string): LumenSuite.EdgelessModel | null {
    const el =
      this._surface.getElementById(id) ??
      (this.doc.getBlockById(id) as LumenSuite.EdgelessBlockModelType | null);
    return el;
  }

  getElementsByType<K extends keyof LumenSuite.SurfaceElementModelMap>(
    type: K
  ): LumenSuite.SurfaceElementModelMap[K][] {
    return this.surface.getElementsByType(type);
  }

  getFitToScreenData(
    padding: [number, number, number, number] = [0, 0, 0, 0],
    inputBounds?: Bound[]
  ) {
    let bounds = [];
    if (inputBounds && inputBounds.length) {
      bounds = inputBounds;
    } else {
      this.blocks.forEach(block => {
        bounds.push(Bound.deserialize(block.xywh));
      });

      const surfaceElementsBound = getCommonBound(this.elements);
      if (surfaceElementsBound) {
        bounds.push(surfaceElementsBound);
      }
    }

    const [pt, pr, pb, pl] = padding;
    const { viewport } = this;
    let { centerX, centerY, zoom } = viewport;

    if (bounds.length) {
      const { width, height } = viewport;
      const bound = getCommonBound(bounds);
      if (bound) {
        zoom = Math.min(
          (width - FIT_TO_SCREEN_PADDING - (pr + pl)) / bound.w,
          (height - FIT_TO_SCREEN_PADDING - (pt + pb)) / bound.h
        );
        zoom = clamp(zoom, ZOOM_MIN, ZOOM_INITIAL);

        centerX = bound.x + (bound.w + pr / zoom) / 2 - pl / zoom / 2;
        centerY = bound.y + (bound.h + pb / zoom) / 2 - pt / zoom / 2;
      } else {
        zoom = ZOOM_INITIAL;
      }
    } else {
      zoom = ZOOM_INITIAL;
    }
    return { zoom, centerX, centerY };
  }

  override mounted() {
    super.mounted();
    this._initSlotEffects();
    this._initReadonlyListener();
  }

  /**
   * This method is used to pick element in group, if the picked element is in a
   * group, we will pick the group instead. If that picked group is currently selected, then
   * we will pick the element itself.
   */
  pickElementInGroup(
    x: number,
    y: number,
    options?: PointTestOptions
  ): LumenSuite.EdgelessModel | null {
    const selectionManager = this._selection;
    const results = this.gfx.getElementByPoint(x, y, {
      ...options,
      all: true,
    });

    let picked = last(results) ?? null;
    const { activeGroup } = selectionManager;
    const first = picked;

    if (activeGroup && picked && activeGroup.hasDescendant(picked.id)) {
      let index = results.length - 1;

      while (
        picked === activeGroup ||
        (picked instanceof SurfaceGroupLikeModel &&
          picked.hasDescendant(activeGroup))
      ) {
        picked = results[--index];
      }
    } else if (picked) {
      let index = results.length - 1;

      while (picked.group !== null) {
        if (--index < 0) {
          picked = null;
          break;
        }
        picked = results[index];
      }
    }

    return (picked ?? first) as LumenSuite.EdgelessModel | null;
  }

  registerTool(Tool: EdgelessToolConstructor) {
    return this.tool.register(Tool);
  }

  removeElement(id: string | LumenSuite.EdgelessModel) {
    id = typeof id === 'string' ? id : id.id;

    const el = this.getElementById(id);
    if (el instanceof GfxBlockModel) {
      this.doc.deleteBlock(el);
      return;
    }

    if (this._surface.hasElementById(id)) {
      this._surface.removeElement(id);
      return;
    }
  }

  reorderElement(
    element: LumenSuite.EdgelessModel,
    direction: ReorderingDirection
  ) {
    const index = this.layer.getReorderedIndex(element, direction);

    // block should be updated in transaction
    if (element instanceof GfxBlockModel) {
      this.doc.transact(() => {
        element.index = index;
      });
    } else {
      element.index = index;
    }
  }

  setZoomByAction(action: ZoomAction) {
    if (this.locked) return;

    switch (action) {
      case 'fit':
        this.zoomToFit();
        break;
      case 'reset':
        this.viewport.smoothZoom(1.0);
        break;
      case 'in':
      case 'out':
        this.setZoomByStep(ZOOM_STEP * (action === 'in' ? 1 : -1));
    }
  }

  setZoomByStep(step: number) {
    this.viewport.smoothZoom(clamp(this.zoom + step, ZOOM_MIN, ZOOM_MAX));
  }

  ungroup(group: GroupElementModel) {
    const { selection } = this;
    const elements = group.childElements;
    const parent = group.group as GroupElementModel;

    if (group instanceof MindmapElementModel) {
      return;
    }

    if (parent !== null) {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      parent.removeChild(group.id);
    }

    elements.forEach(element => {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      group.removeChild(element.id);
    });

    elements.forEach(element => {
      // @ts-ignore
      const elementType = element.type || element.flavour;

      element.index = this.generateIndex(elementType);
    });

    if (parent !== null) {
      elements.forEach(element => {
        parent.addChild(element.id);
      });
    }

    selection.set({
      editing: false,
      elements: elements.map(ele => ele.id),
    });
  }

  override unmounted() {
    super.unmounted();

    this._selection?.dispose();
    this.viewport?.dispose();
    this.tool?.dispose();
    this._frame?.dispose();
    this.selectionManager.set([]);
    this.disposables.dispose();
  }

  updateElement(id: string, props: Record<string, unknown>) {
    const element = this._surface.getElementById(id);
    if (element) {
      const key = getLastPropsKey(
        element.type as LumenSuite.EdgelessModelKeys,
        { ...element.yMap.toJSON(), ...props }
      );
      key && this.editPropsStore.recordLastProps(key, props);
      this._surface.updateElement(id, props);
      return;
    }

    const block = this.doc.getBlockById(id);
    if (block) {
      const key = getLastPropsKey(
        block.flavour as LumenSuite.EdgelessModelKeys,
        { ...block.yBlock.toJSON(), ...props }
      );
      key && this.editPropsStore.recordLastProps(key, props);
      this.doc.updateBlock(block, props);
    }
  }

  zoomToFit() {
    const { centerX, centerY, zoom } = this.getFitToScreenData();
    this.viewport.setViewport(zoom, [centerX, centerY], true);
  }
}
