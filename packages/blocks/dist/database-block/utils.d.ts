import type { Cell, Column, ColumnUpdater, DatabaseBlockModel, ViewBasicDataType } from '@lumensuite/affine-model';
import type { BlockModel } from '@lumensuite/store';
import { type InsertToPosition } from '@lumensuite/affine-shared/utils';
import { type ViewMeta } from '@lumensuite/data-view';
export declare const databaseViewInitEmpty: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
export declare const databaseViewInitConvert: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
export declare const databaseViewInitTemplate: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
export declare const databaseViewAddView: (model: DatabaseBlockModel, viewMeta: ViewMeta) => import("@lumensuite/data-view").BasicViewDataType<"table", {
    columns: import("@lumensuite/data-view/view-presets").TableViewColumn[];
    filter: import("@lumensuite/data-view").FilterGroup;
    groupBy?: import("@lumensuite/data-view").GroupBy;
    groupProperties?: import("@lumensuite/data-view").GroupProperty[];
    sort?: import("@lumensuite/data-view").Sort;
    header?: {
        titleColumn?: string;
        iconColumn?: string;
        imageColumn?: string;
    };
}> | import("@lumensuite/data-view").BasicViewDataType<"kanban", {
    columns: import("@lumensuite/data-view/view-presets").KanbanViewColumn[];
    filter: import("@lumensuite/data-view").FilterGroup;
    groupBy?: import("@lumensuite/data-view").GroupBy;
    sort?: import("@lumensuite/data-view").Sort;
    header: {
        titleColumn?: string;
        iconColumn?: string;
        coverColumn?: string;
    };
    groupProperties: import("@lumensuite/data-view").GroupProperty[];
}>;
export declare function addColumn(model: DatabaseBlockModel, position: InsertToPosition, column: Omit<Column, 'id'> & {
    id?: string;
}): string;
export declare function applyCellsUpdate(model: DatabaseBlockModel): void;
export declare function applyColumnUpdate(model: DatabaseBlockModel): void;
export declare function applyViewsUpdate(model: DatabaseBlockModel): void;
export declare function copyCellsByColumn(model: DatabaseBlockModel, fromId: Column['id'], toId: Column['id']): void;
export declare function deleteColumn(model: DatabaseBlockModel, columnId: Column['id']): void;
export declare function deleteRows(model: DatabaseBlockModel, rowIds: string[]): void;
export declare function deleteView(model: DatabaseBlockModel, id: string): void;
export declare function duplicateView(model: DatabaseBlockModel, id: string): string;
export declare function findColumnIndex(model: DatabaseBlockModel, id: Column['id']): number;
export declare function getCell(model: DatabaseBlockModel, rowId: BlockModel['id'], columnId: Column['id']): Cell | null;
export declare function getColumn(model: DatabaseBlockModel, id: Column['id']): Column | undefined;
export declare function moveViewTo(model: DatabaseBlockModel, id: string, position: InsertToPosition): void;
export declare function updateCell(model: DatabaseBlockModel, rowId: string, cell: Cell): void;
export declare function updateCells(model: DatabaseBlockModel, columnId: string, cells: Record<string, unknown>): void;
export declare function updateColumn(model: DatabaseBlockModel, id: string, updater: ColumnUpdater): string | undefined;
export declare const updateView: <ViewData extends ViewBasicDataType>(model: DatabaseBlockModel, id: string, update: (data: ViewData) => Partial<ViewData>) => void;
//# sourceMappingURL=utils.d.ts.map