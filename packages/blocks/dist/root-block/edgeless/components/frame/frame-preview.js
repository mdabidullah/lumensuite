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
import { BlockServiceWatcher, BlockStdScope } from '@lumensuite/block-std';
import { ShadowlessElement, WithDisposable, } from '@lumensuite/block-std';
import { Bound, deserializeXYWH, DisposableGroup, } from '@lumensuite/global/utils';
import { BlockViewType } from '@lumensuite/store';
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SpecProvider } from '../../../../_specs/index.js';
const DEFAULT_PREVIEW_CONTAINER_WIDTH = 280;
const DEFAULT_PREVIEW_CONTAINER_HEIGHT = 166;
const styles = css `
  .frame-preview-container {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .frame-preview-surface-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
  }

  .frame-preview-viewport {
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    pointer-events: none;
    user-select: none;

    .edgeless-background {
      background-color: transparent;
      background-image: none;
    }
  }
`;
let FramePreview = (() => {
    let _classDecorators = [customElement('frame-preview')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _fillScreen_decorators;
    let _fillScreen_initializers = [];
    let _fillScreen_extraInitializers = [];
    let _frame_decorators;
    let _frame_initializers = [];
    let _frame_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _previewEditor_decorators;
    let _previewEditor_initializers = [];
    let _previewEditor_extraInitializers = [];
    let _surfaceHeight_decorators;
    let _surfaceHeight_initializers = [];
    let _surfaceHeight_extraInitializers = [];
    let _surfaceWidth_decorators;
    let _surfaceWidth_initializers = [];
    let _surfaceWidth_extraInitializers = [];
    var FramePreview = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _doc_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _fillScreen_decorators = [state()];
            _frame_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _previewEditor_decorators = [query('editor-host')];
            _surfaceHeight_decorators = [property({ attribute: false })];
            _surfaceWidth_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _fillScreen_decorators, { kind: "accessor", name: "fillScreen", static: false, private: false, access: { has: obj => "fillScreen" in obj, get: obj => obj.fillScreen, set: (obj, value) => { obj.fillScreen = value; } }, metadata: _metadata }, _fillScreen_initializers, _fillScreen_extraInitializers);
            __esDecorate(this, null, _frame_decorators, { kind: "accessor", name: "frame", static: false, private: false, access: { has: obj => "frame" in obj, get: obj => obj.frame, set: (obj, value) => { obj.frame = value; } }, metadata: _metadata }, _frame_initializers, _frame_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _previewEditor_decorators, { kind: "accessor", name: "previewEditor", static: false, private: false, access: { has: obj => "previewEditor" in obj, get: obj => obj.previewEditor, set: (obj, value) => { obj.previewEditor = value; } }, metadata: _metadata }, _previewEditor_initializers, _previewEditor_extraInitializers);
            __esDecorate(this, null, _surfaceHeight_decorators, { kind: "accessor", name: "surfaceHeight", static: false, private: false, access: { has: obj => "surfaceHeight" in obj, get: obj => obj.surfaceHeight, set: (obj, value) => { obj.surfaceHeight = value; } }, metadata: _metadata }, _surfaceHeight_initializers, _surfaceHeight_extraInitializers);
            __esDecorate(this, null, _surfaceWidth_decorators, { kind: "accessor", name: "surfaceWidth", static: false, private: false, access: { has: obj => "surfaceWidth" in obj, get: obj => obj.surfaceWidth, set: (obj, value) => { obj.surfaceWidth = value; } }, metadata: _metadata }, _surfaceWidth_initializers, _surfaceWidth_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FramePreview = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _initPreviewDoc() {
            this._previewDoc = this.doc.collection.getDoc(this.doc.id, {
                query: this._docFilter,
                readonly: true,
            });
            this.disposables.add(() => {
                this.doc.blockCollection.clearQuery(this._docFilter);
            });
        }
        _initSpec() {
            const refreshViewport = this._refreshViewport.bind(this);
            class FramePreviewWatcher extends BlockServiceWatcher {
                static { this.flavour = 'affine:page'; }
                mounted() {
                    const blockService = this.blockService;
                    blockService.disposables.add(blockService.specSlots.viewConnected.on(({ component }) => {
                        const edgelessBlock = component;
                        edgelessBlock.editorViewportSelector = 'frame-preview-viewport';
                        edgelessBlock.service.viewport.sizeUpdated.once(() => {
                            refreshViewport();
                        });
                    }));
                }
            }
            this._previewSpec.extend([FramePreviewWatcher]);
        }
        _refreshViewport() {
            const previewEditorHost = this.previewEditor;
            if (!previewEditorHost)
                return;
            const edgelessService = previewEditorHost.std.getService('affine:page');
            const frameBound = Bound.deserialize(this.frame.xywh);
            edgelessService.viewport.setViewportByBound(frameBound);
        }
        _renderSurfaceContent() {
            if (!this._previewDoc || !this.frame)
                return nothing;
            const { width, height } = this._getViewportWH();
            const _previewSpec = this._previewSpec.value;
            return html `<div
      class="frame-preview-surface-container"
      style=${styleMap({
                width: `${this.surfaceWidth}px`,
                height: `${this.surfaceHeight}px`,
            })}
    >
      <div
        class="frame-preview-viewport"
        style=${styleMap({
                width: `${width}px`,
                height: `${height}px`,
            })}
      >
        ${new BlockStdScope({
                doc: this._previewDoc,
                extensions: _previewSpec,
            }).render()}
      </div>
    </div>`;
        }
        _setFrameDisposables(frame) {
            this._clearFrameDisposables();
            this._frameDisposables = new DisposableGroup();
            this._frameDisposables.add(frame.propsUpdated.on(() => {
                this._refreshViewport();
            }));
        }
        connectedCallback() {
            super.connectedCallback();
            this._initSpec();
            this._initPreviewDoc();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearFrameDisposables();
        }
        firstUpdated() {
            this._refreshViewport();
            this._setFrameDisposables(this.frame);
        }
        render() {
            const { frame, host } = this;
            const noContent = !frame || !frame.xywh || !host;
            return html `<div class="frame-preview-container">
      ${noContent ? nothing : this._renderSurfaceContent()}
    </div>`;
        }
        willUpdate(_changedProperties) {
            if (_changedProperties.has('frame')) {
                this._refreshViewport();
            }
        }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #fillScreen_accessor_storage;
        get fillScreen() { return this.#fillScreen_accessor_storage; }
        set fillScreen(value) { this.#fillScreen_accessor_storage = value; }
        #frame_accessor_storage;
        get frame() { return this.#frame_accessor_storage; }
        set frame(value) { this.#frame_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #previewEditor_accessor_storage;
        get previewEditor() { return this.#previewEditor_accessor_storage; }
        set previewEditor(value) { this.#previewEditor_accessor_storage = value; }
        #surfaceHeight_accessor_storage;
        get surfaceHeight() { return this.#surfaceHeight_accessor_storage; }
        set surfaceHeight(value) { this.#surfaceHeight_accessor_storage = value; }
        #surfaceWidth_accessor_storage;
        get surfaceWidth() { return this.#surfaceWidth_accessor_storage; }
        set surfaceWidth(value) { this.#surfaceWidth_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._clearFrameDisposables = () => {
                this._frameDisposables?.dispose();
                this._frameDisposables = null;
            };
            this._docFilter = {
                mode: 'loose',
                match: [
                    {
                        flavour: 'affine:frame',
                        viewType: BlockViewType.Hidden,
                    },
                ],
            };
            this._frameDisposables = null;
            this._getViewportWH = () => {
                const [, , w, h] = deserializeXYWH(this.frame.xywh);
                let scale = 1;
                if (this.fillScreen) {
                    scale = Math.max(this.surfaceWidth / w, this.surfaceHeight / h);
                }
                else {
                    scale = Math.min(this.surfaceWidth / w, this.surfaceHeight / h);
                }
                return {
                    width: w * scale,
                    height: h * scale,
                };
            };
            this._previewDoc = null;
            this._previewSpec = SpecProvider.getInstance().getSpec('edgeless:preview');
            this.#doc_accessor_storage = __runInitializers(this, _doc_initializers, void 0);
            this.#edgeless_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _edgeless_initializers, null));
            this.#fillScreen_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _fillScreen_initializers, false));
            this.#frame_accessor_storage = (__runInitializers(this, _fillScreen_extraInitializers), __runInitializers(this, _frame_initializers, void 0));
            this.#host_accessor_storage = (__runInitializers(this, _frame_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.#previewEditor_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _previewEditor_initializers, null));
            this.#surfaceHeight_accessor_storage = (__runInitializers(this, _previewEditor_extraInitializers), __runInitializers(this, _surfaceHeight_initializers, DEFAULT_PREVIEW_CONTAINER_HEIGHT));
            this.#surfaceWidth_accessor_storage = (__runInitializers(this, _surfaceHeight_extraInitializers), __runInitializers(this, _surfaceWidth_initializers, DEFAULT_PREVIEW_CONTAINER_WIDTH));
            __runInitializers(this, _surfaceWidth_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FramePreview = _classThis;
})();
export { FramePreview };
//# sourceMappingURL=frame-preview.js.map