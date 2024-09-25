import type { BlockStdScope } from '@lumensuite/block-std';
import type { GfxController, GfxModel, LayerManager, PointTestOptions } from '@lumensuite/block-std/gfx';
import { type ElementRenderer, type Overlay, type ReorderingDirection, type SurfaceBlockModel, type SurfaceContext } from '@lumensuite/affine-block-surface';
import { ConnectionOverlay } from '@lumensuite/affine-block-surface';
import { type ConnectorElementModel, type FrameBlockModel, type GroupElementModel } from '@lumensuite/affine-model';
import { Bound } from '@lumensuite/global/utils';
import { type BlockModel, Slot } from '@lumensuite/store';
import type { EdgelessToolConstructor } from './services/tools-manager.js';
import { RootService } from '../root-service.js';
import { GfxBlockModel } from './block-model.js';
import { EdgelessFrameManager, FrameOverlay } from './frame-manager.js';
import { EdgelessSelectionManager } from './services/selection-manager.js';
import { TemplateJob } from './services/template.js';
import { EdgelessToolsManager } from './services/tools-manager.js';
import { EdgelessSnapManager } from './utils/snap-manager.js';
import { type ZoomAction } from './utils/zoom.js';
export declare class EdgelessRootService extends RootService implements SurfaceContext {
    static readonly flavour: "affine:page";
    private _frame;
    private _selection;
    private _snap;
    private _surface;
    private _tool;
    elementRenderers: Record<string, ElementRenderer>;
    overlays: Record<string, Overlay>;
    slots: {
        edgelessToolUpdated: Slot<import("./tools/text-tool.js").TextTool | {
            type: "pan";
            panning: boolean;
        } | {
            type: "brush";
        } | import("./tools/connector-tool.js").ConnectorTool | {
            type: "copilot";
        } | {
            type: "eraser";
        } | {
            type: "frameNavigator";
            mode?: import("../../index.js").NavigatorMode;
        } | {
            type: "frame";
        } | import("./tools/lasso-tool.js").LassoTool | {
            type: "mindmap";
        } | import("./tools/note-tool.js").NoteTool | import("./tools/shape-tool.js").ShapeTool | {
            type: "default";
        } | {
            type: "template";
        }>;
        pressShiftKeyUpdated: Slot<boolean>;
        cursorUpdated: Slot<string>;
        copyAsPng: Slot<{
            blocks: LumenSuite.EdgelessBlockModelType[];
            shapes: LumenSuite.SurfaceModel[];
        }>;
        readonlyUpdated: Slot<boolean>;
        draggingAreaUpdated: Slot<void>;
        navigatorSettingUpdated: Slot<{
            hideToolbar?: boolean;
            blackBackground?: boolean;
            fillScreen?: boolean;
        }>;
        navigatorFrameChanged: Slot<FrameBlockModel>;
        fullScreenToggled: Slot<void>;
        elementResizeStart: Slot<void>;
        elementResizeEnd: Slot<void>;
        toggleNoteSlicer: Slot<void>;
        docLinkClicked: Slot<{
            pageId: string;
            params?: {
                mode?: "page" | "edgeless" | undefined;
                blockIds?: string[] | undefined;
                elementIds?: string[] | undefined;
            } | undefined;
        }>;
        tagClicked: Slot<{
            tagId: string;
        }>;
        toolbarLocked: Slot<boolean>;
    };
    TemplateJob: typeof TemplateJob;
    get blocks(): GfxBlockModel[];
    get connectorOverlay(): ConnectionOverlay;
    /**
     * sorted edgeless elements
     */
    get edgelessElements(): GfxModel[];
    /**
     * sorted canvas elements
     */
    get elements(): import("@lumensuite/affine-block-surface").SurfaceElementModel<import("@lumensuite/block-std/gfx").BaseElementProps>[];
    get frame(): EdgelessFrameManager;
    get frameOverlay(): FrameOverlay;
    get frames(): FrameBlockModel[];
    get gfx(): GfxController;
    get host(): import("@lumensuite/block-std").EditorHost;
    get layer(): LayerManager;
    get locked(): boolean;
    set locked(locked: boolean);
    get selection(): EdgelessSelectionManager;
    get snap(): EdgelessSnapManager;
    get surface(): SurfaceBlockModel;
    get tool(): EdgelessToolsManager;
    get viewport(): import("@lumensuite/block-std/gfx").Viewport;
    get zoom(): number;
    constructor(std: BlockStdScope, flavourProvider: {
        flavour: string;
    });
    private _initReadonlyListener;
    private _initSlotEffects;
    addBlock(flavour: string, props: Record<string, unknown>, parent?: string | BlockModel, parentIndex?: number): string;
    addElement<T extends Record<string, unknown>>(type: string, props: T): string;
    createGroup(elements: LumenSuite.EdgelessModel[] | string[]): string;
    createGroupFromSelected(): string | undefined;
    createTemplateJob(type: 'template' | 'sticker'): TemplateJob;
    generateIndex(type: string): string;
    getConnectors(element: LumenSuite.EdgelessModel | string): ConnectorElementModel[];
    getElementById(id: string): LumenSuite.EdgelessModel | null;
    getElementsByType<K extends keyof LumenSuite.SurfaceElementModelMap>(type: K): LumenSuite.SurfaceElementModelMap[K][];
    getFitToScreenData(padding?: [number, number, number, number], inputBounds?: Bound[]): {
        zoom: number;
        centerX: number;
        centerY: number;
    };
    mounted(): void;
    /**
     * This method is used to pick element in group, if the picked element is in a
     * group, we will pick the group instead. If that picked group is currently selected, then
     * we will pick the element itself.
     */
    pickElementInGroup(x: number, y: number, options?: PointTestOptions): LumenSuite.EdgelessModel | null;
    registerTool(Tool: EdgelessToolConstructor): void;
    removeElement(id: string | LumenSuite.EdgelessModel): void;
    reorderElement(element: LumenSuite.EdgelessModel, direction: ReorderingDirection): void;
    setZoomByAction(action: ZoomAction): void;
    setZoomByStep(step: number): void;
    ungroup(group: GroupElementModel): void;
    unmounted(): void;
    updateElement(id: string, props: Record<string, unknown>): void;
    zoomToFit(): void;
}
//# sourceMappingURL=edgeless-root-service.d.ts.map