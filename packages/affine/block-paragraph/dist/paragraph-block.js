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
import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import { DefaultInlineManagerExtension, } from '@blocksuite/affine-components/rich-text';
import '@blocksuite/affine-components/rich-text';
import { BLOCK_CHILDREN_CONTAINER_PADDING_LEFT, NOTE_SELECTOR, } from '@blocksuite/affine-shared/consts';
import { DocModeProvider } from '@blocksuite/affine-shared/services';
import { getViewportElement } from '@blocksuite/affine-shared/utils';
import { getInlineRangeProvider } from '@blocksuite/block-std';
import { effect, signal } from '@lit-labs/preact-signals';
import { html, nothing } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { paragraphBlockStyles } from './styles.js';
let ParagraphBlockComponent = (() => {
    let _classDecorators = [customElement('affine-paragraph')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = CaptionedBlockComponent;
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    var ParagraphBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._composing = signal(false);
            this._displayPlaceholder = signal(false);
            this._inlineRangeProvider = null;
            this._isInDatabase = () => {
                let parent = this.parentElement;
                while (parent && parent !== document.body) {
                    if (parent.tagName.toLowerCase() === 'affine-database') {
                        return true;
                    }
                    parent = parent.parentElement;
                }
                return false;
            };
            this.#_richTextElement_accessor_storage = __runInitializers(this, __richTextElement_initializers, null);
            this.#blockContainerStyles_accessor_storage = (__runInitializers(this, __richTextElement_extraInitializers), { margin: '10px 0' });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __richTextElement_decorators = [query('rich-text')];
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ParagraphBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = paragraphBlockStyles; }
        get attributeRenderer() {
            return this.inlineManager.getRenderer();
        }
        get attributesSchema() {
            return this.inlineManager.getSchema();
        }
        get embedChecker() {
            return this.inlineManager.embedChecker;
        }
        get inEdgelessText() {
            return (this.topContenteditableElement?.tagName.toLowerCase() ===
                'affine-edgeless-text');
        }
        get inlineEditor() {
            return this._richTextElement?.inlineEditor;
        }
        get inlineManager() {
            return this.std.get(DefaultInlineManagerExtension.identifier);
        }
        get markdownShortcutHandler() {
            return this.inlineManager.markdownShortcutHandler;
        }
        get topContenteditableElement() {
            if (this.std.get(DocModeProvider).getEditorMode() === 'edgeless') {
                return this.closest(NOTE_SELECTOR);
            }
            return this.rootComponent;
        }
        connectedCallback() {
            super.connectedCallback();
            this.handleEvent('compositionStart', () => {
                this._composing.value = true;
            }, { flavour: true });
            this.handleEvent('compositionEnd', () => {
                this._composing.value = false;
            }, { flavour: true });
            this._inlineRangeProvider = getInlineRangeProvider(this);
            this.disposables.add(effect(() => {
                const composing = this._composing.value;
                if (composing || this.doc.readonly) {
                    this._displayPlaceholder.value = false;
                    return;
                }
                const textSelection = this.host.selection.find('text');
                const isCollapsed = textSelection?.isCollapsed() ?? false;
                if (!this.selected || !isCollapsed) {
                    this._displayPlaceholder.value = false;
                    return;
                }
                this.updateComplete
                    .then(() => {
                    if ((this.inlineEditor?.yTextLength ?? 0) > 0 ||
                        this._isInDatabase()) {
                        this._displayPlaceholder.value = false;
                        return;
                    }
                    this._displayPlaceholder.value = true;
                    return;
                })
                    .catch(console.error);
            }));
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this._richTextElement?.updateComplete;
            return result;
        }
        renderBlock() {
            const { type$ } = this.model;
            const children = html `<div
      class="affine-block-children-container"
      style="padding-left: ${BLOCK_CHILDREN_CONTAINER_PADDING_LEFT}px"
    >
      ${this.renderChildren(this.model)}
    </div>`;
            return html `
      <div class="affine-paragraph-block-container">
        <div class="affine-paragraph-rich-text-wrapper ${type$.value}">
          <rich-text
            .yText=${this.model.text.yText}
            .inlineEventSource=${this.topContenteditableElement ?? nothing}
            .undoManager=${this.doc.history}
            .attributesSchema=${this.attributesSchema}
            .attributeRenderer=${this.attributeRenderer}
            .markdownShortcutHandler=${this.markdownShortcutHandler}
            .embedChecker=${this.embedChecker}
            .readonly=${this.doc.readonly}
            .inlineRangeProvider=${this._inlineRangeProvider}
            .enableClipboard=${false}
            .enableUndoRedo=${false}
            .verticalScrollContainerGetter=${() => getViewportElement(this.host)}
          ></rich-text>
          ${this.inEdgelessText
                ? nothing
                : html `
                <div
                  contenteditable="false"
                  class="affine-paragraph-placeholder ${this._displayPlaceholder
                    .value
                    ? 'visible'
                    : ''}"
                >
                  ${this.service.placeholderGenerator(this.model)}
                </div>
              `}
        </div>

        ${children}
      </div>
    `;
        }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        #blockContainerStyles_accessor_storage;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ParagraphBlockComponent = _classThis;
})();
export { ParagraphBlockComponent };
//# sourceMappingURL=paragraph-block.js.map