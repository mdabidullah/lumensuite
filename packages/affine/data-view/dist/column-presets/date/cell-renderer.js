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
import { DatePicker } from '@lumensuite/affine-components/date-picker';
import { createLitPortal } from '@lumensuite/affine-components/portal';
import { flip, offset } from '@floating-ui/dom';
import { baseTheme } from '@toeverything/theme';
import { format } from 'date-fns/format';
import { css, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BaseCellRenderer } from '../../core/column/index.js';
import { createFromBaseCellRenderer } from '../../core/column/renderer.js';
import { createIcon } from '../../core/utils/uni-icon.js';
import { dateColumnModelConfig } from './define.js';
let DateCell = (() => {
    let _classDecorators = [customElement('affine-database-date-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var DateCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DateCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-date-cell {
      width: 100%;
    }

    .affine-database-date {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0;
      border: none;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      color: var(--affine-text-primary-color);
      font-weight: 400;
      background-color: transparent;
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      height: var(--data-view-cell-text-line-height);
    }

    input.affine-database-date[type='date']::-webkit-calendar-picker-indicator {
      display: none;
    }
  `; }
        render() {
            const value = this.value ? format(this.value, 'yyyy/MM/dd') : '';
            if (!value) {
                return '';
            }
            return html ` <div class="affine-database-date date">${value}</div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DateCell = _classThis;
})();
export { DateCell };
let DateCellEditing = (() => {
    let _classDecorators = [customElement('affine-database-date-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let _tempValue_decorators;
    let _tempValue_initializers = [];
    let _tempValue_extraInitializers = [];
    var DateCellEditing = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _tempValue_decorators = [state()];
            __esDecorate(this, null, _tempValue_decorators, { kind: "accessor", name: "tempValue", static: false, private: false, access: { has: obj => "tempValue" in obj, get: obj => obj.tempValue, set: (obj, value) => { obj.tempValue = value; } }, metadata: _metadata }, _tempValue_initializers, _tempValue_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DateCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-date-cell-editing {
      width: 100%;
      cursor: text;
    }

    .affine-database-date:focus {
      outline: none;
    }
  `; }
        get dateString() {
            const value = this.tempValue ?? this.value;
            return value ? format(value, 'yyyy/MM/dd') : '';
        }
        firstUpdated() {
            this.openDatePicker();
        }
        onExitEditMode() {
            this.updateValue();
            this._prevPortalAbortController?.abort();
        }
        render() {
            return html ` <div
      class="affine-database-date date"
      @click="${this.openDatePicker}"
    >
      ${this.dateString}
    </div>`;
        }
        #tempValue_accessor_storage;
        get tempValue() { return this.#tempValue_accessor_storage; }
        set tempValue(value) { this.#tempValue_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._prevPortalAbortController = null;
            this.openDatePicker = () => {
                if (this._prevPortalAbortController &&
                    !this._prevPortalAbortController.signal.aborted)
                    return;
                this._prevPortalAbortController?.abort();
                const abortController = new AbortController();
                abortController.signal.addEventListener('abort', () => {
                    this.selectCurrentCell(false);
                }, { once: true });
                this._prevPortalAbortController = abortController;
                const root = createLitPortal({
                    abortController,
                    closeOnClickAway: true,
                    computePosition: {
                        referenceElement: this,
                        placement: 'bottom',
                        middleware: [offset(10), flip()],
                    },
                    template: () => {
                        const datePicker = new DatePicker();
                        datePicker.value = this.value ?? Date.now();
                        datePicker.onChange = (date) => {
                            this.tempValue = date;
                        };
                        datePicker.onEscape = () => {
                            abortController.abort();
                        };
                        requestAnimationFrame(() => datePicker.focusDateCell());
                        return datePicker;
                    },
                });
                // TODO: use z-index from variable,
                //       for now the slide-layout-modal's z-index is `1001`
                //       the z-index of popover should be higher than it
                // root.style.zIndex = 'var(--affine-z-index-popover)';
                root.style.zIndex = '1002';
            };
            this.updateValue = () => {
                const tempValue = this.tempValue;
                if (!tempValue) {
                    return;
                }
                this.onChange(tempValue.getTime());
                this.tempValue = undefined;
            };
            this.#tempValue_accessor_storage = __runInitializers(this, _tempValue_initializers, undefined);
            __runInitializers(this, _tempValue_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DateCellEditing = _classThis;
})();
export { DateCellEditing };
export const dateColumnConfig = dateColumnModelConfig.createColumnMeta({
    icon: createIcon('DateTimeIcon'),
    cellRenderer: {
        view: createFromBaseCellRenderer(DateCell),
        edit: createFromBaseCellRenderer(DateCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map