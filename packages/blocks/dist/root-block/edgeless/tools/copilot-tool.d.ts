import type { PointerEventState } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
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
    get selectedElements(): import("@blocksuite/block-std/gfx").GfxModel[];
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
    updateDragPointsWith(selectedElements: BlockSuite.EdgelessModel[], padding?: number): void;
    updateSelectionWith(selectedElements: BlockSuite.EdgelessModel[], padding?: number): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            'copilot-selection': CopilotSelectionController;
        }
    }
}
export {};
//# sourceMappingURL=copilot-tool.d.ts.map