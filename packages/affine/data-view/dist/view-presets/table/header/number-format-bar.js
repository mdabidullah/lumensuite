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
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formatNumber } from '../../../column-presets/number/utils/formatter.js';
const IncreaseDecimalPlacesIcon = html `
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 10.5H2.66176V13.5H0V10.5ZM13.3333 18H20V21H13.3333V18ZM22.6259 17.9356L24 19.5282L22.6312 21.0585L20 24V15L22.6259 17.9356ZM3.99019 4.4953C3.99019 2.01262 5.78279 0 7.98405 0C10.1898 0 11.9779 2.02109 11.9779 4.4953V9.0047C11.9779 11.4874 10.1853 13.5 7.98405 13.5C5.7783 13.5 3.99019 11.4789 3.99019 9.0047V4.4953ZM6 4.49786V9.00214C6 10.2525 6.89543 11.25 8 11.25C9.11227 11.25 10 10.2436 10 9.00214V4.49786C10 3.24754 9.10457 2.25 8 2.25C6.88773 2.25 6 3.2564 6 4.49786ZM13.3235 4.4953C13.3235 2.01262 15.1161 0 17.3174 0C19.5231 0 21.3113 2.02109 21.3113 4.4953V9.0047C21.3113 11.4874 19.5187 13.5 17.3174 13.5C15.1116 13.5 13.3235 11.4789 13.3235 9.0047V4.4953ZM15.3333 4.49786V9.00214C15.3333 10.2525 16.2288 11.25 17.3333 11.25C18.4456 11.25 19.3333 10.2436 19.3333 9.00214V4.49786C19.3333 3.24754 18.4379 2.25 17.3333 2.25C16.2211 2.25 15.3333 3.2564 15.3333 4.49786Z"
      fill="currentColor"
    />
  </svg>
`;
const DecreaseDecimalPlacesIcon = html `
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 10.5H3V13.5H0V10.5ZM18.09 22.41L16.305 20.625H24V18.375H16.305L18.09 16.59L16.5 15L12 19.5L16.5 24L18.09 22.41ZM13.5 9.375V4.125C13.5 1.845 11.655 0 9.375 0C7.095 0 5.25 1.845 5.25 4.125V9.375C5.25 11.655 7.095 13.5 9.375 13.5C11.655 13.5 13.5 11.655 13.5 9.375ZM11.25 9.375C11.25 10.41 10.41 11.25 9.375 11.25C8.34 11.25 7.5 10.41 7.5 9.375V4.125C7.5 3.09 8.34 2.25 9.375 2.25C10.41 2.25 11.25 3.09 11.25 4.125V9.375Z"
      fill="currentColor"
    />
  </svg>
`;
let DatabaseNumberFormatBar = (() => {
    let _classDecorators = [customElement('affine-database-number-format-bar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    var DatabaseNumberFormatBar = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _column_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseNumberFormatBar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .number-format-toolbar-container {
      padding: 4px 12px;
      display: flex;
      gap: 7px;
      flex-direction: column;
    }

    .number-format-decimal-places {
      display: flex;
      gap: 4px;
      align-items: center;
      justify-content: flex-start;
    }

    .number-format-toolbar-button {
      box-sizing: border-box;
      background-color: transparent;
      border: none;
      border-radius: 4px;
      color: var(--affine-icon-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      position: relative;

      user-select: none;
    }

    .number-format-toolbar-button svg {
      width: 16px;
      height: 16px;
    }

    .number-formatting-sample {
      font-size: var(--affine-font-xs);
      color: var(--affine-icon-color);
      margin-left: auto;
    }
    .number-format-toolbar-button:hover {
      background-color: var(--affine-hover-color);
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: var(--affine-border-color);
    }
  `; }
        render() {
            return html `
      <div class="number-format-toolbar-container">
        <div class="number-format-decimal-places">
          <button
            class="number-format-toolbar-button"
            aria-label="decrease decimal places"
            @click=${this._decrementDecimalPlaces}
          >
            ${DecreaseDecimalPlacesIcon}
          </button>

          <button
            class="number-format-toolbar-button"
            aria-label="increase decimal places"
            @click=${this._incrementDecimalPlaces}
          >
            ${IncreaseDecimalPlacesIcon}
          </button>
          <span class="number-formatting-sample">
            &lpar;&nbsp;${formatNumber(1, 'number', this.column.data$.value.decimal ?? 0)}&nbsp;&rpar;
          </span>
        </div>
        <div class="divider"></div>
      </div>
    `;
        }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._decrementDecimalPlaces = () => {
                this.column.updateData(data => ({
                    decimal: Math.max((data.decimal ?? 0) - 1, 0),
                }));
                this.requestUpdate();
            };
            this._incrementDecimalPlaces = () => {
                this.column.updateData(data => ({
                    decimal: Math.min((data.decimal ?? 0) + 1, 8),
                }));
                this.requestUpdate();
            };
            this.#column_accessor_storage = __runInitializers(this, _column_initializers, void 0);
            __runInitializers(this, _column_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseNumberFormatBar = _classThis;
})();
export { DatabaseNumberFormatBar };
//# sourceMappingURL=number-format-bar.js.map