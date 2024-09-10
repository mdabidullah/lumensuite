import { TelemetryProvider } from '@blocksuite/affine-shared/services';
import { Bound, noop, Vec } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { getTopElements } from '../utils/tree.js';
import { EdgelessToolController } from './edgeless-tool.js';
export class FrameToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._frame = null;
        this._startPoint = null;
        this.tool = {
            type: 'frame',
        };
    }
    _toModelCoord(p) {
        return this._service.viewport.toModelCoord(p.x, p.y);
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
        if (this._frame) {
            const frame = this._frame;
            this._doc.transact(() => {
                frame.pop('xywh');
            });
            this._edgeless.tools.setEdgelessTool({ type: 'default' });
            this._edgeless.service.selection.set({
                elements: [frame.id],
                editing: false,
            });
            const frameManager = this._edgeless.service.frame;
            frameManager.addElementsToFrame(frame, getTopElements(frameManager.getElementsInFrameBound(frame)));
            this._doc.captureSync();
        }
        this._frame = null;
        this._startPoint = null;
        this._service.frameOverlay.clear();
    }
    onContainerDragMove(e) {
        if (!this._startPoint)
            return;
        const currentPoint = this._toModelCoord(e.point);
        if (Vec.dist(this._startPoint, currentPoint) < 8 && !this._frame)
            return;
        if (!this._frame) {
            const frames = this._service.frames;
            const id = this._service.addBlock('affine:frame', {
                title: new DocCollection.Y.Text(`Frame ${frames.length + 1}`),
                xywh: Bound.fromPoints([this._startPoint, currentPoint]).serialize(),
            }, this._service.surface);
            this._service.std
                .getOptional(TelemetryProvider)
                ?.track('CanvasElementAdded', {
                control: 'canvas:draw',
                page: 'whiteboard editor',
                module: 'toolbar',
                segment: 'toolbar',
                type: 'frame',
            });
            this._frame = this._service.getElementById(id);
            this._frame.stash('xywh');
            return;
        }
        this._service.updateElement(this._frame.id, {
            xywh: Bound.fromPoints([this._startPoint, currentPoint]).serialize(),
        });
        this._service.frameOverlay.highlight(this._frame, true);
    }
    onContainerDragStart(e) {
        this._doc.captureSync();
        const { point } = e;
        this._startPoint = this._toModelCoord(point);
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
//# sourceMappingURL=frame-tool.js.map