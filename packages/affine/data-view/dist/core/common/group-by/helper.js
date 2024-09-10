import { insertPositionToIndex, } from '@blocksuite/affine-shared/utils';
import { computed } from '@lit-labs/preact-signals';
import { groupByMatcher } from './matcher.js';
export class GroupManager {
    get addGroup() {
        const type = this.column$.value?.type$.value;
        if (!type) {
            return;
        }
        return this.viewManager.columnGetMeta(type)?.config.addGroup;
    }
    get columnId() {
        return this.groupBy$.value?.columnId;
    }
    constructor(groupBy$, viewManager, ops) {
        this.groupBy$ = groupBy$;
        this.viewManager = viewManager;
        this.ops = ops;
        this.column$ = computed(() => {
            const groupBy = this.groupBy$.value;
            if (!groupBy) {
                return;
            }
            return this.viewManager.columnGet(groupBy.columnId);
        });
        this.config$ = computed(() => {
            const groupBy = this.groupBy$.value;
            if (!groupBy) {
                return;
            }
            const result = groupByMatcher.find(v => v.data.name === groupBy.name);
            if (!result) {
                return;
            }
            return result.data;
        });
        this.groupDataMap$ = computed(() => {
            const staticGroupMap = this.staticGroupDataMap$.value;
            const config = this.config$.value;
            const groupBy = this.groupBy$.value;
            const column = this.column$.value;
            const tType = column?.dataType$.value;
            if (!staticGroupMap || !config || !groupBy || !tType || !column) {
                return;
            }
            const groupMap = Object.fromEntries(Object.entries(staticGroupMap).map(([k, v]) => [k, { ...v, rows: [] }]));
            this.viewManager.rows$.value.forEach(id => {
                const value = this.viewManager.cellGetJsonValue(id, groupBy.columnId);
                const keys = config.valuesGroup(value, tType);
                keys.forEach(({ key, value }) => {
                    if (!groupMap[key]) {
                        groupMap[key] = {
                            key,
                            column,
                            name: config.groupName(tType, value),
                            manager: this,
                            value,
                            rows: [],
                            type: tType,
                        };
                    }
                    groupMap[key].rows.push(id);
                });
            });
            return groupMap;
        });
        this.groupsDataList$ = computed(() => {
            const groupMap = this.groupDataMap$.value;
            if (!groupMap) {
                return;
            }
            const sortedGroup = this.ops.sortGroup(Object.keys(groupMap));
            sortedGroup.forEach(key => {
                groupMap[key].rows = this.ops.sortRow(key, groupMap[key].rows);
            });
            return sortedGroup.map(key => groupMap[key]);
        });
        this.staticGroupDataMap$ = computed(() => {
            const config = this.config$.value;
            const column = this.column$.value;
            const tType = column?.dataType$.value;
            if (!config || !tType || !column) {
                return;
            }
            return Object.fromEntries(config.defaultKeys(tType).map(({ key, value }) => [
                key,
                {
                    key,
                    column,
                    name: config.groupName(tType, value),
                    manager: this,
                    type: tType,
                    value,
                },
            ]));
        });
        this.updateData = (data) => {
            const columnId = this.columnId;
            if (!columnId) {
                return;
            }
            this.viewManager.columnUpdateData(columnId, data);
        };
    }
    addToGroup(rowId, key) {
        const groupMap = this.groupDataMap$.value;
        const columnId = this.columnId;
        if (!groupMap || !columnId) {
            return;
        }
        const addTo = this.config$.value?.addToGroup ?? (value => value);
        const newValue = addTo(groupMap[key].value, this.viewManager.cellGetJsonValue(rowId, columnId));
        this.viewManager.cellUpdateValue(rowId, columnId, newValue);
    }
    changeCardSort(groupKey, cardIds) {
        const groups = this.groupsDataList$.value;
        if (!groups) {
            return;
        }
        this.ops.changeRowSort(groups.map(v => v.key), groupKey, cardIds);
    }
    changeGroupSort(keys) {
        this.ops.changeGroupSort(keys);
    }
    defaultGroupProperty(key) {
        return {
            key,
            hide: false,
            manuallyCardSort: [],
        };
    }
    moveCardTo(rowId, fromGroupKey, toGroupKey, position) {
        const groupMap = this.groupDataMap$.value;
        if (!groupMap) {
            return;
        }
        if (fromGroupKey !== toGroupKey) {
            const columnId = this.columnId;
            if (!columnId) {
                return;
            }
            const remove = this.config$.value?.removeFromGroup ?? (() => undefined);
            const group = fromGroupKey != null ? groupMap[fromGroupKey] : undefined;
            let newValue = undefined;
            if (group) {
                newValue = remove(group.value, this.viewManager.cellGetJsonValue(rowId, columnId));
            }
            const addTo = this.config$.value?.addToGroup ?? (value => value);
            newValue = addTo(groupMap[toGroupKey].value, newValue);
            this.viewManager.cellUpdateValue(rowId, columnId, newValue);
        }
        const rows = groupMap[toGroupKey].rows.filter(id => id !== rowId);
        const index = insertPositionToIndex(position, rows, id => id);
        rows.splice(index, 0, rowId);
        this.changeCardSort(toGroupKey, rows);
    }
    moveGroupTo(groupKey, position) {
        const groups = this.groupsDataList$.value;
        if (!groups) {
            return;
        }
        const keys = groups.map(v => v.key);
        keys.splice(keys.findIndex(key => key === groupKey), 1);
        const index = insertPositionToIndex(position, keys, key => key);
        keys.splice(index, 0, groupKey);
        this.changeGroupSort(keys);
    }
    removeFromGroup(rowId, key) {
        const groupMap = this.groupDataMap$.value;
        if (!groupMap) {
            return;
        }
        const columnId = this.columnId;
        if (!columnId) {
            return;
        }
        const remove = this.config$.value?.removeFromGroup ?? (() => undefined);
        const newValue = remove(groupMap[key].value, this.viewManager.cellGetJsonValue(rowId, columnId));
        this.viewManager.cellUpdateValue(rowId, columnId, newValue);
    }
    updateValue(rows, value) {
        const columnId = this.columnId;
        if (!columnId) {
            return;
        }
        rows.forEach(id => {
            this.viewManager.cellUpdateValue(id, columnId, value);
        });
    }
}
export const sortByManually = (arr, getId, ids) => {
    const map = new Map(arr.map(v => [getId(v), v]));
    const result = [];
    for (const id of ids) {
        const value = map.get(id);
        if (value) {
            map.delete(id);
            result.push(value);
        }
    }
    result.push(...map.values());
    return result;
};
//# sourceMappingURL=helper.js.map