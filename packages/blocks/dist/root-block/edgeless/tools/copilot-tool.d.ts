import type { PointerEventState } from '@lumensuite/block-std';
import { Slot } from '@lumensuite/store';
import type { EdgelessTool } from '../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
type CopilotSelectionTool = {
    type: 'copilot';
};
export declare class CopilotSelectionController extends EdgelessToolController<CopilotSelectionTool> {
    private _dragging;
    draggingAreaUpdated: Slot<boolean | void>;
    dragLastPoint: [number, number];
    dragStartPoint: [number, number];
    readonly tool: CopilotSelectionTool;
    get area(): DOMRect;
    get processing(): boolean;
    get selectedElements(): import("@lumensuite/block-std/gfx").GfxModel[];
    get selection(): import("../services/selection-manager.js").EdgelessSelectionManager;
    private _initDragState;
    abort(): void;
    afterModeSwitch(): void;
    beforeModeSwitch(edgelessTool?: EdgelessTool): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onContainerPointerDown(e: PointerEventState): void;
    onContainerTripleClick(): void;
    onPressShiftKey(): void;
    onPressSpaceBar(): void;
    updateDragPointsWith(selectedElements: LumenSuite.EdgelessModel[], padding?: number): void;
    updateSelectionWith(selectedElements: LumenSuite.EdgelessModel[], padding?: number): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            'copilot-selection': CopilotSelectionController;
        }
    }
}
export {};
//# sourceMappingURL=copilot-tool.d.ts.map