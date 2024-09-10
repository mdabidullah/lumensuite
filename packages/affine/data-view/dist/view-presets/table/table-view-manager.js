import { insertPositionToIndex, } from '@blocksuite/affine-shared/utils';
import { computed } from '@lit-labs/preact-signals';
import { emptyFilterGroup } from '../../core/common/ast.js';
import { defaultGroupBy } from '../../core/common/group-by.js';
import { GroupManager, sortByManually, } from '../../core/common/group-by/helper.js';
import { groupByMatcher } from '../../core/common/group-by/matcher.js';
import { evalFilter } from '../../core/logical/eval-filter.js';
import { ColumnBase } from '../../core/view-manager/column.js';
import { SingleViewBase, } from '../../core/view-manager/single-view.js';
export class TableSingleView extends SingleViewBase {
    get groupProperties() {
        return this.viewData$.value?.groupProperties ?? [];
    }
    get name() {
        return this.viewData$.value?.name ?? '';
    }
    get type() {
        return this.viewData$.value?.mode ?? 'table';
    }
    constructor(viewManager, viewId) {
        super(viewManager, viewId);
        this.computedColumns$ = computed(() => {
            return this.columnsWithoutFilter$.value.map(id => {
                const column = this.columnGet(id);
                return {
                    id: column.id,
                    hide: column.hide$.value,
                    width: column.width$.value,
                    statCalcType: column.statCalcOp$.value,
                };
            });
        });
        this.columns$ = computed(() => {
            return this.columnsWithoutFilter$.value.filter(id => !this.columnGetHide(id));
        });
        this.columnsWithoutFilter$ = computed(() => {
            const needShow = new Set(this.dataSource.properties$.value);
            const result = [];
            this.viewData$.value?.columns.forEach(v => {
                if (needShow.has(v.id)) {
                    result.push(v.id);
                    needShow.delete(v.id);
                }
            });
            result.push(...needShow);
            return result;
        });
        this.detailColumns$ = computed(() => {
            return this.columnsWithoutFilter$.value.filter(id => this.columnGetType(id) !== 'title');
        });
        this.filter$ = computed(() => {
            return this.viewData$.value?.filter ?? emptyFilterGroup;
        });
        this.groupBy$ = computed(() => {
            return this.viewData$.value?.groupBy;
        });
        this.groupManager = new GroupManager(this.groupBy$, this, {
            sortGroup: ids => sortByManually(ids, v => v, this.groupProperties.map(v => v.key)),
            sortRow: (key, ids) => {
                const property = this.groupProperties.find(v => v.key === key);
                return sortByManually(ids, v => v, property?.manuallyCardSort ?? []);
            },
            changeGroupSort: keys => {
                const map = new Map(this.groupProperties.map(v => [v.key, v]));
                this.viewDataUpdate(() => {
                    return {
                        groupProperties: keys.map(key => {
                            const property = map.get(key);
                            if (property) {
                                return property;
                            }
                            return {
                                key,
                                hide: false,
                                manuallyCardSort: [],
                            };
                        }),
                    };
                });
            },
            changeRowSort: (groupKeys, groupKey, keys) => {
                const map = new Map(this.groupProperties.map(v => [v.key, v]));
                this.viewDataUpdate(() => {
                    return {
                        groupProperties: groupKeys.map(key => {
                            if (key === groupKey) {
                                const group = map.get(key);
                                return group
                                    ? {
                                        ...group,
                                        manuallyCardSort: keys,
                                    }
                                    : {
                                        key,
                                        hide: false,
                                        manuallyCardSort: keys,
                                    };
                            }
                            else {
                                return (map.get(key) ?? {
                                    key,
                                    hide: false,
                                    manuallyCardSort: [],
                                });
                            }
                        }),
                    };
                });
            },
        });
        this.header$ = computed(() => {
            return (this.viewData$.value?.header ?? {
                titleColumn: this.columnsWithoutFilter$.value.find(id => this.columnGetType(id) === 'title'),
                iconColumn: 'type',
            });
        });
        this.readonly$ = computed(() => {
            return this.viewManager.readonly$.value;
        });
    }
    changeGroup(columnId) {
        if (columnId == null) {
            this.viewDataUpdate(() => {
                return {
                    groupBy: undefined,
                };
            });
            return;
        }
        const column = this.columnGet(columnId);
        this.viewDataUpdate(_view => {
            return {
                groupBy: defaultGroupBy(this.columnGetMeta(column.type$.value), column.id, column.data$.value),
            };
        });
    }
    checkGroup(columnId, type, target) {
        if (!groupByMatcher.isMatched(type, target)) {
            this.changeGroup(columnId);
            return false;
        }
        return true;
    }
    columnGet(columnId) {
        return new TableColumn(this, columnId);
    }
    columnGetHide(columnId) {
        return (this.viewData$.value?.columns.find(v => v.id === columnId)?.hide ?? false);
    }
    columnGetStatCalcOp(columnId) {
        return this.viewData$.value?.columns.find(v => v.id === columnId)
            ?.statCalcType;
    }
    columnGetWidth(columnId) {
        return (this.viewData$.value?.columns.find(v => v.id === columnId)?.width ??
            this.dataSource.propertyGetDefaultWidth(columnId));
    }
    columnMove(columnId, toAfterOfColumn) {
        this.viewDataUpdate(() => {
            const columnIndex = this.computedColumns$.value.findIndex(v => v.id === columnId);
            if (columnIndex < 0) {
                return {};
            }
            const columns = [...this.computedColumns$.value];
            const [column] = columns.splice(columnIndex, 1);
            const index = insertPositionToIndex(toAfterOfColumn, columns);
            columns.splice(index, 0, column);
            return {
                columns,
            };
        });
    }
    columnUpdateHide(columnId, hide) {
        this.viewDataUpdate(() => {
            return {
                columns: this.computedColumns$.value.map(v => v.id === columnId
                    ? {
                        ...v,
                        hide,
                    }
                    : v),
            };
        });
    }
    columnUpdateStatCalcOp(columnId, op) {
        this.viewDataUpdate(() => {
            return {
                columns: this.computedColumns$.value.map(v => v.id === columnId
                    ? {
                        ...v,
                        statCalcType: op,
                    }
                    : v),
            };
        });
    }
    columnUpdateWidth(columnId, width) {
        this.viewDataUpdate(() => {
            return {
                columns: this.computedColumns$.value.map(v => v.id === columnId
                    ? {
                        ...v,
                        width: width,
                    }
                    : v),
            };
        });
    }
    hasHeader(rowId) {
        return Object.values(this.header$).some(id => this.cellGetValue(rowId, id));
    }
    isInHeader(columnId) {
        return Object.values(this.header$).some(v => v === columnId);
    }
    isShow(rowId) {
        if (this.filter$.value?.conditions.length) {
            const rowMap = Object.fromEntries(this.columnManagerList$.value.map(column => [
                column.id,
                column.cellGet(rowId).jsonValue$.value,
            ]));
            return evalFilter(this.filter$.value, rowMap);
        }
        return true;
    }
    rowAdd(insertPosition, groupKey) {
        const id = super.rowAdd(insertPosition);
        if (!groupKey) {
            return id;
        }
        this.groupManager.addToGroup(id, groupKey);
        return id;
    }
    rowGetNext(rowId) {
        const index = this.rows$.value.indexOf(rowId);
        return this.rows$.value[index + 1];
    }
    rowGetPrev(rowId) {
        const index = this.rows$.value.indexOf(rowId);
        return this.rows$.value[index - 1];
    }
    rowMove(rowId, position, fromGroup, toGroup) {
        if (toGroup == null) {
            super.rowMove(rowId, position);
            return;
        }
        this.groupManager.moveCardTo(rowId, fromGroup, toGroup, position);
    }
    updateFilter(filter) {
        this.viewDataUpdate(() => {
            return {
                filter,
            };
        });
    }
}
export class TableColumn extends ColumnBase {
    constructor(tableView, columnId) {
        super(tableView, columnId);
        this.tableView = tableView;
        this.statCalcOp$ = computed(() => {
            return this.tableView.columnGetStatCalcOp(this.id);
        });
        this.width$ = computed(() => {
            return this.tableView.columnGetWidth(this.id);
        });
    }
    updateStatCalcOp(type) {
        return this.tableView.columnUpdateStatCalcOp(this.id, type);
    }
    updateWidth(width) {
        this.tableView.columnUpdateWidth(this.id, width);
    }
}
//# sourceMappingURL=table-view-manager.js.map