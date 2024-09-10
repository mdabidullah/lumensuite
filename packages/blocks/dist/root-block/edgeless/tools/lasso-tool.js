import { CommonUtils, Overlay } from '@blocksuite/affine-block-surface';
import { ThemeObserver } from '@blocksuite/affine-shared/theme';
import { Bound, getBoundFromPoints, getPolygonPathFromPoints, linePolygonIntersects, noop, pointInPolygon, rotatePoints, Vec, } from '@blocksuite/global/utils';
import { LassoMode } from '../../../_common/types.js';
import { EdgelessToolController } from './edgeless-tool.js';
class LassoOverlay extends Overlay {
    constructor() {
        super(...arguments);
        this.d = '';
        this.startPoint = null;
    }
    render(ctx) {
        const path = new Path2D(this.d);
        const zoom = this._renderer?.viewport.zoom ?? 1.0;
        ctx.save();
        const primaryColor = ThemeObserver.getPropertyValue('--affine-primary-color');
        const strokeColor = ThemeObserver.getPropertyValue('--affine-secondary-color');
        if (this.startPoint) {
            const [x, y] = this.startPoint;
            ctx.beginPath();
            ctx.arc(x, y, 2 / zoom, 0, Math.PI * 2);
            ctx.fillStyle = primaryColor;
            ctx.fill();
        }
        ctx.strokeStyle = strokeColor;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2 / zoom;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.setLineDash([2, 5]);
        ctx.fill(path);
        ctx.stroke(path);
        ctx.restore();
    }
}
export class LassoToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._currentSelectionState = new Set();
        this._isSelecting = false;
        this._lassoPoints = [];
        this._lastPoint = [0, 0];
        this._loop = () => {
            const path = this.tool.mode === LassoMode.FreeHand
                ? CommonUtils.getSvgPathFromStroke(this._lassoPoints)
                : getPolygonPathFromPoints(this._lassoPoints);
            this._overlay.d = path;
            this._surface.refresh();
            this._raf = requestAnimationFrame(this._loop);
        };
        this._overlay = new LassoOverlay();
        this._raf = 0;
        this.tool = {
            type: 'lasso',
        }; // to finalize the selection
    }
    get isSelecting() {
        return this._isSelecting;
    }
    get selection() {
        return this._edgeless.service.selection;
    }
    _clearLastSelection() {
        if (this.selection.empty) {
            this.selection.clearLast();
        }
    }
    _getElementsInsideLasso() {
        const lassoBounds = getBoundFromPoints(this._lassoPoints);
        return this._service.gfx
            .getElementsByBound(lassoBounds)
            .filter(e => this.isInsideLassoSelection(Bound.deserialize(e.xywh), e.rotate));
    }
    _getSelectionMode(ev) {
        const shiftKey = ev.keys.shift ?? this._edgeless.tools.shiftKey;
        const altKey = ev.keys.alt ?? false;
        if (shiftKey)
            return 'add';
        else if (altKey)
            return 'sub';
        else {
            return 'set';
        }
    }
    _reset() {
        cancelAnimationFrame(this._raf);
        this._edgeless.surface.renderer.removeOverlay(this._overlay);
        this._overlay.d = '';
        this._overlay.startPoint = null;
        const elements = this._getElementsInsideLasso();
        this._currentSelectionState = new Set([
            ...Array.from(this._currentSelectionState),
            ...elements.map(el => el.id),
        ]);
        this._lassoPoints = [];
        this._isSelecting = false;
    }
    _setSelectionState(elements, editing) {
        this.selection.set({
            elements,
            editing,
        });
    }
    _updateSelection(e) {
        // elements inside the lasso selection
        const elements = this._getElementsInsideLasso().map(el => el.id);
        // current selections
        const selection = this.selection.selectedElements.map(el => el.id);
        const selectionMode = this._getSelectionMode(e);
        let set;
        switch (selectionMode) {
            case 'add':
                set = new Set([
                    ...elements,
                    ...selection.filter(elId => this._currentSelectionState.has(elId)),
                ]);
                break;
            case 'sub': {
                const toRemove = new Set(elements);
                set = new Set(Array.from(this._currentSelectionState).filter(el => !toRemove.has(el)));
                break;
            }
            case 'set':
                set = new Set(elements);
                break;
        }
        this._setSelectionState(Array.from(set), false);
    }
    isInsideLassoSelection(bound, rotate) {
        const { points, center } = bound;
        const firstPoint = this._lassoPoints[0];
        const lassoPoints = this._lassoPoints.concat(firstPoint ? [firstPoint] : []);
        const elPoly = rotatePoints(points, center, rotate);
        const lassoLen = lassoPoints.length;
        return (elPoly.some(point => pointInPolygon(point, lassoPoints)) ||
            lassoPoints.some((point, i, points) => {
                return linePolygonIntersects(point, points[(i + 1) % lassoLen], elPoly);
            }));
    }
    toModelCoord(p) {
        return this._service.viewport.toModelCoord(p.x, p.y);
    }
    abort() {
        this._reset();
    }
    afterModeSwitch(newTool) {
        if (newTool?.type === 'lasso')
            this._currentSelectionState = new Set(this.selection.selectedElements.map(el => el.id));
        this._reset();
    }
    beforeModeSwitch(edgelessTool) {
        if (edgelessTool?.type === 'pan') {
            this._clearLastSelection();
        }
    }
    onContainerClick() { }
    onContainerContextMenu() {
        noop();
    }
    onContainerDblClick() {
        noop();
    }
    onContainerDragEnd(e) {
        if (this.tool.mode !== LassoMode.FreeHand)
            return;
        this._updateSelection(e);
        this._reset();
    }
    onContainerDragMove(e) {
        if (this.tool.mode !== LassoMode.FreeHand)
            return;
        const { point } = e;
        const [x, y] = this.toModelCoord(point);
        this._lassoPoints.push([x, y]);
        this._updateSelection(e);
    }
    // For Freehand Mode =
    onContainerDragStart(e) {
        if (this.tool.mode !== LassoMode.FreeHand)
            return;
        const { alt, shift } = e.keys;
        if (!shift && !alt) {
            this._currentSelectionState.clear();
            this.selection.clear();
        }
        this._currentSelectionState = new Set(this.selection.selectedElements.map(el => el.id));
        this._isSelecting = true;
        const { point } = e;
        const [x, y] = this.toModelCoord(point);
        this._lassoPoints = [[x, y]];
        this._raf = requestAnimationFrame(this._loop);
        this._overlay.startPoint = this._lassoPoints[0];
        this._surface.renderer.addOverlay(this._overlay);
    }
    onContainerMouseMove(e) {
        if (this.tool.mode !== LassoMode.Polygonal || !this._isSelecting)
            return;
        const lastPoint = this._lastPoint;
        const [x, y] = this.toModelCoord(e.point);
        if (lastPoint) {
            lastPoint[0] = x;
            lastPoint[1] = y;
        }
        this._updateSelection(e);
    }
    onContainerMouseOut() {
        noop();
    }
    onContainerPointerDown(e) {
        const { mode } = this.tool;
        if (mode !== LassoMode.Polygonal)
            return;
        const { alt, shift } = e.keys;
        if (!shift && !alt) {
            this._currentSelectionState.clear();
            this.selection.clear();
        }
        this._isSelecting = true;
        const { point } = e;
        const [x, y] = this.toModelCoord(point);
        if (this._lassoPoints.length < 2) {
            this._currentSelectionState = new Set(this.selection.selectedElements.map(el => el.id));
            const a = [x, y];
            const b = [x, y];
            this._lassoPoints = [a, b];
            this._lastPoint = b;
            this._overlay.startPoint = a;
            this._raf = requestAnimationFrame(this._loop);
            this._surface.renderer.addOverlay(this._overlay);
        }
        else {
            const firstPoint = this._lassoPoints[0];
            const lastPoint = this._lastPoint;
            const dx = lastPoint[0] - firstPoint[0];
            const dy = lastPoint[1] - firstPoint[1];
            if (Vec.len2([dx, dy]) < 20 ** 2) {
                this._updateSelection(e);
                return this._reset();
            }
            this._lastPoint = [x, y];
            this._lassoPoints.push(this._lastPoint);
        }
    }
    onContainerTripleClick() {
        noop();
    }
    onPressShiftKey() {
        noop();
    }
    onPressSpaceBar() {
        noop();
    }
}
//# sourceMappingURL=lasso-tool.js.map