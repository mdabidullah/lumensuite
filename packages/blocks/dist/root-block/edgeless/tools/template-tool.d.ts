import { EdgelessToolController } from './edgeless-tool.js';
export type TemplateTool = {
    type: 'template';
};
export declare class TemplateToolController extends EdgelessToolController<TemplateTool> {
    readonly tool: {
        type: "template";
    };
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
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            template: TemplateToolController;
        }
    }
}
//# sourceMappingURL=template-tool.d.ts.map