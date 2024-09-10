import { type InsertToPosition } from '@blocksuite/affine-shared/utils';
import { type ReadonlySignal } from '@lit-labs/preact-signals';
import type { TType } from '../../core/logical/typesystem.js';
import type { ViewManager } from '../../core/view-manager/view-manager.js';
import type { TableViewData } from './define.js';
import type { StatCalcOpType } from './types.js';
import { type FilterGroup } from '../../core/common/ast.js';
import { GroupManager } from '../../core/common/group-by/helper.js';
import { ColumnBase } from '../../core/view-manager/column.js';
import { SingleViewBase } from '../../core/view-manager/single-view.js';
export declare class TableSingleView extends SingleViewBase<TableViewData> {
    private computedColumns$;
    columns$: ReadonlySignal<string[]>;
    columnsWithoutFilter$: ReadonlySignal<string[]>;
    detailColumns$: ReadonlySignal<string[]>;
    filter$: ReadonlySignal<FilterGroup>;
    groupBy$: ReadonlySignal<import("../../index.js").GroupBy | undefined>;
    groupManager: GroupManager;
    header$: ReadonlySignal<{
        titleColumn?: string;
        iconColumn?: string;
        imageColumn?: string;
    }>;
    readonly$: ReadonlySignal<boolean>;
    get groupProperties(): import("../../index.js").GroupProperty[];
    get name(): string;
    get type(): string;
    constructor(viewManager: ViewManager, viewId: string);
    changeGroup(columnId: string | undefined): void;
    checkGroup(columnId: string, type: TType, target: TType): boolean;
    columnGet(columnId: string): TableColumn;
    columnGetHide(columnId: string): boolean;
    columnGetStatCalcOp(columnId: string): StatCalcOpType;
    columnGetWidth(columnId: string): number;
    columnMove(columnId: string, toAfterOfColumn: InsertToPosition): void;
    columnUpdateHide(columnId: string, hide: boolean): void;
    columnUpdateStatCalcOp(columnId: string, op?: string): void;
    columnUpdateWidth(columnId: string, width: number): void;
    hasHeader(rowId: string): boolean;
    isInHeader(columnId: string): boolean;
    isShow(rowId: string): boolean;
    rowAdd(insertPosition: InsertToPosition | number, groupKey?: string): string;
    rowGetNext(rowId: string): string;
    rowGetPrev(rowId: string): string;
    rowMove(rowId: string, position: InsertToPosition, fromGroup?: string, toGroup?: string): void;
    updateFilter(filter: FilterGroup): void;
}
export declare class TableColumn extends ColumnBase {
    private tableView;
    statCalcOp$: ReadonlySignal<StatCalcOpType>;
    width$: ReadonlySignal<number>;
    constructor(tableView: TableSingleView, columnId: string);
    updateStatCalcOp(type?: string): void;
    updateWidth(width: number): void;
}
//# sourceMappingURL=table-view-manager.d.ts.map