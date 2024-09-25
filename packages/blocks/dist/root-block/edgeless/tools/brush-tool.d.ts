import type { PointerEventState } from '@lumensuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type BrushTool = {
    type: 'brush';
};
export declare class BrushToolController extends EdgelessToolController<BrushTool> {
    static BRUSH_POP_GAP: number;
    private _draggingElement;
    private _draggingElementId;
    private _lastPoint;
    private _lastPopLength;
    private _pressureSupportedPointerIds;
    private _straightLineType;
    protected _draggingPathPoints: number[][] | null;
    protected _draggingPathPressures: number[] | null;
    readonly tool: BrushTool;
    private _getStraightLineType;
    private _tryGetPressurePoints;
    afterModeSwitch(): void;
    beforeModeSwitch(): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onContainerPointerDown(): void;
    onContainerTripleClick(): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            brush: BrushToolController;
        }
    }
}
export {};
//# sourceMappingURL=brush-tool.d.ts.map