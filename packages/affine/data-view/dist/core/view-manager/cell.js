import { computed } from '@lit-labs/preact-signals';
export class CellBase {
    get column() {
        return this.column$.value;
    }
    get row() {
        return this.view.rowGet(this.rowId);
    }
    constructor(view, columnId, rowId) {
        this.view = view;
        this.columnId = columnId;
        this.rowId = rowId;
        this.column$ = computed(() => {
            return this.view.columnGet(this.columnId);
        });
        this.isEmpty$ = computed(() => {
            return this.meta$.value.config.isEmpty(this.value$.value);
        });
        this.jsonValue$ = computed(() => {
            return this.view.cellGetJsonValue(this.rowId, this.columnId);
        });
        this.meta$ = computed(() => {
            return this.view.viewManager.dataSource.getPropertyMeta(this.column.type$.value);
        });
        this.stringValue$ = computed(() => {
            return this.view.cellGetStringValue(this.rowId, this.columnId);
        });
        this.value$ = computed(() => {
            return this.view.viewManager.dataSource.cellGetValue(this.rowId, this.columnId);
        });
    }
    getExtra() {
        return undefined;
    }
    setValue(value) {
        this.view.viewManager.dataSource.cellChangeValue(this.rowId, this.columnId, value);
    }
}
//# sourceMappingURL=cell.js.map