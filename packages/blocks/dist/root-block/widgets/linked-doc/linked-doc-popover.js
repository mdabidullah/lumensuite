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
import { MoreHorizontalIcon } from '@lumensuite/affine-components/icons';
import { WithDisposable } from '@lumensuite/block-std';
import { html, LitElement, nothing } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import '../../../_common/components/button.js';
import { cleanSpecifiedTail, createKeydownObserver, getQuery, } from '../../../_common/components/utils.js';
import { styles } from './styles.js';
let LinkedDocPopover = (() => {
    let _classDecorators = [customElement('affine-linked-doc-popover')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __activatedItemIndex_decorators;
    let __activatedItemIndex_initializers = [];
    let __activatedItemIndex_extraInitializers = [];
    let __linkedDocGroup_decorators;
    let __linkedDocGroup_initializers = [];
    let __linkedDocGroup_extraInitializers = [];
    let __position_decorators;
    let __position_initializers = [];
    let __position_extraInitializers = [];
    let __showTooltip_decorators;
    let __showTooltip_initializers = [];
    let __showTooltip_extraInitializers = [];
    let _iconButtons_decorators;
    let _iconButtons_initializers = [];
    let _iconButtons_extraInitializers = [];
    let _linkedDocElement_decorators;
    let _linkedDocElement_initializers = [];
    let _linkedDocElement_extraInitializers = [];
    var LinkedDocPopover = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __activatedItemIndex_decorators = [state()];
            __linkedDocGroup_decorators = [state()];
            __position_decorators = [state()];
            __showTooltip_decorators = [state()];
            _iconButtons_decorators = [queryAll('icon-button')];
            _linkedDocElement_decorators = [query('.linked-doc-popover')];
            __esDecorate(this, null, __activatedItemIndex_decorators, { kind: "accessor", name: "_activatedItemIndex", static: false, private: false, access: { has: obj => "_activatedItemIndex" in obj, get: obj => obj._activatedItemIndex, set: (obj, value) => { obj._activatedItemIndex = value; } }, metadata: _metadata }, __activatedItemIndex_initializers, __activatedItemIndex_extraInitializers);
            __esDecorate(this, null, __linkedDocGroup_decorators, { kind: "accessor", name: "_linkedDocGroup", static: false, private: false, access: { has: obj => "_linkedDocGroup" in obj, get: obj => obj._linkedDocGroup, set: (obj, value) => { obj._linkedDocGroup = value; } }, metadata: _metadata }, __linkedDocGroup_initializers, __linkedDocGroup_extraInitializers);
            __esDecorate(this, null, __position_decorators, { kind: "accessor", name: "_position", static: false, private: false, access: { has: obj => "_position" in obj, get: obj => obj._position, set: (obj, value) => { obj._position = value; } }, metadata: _metadata }, __position_initializers, __position_extraInitializers);
            __esDecorate(this, null, __showTooltip_decorators, { kind: "accessor", name: "_showTooltip", static: false, private: false, access: { has: obj => "_showTooltip" in obj, get: obj => obj._showTooltip, set: (obj, value) => { obj._showTooltip = value; } }, metadata: _metadata }, __showTooltip_initializers, __showTooltip_extraInitializers);
            __esDecorate(this, null, _iconButtons_decorators, { kind: "accessor", name: "iconButtons", static: false, private: false, access: { has: obj => "iconButtons" in obj, get: obj => obj.iconButtons, set: (obj, value) => { obj.iconButtons = value; } }, metadata: _metadata }, _iconButtons_initializers, _iconButtons_extraInitializers);
            __esDecorate(this, null, _linkedDocElement_decorators, { kind: "accessor", name: "linkedDocElement", static: false, private: false, access: { has: obj => "linkedDocElement" in obj, get: obj => obj.linkedDocElement, set: (obj, value) => { obj.linkedDocElement = value; } }, metadata: _metadata }, _linkedDocElement_initializers, _linkedDocElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LinkedDocPopover = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get _actionGroup() {
            return this._linkedDocGroup.map(group => {
                return {
                    ...group,
                    items: this._getActionItems(group),
                };
            });
        }
        get _flattenActionList() {
            return this._actionGroup
                .map(group => group.items.map(item => ({ ...item, groupName: group.name })))
                .flat();
        }
        get _query() {
            return getQuery(this.inlineEditor, this._startRange);
        }
        constructor(triggerKey, getMenus, editorHost, inlineEditor, abortController) {
            super();
            this.triggerKey = triggerKey;
            this.getMenus = getMenus;
            this.editorHost = editorHost;
            this.inlineEditor = inlineEditor;
            this.abortController = abortController;
            this._abort = () => {
                // remove popover dom
                this.abortController.abort();
                // clear input query
                cleanSpecifiedTail(this.editorHost, this.inlineEditor, this.triggerKey + (this._query || ''));
            };
            this._expanded = new Map();
            this._startRange = this.inlineEditor.getInlineRange();
            this.#_activatedItemIndex_accessor_storage = __runInitializers(this, __activatedItemIndex_initializers, 0);
            this.#_linkedDocGroup_accessor_storage = (__runInitializers(this, __activatedItemIndex_extraInitializers), __runInitializers(this, __linkedDocGroup_initializers, []));
            this.#_position_accessor_storage = (__runInitializers(this, __linkedDocGroup_extraInitializers), __runInitializers(this, __position_initializers, null));
            this.#_showTooltip_accessor_storage = (__runInitializers(this, __position_extraInitializers), __runInitializers(this, __showTooltip_initializers, false));
            this.#iconButtons_accessor_storage = (__runInitializers(this, __showTooltip_extraInitializers), __runInitializers(this, _iconButtons_initializers, void 0));
            this.#linkedDocElement_accessor_storage = (__runInitializers(this, _iconButtons_extraInitializers), __runInitializers(this, _linkedDocElement_initializers, null));
            __runInitializers(this, _linkedDocElement_extraInitializers);
            this.triggerKey = triggerKey;
            this.getMenus = getMenus;
            this.editorHost = editorHost;
            this.inlineEditor = inlineEditor;
            this.abortController = abortController;
        }
        _getActionItems(group) {
            const isExpanded = !!this._expanded.get(group.name);
            if (isExpanded) {
                return group.items;
            }
            const isOverflow = !!group.maxDisplay && group.items.length > group.maxDisplay;
            if (isOverflow) {
                return group.items.slice(0, group.maxDisplay).concat({
                    key: `${group.name} More`,
                    name: group.overflowText || 'more',
                    icon: MoreHorizontalIcon,
                    action: () => {
                        this._expanded.set(group.name, true);
                        this.requestUpdate();
                    },
                });
            }
            return group.items;
        }
        _isTextOverflowing(element) {
            return element.scrollWidth > element.clientWidth;
        }
        async _updateLinkedDocGroup() {
            const query = this._query;
            if (query === null) {
                this.abortController.abort();
                return;
            }
            this._linkedDocGroup = await this.getMenus(query, this._abort, this.editorHost, this.inlineEditor);
        }
        connectedCallback() {
            super.connectedCallback();
            // init
            void this._updateLinkedDocGroup();
            this._disposables.addFromEvent(this, 'mousedown', e => {
                // Prevent input from losing focus
                e.preventDefault();
            });
            const { eventSource } = this.inlineEditor;
            if (!eventSource)
                return;
            createKeydownObserver({
                target: eventSource,
                signal: this.abortController.signal,
                inlineEditor: this.inlineEditor,
                onInput: () => {
                    this._activatedItemIndex = 0;
                    void this._updateLinkedDocGroup();
                },
                onPaste: () => {
                    this._activatedItemIndex = 0;
                    setTimeout(() => {
                        void this._updateLinkedDocGroup();
                    }, 20);
                },
                onDelete: () => {
                    const curRange = this.inlineEditor.getInlineRange();
                    if (!this._startRange || !curRange) {
                        return;
                    }
                    if (curRange.index < this._startRange.index) {
                        this.abortController.abort();
                    }
                    this._activatedItemIndex = 0;
                    void this._updateLinkedDocGroup();
                },
                onMove: step => {
                    const itemLen = this._flattenActionList.length;
                    this._activatedItemIndex =
                        (itemLen + this._activatedItemIndex + step) % itemLen;
                    // Scroll to the active item
                    const item = this._flattenActionList[this._activatedItemIndex];
                    const shadowRoot = this.shadowRoot;
                    if (!shadowRoot) {
                        console.warn('Failed to find the shadow root!', this);
                        return;
                    }
                    const ele = shadowRoot.querySelector(`icon-button[data-id="${item.key}"]`);
                    if (!ele) {
                        console.warn('Failed to find the active item!', item);
                        return;
                    }
                    ele.scrollIntoView({
                        block: 'nearest',
                    });
                },
                onConfirm: () => {
                    this._flattenActionList[this._activatedItemIndex]
                        .action()
                        ?.catch(console.error);
                },
                onAbort: () => {
                    this.abortController.abort();
                },
            });
        }
        render() {
            const MAX_HEIGHT = 410;
            const style = this._position
                ? styleMap({
                    transform: `translate(${this._position.x}, ${this._position.y})`,
                    maxHeight: `${Math.min(this._position.height, MAX_HEIGHT)}px`,
                })
                : styleMap({
                    visibility: 'hidden',
                });
            // XXX This is a side effect
            let accIdx = 0;
            return html `<div class="linked-doc-popover" style="${style}">
      ${this._actionGroup
                .filter(group => group.items.length)
                .map((group, idx) => {
                return html `
            <div class="divider" ?hidden=${idx === 0}></div>
            <div class="group-title">${group.name}</div>
            <div class="group" style=${group.styles ?? ''}>
              ${group.items.map(({ key, name, icon, action }) => {
                    accIdx++;
                    const curIdx = accIdx - 1;
                    const tooltip = this._showTooltip
                        ? html `<affine-tooltip tip-position=${'right'}
                      >${name}</affine-tooltip
                    >`
                        : nothing;
                    return html `<icon-button
                  width="280px"
                  height="32px"
                  data-id=${key}
                  text=${name}
                  hover=${this._activatedItemIndex === curIdx}
                  @click=${() => {
                        action()?.catch(console.error);
                    }}
                  @mousemove=${() => {
                        // Use `mousemove` instead of `mouseover` to avoid navigate conflict with keyboard
                        this._activatedItemIndex = curIdx;
                        // show tooltip whether text length overflows
                        for (const button of this.iconButtons.values()) {
                            if (button.dataset.id == key && button.textElement) {
                                const isOverflowing = this._isTextOverflowing(button.textElement);
                                this._showTooltip = isOverflowing;
                                break;
                            }
                        }
                    }}
                >
                  ${icon} ${tooltip}
                </icon-button>`;
                })}
            </div>
          `;
            })}
    </div>`;
        }
        updatePosition(position) {
            this._position = position;
        }
        #_activatedItemIndex_accessor_storage;
        get _activatedItemIndex() { return this.#_activatedItemIndex_accessor_storage; }
        set _activatedItemIndex(value) { this.#_activatedItemIndex_accessor_storage = value; }
        #_linkedDocGroup_accessor_storage;
        get _linkedDocGroup() { return this.#_linkedDocGroup_accessor_storage; }
        set _linkedDocGroup(value) { this.#_linkedDocGroup_accessor_storage = value; }
        #_position_accessor_storage;
        get _position() { return this.#_position_accessor_storage; }
        set _position(value) { this.#_position_accessor_storage = value; }
        #_showTooltip_accessor_storage;
        get _showTooltip() { return this.#_showTooltip_accessor_storage; }
        set _showTooltip(value) { this.#_showTooltip_accessor_storage = value; }
        #iconButtons_accessor_storage;
        get iconButtons() { return this.#iconButtons_accessor_storage; }
        set iconButtons(value) { this.#iconButtons_accessor_storage = value; }
        #linkedDocElement_accessor_storage;
        get linkedDocElement() { return this.#linkedDocElement_accessor_storage; }
        set linkedDocElement(value) { this.#linkedDocElement_accessor_storage = value; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LinkedDocPopover = _classThis;
})();
export { LinkedDocPopover };
//# sourceMappingURL=linked-doc-popover.js.map