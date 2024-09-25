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
import { createPopup } from '@lumensuite/affine-components/context-menu';
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@lumensuite/block-std';
import { ArrowLeftBigIcon, InvisibleIcon, ViewIcon, } from '@blocksuite/icons/lit';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import Sortable from 'sortablejs';
let DataViewPropertiesSettingView = (() => {
    let _classDecorators = [customElement('data-view-properties-setting')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _groupContainer_decorators;
    let _groupContainer_initializers = [];
    let _groupContainer_extraInitializers = [];
    let _onBack_decorators;
    let _onBack_initializers = [];
    let _onBack_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    var DataViewPropertiesSettingView = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _groupContainer_decorators = [query('.properties-group')];
            _onBack_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _groupContainer_decorators, { kind: "accessor", name: "groupContainer", static: false, private: false, access: { has: obj => "groupContainer" in obj, get: obj => obj.groupContainer, set: (obj, value) => { obj.groupContainer = value; } }, metadata: _metadata }, _groupContainer_initializers, _groupContainer_extraInitializers);
            __esDecorate(this, null, _onBack_decorators, { kind: "accessor", name: "onBack", static: false, private: false, access: { has: obj => "onBack" in obj, get: obj => obj.onBack, set: (obj, value) => { obj.onBack = value; } }, metadata: _metadata }, _onBack_initializers, _onBack_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewPropertiesSettingView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    data-view-properties-setting {
      position: absolute;
      background-color: var(--affine-background-overlay-panel-color);
      border-radius: 8px;
      box-shadow: var(--affine-shadow-2);
      padding: 8px;
      min-width: 300px;
    }

    .properties-group-header {
      user-select: none;
      padding: 4px 12px 12px 12px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--affine-divider-color);
    }

    .properties-group-title {
      font-size: 12px;
      line-height: 20px;
      color: var(--affine-text-secondary-color);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .properties-group-op {
      padding: 4px 8px;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      border-radius: 4px;
      cursor: pointer;
    }

    .properties-group-op:hover {
      background-color: var(--affine-hover-color);
    }

    .properties-group {
      min-height: 40px;
    }

    .property-item {
      padding: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      user-select: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .property-item:hover {
      background-color: var(--affine-hover-color);
    }

    .property-item-drag-bar {
      width: 4px;
      height: 12px;
      border-radius: 1px;
      background-color: #efeff0;
    }

    .property-item:hover .property-item-drag-bar {
      background-color: #c0bfc1;
    }

    .property-item-icon {
      display: flex;
      align-items: center;
    }

    .property-item-icon svg {
      color: var(--affine-icon-color);
      fill: var(--affine-icon-color);
      width: 20px;
      height: 20px;
    }

    .property-item-op-icon {
      display: flex;
      align-items: center;
      border-radius: 4px;
    }

    .property-item-op-icon:hover {
      background-color: var(--affine-hover-color);
    }
    .property-item-op-icon.disabled:hover {
      background-color: transparent;
    }

    .property-item-op-icon svg {
      fill: var(--affine-icon-color);
      color: var(--affine-icon-color);
      width: 20px;
      height: 20px;
    }

    .property-item-op-icon.disabled svg {
      fill: var(--affine-text-disable-color);
      color: var(--affine-text-disable-color);
    }

    .property-item-name {
      font-size: 14px;
      line-height: 22px;
      flex: 1;
    }
  `; }
        itemsGroup() {
            return this.view.columnsWithoutFilter$.value.map(id => this.view.columnGet(id));
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.addFromEvent(this, 'pointerdown', e => {
                e.stopPropagation();
            });
        }
        firstUpdated() {
            const sortable = new Sortable(this.groupContainer, {
                animation: 150,
                group: `properties-sort-${this.view.id}`,
                onEnd: evt => {
                    const properties = [...this.view.columnsWithoutFilter$.value];
                    const index = evt.oldIndex ?? -1;
                    const from = properties[index];
                    properties.splice(index, 1);
                    const to = properties[evt.newIndex ?? -1];
                    this.view.columnMove(from, to
                        ? {
                            before: true,
                            id: to,
                        }
                        : 'end');
                },
            });
            this._disposables.add({
                dispose: () => sortable.destroy(),
            });
        }
        render() {
            const items = this.itemsGroup();
            const isAllShowed = items.every(v => !v.hide$.value);
            const clickChangeAll = () => this.clickChangeAll(isAllShowed);
            return html `
      <div class="properties-group-header">
        <div class="properties-group-title dv-icon-20">
          <div
            @click=${this.onBack}
            style="display:flex;"
            class="dv-hover dv-round-4 dv-pd-2"
          >
            ${ArrowLeftBigIcon()}
          </div>
          PROPERTIES
        </div>
        <div class="properties-group-op" @click="${clickChangeAll}">
          ${isAllShowed ? 'Hide All' : 'Show All'}
        </div>
      </div>
      <div class="properties-group">
        ${repeat(items, v => v.id, this.renderColumn)}
      </div>
    `;
        }
        #groupContainer_accessor_storage;
        get groupContainer() { return this.#groupContainer_accessor_storage; }
        set groupContainer(value) { this.#groupContainer_accessor_storage = value; }
        #onBack_accessor_storage;
        get onBack() { return this.#onBack_accessor_storage; }
        set onBack(value) { this.#onBack_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.clickChangeAll = (allShow) => {
                this.view.columnsWithoutFilter$.value.forEach(id => {
                    if (this.view.columnGetType(id) !== 'title') {
                        this.view.columnUpdateHide(id, allShow);
                    }
                });
            };
            this.renderColumn = (column) => {
                const isTitle = column.type$.value === 'title';
                const icon = column.hide$.value ? InvisibleIcon() : ViewIcon();
                const changeVisible = () => {
                    if (column.type$.value !== 'title') {
                        column.updateHide(!column.hide$.value);
                    }
                };
                const classList = classMap({
                    'property-item-op-icon': true,
                    disabled: isTitle,
                });
                return html ` <div class="property-item">
      <div class="property-item-drag-bar"></div>
      <uni-lit class="property-item-icon" .uni="${column.icon}"></uni-lit>
      <div class="property-item-name">${column.name$.value}</div>
      <div class="${classList}" @click="${changeVisible}">${icon}</div>
    </div>`;
            };
            this.#groupContainer_accessor_storage = __runInitializers(this, _groupContainer_initializers, void 0);
            this.#onBack_accessor_storage = (__runInitializers(this, _groupContainer_extraInitializers), __runInitializers(this, _onBack_initializers, undefined));
            this.#view_accessor_storage = (__runInitializers(this, _onBack_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            __runInitializers(this, _view_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewPropertiesSettingView = _classThis;
})();
export { DataViewPropertiesSettingView };
export const popPropertiesSetting = (target, props) => {
    const view = new DataViewPropertiesSettingView();
    view.view = props.view;
    view.onBack = () => {
        close();
        props.onBack?.();
    };
    const close = createPopup(target, view, { onClose: props.onClose });
};
//# sourceMappingURL=properties.js.map