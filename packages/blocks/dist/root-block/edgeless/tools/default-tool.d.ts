import type { PointerEventState } from '@lumensuite/block-std';
import type { EdgelessTool } from '../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export declare enum DefaultModeDragType {
    /** press alt/option key to clone selected  */
    AltCloning = "alt-cloning",
    /** Moving connector label */
    ConnectorLabelMoving = "connector-label-moving",
    /** Moving selected contents */
    ContentMoving = "content-moving",
    /** Native range dragging inside active note block */
    NativeEditing = "native-editing",
    /** Default void state */
    None = "none",
    /** Dragging preview */
    PreviewDragging = "preview-dragging",
    /** Expanding the dragging area, select the content covered inside */
    Selecting = "selecting"
}
type DefaultTool = {
    type: 'default';
};
export declare class DefaultToolController extends EdgelessToolController<DefaultTool> {
    private _alignBound;
    private _autoPanTimer;
    private _clearDisposable;
    private _clearLastSelection;
    private _clearMindMapHoverState;
    private _clearSelectingState;
    private _disposables;
    private _dragging;
    private _draggingSingleMindmap;
    private _dragLastModelCoord;
    private _dragLastPos;
    private _dragStartModelCoord;
    private _dragStartPos;
    private _hoveredFrame;
    private _hoveredMindMap;
    private _isDoubleClickedOnMask;
    private _lock;
    private _moveSelectionDragStartTemp;
    private _moveSelectionStartPos;
    private _panViewport;
    private _selectedBounds;
    private _selectedConnector;
    private _selectedConnectorLabelBounds;
    private _startAutoPanning;
    private _stopAutoPanning;
    private _toBeMoved;
    private _updateSelectingState;
    private _wheeling;
    dragType: DefaultModeDragType;
    enableHover: boolean;
    readonly tool: DefaultTool;
    get draggingArea(): {
        start: DOMPoint;
        end: DOMPoint;
    } | null;
    get edgelessSelectionManager(): import("../services/selection-manager.js").EdgelessSelectionManager;
    get readonly(): boolean;
    get zoom(): number;
    private _addEmptyParagraphBlock;
    private _cloneContent;
    private _determineDragType;
    private _filterConnectedConnector;
    private _isDraggable;
    private _moveContent;
    private _moveLabel;
    private _pick;
    private initializeDragState;
    afterModeSwitch(): void;
    beforeModeSwitch(edgelessTool?: EdgelessTool): void;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerDblClick(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragStart(e: PointerEventState): Promise<void>;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(_: PointerEventState): void;
    onContainerPointerDown(): void;
    onContainerTripleClick(): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            default: DefaultToolController;
        }
    }
}
export {};
//# sourceMappingURL=default-tool.d.ts.map