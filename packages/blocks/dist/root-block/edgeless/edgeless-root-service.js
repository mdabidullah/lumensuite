import { elementRenderers, } from '@lumensuite/affine-block-surface';
import { ConnectionOverlay, MindmapElementModel, SurfaceGroupLikeModel, } from '@lumensuite/affine-block-surface';
import { RootBlockSchema, } from '@lumensuite/affine-model';
import { clamp } from '@lumensuite/affine-shared/utils';
import { GfxControllerIdentifier } from '@lumensuite/block-std/gfx';
import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { Bound, getCommonBound, last } from '@lumensuite/global/utils';
import { Slot } from '@lumensuite/store';
import { getSurfaceBlock } from '../../surface-ref-block/utils.js';
import { RootService } from '../root-service.js';
import { GfxBlockModel } from './block-model.js';
import { EdgelessFrameManager, FrameOverlay } from './frame-manager.js';
import { getLastPropsKey } from './services/edit-session.js';
import { EdgelessSelectionManager } from './services/selection-manager.js';
import { TemplateJob } from './services/template.js';
import { createInsertPlaceMiddleware, createRegenerateIndexMiddleware, createStickerMiddleware, replaceIdMiddleware, } from './services/template-middlewares.js';
import { EdgelessToolsManager } from './services/tools-manager.js';
import { FIT_TO_SCREEN_PADDING } from './utils/consts.js';
import { getCursorMode } from './utils/query.js';
import { EdgelessSnapManager } from './utils/snap-manager.js';
import { ZOOM_INITIAL, ZOOM_MAX, ZOOM_MIN, ZOOM_STEP, } from './utils/zoom.js';
export class EdgelessRootService extends RootService {
    static { this.flavour = RootBlockSchema.model.flavour; }
    get blocks() {
        return this.layer.blocks;
    }
    get connectorOverlay() {
        return this.overlays.connector;
    }
    /**
     * sorted edgeless elements
     */
    get edgelessElements() {
        return [...this.layer.canvasElements, ...this.layer.blocks].sort(this.layer.compare);
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
        return this.overlays.frame;
    }
    get frames() {
        return this.layer.blocks.filter(block => block.flavour === 'affine:frame');
    }
    get gfx() {
        return this.std.get(GfxControllerIdentifier);
    }
    get host() {
        return this.std.host;
    }
    get layer() {
        return this.gfx.layer;
    }
    get locked() {
        return this.viewport.locked;
    }
    set locked(locked) {
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
    constructor(std, flavourProvider) {
        super(std, flavourProvider);
        this.elementRenderers = elementRenderers;
        this.overlays = {
            connector: new ConnectionOverlay(this.gfx),
            frame: new FrameOverlay(this),
        };
        this.slots = {
            edgelessToolUpdated: new Slot(),
            pressShiftKeyUpdated: new Slot(),
            cursorUpdated: new Slot(),
            copyAsPng: new Slot(),
            readonlyUpdated: new Slot(),
            draggingAreaUpdated: new Slot(),
            navigatorSettingUpdated: new Slot(),
            navigatorFrameChanged: new Slot(),
            fullScreenToggled: new Slot(),
            elementResizeStart: new Slot(),
            elementResizeEnd: new Slot(),
            toggleNoteSlicer: new Slot(),
            docLinkClicked: new Slot(),
            tagClicked: new Slot(),
            toolbarLocked: new Slot(),
        };
        this.TemplateJob = TemplateJob;
        const surface = getSurfaceBlock(this.doc);
        if (!surface) {
            throw new LumenSuiteError(ErrorCode.NoSurfaceModelError, 'This doc is missing surface block in edgeless.');
        }
        this._surface = surface;
        this._frame = new EdgelessFrameManager(this);
        this._snap = new EdgelessSnapManager(this);
        this._selection = new EdgelessSelectionManager(this);
        this._tool = EdgelessToolsManager.create(this, []);
    }
    _initReadonlyListener() {
        const doc = this.doc;
        let readonly = doc.readonly;
        this.disposables.add(doc.awarenessStore.slots.update.on(() => {
            if (readonly !== doc.readonly) {
                readonly = doc.readonly;
                this.slots.readonlyUpdated.emit(readonly);
            }
        }));
    }
    _initSlotEffects() {
        const { disposables, slots } = this;
        disposables.add(slots.edgelessToolUpdated.on(edgelessTool => {
            slots.cursorUpdated.emit(getCursorMode(edgelessTool));
        }));
        disposables.add(slots.pressShiftKeyUpdated.on(pressed => {
            this.tool.shiftKey = pressed;
        }));
    }
    addBlock(flavour, props, parent, parentIndex) {
        const key = getLastPropsKey(flavour, props);
        if (key) {
            props = this.editPropsStore.applyLastProps(key, props);
        }
        const nProps = {
            ...props,
            index: this.generateIndex(flavour),
        };
        return this.doc.addBlock(flavour, nProps, parent, parentIndex);
    }
    addElement(type, props) {
        const key = getLastPropsKey(type, props);
        if (key) {
            props = this.editPropsStore.applyLastProps(key, props);
        }
        const nProps = {
            ...props,
            type,
            index: props.index ?? this.generateIndex(type),
        };
        return this._surface.addElement(nProps);
    }
    createGroup(elements) {
        const groups = this.elements.filter(el => el.type === 'group');
        const groupId = this.addElement('group', {
            children: elements.reduce((pre, el) => {
                const id = typeof el === 'string' ? el : el.id;
                pre[id] = true;
                return pre;
            }, {}),
            title: `Group ${groups.length + 1}`,
        });
        return groupId;
    }
    createGroupFromSelected() {
        const { selection } = this;
        if (selection.selectedElements.length === 0 ||
            !selection.selectedElements.every(element => element.group === selection.firstElement.group &&
                !(element.group instanceof MindmapElementModel))) {
            return;
        }
        const parent = selection.firstElement.group;
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
    createTemplateJob(type) {
        const middlewares = [];
        if (type === 'template') {
            const currentContentBound = getCommonBound(this.blocks.map(block => Bound.deserialize(block.xywh)).concat(this.elements));
            if (currentContentBound) {
                currentContentBound.x +=
                    currentContentBound.w + 20 / this.viewport.zoom;
                middlewares.push(createInsertPlaceMiddleware(currentContentBound));
            }
            const idxGenerator = this.layer.createIndexGenerator(true);
            middlewares.push(createRegenerateIndexMiddleware((type) => idxGenerator(type)));
        }
        if (type === 'sticker') {
            middlewares.push(createStickerMiddleware(this.viewport.center, () => this.layer.generateIndex('affine:image')));
        }
        middlewares.push(replaceIdMiddleware);
        return TemplateJob.create({
            model: this.surface,
            type,
            middlewares,
        });
    }
    generateIndex(type) {
        return this.layer.generateIndex(type);
    }
    getConnectors(element) {
        const id = typeof element === 'string' ? element : element.id;
        return this.surface.getConnectors(id);
    }
    getElementById(id) {
        const el = this._surface.getElementById(id) ??
            this.doc.getBlockById(id);
        return el;
    }
    getElementsByType(type) {
        return this.surface.getElementsByType(type);
    }
    getFitToScreenData(padding = [0, 0, 0, 0], inputBounds) {
        let bounds = [];
        if (inputBounds && inputBounds.length) {
            bounds = inputBounds;
        }
        else {
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
                zoom = Math.min((width - FIT_TO_SCREEN_PADDING - (pr + pl)) / bound.w, (height - FIT_TO_SCREEN_PADDING - (pt + pb)) / bound.h);
                zoom = clamp(zoom, ZOOM_MIN, ZOOM_INITIAL);
                centerX = bound.x + (bound.w + pr / zoom) / 2 - pl / zoom / 2;
                centerY = bound.y + (bound.h + pb / zoom) / 2 - pt / zoom / 2;
            }
            else {
                zoom = ZOOM_INITIAL;
            }
        }
        else {
            zoom = ZOOM_INITIAL;
        }
        return { zoom, centerX, centerY };
    }
    mounted() {
        super.mounted();
        this._initSlotEffects();
        this._initReadonlyListener();
    }
    /**
     * This method is used to pick element in group, if the picked element is in a
     * group, we will pick the group instead. If that picked group is currently selected, then
     * we will pick the element itself.
     */
    pickElementInGroup(x, y, options) {
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
            while (picked === activeGroup ||
                (picked instanceof SurfaceGroupLikeModel &&
                    picked.hasDescendant(activeGroup))) {
                picked = results[--index];
            }
        }
        else if (picked) {
            let index = results.length - 1;
            while (picked.group !== null) {
                if (--index < 0) {
                    picked = null;
                    break;
                }
                picked = results[index];
            }
        }
        return (picked ?? first);
    }
    registerTool(Tool) {
        return this.tool.register(Tool);
    }
    removeElement(id) {
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
    reorderElement(element, direction) {
        const index = this.layer.getReorderedIndex(element, direction);
        // block should be updated in transaction
        if (element instanceof GfxBlockModel) {
            this.doc.transact(() => {
                element.index = index;
            });
        }
        else {
            element.index = index;
        }
    }
    setZoomByAction(action) {
        if (this.locked)
            return;
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
    setZoomByStep(step) {
        this.viewport.smoothZoom(clamp(this.zoom + step, ZOOM_MIN, ZOOM_MAX));
    }
    ungroup(group) {
        const { selection } = this;
        const elements = group.childElements;
        const parent = group.group;
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
    unmounted() {
        super.unmounted();
        this._selection?.dispose();
        this.viewport?.dispose();
        this.tool?.dispose();
        this._frame?.dispose();
        this.selectionManager.set([]);
        this.disposables.dispose();
    }
    updateElement(id, props) {
        const element = this._surface.getElementById(id);
        if (element) {
            const key = getLastPropsKey(element.type, { ...element.yMap.toJSON(), ...props });
            key && this.editPropsStore.recordLastProps(key, props);
            this._surface.updateElement(id, props);
            return;
        }
        const block = this.doc.getBlockById(id);
        if (block) {
            const key = getLastPropsKey(block.flavour, { ...block.yBlock.toJSON(), ...props });
            key && this.editPropsStore.recordLastProps(key, props);
            this.doc.updateBlock(block, props);
        }
    }
    zoomToFit() {
        const { centerX, centerY, zoom } = this.getFitToScreenData();
        this.viewport.setViewport(zoom, [centerX, centerY], true);
    }
}
//# sourceMappingURL=edgeless-root-service.js.map