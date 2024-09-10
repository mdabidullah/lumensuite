import { computed } from '@lit-labs/preact-signals';
export class ColumnBase {
    get delete() {
        return () => this.view.columnDelete(this.id);
    }
    get duplicate() {
        return () => this.view.columnDuplicate(this.id);
    }
    get icon() {
        if (!this.type$.value)
            return undefined;
        return this.view.getIcon(this.type$.value);
    }
    get id() {
        return this.columnId;
    }
    get index() {
        return this.view.columnGetIndex(this.id);
    }
    get isFirst() {
        return this.view.columnGetIndex(this.id) === 0;
    }
    get isLast() {
        return (this.view.columnGetIndex(this.id) ===
            this.view.columnManagerList$.value.length - 1);
    }
    get updateType() {
        return type => this.view.columnUpdateType(this.id, type);
    }
    constructor(view, columnId) {
        this.view = view;
        this.columnId = columnId;
        this.cells$ = computed(() => {
            return this.view.rows$.value.map(id => this.cellGet(id));
        });
        this.data$ = computed(() => {
            return this.view.columnGetData(this.id);
        });
        this.dataType$ = computed(() => {
            return this.view.columnGetDataType(this.id);
        });
        this.detailRenderer$ = computed(() => {
            return (this.view.columnGetMeta(this.type$.value)?.renderer.detailCellRenderer ??
                this.renderer$.value);
        });
        this.hide$ = computed(() => {
            return this.view.columnGetHide(this.id);
        });
        this.name$ = computed(() => {
            return this.view.columnGetName(this.id);
        });
        this.readonly$ = computed(() => {
            return this.view.readonly$.value || this.view.columnGetReadonly(this.id);
        });
        this.renderer$ = computed(() => {
            return this.view.columnGetMeta(this.type$.value)?.renderer.cellRenderer;
        });
        this.type$ = computed(() => {
            return this.view.columnGetType(this.id);
        });
    }
    cellGet(rowId) {
        return this.view.cellGet(rowId, this.id);
    }
    getStringValue(rowId) {
        return this.cellGet(rowId).stringValue$.value;
    }
    getValue(rowId) {
        return this.cellGet(rowId).value$.value;
    }
    setValue(rowId, value) {
        return this.cellGet(rowId).setValue(value);
    }
    setValueFromString(rowId, value) {
        const data = this.view.columnParseValueFromString(this.id, value);
        if (!data) {
            return;
        }
        if (data.data) {
            this.updateData(() => data.data);
        }
        this.setValue(rowId, data.value);
    }
    updateData(updater) {
        const data = this.data$.value;
        this.view.columnUpdateData(this.id, {
            ...data,
            ...updater(data),
        });
    }
    updateHide(hide) {
        this.view.columnUpdateHide(this.id, hide);
    }
    updateName(name) {
        this.view.columnUpdateName(this.id, name);
    }
}
//# sourceMappingURL=column.js.map