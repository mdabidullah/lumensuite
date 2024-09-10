import { TelemetryProvider } from '@blocksuite/affine-shared/services';
import { noop } from '@blocksuite/global/utils';
import { addText } from '../utils/text.js';
import { EdgelessToolController } from './edgeless-tool.js';
export class TextToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this.tool = {
            type: 'text',
        };
    }
    afterModeSwitch() {
        noop();
    }
    beforeModeSwitch() {
        noop();
    }
    onContainerClick(e) {
        const textFlag = this._edgeless.doc.awarenessStore.getFlag('enable_edgeless_text');
        if (textFlag) {
            const [x, y] = this._service.viewport.toModelCoord(e.x, e.y);
            this._edgeless.std.command.exec('insertEdgelessText', { x, y });
            this._service.tool.setEdgelessTool({
                type: 'default',
            });
        }
        else {
            addText(this._edgeless, e);
        }
        this._edgeless.std
            .getOptional(TelemetryProvider)
            ?.track('CanvasElementAdded', {
            control: 'canvas:draw',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: 'text',
        });
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
//# sourceMappingURL=text-tool.js.map