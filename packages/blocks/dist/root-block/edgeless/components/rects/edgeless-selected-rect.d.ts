import { FrameBlockModel } from '@lumensuite/affine-model';
import { Slot } from '@lumensuite/global/utils';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import '../auto-complete/edgeless-auto-complete.js';
import '../connector/connector-handle.js';
import { HandleDirection } from '../resize/resize-handles.js';
import { type ResizeMode } from '../resize/resize-handles.js';
export type SelectedRect = {
    left: number;
    top: number;
    width: number;
    height: number;
    borderWidth: number;
    borderStyle: string;
    rotate: number;
};
declare const EdgelessSelectedRect_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessSelectedRect extends EdgelessSelectedRect_base {
    #private;
    static enabledWarnings: never[];
    static styles: import("lit").CSSResult;
    private _cursorRotate;
    private _dragEndCallback;
    private _initSelectedSlot;
    private _onDragEnd;
    private _onDragMove;
    private _onDragRotate;
    private _onDragStart;
    private _propDisposables;
    private _resizeManager;
    private _updateCursor;
    private _updateMode;
    private _updateOnElementChange;
    private _updateOnSelectionChange;
    private _updateOnViewportChange;
    /**
     * @param refresh indicate whether to completely refresh the state of resize manager, otherwise only update the position
     */
    private _updateResizeManagerState;
    private _updateSelectedRect;
    readonly slots: {
        dragStart: Slot<void>;
        dragMove: Slot<void>;
        dragRotate: Slot<void>;
        dragEnd: Slot<void>;
    };
    get doc(): import("@lumensuite/store").Doc;
    get dragDirection(): HandleDirection;
    get dragging(): boolean;
    get edgelessSlots(): {
        edgelessToolUpdated: Slot<import("../../tools/text-tool.js").TextTool | {
            type: "pan";
            panning: boolean;
        } | {
            type: "brush";
        } | import("../../tools/connector-tool.js").ConnectorTool | {
            type: "copilot";
        } | {
            type: "eraser";
        } | {
            type: "frameNavigator";
            mode?: import("../../../../index.js").NavigatorMode;
        } | {
            type: "frame";
        } | import("../../tools/lasso-tool.js").LassoTool | {
            type: "mindmap";
        } | import("../../tools/note-tool.js").NoteTool | import("../../tools/shape-tool.js").ShapeTool | {
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
    get resizeMode(): ResizeMode;
    get selection(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get surface(): import("@lumensuite/affine-block-surface").SurfaceBlockComponent;
    get zoom(): number;
    constructor();
    private _canAutoComplete;
    private _canRotate;
    private _isProportionalElement;
    private _shouldRenderSelection;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    private accessor _isHeightLimit;
    private accessor _isResizing;
    private accessor _isWidthLimit;
    private accessor _mode;
    private accessor _scaleDirection;
    private accessor _scalePercent;
    private accessor _selectedRect;
    private accessor _shiftKey;
    accessor autoCompleteOff: boolean;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-selected-rect': EdgelessSelectedRect;
    }
}
export {};
//# sourceMappingURL=edgeless-selected-rect.d.ts.map