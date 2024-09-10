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
import { CheckBoxCkeckSolidIcon, CheckBoxUnIcon } from '@blocksuite/icons/lit';
import { css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { BaseCellRenderer } from '../../core/column/index.js';
import { createFromBaseCellRenderer } from '../../core/column/renderer.js';
import { createIcon } from '../../core/utils/uni-icon.js';
import { checkboxColumnModelConfig } from './define.js';
const playCheckAnimation = async (refElement, { left = 0, size = 20 } = {}) => {
    const sparkingEl = document.createElement('div');
    sparkingEl.classList.add('affine-check-animation');
    if (size < 20) {
        console.warn('If the size is less than 20, the animation may be abnormal.');
    }
    sparkingEl.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
  `;
    sparkingEl.style.left = `${left}px`;
    refElement.append(sparkingEl);
    await sparkingEl.animate([
        {
            boxShadow: '0 -18px 0 -8px #1e96eb, 16px -8px 0 -8px #1e96eb, 16px 8px 0 -8px #1e96eb, 0 18px 0 -8px #1e96eb, -16px 8px 0 -8px #1e96eb, -16px -8px 0 -8px #1e96eb',
        },
    ], { duration: 240, easing: 'ease', fill: 'forwards' }).finished;
    await sparkingEl.animate([
        {
            boxShadow: '0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent',
        },
    ], { duration: 360, easing: 'ease', fill: 'forwards' }).finished;
    sparkingEl.remove();
};
let CheckboxCell = (() => {
    let _classDecorators = [customElement('affine-database-checkbox-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let __checkbox_decorators;
    let __checkbox_initializers = [];
    let __checkbox_extraInitializers = [];
    var CheckboxCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __checkbox_decorators = [query('.affine-database-checkbox')];
            __esDecorate(this, null, __checkbox_decorators, { kind: "accessor", name: "_checkbox", static: false, private: false, access: { has: obj => "_checkbox" in obj, get: obj => obj._checkbox, set: (obj, value) => { obj._checkbox = value; } }, metadata: _metadata }, __checkbox_initializers, __checkbox_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CheckboxCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-checkbox-cell {
      display: block;
      width: 100%;
      cursor: pointer;
    }

    .affine-database-checkbox-container {
      height: 100%;
    }

    .affine-database-checkbox {
      display: flex;
      align-items: center;
      height: var(--data-view-cell-text-line-height);
      width: 100%;
      position: relative;
    }
    .affine-database-checkbox svg {
      width: 16px;
      height: 16px;
    }
  `; }
        beforeEnterEditMode() {
            const checked = !this.value;
            this.onChange(checked);
            if (checked) {
                playCheckAnimation(this._checkbox, { left: -2 }).catch(console.error);
            }
            return false;
        }
        onCopy(_e) {
            _e.preventDefault();
        }
        onCut(_e) {
            _e.preventDefault();
        }
        onPaste(_e) {
            _e.preventDefault();
        }
        render() {
            const checked = this.value ?? false;
            const icon = checked
                ? CheckBoxCkeckSolidIcon({ style: `color:#1E96EB` })
                : CheckBoxUnIcon();
            return html ` <div class="affine-database-checkbox-container">
      <div
        class="affine-database-checkbox checkbox ${checked ? 'checked' : ''}"
      >
        ${icon}
      </div>
    </div>`;
        }
        #_checkbox_accessor_storage = __runInitializers(this, __checkbox_initializers, void 0);
        get _checkbox() { return this.#_checkbox_accessor_storage; }
        set _checkbox(value) { this.#_checkbox_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, __checkbox_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CheckboxCell = _classThis;
})();
export { CheckboxCell };
export const checkboxColumnConfig = checkboxColumnModelConfig.createColumnMeta({
    icon: createIcon('CheckBoxCheckLinearIcon'),
    cellRenderer: {
        view: createFromBaseCellRenderer(CheckboxCell),
    },
});
//# sourceMappingURL=cell-renderer.js.map