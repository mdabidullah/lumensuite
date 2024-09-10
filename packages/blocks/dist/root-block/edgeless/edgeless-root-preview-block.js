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
import '@blocksuite/affine-block-surface';
import { FontLoaderService } from '@blocksuite/affine-shared/services';
import { BlockComponent } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { requestThrottledConnectedFrame } from '../../_common/utils/index.js';
import './components/note-slicer/index.js';
import './components/presentation/edgeless-navigator-black-background.js';
import './components/rects/edgeless-dragging-area-rect.js';
import './components/rects/edgeless-selected-rect.js';
import './components/toolbar/edgeless-toolbar.js';
import { edgelessElementsBound } from './utils/bound-utils.js';
import { getBackgroundGrid, isCanvasElement } from './utils/query.js';
let EdgelessRootPreviewBlockComponent = (() => {
    let _classDecorators = [customElement('affine-edgeless-root-preview')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let _background_decorators;
    let _background_initializers = [];
    let _background_extraInitializers = [];
    let _editorViewportSelector_decorators;
    let _editorViewportSelector_initializers = [];
    let _editorViewportSelector_extraInitializers = [];
    let _layer_decorators;
    let _layer_initializers = [];
    let _layer_extraInitializers = [];
    let _surface_decorators;
    let _surface_initializers = [];
    let _surface_extraInitializers = [];
    var EdgelessRootPreviewBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _background_decorators = [query('.edgeless-background')];
            _editorViewportSelector_decorators = [state()];
            _layer_decorators = [query('.edgeless-layer')];
            _surface_decorators = [query('affine-surface')];
            __esDecorate(this, null, _background_decorators, { kind: "accessor", name: "background", static: false, private: false, access: { has: obj => "background" in obj, get: obj => obj.background, set: (obj, value) => { obj.background = value; } }, metadata: _metadata }, _background_initializers, _background_extraInitializers);
            __esDecorate(this, null, _editorViewportSelector_decorators, { kind: "accessor", name: "editorViewportSelector", static: false, private: false, access: { has: obj => "editorViewportSelector" in obj, get: obj => obj.editorViewportSelector, set: (obj, value) => { obj.editorViewportSelector = value; } }, metadata: _metadata }, _editorViewportSelector_initializers, _editorViewportSelector_extraInitializers);
            __esDecorate(this, null, _layer_decorators, { kind: "accessor", name: "layer", static: false, private: false, access: { has: obj => "layer" in obj, get: obj => obj.layer, set: (obj, value) => { obj.layer = value; } }, metadata: _metadata }, _layer_initializers, _layer_extraInitializers);
            __esDecorate(this, null, _surface_decorators, { kind: "accessor", name: "surface", static: false, private: false, access: { has: obj => "surface" in obj, get: obj => obj.surface, set: (obj, value) => { obj.surface = value; } }, metadata: _metadata }, _surface_initializers, _surface_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessRootPreviewBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-edgeless-root {
      -webkit-user-select: none;
      user-select: none;
      display: block;
      height: 100%;
    }

    .widgets-container {
      position: absolute;
      left: 0;
      top: 0;
      contain: size layout;
      z-index: 1;
      height: 100%;
    }

    .edgeless-background {
      height: 100%;
      background-color: var(--affine-background-primary-color);
      background-image: radial-gradient(
        var(--affine-edgeless-grid-color) 1px,
        var(--affine-background-primary-color) 1px
      );
    }

    .edgeless-layer {
      position: absolute;
      top: 0;
      left: 0;
      contain: size layout style;
    }

    @media print {
      .selected {
        background-color: transparent !important;
      }
    }
  `; }
        get dispatcher() {
            return this.service?.uiEventDispatcher;
        }
        get surfaceBlockModel() {
            return this.model.children.find(child => child.flavour === 'affine:surface');
        }
        get viewportElement() {
            if (this._viewportElement)
                return this._viewportElement;
            this._viewportElement = this.host.closest(this.editorViewportSelector);
            assertExists(this._viewportElement);
            return this._viewportElement;
        }
        _getLayerViewport(negative = false) {
            const { translateX, translateY, zoom } = this.service.viewport;
            if (negative) {
                return `scale(${1 / zoom}) translate(${-translateX}px, ${-translateY}px)`;
            }
            return `translate(${translateX}px, ${translateY}px) scale(${zoom})`;
        }
        _initFontLoader() {
            this.std
                .get(FontLoaderService)
                .ready.then(() => {
                this.surface.refresh();
            })
                .catch(console.error);
        }
        _initPixelRatioChangeEffect() {
            let media;
            const onPixelRatioChange = () => {
                if (media) {
                    this.service.viewport.onResize();
                    media.removeEventListener('change', onPixelRatioChange);
                }
                media = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
                media.addEventListener('change', onPixelRatioChange);
            };
            onPixelRatioChange();
            this._disposables.add(() => {
                media?.removeEventListener('change', onPixelRatioChange);
            });
        }
        _initResizeEffect() {
            if (!this._viewportElement) {
                return;
            }
            const resizeObserver = new ResizeObserver((_) => {
                // FIXME: find a better way to get rid of empty check
                if (!this.service || !this.service.selection || !this.service.viewport) {
                    console.error('Service not ready');
                    return;
                }
                this.service.selection.set(this.service.selection.surfaceSelections);
                this.service.viewport.onResize();
            });
            resizeObserver.observe(this.viewportElement);
            this._resizeObserver?.disconnect();
            this._resizeObserver = resizeObserver;
        }
        _initSlotEffects() {
            const { disposables } = this;
            this.disposables.add(this.service.themeObserver.mode$.subscribe(() => this.surface.refresh()));
            disposables.add(this.service.selection);
        }
        connectedCallback() {
            super.connectedCallback();
            this.handleEvent('selectionChange', () => {
                const surface = this.host.selection.value.find((sel) => sel.is('surface'));
                if (!surface)
                    return;
                const el = this.service.getElementById(surface.elements[0]);
                if (isCanvasElement(el)) {
                    return true;
                }
                return;
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this._resizeObserver) {
                this._resizeObserver.disconnect();
                this._resizeObserver = null;
            }
        }
        firstUpdated() {
            this._initSlotEffects();
            this._initResizeEffect();
            this._initPixelRatioChangeEffect();
            this._initFontLoader();
            this._disposables.add(this.service.viewport.viewportUpdated.on(() => {
                this._refreshLayerViewport();
            }));
            this._refreshLayerViewport();
        }
        getElementsBound() {
            const { service } = this;
            return edgelessElementsBound([...service.elements, ...service.blocks]);
        }
        renderBlock() {
            return html `
      <div class="edgeless-background edgeless-container">
        <div class="edgeless-layer">
          ${this.renderChildren(this.model)}${this.renderChildren(this.surfaceBlockModel)}
        </div>
      </div>
    `;
        }
        willUpdate(_changedProperties) {
            if (_changedProperties.has('editorViewportSelector')) {
                this._initResizeEffect();
            }
        }
        #background_accessor_storage;
        get background() { return this.#background_accessor_storage; }
        set background(value) { this.#background_accessor_storage = value; }
        #editorViewportSelector_accessor_storage;
        get editorViewportSelector() { return this.#editorViewportSelector_accessor_storage; }
        set editorViewportSelector(value) { this.#editorViewportSelector_accessor_storage = value; }
        #layer_accessor_storage;
        get layer() { return this.#layer_accessor_storage; }
        set layer(value) { this.#layer_accessor_storage = value; }
        #surface_accessor_storage;
        get surface() { return this.#surface_accessor_storage; }
        set surface(value) { this.#surface_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._refreshLayerViewport = requestThrottledConnectedFrame(() => {
                const { zoom, translateX, translateY } = this.service.viewport;
                const { gap } = getBackgroundGrid(zoom, true);
                this.background.style.setProperty('background-position', `${translateX}px ${translateY}px`);
                this.background.style.setProperty('background-size', `${gap}px ${gap}px`);
                this.layer.style.setProperty('transform', this._getLayerViewport());
                this.layer.dataset.scale = zoom.toString();
            }, this);
            this._resizeObserver = null;
            this._viewportElement = null;
            this.#background_accessor_storage = __runInitializers(this, _background_initializers, void 0);
            this.#editorViewportSelector_accessor_storage = (__runInitializers(this, _background_extraInitializers), __runInitializers(this, _editorViewportSelector_initializers, '.affine-edgeless-viewport'));
            this.#layer_accessor_storage = (__runInitializers(this, _editorViewportSelector_extraInitializers), __runInitializers(this, _layer_initializers, void 0));
            this.#surface_accessor_storage = (__runInitializers(this, _layer_extraInitializers), __runInitializers(this, _surface_initializers, void 0));
            __runInitializers(this, _surface_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessRootPreviewBlockComponent = _classThis;
})();
export { EdgelessRootPreviewBlockComponent };
//# sourceMappingURL=edgeless-root-preview-block.js.map