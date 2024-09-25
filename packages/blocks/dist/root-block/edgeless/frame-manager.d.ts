import type { FrameBlockModel, NoteBlockModel } from '@lumensuite/affine-model';
import type { Doc } from '@lumensuite/store';
import { Overlay } from '@lumensuite/affine-block-surface';
import { Bound, type IVec } from '@lumensuite/global/utils';
import type { EdgelessRootService } from '../../index.js';
export declare class FrameOverlay extends Overlay {
    private _edgelessService;
    private _disposable;
    private _frame;
    private _innerElements;
    private get _frameManager();
    constructor(_edgelessService: EdgelessRootService);
    private _reset;
    clear(): void;
    highlight(frame: FrameBlockModel, highlightInnerElements?: boolean): void;
    render(ctx: CanvasRenderingContext2D): void;
}
export declare class EdgelessFrameManager {
    private _rootService;
    private _disposable;
    /**
     * Get all sorted frames
     */
    get frames(): FrameBlockModel[];
    constructor(_rootService: EdgelessRootService);
    private _addFrameBlock;
    private _watchElementAddedOrDeleted;
    /**
     * Reset parent of elements to the frame
     */
    addElementsToFrame(frame: FrameBlockModel, elements: LumenSuite.EdgelessModel[]): void;
    createFrameOnBound(bound: Bound): FrameBlockModel;
    createFrameOnElements(elements: LumenSuite.EdgelessModel[]): FrameBlockModel;
    createFrameOnSelected(): FrameBlockModel;
    createFrameOnViewportCenter(wh: [number, number]): void;
    dispose(): void;
    /**
     * Get all elements in the frame, there are three cases:
     * 1. The frame doesn't have `childElements`, return all elements in the frame bound but not owned by another frame.
     * 2. Return all child elements of the frame if `childElements` exists.
     */
    getChildElementsInFrame(frame: FrameBlockModel): LumenSuite.EdgelessModel[];
    /**
     * Get all elements in the frame bound,
     * whatever the element already has another parent frame or not.
     */
    getElementsInFrameBound(frame: FrameBlockModel, fullyContained?: boolean): import("@lumensuite/block-std/gfx").GfxModel[];
    /**
     * Get most top frame from the point.
     */
    getFrameFromPoint([x, y]: IVec, ignoreFrames?: FrameBlockModel[]): FrameBlockModel | null;
    getParentFrame(element: LumenSuite.EdgelessModel): FrameBlockModel | undefined;
    removeAllChildrenFromFrame(frame: FrameBlockModel): void;
    removeParentFrame(element: LumenSuite.EdgelessModel): void;
}
export declare function getNotesInFrameBound(doc: Doc, frame: FrameBlockModel, fullyContained?: boolean): NoteBlockModel[];
export declare function getBlocksInFrameBound(doc: Doc, model: FrameBlockModel, fullyContained?: boolean): LumenSuite.EdgelessBlockModelType[];
//# sourceMappingURL=frame-manager.d.ts.map