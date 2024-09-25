import { insertPositionToIndex, } from '@lumensuite/affine-shared/utils';
import { computed } from '@lit-labs/preact-signals';
import { emptyFilterGroup } from '../../core/common/ast.js';
import { defaultGroupBy } from '../../core/common/group-by.js';
import { GroupManager, sortByManually, } from '../../core/common/group-by/helper.js';
import { groupByMatcher } from '../../core/common/group-by/matcher.js';
import { evalFilter } from '../../core/logical/eval-filter.js';
import { ColumnBase } from '../../core/view-manager/column.js';
import { SingleViewBase } from '../../core/view-manager/single-view.js';
export class KanbanSingleView extends SingleViewBase {
    constructor() {
        super(...arguments);
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
            sortGroup: ids => sortByManually(ids, v => v, this.view?.groupProperties.map(v => v.key) ?? []),
            sortRow: (key, ids) => {
                const property = this.view?.groupProperties.find(v => v.key === key);
                return sortByManually(ids, v => v, property?.manuallyCardSort ?? []);
            },
            changeGroupSort: keys => {
                const map = new Map(this.view?.groupProperties.map(v => [v.key, v]));
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
                const map = new Map(this.view?.groupProperties.map(v => [v.key, v]));
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
    get columns() {
        return this.columnsWithoutFilter$.value.filter(id => !this.columnGetHide(id));
    }
    get columnsWithoutFilter() {
        const needShow = new Set(this.dataSource.properties$.value);
        const result = [];
        this.view?.columns.forEach(v => {
            if (needShow.has(v.id)) {
                result.push(v.id);
                needShow.delete(v.id);
            }
        });
        result.push(...needShow);
        return result;
    }
    get filter() {
        return this.view?.filter ?? emptyFilterGroup;
    }
    get header() {
        return this.view?.header;
    }
    get type() {
        return this.view?.mode ?? 'kanban';
    }
    get view() {
        return this.viewData$.value;
    }
    addCard(position, group) {
        const id = this.rowAdd(position);
        this.groupManager.addToGroup(id, group);
        return id;
    }
    changeGroup(columnId) {
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
        return new KanbanColumn(this, columnId);
    }
    columnGetHide(columnId) {
        return this.view?.columns.find(v => v.id === columnId)?.hide ?? false;
    }
    columnMove(columnId, toAfterOfColumn) {
        this.viewDataUpdate(view => {
            const columnIndex = view.columns.findIndex(v => v.id === columnId);
            if (columnIndex < 0) {
                return {};
            }
            const columns = [...view.columns];
            const [column] = columns.splice(columnIndex, 1);
            const index = insertPositionToIndex(toAfterOfColumn, columns);
            columns.splice(index, 0, column);
            return {
                columns,
            };
        });
    }
    columnUpdateHide(columnId, hide) {
        this.viewDataUpdate(view => {
            return {
                columns: view.columns.map(v => v.id === columnId
                    ? {
                        ...v,
                        hide,
                    }
                    : v),
            };
        });
    }
    getHeaderCover(_rowId) {
        const columnId = this.view?.header.coverColumn;
        if (!columnId) {
            return;
        }
        return this.columnGet(columnId);
    }
    getHeaderIcon(_rowId) {
        const columnId = this.view?.header.iconColumn;
        if (!columnId) {
            return;
        }
        return this.columnGet(columnId);
    }
    getHeaderTitle(_rowId) {
        const columnId = this.view?.header.titleColumn;
        if (!columnId) {
            return;
        }
        return this.columnGet(columnId);
    }
    hasHeader(_rowId) {
        const hd = this.view?.header;
        if (!hd) {
            return false;
        }
        return !!hd.titleColumn || !!hd.iconColumn || !!hd.coverColumn;
    }
    isInHeader(columnId) {
        const hd = this.view?.header;
        if (!hd) {
            return false;
        }
        return (hd.titleColumn === columnId ||
            hd.iconColumn === columnId ||
            hd.coverColumn === columnId);
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
    rowGetNext(rowId) {
        const index = this.rows$.value.indexOf(rowId);
        return this.rows$.value[index + 1];
    }
    rowGetPrev(rowId) {
        const index = this.rows$.value.indexOf(rowId);
        return this.rows$.value[index - 1];
    }
    rowMove(rowId, position) {
        this.dataSource.rowMove(rowId, position);
    }
    updateFilter(filter) {
        this.viewDataUpdate(() => {
            return {
                filter,
            };
        });
    }
}
export class KanbanColumn extends ColumnBase {
    constructor(dataViewManager, columnId) {
        super(dataViewManager, columnId);
    }
}
//# sourceMappingURL=kanban-view-manager.js.map