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
import { BlockStdScope, EditorHost, ShadowlessElement, SignalWatcher, WithDisposable, } from '@blocksuite/block-std';
import { DocModeProvider, EdgelessEditorBlockSpecs, PageEditorBlockSpecs, } from '@blocksuite/blocks';
import { noop, Slot } from '@blocksuite/global/utils';
import { computed, effect, signal } from '@lit-labs/preact-signals';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { keyed } from 'lit/directives/keyed.js';
import { when } from 'lit/directives/when.js';
import '../fragments/doc-title/doc-title.js';
noop(EditorHost);
/**
 * @deprecated need to refactor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forwardSlot(from, to) {
    Object.entries(from).forEach(([key, slot]) => {
        const target = to[key];
        if (target) {
            slot.pipe(target);
        }
    });
}
let LumenEditorContainer = (() => {
    let _classDecorators = [customElement('lumen-editor-container')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let __edgelessRoot_decorators;
    let __edgelessRoot_initializers = [];
    let __edgelessRoot_extraInitializers = [];
    let __pageRoot_decorators;
    let __pageRoot_initializers = [];
    let __pageRoot_extraInitializers = [];
    let _autofocus_decorators;
    let _autofocus_initializers = [];
    let _autofocus_extraInitializers = [];
    var LumenEditorContainer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __edgelessRoot_decorators = [query('affine-edgeless-root')];
            __pageRoot_decorators = [query('affine-page-root')];
            _autofocus_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __edgelessRoot_decorators, { kind: "accessor", name: "_edgelessRoot", static: false, private: false, access: { has: obj => "_edgelessRoot" in obj, get: obj => obj._edgelessRoot, set: (obj, value) => { obj._edgelessRoot = value; } }, metadata: _metadata }, __edgelessRoot_initializers, __edgelessRoot_extraInitializers);
            __esDecorate(this, null, __pageRoot_decorators, { kind: "accessor", name: "_pageRoot", static: false, private: false, access: { has: obj => "_pageRoot" in obj, get: obj => obj._pageRoot, set: (obj, value) => { obj._pageRoot = value; } }, metadata: _metadata }, __pageRoot_initializers, __pageRoot_extraInitializers);
            __esDecorate(this, null, _autofocus_decorators, { kind: "accessor", name: "autofocus", static: false, private: false, access: { has: obj => "autofocus" in obj, get: obj => obj.autofocus, set: (obj, value) => { obj.autofocus = value; } }, metadata: _metadata }, _autofocus_initializers, _autofocus_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LumenEditorContainer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .affine-page-viewport {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
      container-name: viewport;
      container-type: inline-size;
      font-family: var(--affine-font-family);
    }
    .affine-page-viewport * {
      box-sizing: border-box;
    }

    @media print {
      .affine-page-viewport {
        height: auto;
      }
    }

    .playground-page-editor-container {
      flex-grow: 1;
      font-family: var(--affine-font-family);
      display: block;
    }

    .playground-page-editor-container * {
      box-sizing: border-box;
    }

    @media print {
      .playground-page-editor-container {
        height: auto;
      }
    }

    .edgeless-editor-container {
      font-family: var(--affine-font-family);
      background: var(--affine-background-primary-color);
      display: block;
      height: 100%;
      position: relative;
      overflow: clip;
    }

    .edgeless-editor-container * {
      box-sizing: border-box;
    }

    @media print {
      .edgeless-editor-container {
        height: auto;
      }
    }

    .affine-edgeless-viewport {
      display: block;
      height: 100%;
      position: relative;
      overflow: clip;
      container-name: viewport;
      container-type: inline-size;
    }
  `; }
        get doc() {
            return this._doc.value;
        }
        set doc(doc) {
            this._doc.value = doc;
        }
        set edgelessSpecs(specs) {
            this._edgelessSpecs.value = specs;
        }
        get edgelessSpecs() {
            return this._edgelessSpecs.value;
        }
        get host() {
            try {
                return this.std.host;
            }
            catch {
                return null;
            }
        }
        get mode() {
            return this._mode.value;
        }
        set mode(mode) {
            this._mode.value = mode;
        }
        set pageSpecs(specs) {
            this._pageSpecs.value = specs;
        }
        get pageSpecs() {
            return this._pageSpecs.value;
        }
        get rootModel() {
            return this.doc.root;
        }
        get std() {
            return this._std.value;
        }
        /**
         * @deprecated need to refactor
         */
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.doc.slots.rootAdded.on(() => this.requestUpdate()));
        }
        firstUpdated() {
            if (this.mode === 'page') {
                setTimeout(() => {
                    if (this.autofocus) {
                        const richText = this.querySelector('rich-text');
                        const inlineEditor = richText?.inlineEditor;
                        inlineEditor?.focusEnd();
                    }
                });
            }
            this._disposables.add(effect(() => {
                const std = this._std.value;
                const mode = std.get(DocModeProvider).getPrimaryMode(this.doc.id);
                this._forwardRef(mode);
            }));
        }
        render() {
            const mode = this._mode.value;
            return html `${keyed(this.rootModel.id + mode, html `
        <div
          class=${mode === 'page'
                ? 'affine-page-viewport'
                : 'affine-edgeless-viewport'}
        >
          ${when(mode === 'page', () => html ` <doc-title .doc=${this.doc}></doc-title> `)}
          <div
            class=${mode === 'page'
                ? 'page-editor playground-page-editor-container'
                : 'edgeless-editor-container'}
          >
            ${this._editorTemplate.value}
          </div>
        </div>
      `)}`;
        }
        switchEditor(mode) {
            this._mode.value = mode;
        }
        /**
         * @deprecated need to refactor
         */
        updated(changedProperties) {
            if (changedProperties.has('doc')) {
                this.slots.docUpdated.emit({ newDocId: this.doc.id });
                this._forwardRef(this.mode);
            }
            if (!changedProperties.has('doc') && !changedProperties.has('mode')) {
                return;
            }
        }
        #_edgelessRoot_accessor_storage;
        /** @deprecated unreliable since edgelessSpecs can be overridden */
        get _edgelessRoot() { return this.#_edgelessRoot_accessor_storage; }
        set _edgelessRoot(value) { this.#_edgelessRoot_accessor_storage = value; }
        #_pageRoot_accessor_storage;
        /** @deprecated unreliable since pageSpecs can be overridden */
        get _pageRoot() { return this.#_pageRoot_accessor_storage; }
        set _pageRoot(value) { this.#_pageRoot_accessor_storage = value; }
        #autofocus_accessor_storage;
        get autofocus() { return this.#autofocus_accessor_storage; }
        set autofocus(value) { this.#autofocus_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._doc = signal();
            this._edgelessSpecs = signal(EdgelessEditorBlockSpecs);
            this._editorTemplate = computed(() => {
                return this._std.value.render();
            });
            this._forwardRef = (mode) => {
                requestAnimationFrame(() => {
                    if (mode === 'page') {
                        if (this._pageRoot)
                            forwardSlot(this._pageRoot.slots, this.slots);
                    }
                    else {
                        if (this._edgelessRoot)
                            forwardSlot(this._edgelessRoot.slots, this.slots);
                    }
                });
            };
            this._mode = signal('page');
            this._pageSpecs = signal(PageEditorBlockSpecs);
            this._specs = computed(() => this._mode.value === 'page'
                ? this._pageSpecs.value
                : this._edgelessSpecs.value);
            this._std = computed(() => {
                return new BlockStdScope({
                    doc: this.doc,
                    extensions: this._specs.value,
                });
            });
            /**
             * @deprecated need to refactor
             */
            this.slots = {
                docLinkClicked: new Slot(),
                editorModeSwitched: new Slot(),
                docUpdated: new Slot(),
                tagClicked: new Slot(),
            };
            this.#_edgelessRoot_accessor_storage = __runInitializers(this, __edgelessRoot_initializers, null);
            this.#_pageRoot_accessor_storage = (__runInitializers(this, __edgelessRoot_extraInitializers), __runInitializers(this, __pageRoot_initializers, null));
            this.#autofocus_accessor_storage = (__runInitializers(this, __pageRoot_extraInitializers), __runInitializers(this, _autofocus_initializers, false));
            __runInitializers(this, _autofocus_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LumenEditorContainer = _classThis;
})();
export { LumenEditorContainer };
//# sourceMappingURL=lumen-container.js.map