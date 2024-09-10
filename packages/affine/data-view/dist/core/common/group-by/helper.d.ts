import { type InsertToPosition } from '@blocksuite/affine-shared/utils';
import { type ReadonlySignal } from '@lit-labs/preact-signals';
import type { TType } from '../../logical/typesystem.js';
import type { Column } from '../../view-manager/column.js';
import type { SingleView } from '../../view-manager/single-view.js';
import type { GroupBy, GroupProperty } from '../types.js';
export type GroupData = {
    manager: GroupManager;
    column: Column;
    key: string;
    name: string;
    type: TType;
    value: unknown;
    rows: string[];
};
export declare class GroupManager {
    private groupBy$;
    private viewManager;
    private ops;
    column$: ReadonlySignal<Column<unknown, Record<string, unknown>> | undefined>;
    config$: ReadonlySignal<import("./matcher.js").GroupByConfig | undefined>;
    groupDataMap$: ReadonlySignal<Record<string, GroupData> | undefined>;
    groupsDataList$: ReadonlySignal<GroupData[] | undefined>;
    staticGroupDataMap$: ReadonlySignal<Record<string, Omit<GroupData, "rows">> | undefined>;
    updateData: (data: NonNullable<unknown>) => void;
    get addGroup(): ((text: string, oldData: {}) => {}) | undefined;
    get columnId(): string | undefined;
    constructor(groupBy$: ReadonlySignal<GroupBy | undefined>, viewManager: SingleView, ops: {
        sortGroup: (keys: string[]) => string[];
        sortRow: (groupKey: string, rowIds: string[]) => string[];
        changeGroupSort: (keys: string[]) => void;
        changeRowSort: (groupKeys: string[], groupKey: string, keys: string[]) => void;
    });
    addToGroup(rowId: string, key: string): void;
    changeCardSort(groupKey: string, cardIds: string[]): void;
    changeGroupSort(keys: string[]): void;
    defaultGroupProperty(key: string): GroupProperty;
    moveCardTo(rowId: string, fromGroupKey: string | undefined, toGroupKey: string, position: InsertToPosition): void;
    moveGroupTo(groupKey: string, position: InsertToPosition): void;
    removeFromGroup(rowId: string, key: string): void;
    updateValue(rows: string[], value: unknown): void;
}
export declare const sortByManually: <T>(arr: T[], getId: (v: T) => string, ids: string[]) => T[];
//# sourceMappingURL=helper.d.ts.map