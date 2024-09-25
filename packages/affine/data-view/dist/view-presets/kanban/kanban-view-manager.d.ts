import { type InsertToPosition } from '@lumensuite/affine-shared/utils';
import { type ReadonlySignal } from '@lit-labs/preact-signals';
import type { TType } from '../../core/logical/typesystem.js';
import type { KanbanViewData } from './define.js';
import { type FilterGroup } from '../../core/common/ast.js';
import { GroupManager } from '../../core/common/group-by/helper.js';
import { ColumnBase } from '../../core/view-manager/column.js';
import { SingleViewBase } from '../../core/view-manager/single-view.js';
export declare class KanbanSingleView extends SingleViewBase<KanbanViewData> {
    columns$: ReadonlySignal<string[]>;
    columnsWithoutFilter$: ReadonlySignal<string[]>;
    detailColumns$: ReadonlySignal<string[]>;
    filter$: ReadonlySignal<FilterGroup>;
    groupBy$: ReadonlySignal<import("../../index.js").GroupBy | undefined>;
    groupManager: GroupManager;
    header$: ReadonlySignal<{
        titleColumn?: string;
        iconColumn?: string;
        coverColumn?: string;
    }>;
    readonly$: ReadonlySignal<boolean>;
    get columns(): string[];
    get columnsWithoutFilter(): string[];
    get filter(): FilterGroup;
    get header(): {
        titleColumn?: string;
        iconColumn?: string;
        coverColumn?: string;
    } | undefined;
    get type(): string;
    get view(): KanbanViewData | undefined;
    addCard(position: InsertToPosition, group: string): string;
    changeGroup(columnId: string): void;
    checkGroup(columnId: string, type: TType, target: TType): boolean;
    columnGet(columnId: string): KanbanColumn;
    columnGetHide(columnId: string): boolean;
    columnMove(columnId: string, toAfterOfColumn: InsertToPosition): void;
    columnUpdateHide(columnId: string, hide: boolean): void;
    getHeaderCover(_rowId: string): KanbanColumn | undefined;
    getHeaderIcon(_rowId: string): KanbanColumn | undefined;
    getHeaderTitle(_rowId: string): KanbanColumn | undefined;
    hasHeader(_rowId: string): boolean;
    isInHeader(columnId: string): boolean;
    isShow(rowId: string): boolean;
    rowGetNext(rowId: string): string;
    rowGetPrev(rowId: string): string;
    rowMove(rowId: string, position: InsertToPosition): void;
    updateFilter(filter: FilterGroup): void;
}
export declare class KanbanColumn extends ColumnBase {
    constructor(dataViewManager: KanbanSingleView, columnId: string);
}
//# sourceMappingURL=kanban-view-manager.d.ts.map