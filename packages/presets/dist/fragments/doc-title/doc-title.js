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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
const DOC_BLOCK_CHILD_PADDING = 24;
let DocTitle = (() => {
    let _classDecorators = [customElement('doc-title')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __isComposing_decorators;
    let __isComposing_initializers = [];
    let __isComposing_extraInitializers = [];
    let __isReadonly_decorators;
    let __isReadonly_initializers = [];
    let __isReadonly_extraInitializers = [];
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    var DocTitle = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isComposing_decorators = [state()];
            __isReadonly_decorators = [state()];
            __richTextElement_decorators = [query('rich-text')];
            _doc_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __isComposing_decorators, { kind: "accessor", name: "_isComposing", static: false, private: false, access: { has: obj => "_isComposing" in obj, get: obj => obj._isComposing, set: (obj, value) => { obj._isComposing = value; } }, metadata: _metadata }, __isComposing_initializers, __isComposing_extraInitializers);
            __esDecorate(this, null, __isReadonly_decorators, { kind: "accessor", name: "_isReadonly", static: false, private: false, access: { has: obj => "_isReadonly" in obj, get: obj => obj._isReadonly, set: (obj, value) => { obj._isReadonly = value; } }, metadata: _metadata }, __isReadonly_initializers, __isReadonly_extraInitializers);
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DocTitle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .doc-title-container {
      box-sizing: border-box;
      font-family: var(--affine-font-family);
      font-size: var(--affine-font-base);
      line-height: var(--affine-line-height);
      color: var(--affine-text-primary-color);
      font-size: 40px;
      line-height: 50px;
      font-weight: 700;
      outline: none;
      resize: none;
      border: 0;
      width: 100%;
      max-width: var(--affine-editor-width);
      margin-left: auto;
      margin-right: auto;
      padding: 38px 0;

      padding-left: var(
        --affine-editor-side-padding,
        ${DOC_BLOCK_CHILD_PADDING}px
      );
      padding-right: var(
        --affine-editor-side-padding,
        ${DOC_BLOCK_CHILD_PADDING}px
      );
    }

    /* Extra small devices (phones, 640px and down) */
    @container viewport (width <= 640px) {
      .doc-title-container {
        padding-left: ${DOC_BLOCK_CHILD_PADDING}px;
        padding-right: ${DOC_BLOCK_CHILD_PADDING}px;
      }
    }

    .doc-title-container-empty::before {
      content: 'Title';
      color: var(--affine-placeholder-color);
      position: absolute;
      opacity: 0.5;
      pointer-events: none;
    }

    .doc-title-container:disabled {
      background-color: transparent;
    }
  `; }
        get _inlineEditor() {
            return this._richTextElement.inlineEditor;
        }
        get _pageRoot() {
            const pageRoot = this._viewport.querySelector('affine-page-root');
            assertExists(pageRoot);
            return pageRoot;
        }
        get _rootModel() {
            return this.doc.root;
        }
        get _viewport() {
            const el = this.closest('.affine-page-viewport');
            assertExists(el);
            return el;
        }
        connectedCallback() {
            super.connectedCallback();
            this._isReadonly = this.doc.readonly;
            this._disposables.add(this.doc.awarenessStore.slots.update.on(() => {
                if (this._isReadonly !== this.doc.readonly) {
                    this._isReadonly = this.doc.readonly;
                    this.requestUpdate();
                }
            }));
            this._disposables.addFromEvent(this, 'keydown', this._onTitleKeyDown);
            // Workaround for inline editor skips composition event
            this._disposables.addFromEvent(this, 'compositionstart', () => (this._isComposing = true));
            this._disposables.addFromEvent(this, 'compositionend', () => (this._isComposing = false));
            const updateMetaTitle = () => {
                this._updateTitleInMeta();
                this.requestUpdate();
            };
            this._rootModel.title.yText.observe(updateMetaTitle);
            this._disposables.add(() => {
                this._rootModel.title.yText.unobserve(updateMetaTitle);
            });
        }
        render() {
            const isEmpty = !this._rootModel.title.length && !this._isComposing;
            return html `
      <div
        class="doc-title-container ${isEmpty
                ? 'doc-title-container-empty'
                : ''}"
        data-block-is-title="true"
      >
        <rich-text
          .yText=${this._rootModel.title.yText}
          .undoManager=${this.doc.history}
          .verticalScrollContainerGetter=${() => this._viewport}
          .readonly=${this.doc.readonly}
          .enableFormat=${false}
        ></rich-text>
      </div>
    `;
        }
        #_isComposing_accessor_storage;
        get _isComposing() { return this.#_isComposing_accessor_storage; }
        set _isComposing(value) { this.#_isComposing_accessor_storage = value; }
        #_isReadonly_accessor_storage;
        get _isReadonly() { return this.#_isReadonly_accessor_storage; }
        set _isReadonly(value) { this.#_isReadonly_accessor_storage = value; }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._onTitleKeyDown = (event) => {
                if (event.isComposing || this.doc.readonly)
                    return;
                const hasContent = !this.doc.isEmpty;
                if (event.key === 'Enter' && hasContent && !event.isComposing) {
                    event.preventDefault();
                    event.stopPropagation();
                    const inlineEditor = this._inlineEditor;
                    const inlineRange = inlineEditor?.getInlineRange();
                    if (inlineRange) {
                        const rightText = this._rootModel.title.split(inlineRange.index);
                        this._pageRoot.prependParagraphWithText(rightText);
                    }
                }
                else if (event.key === 'ArrowDown' && hasContent) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._pageRoot.focusFirstParagraph();
                }
                else if (event.key === 'Tab') {
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
            this._updateTitleInMeta = () => {
                this.doc.collection.setDocMeta(this.doc.id, {
                    title: this._rootModel.title.toString(),
                });
            };
            this.#_isComposing_accessor_storage = __runInitializers(this, __isComposing_initializers, false);
            this.#_isReadonly_accessor_storage = (__runInitializers(this, __isComposing_extraInitializers), __runInitializers(this, __isReadonly_initializers, false));
            this.#_richTextElement_accessor_storage = (__runInitializers(this, __isReadonly_extraInitializers), __runInitializers(this, __richTextElement_initializers, void 0));
            this.#doc_accessor_storage = (__runInitializers(this, __richTextElement_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            __runInitializers(this, _doc_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DocTitle = _classThis;
})();
export { DocTitle };
export function getDocTitleByEditorHost(editorHost) {
    const docViewport = editorHost.closest('.affine-page-viewport');
    if (!docViewport)
        return null;
    return docViewport.querySelector('doc-title');
}
//# sourceMappingURL=doc-title.js.map