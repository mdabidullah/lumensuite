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
import { isInsideBlockByFlavour } from '@blocksuite/affine-shared/utils';
import { BLOCK_ID_ATTR } from '@blocksuite/block-std';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { computePosition, inline, offset, shift } from '@floating-ui/dom';
import { effect } from '@lit-labs/preact-signals';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';
import { CenterPeekIcon, DeleteIcon, ExpandFullSmallIcon, MoreVerticalIcon, OpenIcon, SmallArrowDownIcon, } from '../../../../../icons/index.js';
import { isPeekable, peek } from '../../../../../peek/index.js';
import { renderActions, renderToolbarSeparator, } from '../../../../../toolbar/index.js';
import { styles } from './styles.js';
let ReferencePopup = (() => {
    let _classDecorators = [customElement('reference-popup')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _docTitle_decorators;
    let _docTitle_initializers = [];
    let _docTitle_extraInitializers = [];
    let _inlineEditor_decorators;
    let _inlineEditor_initializers = [];
    let _inlineEditor_extraInitializers = [];
    let _isLinkedNode_decorators;
    let _isLinkedNode_initializers = [];
    let _isLinkedNode_extraInitializers = [];
    let _popupContainer_decorators;
    let _popupContainer_initializers = [];
    let _popupContainer_extraInitializers = [];
    let _referenceInfo_decorators;
    let _referenceInfo_initializers = [];
    let _referenceInfo_extraInitializers = [];
    let _target_decorators;
    let _target_initializers = [];
    let _target_extraInitializers = [];
    let _targetInlineRange_decorators;
    let _targetInlineRange_initializers = [];
    let _targetInlineRange_extraInitializers = [];
    var ReferencePopup = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _abortController_decorators = [property({ attribute: false })];
            _docTitle_decorators = [property({ attribute: false })];
            _inlineEditor_decorators = [property({ attribute: false })];
            _isLinkedNode_decorators = [property({ attribute: false })];
            _popupContainer_decorators = [query('.affine-reference-popover-container')];
            _referenceInfo_decorators = [property({ type: Object })];
            _target_decorators = [property({ attribute: false })];
            _targetInlineRange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _docTitle_decorators, { kind: "accessor", name: "docTitle", static: false, private: false, access: { has: obj => "docTitle" in obj, get: obj => obj.docTitle, set: (obj, value) => { obj.docTitle = value; } }, metadata: _metadata }, _docTitle_initializers, _docTitle_extraInitializers);
            __esDecorate(this, null, _inlineEditor_decorators, { kind: "accessor", name: "inlineEditor", static: false, private: false, access: { has: obj => "inlineEditor" in obj, get: obj => obj.inlineEditor, set: (obj, value) => { obj.inlineEditor = value; } }, metadata: _metadata }, _inlineEditor_initializers, _inlineEditor_extraInitializers);
            __esDecorate(this, null, _isLinkedNode_decorators, { kind: "accessor", name: "isLinkedNode", static: false, private: false, access: { has: obj => "isLinkedNode" in obj, get: obj => obj.isLinkedNode, set: (obj, value) => { obj.isLinkedNode = value; } }, metadata: _metadata }, _isLinkedNode_initializers, _isLinkedNode_extraInitializers);
            __esDecorate(this, null, _popupContainer_decorators, { kind: "accessor", name: "popupContainer", static: false, private: false, access: { has: obj => "popupContainer" in obj, get: obj => obj.popupContainer, set: (obj, value) => { obj.popupContainer = value; } }, metadata: _metadata }, _popupContainer_initializers, _popupContainer_extraInitializers);
            __esDecorate(this, null, _referenceInfo_decorators, { kind: "accessor", name: "referenceInfo", static: false, private: false, access: { has: obj => "referenceInfo" in obj, get: obj => obj.referenceInfo, set: (obj, value) => { obj.referenceInfo = value; } }, metadata: _metadata }, _referenceInfo_initializers, _referenceInfo_extraInitializers);
            __esDecorate(this, null, _target_decorators, { kind: "accessor", name: "target", static: false, private: false, access: { has: obj => "target" in obj, get: obj => obj.target, set: (obj, value) => { obj.target = value; } }, metadata: _metadata }, _target_initializers, _target_extraInitializers);
            __esDecorate(this, null, _targetInlineRange_decorators, { kind: "accessor", name: "targetInlineRange", static: false, private: false, access: { has: obj => "targetInlineRange" in obj, get: obj => obj.targetInlineRange, set: (obj, value) => { obj.targetInlineRange = value; } }, metadata: _metadata }, _targetInlineRange_initializers, _targetInlineRange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ReferencePopup = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get _embedViewButtonDisabled() {
            if (this.block.doc.readonly ||
                isInsideBlockByFlavour(this.block.doc, this.block.model, 'affine:edgeless-text')) {
                return true;
            }
            return (!!this.block.closest('affine-embed-synced-doc-block') ||
                this.referenceDocId === this.doc.id);
        }
        get _openButtonDisabled() {
            return this.referenceDocId === this.doc.id;
        }
        get block() {
            const block = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(block);
            return block;
        }
        get doc() {
            const doc = this.block.doc;
            assertExists(doc);
            return doc;
        }
        get referenceDocId() {
            const docId = this.inlineEditor.getFormat(this.targetInlineRange).reference
                ?.pageId;
            assertExists(docId);
            return docId;
        }
        get std() {
            const std = this.block.std;
            assertExists(std);
            return std;
        }
        _convertToCardView() {
            const block = this.block;
            const doc = block.host.doc;
            const parent = doc.getParent(block.model);
            assertExists(parent);
            const index = parent.children.indexOf(block.model);
            doc.addBlock('affine:embed-linked-doc', this.referenceInfo, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(block.model);
            }
            else {
                this.inlineEditor.insertText(this.targetInlineRange, this.docTitle);
            }
            this.abortController.abort();
        }
        _convertToEmbedView() {
            const block = this.block;
            const doc = block.host.doc;
            const parent = doc.getParent(block.model);
            assertExists(parent);
            const index = parent.children.indexOf(block.model);
            const docId = this.referenceDocId;
            doc.addBlock('affine:embed-synced-doc', { pageId: docId }, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(block.model);
            }
            else {
                this.inlineEditor.insertText(this.targetInlineRange, this.docTitle);
            }
            this.abortController.abort();
        }
        _delete() {
            if (this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                this.inlineEditor.deleteText(this.targetInlineRange);
            }
            this.abortController.abort();
        }
        _moreActions() {
            return renderActions([
                [
                    {
                        type: 'delete',
                        label: 'Delete',
                        icon: DeleteIcon,
                        disabled: this.doc.readonly,
                        action: () => this._delete(),
                    },
                ],
            ]);
        }
        _openDoc() {
            const pageId = this.referenceDocId;
            const block = this.block;
            if (pageId === block.doc.id)
                return;
            const rootId = block.doc.root?.id;
            if (!rootId)
                return;
            const rootComponent = this.std.view.getBlock(rootId);
            if (!rootComponent)
                return;
            rootComponent.slots.docLinkClicked.emit(this.referenceInfo);
        }
        _openMenuButton() {
            const buttons = [
                {
                    label: 'Open this doc',
                    type: 'open-this-doc',
                    icon: ExpandFullSmallIcon,
                    action: () => this._openDoc(),
                    disabled: this._openButtonDisabled,
                },
            ];
            // open in new tab
            if (isPeekable(this.target)) {
                buttons.push({
                    label: 'Open in center peek',
                    type: 'open-in-center-peek',
                    icon: CenterPeekIcon,
                    action: () => peek(this.target),
                });
            }
            // open in split view
            if (buttons.length === 0) {
                return nothing;
            }
            return html `
      <editor-menu-button
        .contentPadding=${'8px'}
        .button=${html `
          <editor-icon-button
            aria-label="Open doc"
            .justify=${'space-between'}
            .labelHeight=${'20px'}
          >
            ${OpenIcon}${SmallArrowDownIcon}
          </editor-icon-button>
        `}
      >
        <div data-size="large" data-orientation="vertical">
          ${repeat(buttons, button => button.label, ({ label, icon, action, disabled }) => html `
              <editor-menu-action
                aria-label=${ifDefined(label)}
                ?disabled=${disabled}
                @click=${action}
              >
                ${icon}<span class="label">${label}</span>
              </editor-menu-action>
            `)}
        </div>
      </editor-menu-button>
    `;
        }
        _viewMenuButton() {
            // synced doc entry controlled by awareness flag
            const isSyncedDocEnabled = this.doc.awarenessStore.getFlag('enable_synced_doc_block');
            const buttons = [];
            buttons.push({
                type: 'inline',
                label: 'Inline view',
            });
            buttons.push({
                type: 'card',
                label: 'Card view',
                action: () => this._convertToCardView(),
                disabled: this.doc.readonly,
            });
            if (isSyncedDocEnabled) {
                buttons.push({
                    type: 'embed',
                    label: 'Embed view',
                    action: () => this._convertToEmbedView(),
                    disabled: this.doc.readonly ||
                        this.isLinkedNode ||
                        this._embedViewButtonDisabled,
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
            <span class="label">Inline view</span>
            ${SmallArrowDownIcon}
          </editor-icon-button>
        `}
      >
        <div data-size="small" data-orientation="vertical">
          ${repeat(buttons, button => button.type, ({ type, label, action, disabled }) => html `
              <editor-menu-action
                aria-label=${label}
                data-testid=${`link-to-${type}`}
                ?data-selected=${type === 'inline'}
                ?disabled=${disabled}
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
            const parent = this.block.host.doc.getParent(this.block.model);
            assertExists(parent);
            this.disposables.add(effect(() => {
                const children = parent.children;
                if (children.includes(this.block.model))
                    return;
                this.abortController.abort();
            }));
        }
        render() {
            const buttons = [
                this._openMenuButton(),
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
      <div class="overlay-root">
        <div class="affine-reference-popover-container">
          <editor-toolbar class="affine-reference-popover view">
            ${join(buttons.filter(button => button !== nothing), renderToolbarSeparator)}
          </editor-toolbar>
        </div>
      </div>
    `;
        }
        updated() {
            assertExists(this.popupContainer);
            const range = this.inlineEditor.toDomRange(this.targetInlineRange);
            assertExists(range);
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
        #abortController_accessor_storage = __runInitializers(this, _abortController_initializers, void 0);
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #docTitle_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _docTitle_initializers, void 0));
        get docTitle() { return this.#docTitle_accessor_storage; }
        set docTitle(value) { this.#docTitle_accessor_storage = value; }
        #inlineEditor_accessor_storage = (__runInitializers(this, _docTitle_extraInitializers), __runInitializers(this, _inlineEditor_initializers, void 0));
        get inlineEditor() { return this.#inlineEditor_accessor_storage; }
        set inlineEditor(value) { this.#inlineEditor_accessor_storage = value; }
        #isLinkedNode_accessor_storage = (__runInitializers(this, _inlineEditor_extraInitializers), __runInitializers(this, _isLinkedNode_initializers, void 0));
        get isLinkedNode() { return this.#isLinkedNode_accessor_storage; }
        set isLinkedNode(value) { this.#isLinkedNode_accessor_storage = value; }
        #popupContainer_accessor_storage = (__runInitializers(this, _isLinkedNode_extraInitializers), __runInitializers(this, _popupContainer_initializers, void 0));
        get popupContainer() { return this.#popupContainer_accessor_storage; }
        set popupContainer(value) { this.#popupContainer_accessor_storage = value; }
        #referenceInfo_accessor_storage = (__runInitializers(this, _popupContainer_extraInitializers), __runInitializers(this, _referenceInfo_initializers, void 0));
        get referenceInfo() { return this.#referenceInfo_accessor_storage; }
        set referenceInfo(value) { this.#referenceInfo_accessor_storage = value; }
        #target_accessor_storage = (__runInitializers(this, _referenceInfo_extraInitializers), __runInitializers(this, _target_initializers, void 0));
        get target() { return this.#target_accessor_storage; }
        set target(value) { this.#target_accessor_storage = value; }
        #targetInlineRange_accessor_storage = (__runInitializers(this, _target_extraInitializers), __runInitializers(this, _targetInlineRange_initializers, void 0));
        get targetInlineRange() { return this.#targetInlineRange_accessor_storage; }
        set targetInlineRange(value) { this.#targetInlineRange_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _targetInlineRange_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ReferencePopup = _classThis;
})();
export { ReferencePopup };
export function toggleReferencePopup(target, isLinkedNode, referenceInfo, inlineEditor, targetInlineRange, docTitle, abortController) {
    const popup = new ReferencePopup();
    popup.target = target;
    popup.isLinkedNode = isLinkedNode;
    popup.referenceInfo = referenceInfo;
    popup.inlineEditor = inlineEditor;
    popup.targetInlineRange = targetInlineRange;
    popup.docTitle = docTitle;
    popup.abortController = abortController;
    document.body.append(popup);
    return popup;
}
//# sourceMappingURL=reference-popup.js.map