import { computed, signal, } from '@lit-labs/preact-signals';
import { CellBase } from './cell.js';
import { RowBase } from './row.js';
export class SingleViewBase {
    get allColumnMetas() {
        return this.dataSource.addPropertyConfigList;
    }
    get dataSource() {
        return this.viewManager.dataSource;
    }
    get detailSlots() {
        return this.dataSource.detailSlots;
    }
    get featureFlags$() {
        return this.dataSource.featureFlags$;
    }
    get viewMeta() {
        return this.dataSource.viewMetaGet(this.type);
    }
    constructor(viewManager, id) {
        this.viewManager = viewManager;
        this.id = id;
        this.searchString = signal('');
        this.columnManagerList$ = computed(() => {
            return this.columns$.value.map(id => this.columnGet(id));
        });
        this.filterVisible$ = computed(() => {
            return (this.filter$.value?.conditions.length ?? 0) > 0;
        });
        this.name$ = computed(() => {
            return this.viewData$.value?.name ?? '';
        });
        this.rows$ = computed(() => {
            return this.filteredRows(this.searchString.value);
        });
        this.vars$ = computed(() => {
            return this.columnsWithoutFilter$.value.map(id => {
                const v = this.columnGet(id);
                const propertyMeta = this.dataSource.getPropertyMeta(v.type$.value);
                return {
                    id: v.id,
                    name: v.name$.value,
                    type: propertyMeta.config.type(v.data$.value),
                    icon: v.icon,
                };
            });
        });
        this.viewData$ = computed(() => {
            return this.dataSource.viewDataGet(this.id);
        });
    }
    filteredRows(searchString) {
        return this.dataSource.rows$.value.filter(id => {
            if (searchString) {
                const containsSearchString = this.columns$.value.some(columnId => {
                    return this.cellGetStringValue(id, columnId)
                        ?.toLowerCase()
                        .includes(searchString?.toLowerCase());
                });
                if (!containsSearchString) {
                    return false;
                }
            }
            return this.isShow(id);
        });
    }
    cellGet(rowId, columnId) {
        return new CellBase(this, columnId, rowId);
    }
    cellGetJsonValue(rowId, columnId) {
        const type = this.columnGetType(columnId);
        if (!type) {
            return;
        }
        return this.dataSource
            .getPropertyMeta(type)
            .config.cellToJson(this.dataSource.cellGetValue(rowId, columnId), this.columnGetData(columnId));
    }
    cellGetStringValue(rowId, columnId) {
        const type = this.columnGetType(columnId);
        if (!type) {
            return;
        }
        return (this.dataSource
            .getPropertyMeta(type)
            .config.cellToString(this.dataSource.cellGetValue(rowId, columnId), this.columnGetData(columnId)) ?? '');
    }
    cellGetValue(rowId, columnId) {
        const type = this.columnGetType(columnId);
        if (!type) {
            return;
        }
        const cellValue = this.dataSource.cellGetValue(rowId, columnId);
        return (this.dataSource
            .getPropertyMeta(type)
            .config.formatValue?.(cellValue, this.columnGetData(columnId)) ??
            cellValue);
    }
    cellUpdateRenderValue(rowId, columnId, value) {
        this.dataSource.cellChangeValue(rowId, columnId, value);
    }
    cellUpdateValue(rowId, columnId, value) {
        this.dataSource.cellChangeValue(rowId, columnId, value);
    }
    columnAdd(position, type) {
        const id = this.dataSource.propertyAdd(position, type);
        this.columnMove(id, position);
        return id;
    }
    columnDelete(columnId) {
        this.dataSource.propertyDelete(columnId);
    }
    columnDuplicate(columnId) {
        const id = this.dataSource.propertyDuplicate(columnId);
        this.columnMove(id, {
            before: false,
            id: columnId,
        });
    }
    columnGetData(columnId) {
        return this.dataSource.propertyGetData(columnId);
    }
    columnGetDataType(columnId) {
        const type = this.columnGetType(columnId);
        if (!type) {
            return;
        }
        return this.dataSource
            .getPropertyMeta(type)
            .config.type(this.columnGetData(columnId));
    }
    columnGetIdByIndex(index) {
        return this.columns$.value[index];
    }
    columnGetIndex(columnId) {
        return this.columns$.value.indexOf(columnId);
    }
    columnGetMeta(type) {
        return this.dataSource.getPropertyMeta(type);
    }
    columnGetName(columnId) {
        return this.dataSource.propertyGetName(columnId);
    }
    columnGetNextColumn(columnId) {
        return this.columnGet(this.columnGetIdByIndex(this.columnGetIndex(columnId) + 1));
    }
    columnGetPreColumn(columnId) {
        return this.columnGet(this.columnGetIdByIndex(this.columnGetIndex(columnId) - 1));
    }
    columnGetReadonly(columnId) {
        return this.dataSource.propertyGetReadonly(columnId);
    }
    columnGetType(columnId) {
        return this.dataSource.propertyGetType(columnId);
    }
    columnParseValueFromString(columnId, cellData) {
        const type = this.columnGetType(columnId);
        if (!type) {
            return;
        }
        return (this.dataSource
            .getPropertyMeta(type)
            .config.cellFromString(cellData, this.columnGetData(columnId)) ?? '');
    }
    columnUpdateData(columnId, data) {
        this.dataSource.propertyChangeData(columnId, data);
    }
    columnUpdateName(columnId, name) {
        this.dataSource.propertyChangeName(columnId, name);
    }
    columnUpdateType(columnId, type) {
        this.dataSource.propertyChangeType(columnId, type);
    }
    delete() {
        this.viewManager.viewDelete(this.id);
    }
    duplicate() {
        this.viewManager.viewDuplicate(this.id);
    }
    getContext(key) {
        return this.dataSource.getContext(key);
    }
    getIcon(type) {
        return this.dataSource.getPropertyMeta(type).renderer.icon;
    }
    rowAdd(insertPosition) {
        return this.dataSource.rowAdd(insertPosition);
    }
    rowDelete(ids) {
        this.dataSource.rowDelete(ids);
    }
    rowGet(rowId) {
        return new RowBase(this, rowId);
    }
    rowMove(rowId, position) {
        this.dataSource.rowMove(rowId, position);
    }
    setSearch(str) {
        this.searchString.value = str;
    }
    updateName(name) {
        this.viewDataUpdate(() => {
            return {
                name,
            };
        });
    }
    viewDataUpdate(updater) {
        this.dataSource.viewDataUpdate(this.id, updater);
    }
}
//# sourceMappingURL=single-view.js.map