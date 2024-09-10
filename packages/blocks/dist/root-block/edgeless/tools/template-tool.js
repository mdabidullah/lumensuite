import { noop } from '@blocksuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
export class TemplateToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this.tool = {
            type: 'template',
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
    onPressShiftKey(_) {
        noop();
    }
    onPressSpaceBar(_pressed) {
        noop();
    }
}
//# sourceMappingURL=template-tool.js.map