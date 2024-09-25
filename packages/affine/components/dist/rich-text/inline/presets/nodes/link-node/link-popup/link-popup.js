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
import { EmbedOptionProvider } from '@lumensuite/affine-shared/services';
import { getHostName, isValidUrl, normalizeUrl, } from '@lumensuite/affine-shared/utils';
import { BLOCK_ID_ATTR, WithDisposable } from '@lumensuite/block-std';
import { computePosition, inline, offset, shift } from '@floating-ui/dom';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';
import { ConfirmIcon, CopyIcon, DeleteIcon, EditIcon, MoreVerticalIcon, OpenIcon, SmallArrowDownIcon, UnlinkIcon, } from '../../../../../../icons/index.js';
import { toast } from '../../../../../../toast/index.js';
import { renderActions, renderToolbarSeparator, } from '../../../../../../toolbar/index.js';
import { linkPopupStyle } from './styles.js';
let LinkPopup = (() => {
    let _classDecorators = [customElement('link-popup')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _confirmButton_decorators;
    let _confirmButton_initializers = [];
    let _confirmButton_extraInitializers = [];
    let _inlineEditor_decorators;
    let _inlineEditor_initializers = [];
    let _inlineEditor_extraInitializers = [];
    let _linkInput_decorators;
    let _linkInput_initializers = [];
    let _linkInput_extraInitializers = [];
    let _mockSelectionContainer_decorators;
    let _mockSelectionContainer_initializers = [];
    let _mockSelectionContainer_extraInitializers = [];
    let _popupContainer_decorators;
    let _popupContainer_initializers = [];
    let _popupContainer_extraInitializers = [];
    let _targetInlineRange_decorators;
    let _targetInlineRange_initializers = [];
    let _targetInlineRange_extraInitializers = [];
    let _textInput_decorators;
    let _textInput_initializers = [];
    let _textInput_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    var LinkPopup = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _abortController_decorators = [property({ attribute: false })];
            _confirmButton_decorators = [query('.affine-confirm-button')];
            _inlineEditor_decorators = [property({ attribute: false })];
            _linkInput_decorators = [query('#link-input')];
            _mockSelectionContainer_decorators = [query('.mock-selection-container')];
            _popupContainer_decorators = [query('.affine-link-popover-container')];
            _targetInlineRange_decorators = [property({ attribute: false })];
            _textInput_decorators = [query('#text-input')];
            _type_decorators = [property()];
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _confirmButton_decorators, { kind: "accessor", name: "confirmButton", static: false, private: false, access: { has: obj => "confirmButton" in obj, get: obj => obj.confirmButton, set: (obj, value) => { obj.confirmButton = value; } }, metadata: _metadata }, _confirmButton_initializers, _confirmButton_extraInitializers);
            __esDecorate(this, null, _inlineEditor_decorators, { kind: "accessor", name: "inlineEditor", static: false, private: false, access: { has: obj => "inlineEditor" in obj, get: obj => obj.inlineEditor, set: (obj, value) => { obj.inlineEditor = value; } }, metadata: _metadata }, _inlineEditor_initializers, _inlineEditor_extraInitializers);
            __esDecorate(this, null, _linkInput_decorators, { kind: "accessor", name: "linkInput", static: false, private: false, access: { has: obj => "linkInput" in obj, get: obj => obj.linkInput, set: (obj, value) => { obj.linkInput = value; } }, metadata: _metadata }, _linkInput_initializers, _linkInput_extraInitializers);
            __esDecorate(this, null, _mockSelectionContainer_decorators, { kind: "accessor", name: "mockSelectionContainer", static: false, private: false, access: { has: obj => "mockSelectionContainer" in obj, get: obj => obj.mockSelectionContainer, set: (obj, value) => { obj.mockSelectionContainer = value; } }, metadata: _metadata }, _mockSelectionContainer_initializers, _mockSelectionContainer_extraInitializers);
            __esDecorate(this, null, _popupContainer_decorators, { kind: "accessor", name: "popupContainer", static: false, private: false, access: { has: obj => "popupContainer" in obj, get: obj => obj.popupContainer, set: (obj, value) => { obj.popupContainer = value; } }, metadata: _metadata }, _popupContainer_initializers, _popupContainer_extraInitializers);
            __esDecorate(this, null, _targetInlineRange_decorators, { kind: "accessor", name: "targetInlineRange", static: false, private: false, access: { has: obj => "targetInlineRange" in obj, get: obj => obj.targetInlineRange, set: (obj, value) => { obj.targetInlineRange = value; } }, metadata: _metadata }, _targetInlineRange_initializers, _targetInlineRange_extraInitializers);
            __esDecorate(this, null, _textInput_decorators, { kind: "accessor", name: "textInput", static: false, private: false, access: { has: obj => "textInput" in obj, get: obj => obj.textInput, set: (obj, value) => { obj.textInput = value; } }, metadata: _metadata }, _textInput_initializers, _textInput_extraInitializers);
            __esDecorate(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LinkPopup = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = linkPopupStyle; }
        get _canConvertToEmbedView() {
            return this._embedOptions?.viewType === 'embed';
        }
        get _isBookmarkAllowed() {
            const block = this.block;
            if (!block)
                return false;
            const schema = block.doc.schema;
            const parent = block.doc.getParent(block.model);
            if (!parent)
                return false;
            const bookmarkSchema = schema.flavourSchemaMap.get('affine:bookmark');
            if (!bookmarkSchema)
                return false;
            const parentSchema = schema.flavourSchemaMap.get(parent.flavour);
            if (!parentSchema)
                return false;
            try {
                schema.validateSchema(bookmarkSchema, parentSchema);
            }
            catch {
                return false;
            }
            return true;
        }
        get block() {
            const block = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            if (!block)
                return null;
            return block;
        }
        get currentLink() {
            return this.inlineEditor.getFormat(this.targetInlineRange).link;
        }
        get currentText() {
            return this.inlineEditor.yTextString.slice(this.targetInlineRange.index, this.targetInlineRange.index + this.targetInlineRange.length);
        }
        get host() {
            return this.block?.host;
        }
        get std() {
            return this.block?.std;
        }
        _confirmBtnTemplate() {
            return html `
      <editor-icon-button
        class="affine-confirm-button"
        .iconSize=${'24px'}
        .disabled=${true}
        @click=${this._onConfirm}
      >
        ${ConfirmIcon}
      </editor-icon-button>
    `;
        }
        _convertToCardView() {
            if (!this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                return;
            }
            let targetFlavour = 'affine:bookmark';
            if (this._embedOptions && this._embedOptions.viewType === 'card') {
                targetFlavour = this._embedOptions.flavour;
            }
            const block = this.block;
            if (!block)
                return;
            const url = this.currentLink;
            const title = this.currentText;
            const props = {
                url,
                title: title === url ? '' : title,
            };
            const doc = block.doc;
            const parent = doc.getParent(block.model);
            if (!parent)
                return;
            const index = parent.children.indexOf(block.model);
            doc.addBlock(targetFlavour, props, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(block.model);
            }
            else {
                this.inlineEditor.formatText(this.targetInlineRange, { link: null });
            }
            this.abortController.abort();
        }
        _convertToEmbedView() {
            if (!this._embedOptions || this._embedOptions.viewType !== 'embed') {
                return;
            }
            const { flavour } = this._embedOptions;
            const url = this.currentLink;
            const block = this.block;
            if (!block)
                return;
            const doc = block.doc;
            const parent = doc.getParent(block.model);
            if (!parent)
                return;
            const index = parent.children.indexOf(block.model);
            doc.addBlock(flavour, { url }, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(block.model);
            }
            else {
                this.inlineEditor.formatText(this.targetInlineRange, { link: null });
            }
            this.abortController.abort();
        }
        _copyUrl() {
            if (!this.currentLink)
                return;
            navigator.clipboard.writeText(this.currentLink).catch(console.error);
            if (!this.host)
                return;
            toast(this.host, 'Copied link to clipboard');
            this.abortController.abort();
        }
        _moreActions() {
            return renderActions([
                [
                    {
                        label: 'Open',
                        type: 'open',
                        icon: OpenIcon,
                        action: this._openLink,
                    },
                    {
                        label: 'Copy',
                        type: 'copy',
                        icon: CopyIcon,
                        action: this._copyUrl,
                    },
                    {
                        label: 'Remove link',
                        type: 'remove-link',
                        icon: UnlinkIcon,
                        action: this._removeLink,
                    },
                ],
                [
                    {
                        type: 'delete',
                        label: 'Delete',
                        icon: DeleteIcon,
                        action: this._delete,
                    },
                ],
            ]);
        }
        _onConfirm() {
            if (!this.inlineEditor.isValidInlineRange(this.targetInlineRange))
                return;
            if (!this.linkInput)
                return;
            const linkInputValue = this.linkInput.value;
            if (!linkInputValue || !isValidUrl(linkInputValue))
                return;
            const link = normalizeUrl(linkInputValue);
            if (this.type === 'create') {
                this.inlineEditor.formatText(this.targetInlineRange, {
                    link: link,
                    reference: null,
                });
                this.inlineEditor.setInlineRange(this.targetInlineRange);
                const textSelection = this.host?.selection.find('text');
                if (!textSelection)
                    return;
                this.std?.range.syncTextSelectionToRange(textSelection);
            }
            else if (this.type === 'edit') {
                const text = this.textInput?.value ?? link;
                this.inlineEditor.insertText(this.targetInlineRange, text, {
                    link: link,
                    reference: null,
                });
                this.inlineEditor.setInlineRange({
                    index: this.targetInlineRange.index,
                    length: text.length,
                });
                const textSelection = this.host?.selection.find('text');
                if (!textSelection)
                    return;
                this.std?.range.syncTextSelectionToRange(textSelection);
            }
            this.abortController.abort();
        }
        _onKeydown(e) {
            e.stopPropagation();
            if (e.key === 'Enter' && !e.isComposing) {
                e.preventDefault();
                this._onConfirm();
            }
        }
        _updateConfirmBtn() {
            if (!this.confirmButton) {
                return;
            }
            const link = this.linkInput?.value.trim();
            this.confirmButton.disabled = !(link && isValidUrl(link));
            this.confirmButton.requestUpdate();
        }
        _viewMenuButton() {
            if (!this._isBookmarkAllowed)
                return nothing;
            const buttons = [];
            buttons.push({
                type: 'inline',
                label: 'Inline view',
            });
            buttons.push({
                type: 'card',
                label: 'Card view',
                action: () => this._convertToCardView(),
            });
            if (this._canConvertToEmbedView) {
                buttons.push({
                    type: 'embed',
                    label: 'Embed view',
                    action: () => this._convertToEmbedView(),
                });
            }
            return html `
      <editor-menu-button
        .contentPadding=${'8px'}
        .button=${html `
          <editor-icon-button
            aria-label="Switch view"
            .justify=${'space-between'}
            .labelHeight=${'20px'}
            .iconContainerWidth=${'110px'}
          >
            <div class="label">Inline view</div>
            ${SmallArrowDownIcon}
          </editor-icon-button>
        `}
      >
        <div data-size="small" data-orientation="vertical">
          ${repeat(buttons, button => button.type, ({ type, label, action }) => html `
              <editor-menu-action
                data-testid=${`link-to-${type}`}
                ?data-selected=${type === 'inline'}
                @click=${action}
              >
                ${label}
              </editor-menu-action>
            `)}
        </div>
      </editor-menu-button>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.targetInlineRange.length === 0) {
                return;
            }
            if (this.type === 'edit' || this.type === 'create') {
                // disable body scroll
                this._bodyOverflowStyle = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                this.disposables.add({
                    dispose: () => {
                        document.body.style.overflow = this._bodyOverflowStyle;
                    },
                });
            }
        }
        firstUpdated() {
            if (!this.linkInput)
                return;
            this._disposables.addFromEvent(this.linkInput, 'copy', e => {
                e.stopPropagation();
            });
            this._disposables.addFromEvent(this.linkInput, 'cut', e => {
                e.stopPropagation();
            });
            this._disposables.addFromEvent(this.linkInput, 'paste', e => {
                e.stopPropagation();
            });
        }
        render() {
            return html `
      <div class="overlay-root">
        ${this.type === 'view'
                ? nothing
                : html `
              <div
                class="affine-link-popover-overlay-mask"
                @click=${() => {
                    this.abortController.abort();
                    this.host?.selection.clear();
                }}
              ></div>
            `}
        <div class="affine-link-popover-container" @keydown=${this._onKeydown}>
          ${choose(this.type, [
                ['create', this._createTemplate],
                ['edit', this._editTemplate],
                ['view', this._viewTemplate],
            ])}
        </div>
        <div class="mock-selection-container"></div>
      </div>
    `;
        }
        updated() {
            const range = this.inlineEditor.toDomRange(this.targetInlineRange);
            if (!range) {
                return;
            }
            if (this.type !== 'view') {
                const domRects = range.getClientRects();
                Object.values(domRects).forEach(domRect => {
                    if (!this.mockSelectionContainer) {
                        return;
                    }
                    const mockSelection = document.createElement('div');
                    mockSelection.classList.add('mock-selection');
                    mockSelection.style.left = `${domRect.left}px`;
                    mockSelection.style.top = `${domRect.top}px`;
                    mockSelection.style.width = `${domRect.width}px`;
                    mockSelection.style.height = `${domRect.height}px`;
                    this.mockSelectionContainer.append(mockSelection);
                });
            }
            const visualElement = {
                getBoundingClientRect: () => range.getBoundingClientRect(),
                getClientRects: () => range.getClientRects(),
            };
            computePosition(visualElement, this.popupContainer, {
                middleware: [
                    offset(10),
                    inline(),
                    shift({
                        padding: 6,
                    }),
                ],
            })
                .then(({ x, y }) => {
                const popupContainer = this.popupContainer;
                if (!popupContainer)
                    return;
                popupContainer.style.left = `${x}px`;
                popupContainer.style.top = `${y}px`;
            })
                .catch(console.error);
        }
        #abortController_accessor_storage;
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #confirmButton_accessor_storage;
        get confirmButton() { return this.#confirmButton_accessor_storage; }
        set confirmButton(value) { this.#confirmButton_accessor_storage = value; }
        #inlineEditor_accessor_storage;
        get inlineEditor() { return this.#inlineEditor_accessor_storage; }
        set inlineEditor(value) { this.#inlineEditor_accessor_storage = value; }
        #linkInput_accessor_storage;
        get linkInput() { return this.#linkInput_accessor_storage; }
        set linkInput(value) { this.#linkInput_accessor_storage = value; }
        #mockSelectionContainer_accessor_storage;
        get mockSelectionContainer() { return this.#mockSelectionContainer_accessor_storage; }
        set mockSelectionContainer(value) { this.#mockSelectionContainer_accessor_storage = value; }
        #popupContainer_accessor_storage;
        get popupContainer() { return this.#popupContainer_accessor_storage; }
        set popupContainer(value) { this.#popupContainer_accessor_storage = value; }
        #targetInlineRange_accessor_storage;
        get targetInlineRange() { return this.#targetInlineRange_accessor_storage; }
        set targetInlineRange(value) { this.#targetInlineRange_accessor_storage = value; }
        #textInput_accessor_storage;
        get textInput() { return this.#textInput_accessor_storage; }
        set textInput(value) { this.#textInput_accessor_storage = value; }
        #type_accessor_storage;
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._bodyOverflowStyle = '';
            this._createTemplate = () => {
                this.updateComplete
                    .then(() => {
                    this.linkInput?.focus();
                    this._updateConfirmBtn();
                })
                    .catch(console.error);
                return html `
      <div class="affine-link-popover create">
        <input
          id="link-input"
          class="affine-link-popover-input"
          type="text"
          spellcheck="false"
          placeholder="Paste or type a link"
          @input=${this._updateConfirmBtn}
        />
        ${this._confirmBtnTemplate()}
      </div>
    `;
            };
            this._delete = () => {
                if (this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                    this.inlineEditor.deleteText(this.targetInlineRange);
                }
                this.abortController.abort();
            };
            this._edit = () => {
                this.type = 'edit';
            };
            this._editTemplate = () => {
                this.updateComplete
                    .then(() => {
                    if (!this.textInput ||
                        !this.linkInput ||
                        !this.currentText ||
                        !this.currentLink)
                        return;
                    this.textInput.value = this.currentText;
                    this.linkInput.value = this.currentLink;
                    this.textInput.select();
                    this._updateConfirmBtn();
                })
                    .catch(console.error);
                return html `
      <div class="affine-link-edit-popover">
        <div class="affine-edit-area text">
          <input
            class="affine-edit-input"
            id="text-input"
            type="text"
            placeholder="Enter text"
            @input=${this._updateConfirmBtn}
          />
          <label class="affine-edit-label" for="text-input">Text</label>
        </div>
        <div class="affine-edit-area link">
          <input
            id="link-input"
            class="affine-edit-input"
            type="text"
            spellcheck="false"
            placeholder="Paste or type a link"
            @input=${this._updateConfirmBtn}
          />
          <label class="affine-edit-label" for="link-input">Link</label>
        </div>
        ${this._confirmBtnTemplate()}
      </div>
    `;
            };
            this._embedOptions = null;
            this._openLink = () => {
                let link = this.currentLink;
                if (!link)
                    return;
                if (!link.match(/^[a-zA-Z]+:\/\//)) {
                    link = 'https://' + link;
                }
                window.open(link, '_blank');
                this.abortController.abort();
            };
            this._removeLink = () => {
                if (this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                    this.inlineEditor.formatText(this.targetInlineRange, {
                        link: null,
                    });
                }
                this.abortController.abort();
            };
            this._viewTemplate = () => {
                if (!this.currentLink)
                    return;
                this._embedOptions =
                    this.std
                        ?.get(EmbedOptionProvider)
                        .getEmbedBlockOptions(this.currentLink) ?? null;
                const buttons = [
                    html `
        <a
          class="affine-link-preview"
          href=${this.currentLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>${getHostName(this.currentLink)}</span>
        </a>

        <editor-icon-button
          aria-label="Copy"
          data-testid="copy-link"
          .tooltip=${'Click to copy link'}
          @click=${this._copyUrl}
        >
          ${CopyIcon}
        </editor-icon-button>

        <editor-icon-button
          aria-label="Edit"
          data-testid="edit"
          .tooltip=${'Edit'}
          @click=${this._edit}
        >
          ${EditIcon}
        </editor-icon-button>
      `,
                    this._viewMenuButton(),
                    html `
        <editor-menu-button
          .contentPadding=${'8px'}
          .button=${html `
            <editor-icon-button aria-label="More" .tooltip=${'More'}>
              ${MoreVerticalIcon}
            </editor-icon-button>
          `}
        >
          <div data-size="large" data-orientation="vertical">
            ${this._moreActions()}
          </div>
        </editor-menu-button>
      `,
                ];
                return html `
      <editor-toolbar class="affine-link-popover view">
        ${join(buttons.filter(button => button !== nothing), renderToolbarSeparator)}
      </editor-toolbar>
    `;
            };
            this.#abortController_accessor_storage = __runInitializers(this, _abortController_initializers, void 0);
            this.#confirmButton_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _confirmButton_initializers, null));
            this.#inlineEditor_accessor_storage = (__runInitializers(this, _confirmButton_extraInitializers), __runInitializers(this, _inlineEditor_initializers, void 0));
            this.#linkInput_accessor_storage = (__runInitializers(this, _inlineEditor_extraInitializers), __runInitializers(this, _linkInput_initializers, null));
            this.#mockSelectionContainer_accessor_storage = (__runInitializers(this, _linkInput_extraInitializers), __runInitializers(this, _mockSelectionContainer_initializers, void 0));
            this.#popupContainer_accessor_storage = (__runInitializers(this, _mockSelectionContainer_extraInitializers), __runInitializers(this, _popupContainer_initializers, void 0));
            this.#targetInlineRange_accessor_storage = (__runInitializers(this, _popupContainer_extraInitializers), __runInitializers(this, _targetInlineRange_initializers, void 0));
            this.#textInput_accessor_storage = (__runInitializers(this, _targetInlineRange_extraInitializers), __runInitializers(this, _textInput_initializers, null));
            this.#type_accessor_storage = (__runInitializers(this, _textInput_extraInitializers), __runInitializers(this, _type_initializers, 'create'));
            __runInitializers(this, _type_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LinkPopup = _classThis;
})();
export { LinkPopup };
//# sourceMappingURL=link-popup.js.map