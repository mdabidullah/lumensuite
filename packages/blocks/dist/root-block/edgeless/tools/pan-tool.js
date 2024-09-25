import { noop } from '@lumensuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
export class PanToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._lastPoint = null;
        this.tool = {
            type: 'pan',
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
        this._lastPoint = null;
        this._edgeless.tools.setEdgelessTool({
            type: 'pan',
            panning: false,
        });
    }
    onContainerDragMove(e) {
        if (!this._lastPoint)
            return;
        const { viewport } = this._service;
        const { zoom } = viewport;
        const [lastX, lastY] = this._lastPoint;
        const deltaX = lastX - e.x;
        const deltaY = lastY - e.y;
        this._lastPoint = [e.x, e.y];
        viewport.applyDeltaCenter(deltaX / zoom, deltaY / zoom);
    }
    onContainerDragStart(e) {
        this._lastPoint = [e.x, e.y];
        this._edgeless.tools.setEdgelessTool({
            type: 'pan',
            panning: true,
        });
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
//# sourceMappingURL=pan-tool.js.map