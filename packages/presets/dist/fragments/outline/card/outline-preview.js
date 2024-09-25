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
import { SignalWatcher, WithDisposable } from '@lumensuite/block-std';
import { noop } from '@lumensuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SmallLinkedDocIcon } from '../../_common/icons.js';
import { placeholderMap, previewIconMap } from '../config.js';
import { isHeadingBlock, isRootBlock } from '../utils/query.js';
function assertType(value) {
    noop(value);
}
const styles = css `
  :host {
    display: block;
    width: 100%;
    font-family: var(--affine-font-family);
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--affine-hover-color);
  }

  :host(.active) {
    color: var(--affine-text-emphasis-color);
  }

  .outline-block-preview {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    white-space: nowrap;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    padding: 4px;
    background: var(--affine-background-secondary-color);
    border-radius: 4px;
    color: var(--affine-icon-color);
  }

  .icon.disabled {
    color: var(--affine-disabled-icon-color);
  }

  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;

    font-size: var(--affine-font-sm);
    line-height: 22px;
    height: 22px;
  }

  .text.general,
  .subtype.text,
  .subtype.quote {
    font-weight: 400;
    padding-left: 28px;
  }

  .subtype.title,
  .subtype.h1,
  .subtype.h2,
  .subtype.h3,
  .subtype.h4,
  .subtype.h5,
  .subtype.h6 {
    font-weight: 600;
  }

  .subtype.title {
    padding-left: 0;
  }
  .subtype.h1 {
    padding-left: 0;
  }
  .subtype.h2 {
    padding-left: 4px;
  }
  .subtype.h3 {
    padding-left: 12px;
  }
  .subtype.h4 {
    padding-left: 16px;
  }
  .subtype.h5 {
    padding-left: 20px;
  }
  .subtype.h6 {
    padding-left: 24px;
  }

  .outline-block-preview:not(:has(span)) {
    display: none;
  }

  .text span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .linked-doc-preview svg {
    width: 1.1em;
    height: 1.1em;
    vertical-align: middle;
    font-size: inherit;
    margin-bottom: 0.1em;
  }

  .linked-doc-text {
    font-size: inherit;
    border-bottom: 0.5px solid var(--affine-divider-color);
    white-space: break-spaces;
    margin-right: 2px;
  }

  .linked-doc-preview.unavailable svg {
    color: var(--affine-text-disable-color);
  }

  .linked-doc-preview.unavailable .linked-doc-text {
    color: var(--affine-text-disable-color);
    text-decoration: line-through;
  }
`;
export const AFFINE_OUTLINE_BLOCK_PREVIEW = 'affine-outline-block-preview';
let OutlineBlockPreview = (() => {
    let _classDecorators = [customElement(AFFINE_OUTLINE_BLOCK_PREVIEW)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(LitElement));
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    let _cardNumber_decorators;
    let _cardNumber_initializers = [];
    let _cardNumber_extraInitializers = [];
    let _disabledIcon_decorators;
    let _disabledIcon_initializers = [];
    let _disabledIcon_extraInitializers = [];
    let _enableNotesSorting_decorators;
    let _enableNotesSorting_initializers = [];
    let _enableNotesSorting_extraInitializers = [];
    let _showPreviewIcon_decorators;
    let _showPreviewIcon_initializers = [];
    let _showPreviewIcon_extraInitializers = [];
    var OutlineBlockPreview = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            _cardNumber_decorators = [property({ attribute: false })];
            _disabledIcon_decorators = [property({ attribute: false })];
            _enableNotesSorting_decorators = [property({ attribute: false })];
            _showPreviewIcon_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(this, null, _cardNumber_decorators, { kind: "accessor", name: "cardNumber", static: false, private: false, access: { has: obj => "cardNumber" in obj, get: obj => obj.cardNumber, set: (obj, value) => { obj.cardNumber = value; } }, metadata: _metadata }, _cardNumber_initializers, _cardNumber_extraInitializers);
            __esDecorate(this, null, _disabledIcon_decorators, { kind: "accessor", name: "disabledIcon", static: false, private: false, access: { has: obj => "disabledIcon" in obj, get: obj => obj.disabledIcon, set: (obj, value) => { obj.disabledIcon = value; } }, metadata: _metadata }, _disabledIcon_initializers, _disabledIcon_extraInitializers);
            __esDecorate(this, null, _enableNotesSorting_decorators, { kind: "accessor", name: "enableNotesSorting", static: false, private: false, access: { has: obj => "enableNotesSorting" in obj, get: obj => obj.enableNotesSorting, set: (obj, value) => { obj.enableNotesSorting = value; } }, metadata: _metadata }, _enableNotesSorting_initializers, _enableNotesSorting_extraInitializers);
            __esDecorate(this, null, _showPreviewIcon_decorators, { kind: "accessor", name: "showPreviewIcon", static: false, private: false, access: { has: obj => "showPreviewIcon" in obj, get: obj => obj.showPreviewIcon, set: (obj, value) => { obj.showPreviewIcon = value; } }, metadata: _metadata }, _showPreviewIcon_initializers, _showPreviewIcon_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlineBlockPreview = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _TextBlockPreview(block) {
            const deltas = block.text.yText.toDelta();
            if (!block.text.length)
                return nothing;
            const iconClass = this.disabledIcon ? 'icon disabled' : 'icon';
            const previewText = deltas.map(delta => {
                if (delta.attributes?.reference) {
                    // If linked doc, render linked doc icon and the doc title.
                    const refAttribute = delta.attributes.reference;
                    const refMeta = block.doc.collection.meta.docMetas.find(doc => doc.id === refAttribute.pageId);
                    const unavailable = !refMeta;
                    const title = unavailable ? 'Deleted doc' : refMeta.title;
                    return html `<span
          class="linked-doc-preview ${unavailable ? 'unavailable' : ''}"
          >${SmallLinkedDocIcon}
          <span class="linked-doc-text"
            >${title.length ? title : 'Untitled'}</span
          ></span
        >`;
                }
                else {
                    // If not linked doc, render the text.
                    return delta.insert.toString().trim().length > 0
                        ? html `<span>${delta.insert.toString()}</span>`
                        : nothing;
                }
            });
            return html `<span class="text subtype ${block.type}">${previewText}</span>
      ${this.showPreviewIcon
                ? html `<span class=${iconClass}>${previewIconMap[block.type]}</span>`
                : nothing}`;
        }
        render() {
            return html `<div class="outline-block-preview">
      ${this.renderBlockByFlavour()}
    </div>`;
        }
        renderBlockByFlavour() {
            const { block } = this;
            const iconClass = this.disabledIcon ? 'icon disabled' : 'icon';
            if (!this.enableNotesSorting &&
                !isHeadingBlock(block) &&
                !isRootBlock(block))
                return nothing;
            switch (block.flavour) {
                case 'affine:page':
                    assertType(block);
                    return block.title.length > 0
                        ? html `<span class="text subtype title">
              ${block.title$.value}
            </span>`
                        : nothing;
                case 'affine:paragraph':
                    assertType(block);
                    return this._TextBlockPreview(block);
                case 'affine:list':
                    assertType(block);
                    return this._TextBlockPreview(block);
                case 'affine:bookmark':
                    assertType(block);
                    return html `
          <span class="text general"
            >${block.title || block.url || placeholderMap['bookmark']}</span
          >
          ${this.showPreviewIcon
                        ? html `<span class=${iconClass}
                >${previewIconMap['bookmark']}</span
              >`
                        : nothing}
        `;
                case 'affine:code':
                    assertType(block);
                    return html `
          <span class="text general"
            >${block.language ?? placeholderMap['code']}</span
          >
          ${this.showPreviewIcon
                        ? html `<span class=${iconClass}>${previewIconMap['code']}</span>`
                        : nothing}
        `;
                case 'affine:database':
                    assertType(block);
                    return html `
          <span class="text general"
            >${block.title.toString().length
                        ? block.title.toString()
                        : placeholderMap['database']}</span
          >
          ${this.showPreviewIcon
                        ? html `<span class=${iconClass}>${previewIconMap['table']}</span>`
                        : nothing}
        `;
                case 'affine:image':
                    assertType(block);
                    return html `
          <span class="text general"
            >${block.caption?.length
                        ? block.caption
                        : placeholderMap['image']}</span
          >
          ${this.showPreviewIcon
                        ? html `<span class=${iconClass}>${previewIconMap['image']}</span>`
                        : nothing}
        `;
                case 'affine:attachment':
                    assertType(block);
                    return html `
          <span class="text general"
            >${block.name?.length
                        ? block.name
                        : placeholderMap['attachment']}</span
          >
          ${this.showPreviewIcon
                        ? html `<span class=${iconClass}
                >${previewIconMap['attachment']}</span
              >`
                        : nothing}
        `;
                default:
                    return nothing;
            }
        }
        #block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        #cardNumber_accessor_storage = (__runInitializers(this, _block_extraInitializers), __runInitializers(this, _cardNumber_initializers, void 0));
        get cardNumber() { return this.#cardNumber_accessor_storage; }
        set cardNumber(value) { this.#cardNumber_accessor_storage = value; }
        #disabledIcon_accessor_storage = (__runInitializers(this, _cardNumber_extraInitializers), __runInitializers(this, _disabledIcon_initializers, false));
        get disabledIcon() { return this.#disabledIcon_accessor_storage; }
        set disabledIcon(value) { this.#disabledIcon_accessor_storage = value; }
        #enableNotesSorting_accessor_storage = (__runInitializers(this, _disabledIcon_extraInitializers), __runInitializers(this, _enableNotesSorting_initializers, void 0));
        get enableNotesSorting() { return this.#enableNotesSorting_accessor_storage; }
        set enableNotesSorting(value) { this.#enableNotesSorting_accessor_storage = value; }
        #showPreviewIcon_accessor_storage = (__runInitializers(this, _enableNotesSorting_extraInitializers), __runInitializers(this, _showPreviewIcon_initializers, void 0));
        get showPreviewIcon() { return this.#showPreviewIcon_accessor_storage; }
        set showPreviewIcon(value) { this.#showPreviewIcon_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _showPreviewIcon_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlineBlockPreview = _classThis;
})();
export { OutlineBlockPreview };
//# sourceMappingURL=outline-preview.js.map