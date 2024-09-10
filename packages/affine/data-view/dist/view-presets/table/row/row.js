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
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@blocksuite/block-std';
import { CenterPeekIcon, MoreHorizontalIcon } from '@blocksuite/icons/lit';
import { css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
import { openDetail, popRowMenu } from '../components/menu.js';
import { DEFAULT_COLUMN_MIN_WIDTH } from '../consts.js';
import { TableRowSelection } from '../types.js';
import './row-select-checkbox.js';
let TableRow = (() => {
    let _classDecorators = [customElement('data-view-table-row')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _dataViewEle_decorators;
    let _dataViewEle_initializers = [];
    let _dataViewEle_extraInitializers = [];
    let _rowId_decorators;
    let _rowId_initializers = [];
    let _rowId_extraInitializers = [];
    let _rowIndex_decorators;
    let _rowIndex_initializers = [];
    let _rowIndex_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    var TableRow = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _dataViewEle_decorators = [property({ attribute: false })];
            _rowId_decorators = [property({ attribute: false })];
            _rowIndex_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _dataViewEle_decorators, { kind: "accessor", name: "dataViewEle", static: false, private: false, access: { has: obj => "dataViewEle" in obj, get: obj => obj.dataViewEle, set: (obj, value) => { obj.dataViewEle = value; } }, metadata: _metadata }, _dataViewEle_initializers, _dataViewEle_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(this, null, _rowIndex_decorators, { kind: "accessor", name: "rowIndex", static: false, private: false, access: { has: obj => "rowIndex" in obj, get: obj => obj.rowIndex, set: (obj, value) => { obj.rowIndex = value; } }, metadata: _metadata }, _rowIndex_initializers, _rowIndex_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            TableRow = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .affine-database-block-row:has(.row-select-checkbox.selected) {
      background: var(--affine-primary-color-04);
    }
    .affine-database-block-row:has(.row-select-checkbox.selected)
      .row-selected-bg {
      position: relative;
    }
    .affine-database-block-row:has(.row-select-checkbox.selected)
      .row-selected-bg:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: var(--affine-primary-color-04);
    }
    .affine-database-block-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid var(--affine-border-color);
      position: relative;
    }

    .affine-database-block-row.selected > .database-cell {
      background: transparent;
    }

    .database-cell {
      min-width: ${DEFAULT_COLUMN_MIN_WIDTH}px;
    }

    .row-ops {
      position: relative;
      width: 0;
      margin-top: 8px;
      height: max-content;
      visibility: hidden;
      display: flex;
      gap: 4px;
      cursor: pointer;
      justify-content: end;
    }

    .row-op:last-child {
      margin-right: 8px;
    }

    .affine-database-block-row .show-on-hover-row {
      visibility: hidden;
      opacity: 0;
    }
    .affine-database-block-row:hover .show-on-hover-row {
      visibility: visible;
      opacity: 1;
    }

    .row-op {
      display: flex;
      padding: 4px;
      border-radius: 4px;
      box-shadow: 0px 0px 4px 0px rgba(66, 65, 73, 0.14);
      background-color: var(--affine-background-primary-color);
      position: relative;
    }

    .row-op:hover:before {
      content: '';
      border-radius: 4px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: var(--affine-hover-color);
    }

    .row-op svg {
      fill: var(--affine-icon-color);
      color: var(--affine-icon-color);
      width: 16px;
      height: 16px;
    }
    .data-view-table-view-drag-handler {
      width: 4px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      background-color: var(--affine-background-primary-color);
    }
  `; }
        get groupKey() {
            return this.closest('affine-data-view-table-group')?.group?.key;
        }
        get selectionController() {
            return this.closest('affine-database-table')?.selectionController;
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.addFromEvent(this, 'contextmenu', this.contextMenu);
            // eslint-disable-next-line wc/no-self-class
            this.classList.add('affine-database-block-row', 'database-row');
        }
        render() {
            const view = this.view;
            return html `
      ${view.readonly$.value
                ? nothing
                : html `<div class="data-view-table-left-bar" style="height: 38px">
            <div style="display: flex;">
              <div
                class="data-view-table-view-drag-handler show-on-hover-row row-selected-bg"
                @click=${this._clickDragHandler}
              >
                <div
                  style="width: 4px;
                  border-radius: 2px;
                  height: 12px;
                  background-color: var(--affine-placeholder-color);"
                ></div>
              </div>
              <row-select-checkbox
                .selection="${this.dataViewEle.config.selection$}"
                .rowId="${this.rowId}"
                .groupKey="${this.groupKey}"
              ></row-select-checkbox>
            </div>
          </div>`}
      ${repeat(view.columnManagerList$.value, v => v.id, (column, i) => {
                const clickDetail = () => {
                    if (!this.selectionController) {
                        return;
                    }
                    this.setSelection(TableRowSelection.create({
                        rows: [{ id: this.rowId, groupKey: this.groupKey }],
                    }));
                    openDetail(this.dataViewEle, this.rowId, this.selectionController);
                };
                const openMenu = (e) => {
                    if (!this.selectionController) {
                        return;
                    }
                    const ele = e.currentTarget;
                    const row = { id: this.rowId, groupKey: this.groupKey };
                    this.setSelection(TableRowSelection.create({
                        rows: [row],
                    }));
                    popRowMenu(this.dataViewEle, ele, this.selectionController);
                };
                return html `
            <div>
              <affine-database-cell-container
                class="database-cell"
                style=${styleMap({
                    width: `${column.width$.value}px`,
                    border: i === 0 ? 'none' : undefined,
                })}
                .view="${view}"
                .column="${column}"
                .rowId="${this.rowId}"
                data-row-id="${this.rowId}"
                .rowIndex="${this.rowIndex}"
                data-row-index="${this.rowIndex}"
                .columnId="${column.id}"
                data-column-id="${column.id}"
                .columnIndex="${i}"
                data-column-index="${i}"
              >
              </affine-database-cell-container>
            </div>
            ${!column.readonly$.value &&
                    column.view.header$.value.titleColumn === column.id
                    ? html `<div class="row-ops show-on-hover-row">
                  <div class="row-op" @click="${clickDetail}">
                    ${CenterPeekIcon()}
                  </div>
                  ${!view.readonly$.value
                        ? html `<div class="row-op" @click="${openMenu}">
                        ${MoreHorizontalIcon()}
                      </div>`
                        : nothing}
                </div>`
                    : nothing}
          `;
            })}
      <div class="database-cell add-column-button"></div>
    `;
        }
        #dataViewEle_accessor_storage;
        get dataViewEle() { return this.#dataViewEle_accessor_storage; }
        set dataViewEle(value) { this.#dataViewEle_accessor_storage = value; }
        #rowId_accessor_storage;
        get rowId() { return this.#rowId_accessor_storage; }
        set rowId(value) { this.#rowId_accessor_storage = value; }
        #rowIndex_accessor_storage;
        get rowIndex() { return this.#rowIndex_accessor_storage; }
        set rowIndex(value) { this.#rowIndex_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._clickDragHandler = () => {
                if (this.view.readonly$.value) {
                    return;
                }
                this.selectionController?.toggleRow(this.rowId, this.groupKey);
            };
            this.contextMenu = (e) => {
                if (this.view.readonly$.value) {
                    return;
                }
                const selection = this.selectionController;
                if (!selection) {
                    return;
                }
                e.preventDefault();
                const ele = e.target;
                const cell = ele.closest('affine-database-cell-container');
                const row = { id: this.rowId, groupKey: this.groupKey };
                if (!TableRowSelection.includes(selection.selection, row)) {
                    selection.selection = TableRowSelection.create({
                        rows: [row],
                    });
                }
                const target = cell ??
                    e.target.closest('.database-cell') ?? // for last add btn cell
                    e.target;
                popRowMenu(this.dataViewEle, target, selection);
            };
            this.setSelection = (selection) => {
                if (this.selectionController) {
                    this.selectionController.selection = selection;
                }
            };
            this.#dataViewEle_accessor_storage = __runInitializers(this, _dataViewEle_initializers, void 0);
            this.#rowId_accessor_storage = (__runInitializers(this, _dataViewEle_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
            this.#rowIndex_accessor_storage = (__runInitializers(this, _rowId_extraInitializers), __runInitializers(this, _rowIndex_initializers, void 0));
            this.#view_accessor_storage = (__runInitializers(this, _rowIndex_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            __runInitializers(this, _view_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return TableRow = _classThis;
})();
export { TableRow };
//# sourceMappingURL=row.js.map