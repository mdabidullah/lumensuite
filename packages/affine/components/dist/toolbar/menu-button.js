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
import { PANEL_BASE } from '@blocksuite/affine-shared/styles';
import { createButtonPopper } from '@blocksuite/affine-shared/utils';
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement, } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import './icon-button.js';
let EditorMenuButton = (() => {
    let _classDecorators = [customElement('editor-menu-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __content_decorators;
    let __content_initializers = [];
    let __content_extraInitializers = [];
    let __trigger_decorators;
    let __trigger_initializers = [];
    let __trigger_extraInitializers = [];
    let _button_decorators;
    let _button_initializers = [];
    let _button_extraInitializers = [];
    let _contentPadding_decorators;
    let _contentPadding_initializers = [];
    let _contentPadding_extraInitializers = [];
    var EditorMenuButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __content_decorators = [query('editor-menu-content')];
            __trigger_decorators = [query('editor-icon-button')];
            _button_decorators = [property({ attribute: false })];
            _contentPadding_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __content_decorators, { kind: "accessor", name: "_content", static: false, private: false, access: { has: obj => "_content" in obj, get: obj => obj._content, set: (obj, value) => { obj._content = value; } }, metadata: _metadata }, __content_initializers, __content_extraInitializers);
            __esDecorate(this, null, __trigger_decorators, { kind: "accessor", name: "_trigger", static: false, private: false, access: { has: obj => "_trigger" in obj, get: obj => obj._trigger, set: (obj, value) => { obj._trigger = value; } }, metadata: _metadata }, __trigger_initializers, __trigger_extraInitializers);
            __esDecorate(this, null, _button_decorators, { kind: "accessor", name: "button", static: false, private: false, access: { has: obj => "button" in obj, get: obj => obj.button, set: (obj, value) => { obj.button = value; } }, metadata: _metadata }, _button_initializers, _button_extraInitializers);
            __esDecorate(this, null, _contentPadding_decorators, { kind: "accessor", name: "contentPadding", static: false, private: false, access: { has: obj => "contentPadding" in obj, get: obj => obj.contentPadding, set: (obj, value) => { obj.contentPadding = value; } }, metadata: _metadata }, _contentPadding_initializers, _contentPadding_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EditorMenuButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `; }
        firstUpdated() {
            this._popper = createButtonPopper(this._trigger, this._content, ({ display }) => {
                this._trigger.showTooltip = display === 'hidden';
                this.dispatchEvent(new CustomEvent('toggle', {
                    detail: display,
                    bubbles: false,
                    cancelable: false,
                    composed: true,
                }));
            }, {
                mainAxis: 12,
                ignoreShift: true,
            });
            this._disposables.addFromEvent(this, 'keydown', (e) => {
                e.stopPropagation();
                if (e.key === 'Escape') {
                    this._popper.hide();
                }
            });
            this._disposables.addFromEvent(this._trigger, 'click', (_) => {
                this._popper.toggle();
                if (this._popper.state === 'show') {
                    this._content.focus({ preventScroll: true });
                }
            });
            this._disposables.add(this._popper);
        }
        hide() {
            this._popper?.hide();
        }
        render() {
            return html `
      ${this.button}
      <editor-menu-content role="menu" tabindex="-1">
        <slot></slot>
      </editor-menu-content>
    `;
        }
        show(force = false) {
            this._popper?.show(force);
        }
        willUpdate(changedProperties) {
            if (changedProperties.has('contentPadding')) {
                this.style.setProperty('--content-padding', this.contentPadding ?? '');
            }
        }
        #_content_accessor_storage = __runInitializers(this, __content_initializers, void 0);
        get _content() { return this.#_content_accessor_storage; }
        set _content(value) { this.#_content_accessor_storage = value; }
        #_trigger_accessor_storage = (__runInitializers(this, __content_extraInitializers), __runInitializers(this, __trigger_initializers, void 0));
        get _trigger() { return this.#_trigger_accessor_storage; }
        set _trigger(value) { this.#_trigger_accessor_storage = value; }
        #button_accessor_storage = (__runInitializers(this, __trigger_extraInitializers), __runInitializers(this, _button_initializers, void 0));
        get button() { return this.#button_accessor_storage; }
        set button(value) { this.#button_accessor_storage = value; }
        #contentPadding_accessor_storage = (__runInitializers(this, _button_extraInitializers), __runInitializers(this, _contentPadding_initializers, undefined));
        get contentPadding() { return this.#contentPadding_accessor_storage; }
        set contentPadding(value) { this.#contentPadding_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _contentPadding_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EditorMenuButton = _classThis;
})();
export { EditorMenuButton };
let EditorMenuContent = (() => {
    let _classDecorators = [customElement('editor-menu-content')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var EditorMenuContent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EditorMenuContent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      --packed-height: 6px;
      --offset-height: calc(-1 * var(--packed-height));
      display: none;
      outline: none;
    }

    :host::before,
    :host::after {
      content: '';
      display: block;
      position: absolute;
      height: var(--packed-height);
      width: 100%;
    }

    :host::before {
      top: var(--offset-height);
    }

    :host::after {
      bottom: var(--offset-height);
    }

    :host([data-show]) {
      ${PANEL_BASE};
      justify-content: center;
      padding: var(--content-padding, 0 6px);
    }

    ::slotted(:not(.custom)) {
      display: flex;
      align-items: center;
      align-self: stretch;
      gap: 8px;
      min-height: 36px;
    }

    ::slotted([data-size]) {
      min-width: 146px;
    }

    ::slotted([data-size='small']) {
      min-width: 164px;
    }

    ::slotted([data-size='large']) {
      min-width: 176px;
    }

    ::slotted([data-orientation='vertical']) {
      flex-direction: column;
      align-items: stretch;
      gap: unset;
      min-height: unset;
    }
  `; }
        render() {
            return html `<slot></slot>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EditorMenuContent = _classThis;
})();
export { EditorMenuContent };
let EditorMenuAction = (() => {
    let _classDecorators = [customElement('editor-menu-action')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var EditorMenuAction = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EditorMenuAction = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      width: 100%;
      align-items: center;
      white-space: nowrap;
      box-sizing: border-box;
      padding: 4px 8px;
      border-radius: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      gap: 8px;
      color: var(--affine-text-primary-color);
      font-weight: 400;
      min-height: 30px; // 22 + 8
    }

    :host(:hover),
    :host([data-selected]) {
      background-color: var(--affine-hover-color);
    }

    :host([data-selected]) {
      pointer-events: none;
    }

    :host(:hover.delete),
    :host(:hover.delete) ::slotted(svg) {
      background-color: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }

    :host([disabled]) {
      pointer-events: none;
      cursor: not-allowed;
      color: var(--affine-text-disable-color);
    }

    ::slotted(svg) {
      color: var(--affine-icon-color);
    }
  `; }
        connectedCallback() {
            super.connectedCallback();
            this.role = 'button';
        }
        render() {
            return html `<slot></slot>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EditorMenuAction = _classThis;
})();
export { EditorMenuAction };
//# sourceMappingURL=menu-button.js.map