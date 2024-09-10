import { EdgelessToolController } from './edgeless-tool.js';
type MindmapTool = {
    type: 'mindmap';
};
export declare class MindmapToolController extends EdgelessToolController<MindmapTool> {
    readonly tool: MindmapTool;
    afterModeSwitch(): void;
    beforeModeSwitch(): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(): void;
    onContainerDragMove(): void;
    onContainerDragStart(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onContainerPointerDown(): void;
    onContainerTripleClick(): void;
    onPressShiftKey(): void;
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            mindmap: MindmapToolController;
        }
    }
}
export {};
//# sourceMappingURL=mindmap-tool.d.ts.map