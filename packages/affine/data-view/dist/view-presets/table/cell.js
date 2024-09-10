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
import { assertExists } from '@blocksuite/global/utils';
import { computed } from '@lit-labs/preact-signals';
import { css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef } from 'lit/directives/ref.js';
import { renderUniLit } from '../../core/index.js';
import { TableAreaSelection, } from './types.js';
let DatabaseCellContainer = (() => {
    let _classDecorators = [customElement('affine-database-cell-container')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _columnId_decorators;
    let _columnId_initializers = [];
    let _columnId_extraInitializers = [];
    let _columnIndex_decorators;
    let _columnIndex_initializers = [];
    let _columnIndex_extraInitializers = [];
    let _isEditing_decorators;
    let _isEditing_initializers = [];
    let _isEditing_extraInitializers = [];
    let _rowId_decorators;
    let _rowId_initializers = [];
    let _rowId_extraInitializers = [];
    let _rowIndex_decorators;
    let _rowIndex_initializers = [];
    let _rowIndex_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    var DatabaseCellContainer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _column_decorators = [property({ attribute: false })];
            _columnId_decorators = [property({ attribute: false })];
            _columnIndex_decorators = [property({ attribute: false })];
            _isEditing_decorators = [state()];
            _rowId_decorators = [property({ attribute: false })];
            _rowIndex_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _columnId_decorators, { kind: "accessor", name: "columnId", static: false, private: false, access: { has: obj => "columnId" in obj, get: obj => obj.columnId, set: (obj, value) => { obj.columnId = value; } }, metadata: _metadata }, _columnId_initializers, _columnId_extraInitializers);
            __esDecorate(this, null, _columnIndex_decorators, { kind: "accessor", name: "columnIndex", static: false, private: false, access: { has: obj => "columnIndex" in obj, get: obj => obj.columnIndex, set: (obj, value) => { obj.columnIndex = value; } }, metadata: _metadata }, _columnIndex_initializers, _columnIndex_extraInitializers);
            __esDecorate(this, null, _isEditing_decorators, { kind: "accessor", name: "isEditing", static: false, private: false, access: { has: obj => "isEditing" in obj, get: obj => obj.isEditing, set: (obj, value) => { obj.isEditing = value; } }, metadata: _metadata }, _isEditing_initializers, _isEditing_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(this, null, _rowIndex_decorators, { kind: "accessor", name: "rowIndex", static: false, private: false, access: { has: obj => "rowIndex" in obj, get: obj => obj.rowIndex, set: (obj, value) => { obj.rowIndex = value; } }, metadata: _metadata }, _rowIndex_initializers, _rowIndex_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseCellContainer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-cell-container {
      display: flex;
      align-items: start;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }

    affine-database-cell-container * {
      box-sizing: border-box;
    }

    affine-database-cell-container uni-lit > *:first-child {
      padding: 8px;
    }
  `; }
        get cell() {
            return this._cell.value;
        }
        get groupKey() {
            return this.closest('affine-data-view-table-group')?.group?.key;
        }
        get readonly() {
            return this.column.readonly$.value;
        }
        get selectionView() {
            return this.closest('affine-database-table')?.selectionController;
        }
        get table() {
            const table = this.closest('affine-database-table');
            assertExists(table);
            return table;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.addFromEvent(this, 'click', () => {
                if (!this.isEditing) {
                    this.selectCurrentCell(!this.column.readonly$.value);
                }
            });
        }
        isSelected(selection) {
            if (selection.selectionType !== 'area') {
                return false;
            }
            if (selection.groupKey !== this.groupKey) {
                return;
            }
            if (selection.focus.columnIndex !== this.columnIndex) {
                return;
            }
            return selection.focus.rowIndex === this.rowIndex;
        }
        render() {
            const renderer = this.column.renderer$.value;
            if (!renderer) {
                return;
            }
            const { edit, view } = renderer;
            const uni = !this.readonly && this.isEditing && edit != null ? edit : view;
            const props = {
                cell: this.cell$.value,
                isEditing: this.isEditing,
                selectCurrentCell: this.selectCurrentCell,
            };
            return renderUniLit(uni, props, {
                ref: this._cell,
                style: {
                    display: 'contents',
                },
            });
        }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #columnId_accessor_storage;
        get columnId() { return this.#columnId_accessor_storage; }
        set columnId(value) { this.#columnId_accessor_storage = value; }
        #columnIndex_accessor_storage;
        get columnIndex() { return this.#columnIndex_accessor_storage; }
        set columnIndex(value) { this.#columnIndex_accessor_storage = value; }
        #isEditing_accessor_storage;
        get isEditing() { return this.#isEditing_accessor_storage; }
        set isEditing(value) { this.#isEditing_accessor_storage = value; }
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
            this._cell = createRef();
            this.cell$ = computed(() => {
                return this.column.cellGet(this.rowId);
            });
            this.selectCurrentCell = (editing) => {
                if (this.view.readonly$.value) {
                    return;
                }
                const selectionView = this.selectionView;
                if (selectionView) {
                    const selection = selectionView.selection;
                    if (selection && this.isSelected(selection) && editing) {
                        selectionView.selection = TableAreaSelection.create({
                            groupKey: this.groupKey,
                            focus: {
                                rowIndex: this.rowIndex,
                                columnIndex: this.columnIndex,
                            },
                            isEditing: true,
                        });
                    }
                    else {
                        selectionView.selection = TableAreaSelection.create({
                            groupKey: this.groupKey,
                            focus: {
                                rowIndex: this.rowIndex,
                                columnIndex: this.columnIndex,
                            },
                            isEditing: false,
                        });
                    }
                }
            };
            this.#column_accessor_storage = __runInitializers(this, _column_initializers, void 0);
            this.#columnId_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _columnId_initializers, void 0));
            this.#columnIndex_accessor_storage = (__runInitializers(this, _columnId_extraInitializers), __runInitializers(this, _columnIndex_initializers, void 0));
            this.#isEditing_accessor_storage = (__runInitializers(this, _columnIndex_extraInitializers), __runInitializers(this, _isEditing_initializers, false));
            this.#rowId_accessor_storage = (__runInitializers(this, _isEditing_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
            this.#rowIndex_accessor_storage = (__runInitializers(this, _rowId_extraInitializers), __runInitializers(this, _rowIndex_initializers, void 0));
            this.#view_accessor_storage = (__runInitializers(this, _rowIndex_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            __runInitializers(this, _view_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseCellContainer = _classThis;
})();
export { DatabaseCellContainer };
//# sourceMappingURL=cell.js.map