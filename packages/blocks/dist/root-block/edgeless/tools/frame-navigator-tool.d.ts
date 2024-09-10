import type { NavigatorMode } from '../../../_common/edgeless/frame/consts.js';
import { EdgelessToolController } from './edgeless-tool.js';
type FrameNavigatorTool = {
    type: 'frameNavigator';
    mode?: NavigatorMode;
};
export declare class PresentToolController extends EdgelessToolController<FrameNavigatorTool> {
    readonly tool: FrameNavigatorTool;
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
            'frame-navigator': PresentToolController;
        }
    }
}
export {};
//# sourceMappingURL=frame-navigator-tool.d.ts.map