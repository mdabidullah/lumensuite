import type { RootBlockModel } from '@blocksuite/affine-model';
import type { IVec } from '@blocksuite/global/utils';
import { type BlockComponent, type PointerEventState, WidgetComponent } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '../../../root-block/edgeless/edgeless-root-block.js';
import type { GfxBlockModel } from '../../edgeless/block-model.js';
import type { DragHandleOption, DropType } from './config.js';
import { PageRootBlockComponent } from '../../../root-block/page/page-root-block.js';
import { DragPreview } from './components/drag-preview.js';
import { DropIndicator } from './components/drop-indicator.js';
import { DragHandleOptionsRunner } from './config.js';
export declare const AFFINE_DRAG_HANDLE_WIDGET = "affine-drag-handle-widget";
export declare class AffineDragHandleWidget extends WidgetComponent<RootBlockModel, EdgelessRootBlockComponent | PageRootBlockComponent> {
    static staticOptionRunner: DragHandleOptionsRunner;
    static styles: import("lit").CSSResult;
    private _anchorBlockId;
    private _anchorModelDisposables;
    private _calculatePreviewOffset;
    private _calculateQuery;
    private _canEditing;
    private _changeCursorToGrabbing;
    private _checkTopLevelBlockSelection;
    /**
     * When click on drag handle
     * Should select the block and show slash menu if current block is not selected
     * Should clear selection if current block is the first selected block
     */
    private _clickHandler;
    private _createDragPreview;
    private _createDropIndicator;
    /**
     * When drag end, should move blocks to drop position
     * @returns
     */
    private _dragEndHandler;
    /**
     * When dragging, should:
     * Update drag preview position
     * Update indicator position
     * Update drop block id
     */
    private _dragMoveHandler;
    /**
     * When start dragging, should set dragging elements and create drag preview
     */
    private _dragStartHandler;
    private _getBlockComponentFromViewStore;
    private _getDraggingAreaRect;
    /**
     * When dragging, should update indicator position and target drop block id
     */
    private _getDropResult;
    private _getHoveredBlocks;
    private _getTopWithBlockComponent;
    private _handleAnchorModelDisposables;
    private _handleEdgelessToolUpdated;
    private _handleEdgelessViewPortUpdated;
    private _hide;
    /** Check if given block component is selected */
    private _isBlockSelected;
    private _isDragHandleHovered;
    private _isHoverDragHandleVisible;
    private _isTopLevelDragHandleVisible;
    private _keyboardHandler;
    private _lastHoveredBlockId;
    private _lastShowedBlock;
    private _onDragEnd;
    private _onDragHandlePointerDown;
    private _onDragHandlePointerEnter;
    private _onDragHandlePointerLeave;
    private _onDragHandlePointerUp;
    private _onDragMove;
    private _onDragStart;
    /**
     * When pointer move on block, should show drag handle
     * And update hover block id and path
     */
    private _pointerMoveOnBlock;
    private _pointerOutHandler;
    private _removeDragPreview;
    private _removeDropIndicator;
    private _reset;
    private _resetCursor;
    private _resetDropResult;
    private _setSelectedBlocks;
    private _showDragHandleOnHoverBlock;
    private _showDragHandleOnTopLevelBlocks;
    private _startDragging;
    private _throttledPointerMoveHandler;
    private _updateDragHoverRectTopLevelBlock;
    private _updateDragPreviewOnViewportUpdate;
    private _updateDragPreviewPosition;
    private _updateDropIndicator;
    private _updateDropIndicatorOnScroll;
    private _updateDropResult;
    center: IVec;
    cumulativeParentScale: number;
    dragging: boolean;
    draggingElements: BlockComponent[];
    dragPreview: DragPreview | null;
    dropBlockId: string;
    dropIndicator: DropIndicator | null;
    dropType: DropType | null;
    lastDragPointerState: PointerEventState | null;
    noteScale: number;
    rafID: number;
    scale: number;
    private get _rangeManager();
    get anchorBlockComponent(): BlockComponent | null;
    get anchorEdgelessElement(): GfxBlockModel | null;
    private get dragHandleContainerOffsetParent();
    get optionRunner(): DragHandleOptionsRunner;
    get rootComponent(): PageRootBlockComponent | EdgelessRootBlockComponent;
    private get scrollContainer();
    get selectedBlocks(): import("@blocksuite/block-std").BlockSelection[];
    static registerOption(option: DragHandleOption): import("@blocksuite/global/utils").Disposable;
    private _clearRaf;
    private _getHoverAreaRectTopLevelBlock;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _dragHandleContainer;
    private accessor _dragHandleGrabber;
    private accessor _dragHoverRect;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_DRAG_HANDLE_WIDGET]: AffineDragHandleWidget;
    }
}
//# sourceMappingURL=drag-handle.d.ts.map