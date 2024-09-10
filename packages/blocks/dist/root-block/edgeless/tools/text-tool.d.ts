import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
export type TextTool = {
    type: 'text';
};
export declare class TextToolController extends EdgelessToolController<TextTool> {
    readonly tool: TextTool;
    afterModeSwitch(): void;
    beforeModeSwitch(): void;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(): void;
    onContainerDragMove(): void;
    onContainerDragStart(): void;
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
            text: TextToolController;
        }
    }
}
//# sourceMappingURL=text-tool.d.ts.map