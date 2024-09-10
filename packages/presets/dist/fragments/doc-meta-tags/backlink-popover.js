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
import { WithDisposable } from '@blocksuite/block-std';
import { DualLinkIcon16, scrollbarStyle } from '@blocksuite/blocks';
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DEFAULT_DOC_NAME } from './utils.js';
let BacklinkButton = (() => {
    let _classDecorators = [customElement('backlink-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __showPopover_decorators;
    let __showPopover_initializers = [];
    let __showPopover_extraInitializers = [];
    var BacklinkButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __showPopover_decorators = [state()];
            __esDecorate(this, null, __showPopover_decorators, { kind: "accessor", name: "_showPopover", static: false, private: false, access: { has: obj => "_showPopover" in obj, get: obj => obj._showPopover, set: (obj, value) => { obj._showPopover = value; } }, metadata: _metadata }, __showPopover_initializers, __showPopover_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BacklinkButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: relative;
      display: flex;
    }

    .btn {
      padding: 0 12px;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      border: none;
      height: 30px;
      border-radius: 8px;
      gap: 4px;
      background: transparent;
      cursor: pointer;

      user-select: none;
      font-size: var(--affine-font-sm);
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      fill: var(--affine-text-secondary-color);
      color: var(--affine-text-secondary-color);
      pointer-events: auto;
    }

    .btn > span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .btn:hover {
      background: var(--affine-hover-color);
    }

    .btn:active {
      background: var(--affine-hover-color);
    }

    .backlink-popover {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateY(100%);
      z-index: 1;
      padding-top: 8px;
    }

    .menu {
      display: flex;
      flex-direction: column;
      padding: 8px 4px;
      background: var(--affine-white);
      box-shadow: var(--affine-menu-shadow);
      border-radius: 12px;
    }

    .backlink-popover .group-title {
      color: var(--affine-text-secondary-color);
      margin: 8px 12px;
    }

    .backlink-popover icon-button {
      padding: 8px;
      justify-content: flex-start;
      gap: 8px;
    }

    ${scrollbarStyle('.backlink-popover .group')}
  `; }
        constructor(backlinks) {
            super();
            // Handle click outside
            this._onClickAway = (e) => {
                if (e.target === this)
                    return;
                if (!this._showPopover)
                    return;
                this._showPopover = false;
                document.removeEventListener('mousedown', this._onClickAway);
            };
            this.#_showPopover_accessor_storage = __runInitializers(this, __showPopover_initializers, false);
            __runInitializers(this, __showPopover_extraInitializers);
            this._backlinks = backlinks;
        }
        connectedCallback() {
            super.connectedCallback();
            this.tabIndex = 0;
        }
        onClick() {
            this._showPopover = !this._showPopover;
            document.addEventListener('mousedown', this._onClickAway);
        }
        render() {
            // Only show linked doc backlinks
            const backlinks = this._backlinks;
            if (!backlinks.length)
                return null;
            return html `
      <div class="btn" @click="${this.onClick}">
        ${DualLinkIcon16}<span>Backlinks (${backlinks.length})</span>
        ${this._showPopover ? backlinkPopover(backlinks) : null}
      </div>
    `;
        }
        #_showPopover_accessor_storage;
        get _showPopover() { return this.#_showPopover_accessor_storage; }
        set _showPopover(value) { this.#_showPopover_accessor_storage = value; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BacklinkButton = _classThis;
})();
export { BacklinkButton };
function backlinkPopover(backlinks) {
    return html `<div
    class="backlink-popover"
    @click=${(e) => e.stopPropagation()}
  >
    <div class="menu">
      <div class="group-title">Linked to this doc</div>
      <div class="group" style="overflow-y: scroll; max-height: 372px;">
        ${backlinks.map(link => {
        const title = link.title || DEFAULT_DOC_NAME;
        return html `<icon-button
            width="248px"
            height="32px"
            text="${title}"
            @mousedown="${link.jump}"
          >
            ${link.icon}
          </icon-button>`;
    })}
      </div>
    </div>
  </div>`;
}
//# sourceMappingURL=backlink-popover.js.map