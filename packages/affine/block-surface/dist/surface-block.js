var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { BlockComponent, RANGE_SYNC_EXCLUDE_ATTR } from '@lumensuite/block-std';
import { GfxControllerIdentifier, } from '@lumensuite/block-std/gfx';
import { Bound, values } from '@lumensuite/global/utils';
import { css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { ConnectorElementModel } from './element-model/index.js';
import { CanvasRenderer } from './renderer/canvas-renderer.js';
let SurfaceBlockComponent = (() => {
    let _classDecorators = [customElement('affine-surface')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __surfaceContainer_decorators;
    let __surfaceContainer_initializers = [];
    let __surfaceContainer_extraInitializers = [];
    var SurfaceBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __surfaceContainer_decorators = [query('.affine-edgeless-surface-block-container')];
            __esDecorate(this, null, __surfaceContainer_decorators, { kind: "accessor", name: "_surfaceContainer", static: false, private: false, access: { has: obj => "_surfaceContainer" in obj, get: obj => obj._surfaceContainer, set: (obj, value) => { obj._surfaceContainer = value; } }, metadata: _metadata }, __surfaceContainer_initializers, __surfaceContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SurfaceBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.isConnector = (element) => {
            return element instanceof ConnectorElementModel;
        }; }
        static { this.styles = css `
    .affine-edgeless-surface-block-container {
      width: 100%;
      height: 100%;
    }

    .affine-edgeless-surface-block-container canvas {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      pointer-events: none;
      transform-origin: 0 0;
      transform: var(--canvas-transform);
    }

    edgeless-block-portal-container {
      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      display: block;
      height: 100%;
      font-family: var(--affine-font-family);
      font-size: var(--affine-font-base);
      line-height: var(--affine-line-height);
      color: var(--affine-text-primary-color);
      font-weight: 400;
    }

    .affine-block-children-container.edgeless {
      padding-left: 0;
      position: relative;
      overflow: hidden;
      height: 100%;
      /**
       * Fix: pointerEvent stops firing after a short time.
       * When a gesture is started, the browser intersects the touch-action values of the touched element and its ancestors,
       * up to the one that implements the gesture (in other words, the first containing scrolling element)
       * https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
       */
      touch-action: none;
      background-color: var(--affine-background-primary-color);
      background-image: radial-gradient(
        var(--affine-edgeless-grid-color) 1px,
        var(--affine-background-primary-color) 1px
      );
      z-index: 0;
    }

    .affine-edgeless-block-child {
      position: absolute;
      transform-origin: center;
      box-sizing: border-box;
      border: 2px solid var(--affine-white-10);
      border-radius: 8px;
      box-shadow: var(--affine-shadow-3);
      pointer-events: all;
    }
  `; }
        get _edgelessService() {
            return this.std.getService('affine:page');
        }
        get _gfx() {
            return this.std.get(GfxControllerIdentifier);
        }
        get renderer() {
            return this._renderer;
        }
        _getReversedTransform() {
            const { translateX, translateY, zoom } = this._gfx.viewport;
            return `scale(${1 / zoom}) translate(${-translateX}px, ${-translateY}px)`;
        }
        _initOverlays() {
            values(this._edgelessService.overlays).forEach(overlay => {
                this._renderer.addOverlay(overlay);
            });
        }
        _initRenderer() {
            const gfx = this._gfx;
            this._renderer = new CanvasRenderer({
                viewport: gfx.viewport,
                layerManager: gfx.layer,
                gridManager: gfx.grid,
                enableStackingCanvas: true,
                provider: {
                    generateColorProperty: (color, fallback) => ThemeObserver.generateColorProperty(color, fallback),
                    getColorValue: (color, fallback, real) => ThemeObserver.getColorValue(color, fallback, real),
                    getColorScheme: () => ThemeObserver.mode,
                    getPropertyValue: (property) => ThemeObserver.getPropertyValue(property),
                    selectedElements: () => this._edgelessService.selection.selectedIds,
                },
                onStackingCanvasCreated(canvas) {
                    canvas.className = 'indexable-canvas';
                },
                elementRenderers: this._edgelessService.elementRenderers,
            });
            this._disposables.add(this.model.elementUpdated.on(payload => {
                // ignore externalXYWH update cause it's updated by the renderer
                if (payload.props['externalXYWH'])
                    return;
                this._renderer.refresh();
            }));
            this._disposables.add(this.model.elementAdded.on(() => {
                this._renderer.refresh();
            }));
            this._disposables.add(this.model.elementRemoved.on(() => {
                this._renderer.refresh();
            }));
            this._disposables.add(() => {
                this._renderer.dispose();
            });
            this._disposables.add(this._renderer.stackingCanvasUpdated.on(payload => {
                if (payload.added.length) {
                    this._surfaceContainer.append(...payload.added);
                }
                if (payload.removed.length) {
                    payload.removed.forEach(canvas => {
                        canvas.remove();
                    });
                }
            }));
            this._disposables.add(this._edgelessService.selection.slots.updated.on(() => {
                this._renderer.refresh();
            }));
        }
        connectedCallback() {
            super.connectedCallback();
            this.setAttribute(RANGE_SYNC_EXCLUDE_ATTR, 'true');
            this._initThemeObserver();
            this._initRenderer();
            this._initOverlays();
        }
        firstUpdated() {
            this._renderer.attach(this._surfaceContainer);
            this._surfaceContainer.append(...this._renderer.stackingCanvas);
            this._initCanvasTransform();
        }
        render() {
            return html `
      <div class="affine-edgeless-surface-block-container">
        <!-- attach canvas later in renderer -->
      </div>
    `;
        }
        #_surfaceContainer_accessor_storage;
        get _surfaceContainer() { return this.#_surfaceContainer_accessor_storage; }
        set _surfaceContainer(value) { this.#_surfaceContainer_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._cachedViewport = new Bound();
            this._initCanvasTransform = () => {
                const refresh = () => {
                    this._surfaceContainer.style.setProperty('--canvas-transform', this._getReversedTransform());
                };
                this._disposables.add(this._gfx.viewport.viewportUpdated.on(() => {
                    refresh();
                }));
                refresh();
            };
            this._initThemeObserver = () => {
                this.disposables.add(ThemeObserver.subscribe(() => this.requestUpdate()));
            };
            this._lastTime = 0;
            this.fitToViewport = (bound) => {
                const { viewport } = this._gfx;
                bound = bound.expand(30);
                if (Date.now() - this._lastTime > 200)
                    this._cachedViewport = viewport.viewportBounds;
                this._lastTime = Date.now();
                if (this._cachedViewport.contains(bound))
                    return;
                this._cachedViewport = this._cachedViewport.unite(bound);
                viewport.setViewportByBound(this._cachedViewport, [0, 0, 0, 0], true);
            };
            this.refresh = () => {
                this._renderer?.refresh();
            };
            this.#_surfaceContainer_accessor_storage = __runInitializers(this, __surfaceContainer_initializers, void 0);
            __runInitializers(this, __surfaceContainer_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SurfaceBlockComponent = _classThis;
})();
export { SurfaceBlockComponent };
//# sourceMappingURL=surface-block.js.map