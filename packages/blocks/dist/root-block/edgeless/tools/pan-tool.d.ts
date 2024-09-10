import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type PanTool = {
    type: 'pan';
    panning: boolean;
};
export declare class PanToolController extends EdgelessToolController<PanTool> {
    private _lastPoint;
    readonly tool: PanTool;
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
    namespace BlockSuite {
        interface EdgelessToolMap {
            pan: PanToolController;
        }
    }
}
export {};
//# sourceMappingURL=pan-tool.d.ts.map