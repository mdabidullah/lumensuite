import { ColorScheme } from '@lumensuite/affine-model';
import { requestConnectedFrame } from '@lumensuite/affine-shared/utils';
import { DisposableGroup, getBoundsWithRotation, intersects, last, Slot, } from '@lumensuite/global/utils';
import { SurfaceElementModel } from '../element-model/base.js';
import { RoughCanvas } from '../utils/rough/canvas.js';
/**
 * An overlay is a layer covered on top of elements,
 * can be used for rendering non-CRDT state indicators.
 */
export class Overlay {
    constructor() {
        this._renderer = null;
    }
    clear() { }
    setRenderer(renderer) {
        this._renderer = renderer;
    }
}
export class CanvasRenderer {
    get stackingCanvas() {
        return this._stackingCanvas;
    }
    constructor(options) {
        this._disposables = new DisposableGroup();
        this._overlays = new Set();
        this._refreshRafId = null;
        this._stackingCanvas = [];
        this.stackingCanvasUpdated = new Slot();
        const canvas = document.createElement('canvas');
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.viewport = options.viewport;
        this.layerManager = options.layerManager;
        this.grid = options.gridManager;
        this.provider = options.provider ?? {};
        this.elementRenderers = options.elementRenderers;
        this._initViewport();
        options.enableStackingCanvas = options.enableStackingCanvas ?? false;
        if (options.enableStackingCanvas) {
            this._initStackingCanvas(options.onStackingCanvasCreated);
        }
    }
    /**
     * Specifying the actual size gives better results and more consistent behavior across browsers.
     *
     * Make sure the main canvas and the offscreen canvas or layer canvas are the same size.
     *
     * It is not recommended to set width and height to 100%.
     */
    _canvasSizeUpdater(dpr = window.devicePixelRatio) {
        const { width, height } = this.viewport;
        const actualWidth = Math.ceil(width * dpr);
        const actualHeight = Math.ceil(height * dpr);
        return {
            filter({ width, height }) {
                return width !== actualWidth || height !== actualHeight;
            },
            update(canvas) {
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                canvas.width = actualWidth;
                canvas.height = actualHeight;
            },
        };
    }
    _initStackingCanvas(onCreated) {
        const layer = this.layerManager;
        const updateStackingCanvasSize = (canvases) => {
            this._stackingCanvas = canvases;
            const sizeUpdater = this._canvasSizeUpdater();
            canvases.filter(sizeUpdater.filter).forEach(sizeUpdater.update);
        };
        const updateStackingCanvas = () => {
            /**
             * we already have a main canvas, so the last layer should be skipped
             */
            const canvasLayers = layer.getCanvasLayers().slice(0, -1);
            const canvases = [];
            const currentCanvases = this._stackingCanvas;
            const lastLayer = last(this.layerManager.layers);
            const maximumZIndex = lastLayer
                ? lastLayer.zIndex + lastLayer.elements.length + 1
                : 1;
            this.canvas.style.zIndex = maximumZIndex.toString();
            for (let i = 0; i < canvasLayers.length; ++i) {
                const layer = canvasLayers[i];
                const created = i < currentCanvases.length;
                const canvas = created
                    ? currentCanvases[i]
                    : document.createElement('canvas');
                if (!created) {
                    onCreated?.(canvas);
                }
                canvas.dataset.layerId = `[${layer.indexes[0]}--${layer.indexes[1]}]`;
                canvas.style.zIndex = layer.zIndex.toString();
                canvases.push(canvas);
            }
            this._stackingCanvas = canvases;
            updateStackingCanvasSize(canvases);
            if (currentCanvases.length !== canvases.length) {
                const diff = canvases.length - currentCanvases.length;
                const payload = {
                    canvases,
                    removed: [],
                    added: [],
                };
                if (diff > 0) {
                    payload.added = canvases.slice(-diff);
                }
                else {
                    payload.removed = currentCanvases.slice(diff);
                }
                this.stackingCanvasUpdated.emit(payload);
            }
            this.refresh();
        };
        this._disposables.add(this.layerManager.slots.layerUpdated.on(() => {
            updateStackingCanvas();
        }));
        updateStackingCanvas();
    }
    _initViewport() {
        let sizeUpdatedRafId = null;
        this._disposables.add(this.viewport.viewportUpdated.on(() => {
            this.refresh();
        }));
        this._disposables.add(this.viewport.sizeUpdated.on(() => {
            if (sizeUpdatedRafId)
                return;
            sizeUpdatedRafId = requestConnectedFrame(() => {
                sizeUpdatedRafId = null;
                this._resetSize();
                this._render();
                this.refresh();
            }, this._container);
        }));
    }
    _render() {
        const { viewportBounds, zoom } = this.viewport;
        const { ctx } = this;
        const dpr = window.devicePixelRatio;
        const scale = zoom * dpr;
        const matrix = new DOMMatrix().scaleSelf(scale);
        /**
         * if a layer does not have a corresponding canvas
         * its element will be add to this array and drawing on the
         * main canvas
         */
        let fallbackElement = [];
        this.layerManager.getCanvasLayers().forEach((layer, idx) => {
            if (!this._stackingCanvas[idx]) {
                fallbackElement = fallbackElement.concat(layer.elements);
                return;
            }
            const canvas = this._stackingCanvas[idx];
            const ctx = canvas.getContext('2d');
            const rc = new RoughCanvas(ctx.canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.setTransform(matrix);
            this._renderByBound(ctx, matrix, rc, viewportBounds, layer.elements);
        });
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.save();
        ctx.setTransform(matrix);
        this._renderByBound(ctx, matrix, new RoughCanvas(ctx.canvas), viewportBounds, fallbackElement, true);
    }
    _renderByBound(ctx, matrix, rc, bound, surfaceElements, overLay = false) {
        if (!ctx)
            return;
        const elements = surfaceElements ??
            this.grid.search(bound, undefined, {
                filter: el => el instanceof SurfaceElementModel,
            });
        for (const element of elements) {
            ctx.save();
            const display = element.display ?? true;
            if (display && intersects(getBoundsWithRotation(element), bound)) {
                const renderFn = this.elementRenderers[element.type];
                if (!renderFn) {
                    console.warn(`Cannot find renderer for ${element.type}`);
                    ctx.restore();
                    continue;
                }
                ctx.globalAlpha = element.opacity ?? 1;
                const dx = element.x - bound.x;
                const dy = element.y - bound.y;
                renderFn(element, ctx, matrix.translate(dx, dy), this, rc, bound);
            }
            ctx.restore();
        }
        if (overLay) {
            for (const overlay of this._overlays) {
                ctx.save();
                ctx.translate(-bound.x, -bound.y);
                overlay.render(ctx, rc);
                ctx.restore();
            }
        }
        ctx.restore();
    }
    _resetSize() {
        const sizeUpdater = this._canvasSizeUpdater();
        sizeUpdater.update(this.canvas);
        this._stackingCanvas.forEach(sizeUpdater.update);
        this.refresh();
    }
    addOverlay(overlay) {
        overlay.setRenderer(this);
        this._overlays.add(overlay);
        this.refresh();
    }
    /**
     * Used to attach main canvas, main canvas will always exist
     * @param container
     */
    attach(container) {
        this._container = container;
        container.append(this.canvas);
        this._resetSize();
        this.refresh();
    }
    dispose() {
        this._disposables.dispose();
    }
    generateColorProperty(color, fallback) {
        return (this.provider.generateColorProperty?.(color, fallback) ??
            (fallback.startsWith('--') ? `var(${fallback})` : fallback));
    }
    getCanvasByBound(bound = this.viewport.viewportBounds, surfaceElements, canvas, clearBeforeDrawing, withZoom) {
        canvas = canvas || document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        if (canvas.width !== bound.w * dpr)
            canvas.width = bound.w * dpr;
        if (canvas.height !== bound.h * dpr)
            canvas.height = bound.h * dpr;
        canvas.style.width = `${bound.w}px`;
        canvas.style.height = `${bound.h}px`;
        const ctx = canvas.getContext('2d');
        const matrix = new DOMMatrix().scaleSelf(withZoom ? dpr * this.viewport.zoom : dpr);
        const rc = new RoughCanvas(canvas);
        if (clearBeforeDrawing)
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(matrix);
        this._renderByBound(ctx, matrix, rc, bound, surfaceElements);
        return canvas;
    }
    getColorScheme() {
        return this.provider.getColorScheme?.() ?? ColorScheme.Light;
    }
    getColorValue(color, fallback, real) {
        return (this.provider.getColorValue?.(color, fallback, real) ?? 'transparent');
    }
    getPropertyValue(property) {
        return this.provider.getPropertyValue?.(property) ?? '';
    }
    refresh() {
        if (this._refreshRafId !== null)
            return;
        this._refreshRafId = requestConnectedFrame(() => {
            this._refreshRafId = null;
            this._render();
        }, this._container);
    }
    removeOverlay(overlay) {
        if (!this._overlays.has(overlay)) {
            return;
        }
        overlay.setRenderer(null);
        this._overlays.delete(overlay);
        this.refresh();
    }
}
//# sourceMappingURL=canvas-renderer.js.map