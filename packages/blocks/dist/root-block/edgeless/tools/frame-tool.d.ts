import type { PointerEventState } from '@lumensuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type FrameTool = {
    type: 'frame';
};
export declare class FrameToolController extends EdgelessToolController<FrameTool> {
    private _frame;
    private _startPoint;
    readonly tool: FrameTool;
    private _toModelCoord;
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
    onPressShiftKey(): void;
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            frame: FrameToolController;
        }
    }
}
export {};
//# sourceMappingURL=frame-tool.d.ts.map