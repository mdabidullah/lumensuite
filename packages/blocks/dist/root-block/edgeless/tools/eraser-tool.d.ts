import type { PointerEventState } from '@lumensuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type EraserTool = {
    type: 'eraser';
};
export declare class EraserToolController extends EdgelessToolController<EraserTool> {
    private _erasables;
    private _eraserPoints;
    private _eraseTargets;
    private _loop;
    private _overlay;
    private _prevEraserPoint;
    private _prevPoint;
    private _timer;
    private _timestamp;
    readonly tool: EraserTool;
    private _reset;
    private toModelCoord;
    afterModeSwitch(_newMode: EraserTool): void;
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
    onPressShiftKey(_pressed: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            eraser: EraserToolController;
        }
    }
}
export {};
//# sourceMappingURL=eraser-tool.d.ts.map