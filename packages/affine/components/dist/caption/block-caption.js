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
import { stopPropagation } from '@lumensuite/affine-shared/utils';
import { docContext, modelContext, ShadowlessElement, stdContext, WithDisposable, } from '@lumensuite/block-std';
import { Text } from '@lumensuite/store';
import { consume } from '@lit/context';
import { css, html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { focusTextModel } from '../rich-text/index.js';
let BlockCaptionEditor = (() => {
    let _classDecorators = [customElement('block-caption-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _caption_decorators;
    let _caption_initializers = [];
    let _caption_extraInitializers = [];
    let _display_decorators;
    let _display_initializers = [];
    let _display_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _input_decorators;
    let _input_initializers = [];
    let _input_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    var BlockCaptionEditor = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _caption_decorators = [state()];
            _display_decorators = [state()];
            _doc_decorators = [consume({ context: docContext })];
            _input_decorators = [query('.block-caption-editor')];
            _model_decorators = [consume({ context: modelContext })];
            _std_decorators = [consume({ context: stdContext })];
            __esDecorate(this, null, _caption_decorators, { kind: "accessor", name: "caption", static: false, private: false, access: { has: obj => "caption" in obj, get: obj => obj.caption, set: (obj, value) => { obj.caption = value; } }, metadata: _metadata }, _caption_initializers, _caption_extraInitializers);
            __esDecorate(this, null, _display_decorators, { kind: "accessor", name: "display", static: false, private: false, access: { has: obj => "display" in obj, get: obj => obj.display, set: (obj, value) => { obj.display = value; } }, metadata: _metadata }, _display_initializers, _display_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _input_decorators, { kind: "accessor", name: "input", static: false, private: false, access: { has: obj => "input" in obj, get: obj => obj.input, set: (obj, value) => { obj.input = value; } }, metadata: _metadata }, _input_initializers, _input_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockCaptionEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .block-caption-editor {
      display: inline-table;
      resize: none;
      width: 100%;
      outline: none;
      border: 0;
      background: transparent;
      color: var(--affine-icon-color);
      font-size: var(--affine-font-sm);
      font-family: inherit;
      text-align: center;
    }
    .block-caption-editor::placeholder {
      color: var(--affine-placeholder-color);
    }
  `; }
        get mode() {
            return this.doc.getParent(this.model)?.flavour === 'affine:surface'
                ? 'edgeless'
                : 'page';
        }
        _onCaptionKeydown(event) {
            event.stopPropagation();
            if (this.mode === 'edgeless' || event.isComposing) {
                return;
            }
            if (event.key === 'Enter') {
                event.preventDefault();
                const doc = this.doc;
                const target = event.target;
                const start = target.selectionStart;
                if (start === null) {
                    return;
                }
                const model = this.model;
                const parent = doc.getParent(model);
                if (!parent) {
                    return;
                }
                const value = target.value;
                const caption = value.slice(0, start);
                doc.updateBlock(model, { caption });
                const nextBlockText = value.slice(start);
                const index = parent.children.indexOf(model);
                const id = doc.addBlock('affine:paragraph', { text: new Text(nextBlockText) }, parent, index + 1);
                focusTextModel(this.std, id);
            }
        }
        _onInputBlur() {
            this._focus = false;
            this.display = !!this.caption?.length;
        }
        _onInputChange(e) {
            const target = e.target;
            this.caption = target.value;
            this.doc.updateBlock(this.model, {
                caption: this.caption,
            });
        }
        _onInputFocus() {
            this._focus = true;
        }
        connectedCallback() {
            super.connectedCallback();
            this.caption = this.model.caption;
            this.disposables.add(this.model.propsUpdated.on(({ key }) => {
                if (key === 'caption') {
                    this.caption = this.model.caption;
                    if (!this._focus) {
                        this.display = !!this.caption?.length;
                    }
                }
            }));
        }
        render() {
            if (!this.display && !this.caption) {
                return nothing;
            }
            return html `<textarea
      .disabled=${this.doc.readonly}
      placeholder="Write a caption"
      class="block-caption-editor"
      .value=${this.caption ?? ''}
      @input=${this._onInputChange}
      @focus=${this._onInputFocus}
      @blur=${this._onInputBlur}
      @pointerdown=${stopPropagation}
      @click=${stopPropagation}
      @dblclick=${stopPropagation}
      @cut=${stopPropagation}
      @copy=${stopPropagation}
      @paste=${stopPropagation}
      @keydown=${this._onCaptionKeydown}
      @keyup=${stopPropagation}
    ></textarea>`;
        }
        #caption_accessor_storage;
        get caption() { return this.#caption_accessor_storage; }
        set caption(value) { this.#caption_accessor_storage = value; }
        #display_accessor_storage;
        get display() { return this.#display_accessor_storage; }
        set display(value) { this.#display_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #input_accessor_storage;
        get input() { return this.#input_accessor_storage; }
        set input(value) { this.#input_accessor_storage = value; }
        #model_accessor_storage;
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #std_accessor_storage;
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._focus = false;
            this.show = () => {
                this.display = true;
                this.updateComplete.then(() => this.input.focus()).catch(console.error);
            };
            this.#caption_accessor_storage = __runInitializers(this, _caption_initializers, undefined);
            this.#display_accessor_storage = (__runInitializers(this, _caption_extraInitializers), __runInitializers(this, _display_initializers, false));
            this.#doc_accessor_storage = (__runInitializers(this, _display_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#input_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _input_initializers, void 0));
            this.#model_accessor_storage = (__runInitializers(this, _input_extraInitializers), __runInitializers(this, _model_initializers, void 0));
            this.#std_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _std_initializers, void 0));
            __runInitializers(this, _std_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BlockCaptionEditor = _classThis;
})();
export { BlockCaptionEditor };
//# sourceMappingURL=block-caption.js.map