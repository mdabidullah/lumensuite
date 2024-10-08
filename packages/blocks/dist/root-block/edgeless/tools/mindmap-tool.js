import { noop } from '@lumensuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
export class MindmapToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this.tool = {
            type: 'mindmap',
        };
    }
    afterModeSwitch() {
        noop();
    }
    beforeModeSwitch() {
        noop();
    }
    onContainerClick() {
        noop();
    }
    onContainerContextMenu() {
        noop();
    }
    onContainerDblClick() {
        noop();
    }
    onContainerDragEnd() {
        noop();
    }
    onContainerDragMove() {
        noop();
    }
    onContainerDragStart() {
        noop();
    }
    onContainerMouseMove() {
        noop();
    }
    onContainerMouseOut() {
        noop();
    }
    onContainerPointerDown() {
        noop();
    }
    onContainerTripleClick() {
        noop();
    }
    onPressShiftKey() {
        noop();
    }
    onPressSpaceBar(_pressed) {
        noop();
    }
}
//# sourceMappingURL=mindmap-tool.js.map