import type { SurfaceBlockComponent, SurfaceBlockModel } from '@lumensuite/affine-block-surface';
import type { RootBlockModel } from '@lumensuite/affine-model';
import type { UIEventHandler } from '@lumensuite/block-std';
import type { IBound, IPoint, IVec } from '@lumensuite/global/utils';
import type { BlockModel } from '@lumensuite/store';
import { BlockComponent } from '@lumensuite/block-std';
import { type GfxViewportElement } from '@lumensuite/block-std/gfx';
import { Point } from '@lumensuite/global/utils';
import type { Viewport } from '../../_common/utils/index.js';
import type { EdgelessRootBlockWidgetName } from '../types.js';
import type { EdgelessSelectedRect } from './components/rects/edgeless-selected-rect.js';
import type { EdgelessRootService } from './edgeless-root-service.js';
import type { EdgelessTool } from './types.js';
import { EdgelessClipboardController } from './clipboard/clipboard.js';
import './components/note-slicer/index.js';
import './components/presentation/edgeless-navigator-black-background.js';
import './components/rects/edgeless-dragging-area-rect.js';
import './components/rects/edgeless-selected-rect.js';
import { EdgelessToolbar } from './components/toolbar/edgeless-toolbar.js';
import { EdgelessPageKeyboardManager } from './edgeless-keyboard.js';
export declare class EdgelessRootBlockComponent extends BlockComponent<RootBlockModel, EdgelessRootService, EdgelessRootBlockWidgetName> {
    static styles: import("lit").CSSResult;
    private _refreshLayerViewport;
    private _resizeObserver;
    private _viewportElement;
    clipboardController: EdgelessClipboardController;
    /**
     * Shared components
     */
    components: {
        toolbar: EdgelessToolbar | null;
    };
    /**
     * Disable components
     *
     * Toolbar is not allowed to display in `syncd doc block`.
     */
    disableComponents: boolean;
    keyboardManager: EdgelessPageKeyboardManager | null;
    mouseRoot: HTMLElement;
    get dispatcher(): import("@lumensuite/block-std").UIEventDispatcher;
    get slots(): {
        edgelessToolUpdated: import("@lumensuite/store").Slot<import("./tools/text-tool.js").TextTool | {
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
        pressShiftKeyUpdated: import("@lumensuite/store").Slot<boolean>;
        cursorUpdated: import("@lumensuite/store").Slot<string>;
        copyAsPng: import("@lumensuite/store").Slot<{
            blocks: LumenSuite.EdgelessBlockModelType[];
            shapes: LumenSuite.SurfaceModel[];
        }>;
        readonlyUpdated: import("@lumensuite/store").Slot<boolean>;
        draggingAreaUpdated: import("@lumensuite/store").Slot<void>;
        navigatorSettingUpdated: import("@lumensuite/store").Slot<{
            hideToolbar?: boolean;
            blackBackground?: boolean;
            fillScreen?: boolean;
        }>;
        navigatorFrameChanged: import("@lumensuite/store").Slot<import("@lumensuite/affine-model").FrameBlockModel>;
        fullScreenToggled: import("@lumensuite/store").Slot<void>;
        elementResizeStart: import("@lumensuite/store").Slot<void>;
        elementResizeEnd: import("@lumensuite/store").Slot<void>;
        toggleNoteSlicer: import("@lumensuite/store").Slot<void>;
        docLinkClicked: import("@lumensuite/store").Slot<{
            pageId: string;
            params?: {
                mode?: "page" | "edgeless" | undefined;
                blockIds?: string[] | undefined;
                elementIds?: string[] | undefined;
            } | undefined;
        }>;
        tagClicked: import("@lumensuite/store").Slot<{
            tagId: string;
        }>;
        toolbarLocked: import("@lumensuite/store").Slot<boolean>;
    };
    get surfaceBlockModel(): SurfaceBlockModel;
    get tools(): import("./services/tools-manager.js").EdgelessToolsManager;
    get viewport(): Viewport;
    get viewportElement(): HTMLElement;
    private _handleToolbarFlag;
    private _initFontLoader;
    private _initLayerUpdateEffect;
    private _initPanEvent;
    private _initPinchEvent;
    private _initPixelRatioChangeEffect;
    private _initRemoteCursor;
    private _initResizeEffect;
    private _initSlotEffects;
    private _initTools;
    private _initViewport;
    private _initWheelEvent;
    addAttachments(files: File[], point?: IVec): Promise<string[]>;
    addImages(files: File[], point?: IVec, inTopLeft?: boolean): Promise<string[]>;
    /**
     * Adds a new note with the given blocks and point.
     * @param blocks Array\<Partial\<BlockModel\>\>
     * @param point Point
     */
    addNewNote(blocks: Array<Partial<BlockModel>>, point: IPoint, options?: {
        width?: number;
        height?: number;
        parentId?: string;
        noteIndex?: number;
        offsetX?: number;
        offsetY?: number;
    }): {
        noteId: string;
        ids: string[];
    };
    /**
     * Adds a new note with the given point on the affine-editor-container.
     *
     * @param: point Point
     * @returns: The id of new note
     */
    addNoteWithPoint(point: IPoint, options?: {
        width?: number;
        height?: number;
        parentId?: string;
        noteIndex?: number;
        offsetX?: number;
        offsetY?: number;
        scale?: number;
    }): string;
    bindHotKey(keymap: Record<string, UIEventHandler>, options?: {
        global?: boolean;
        flavour?: boolean;
    }): () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    getElementsBound(): IBound | null;
    renderBlock(): import("lit").TemplateResult<1>;
    setSelection(noteId: string, _active: boolean | undefined, blockId: string, point?: Point): void;
    private accessor _isResizing;
    accessor backgroundElm: HTMLDivElement | null;
    accessor edgelessTool: EdgelessTool;
    accessor gfxViewportElm: GfxViewportElement;
    accessor mountElm: HTMLDivElement | null;
    accessor selectedRect: EdgelessSelectedRect;
    accessor surface: SurfaceBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-root': EdgelessRootBlockComponent;
    }
}
//# sourceMappingURL=edgeless-root-block.d.ts.map