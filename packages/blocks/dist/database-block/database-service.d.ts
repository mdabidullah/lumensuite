import type { BlockModel, Doc } from '@blocksuite/store';
import { type DatabaseBlockModel } from '@blocksuite/affine-model';
import { BlockService } from '@blocksuite/block-std';
import { type ViewMeta } from '@blocksuite/data-view';
import { addColumn, applyColumnUpdate, updateCell } from './utils.js';
export declare class DatabaseBlockService extends BlockService {
    static readonly flavour: "affine:database";
    addColumn: typeof addColumn;
    applyColumnUpdate: typeof applyColumnUpdate;
    databaseViewAddView: (model: DatabaseBlockModel, viewMeta: ViewMeta) => import("@blocksuite/data-view").BasicViewDataType<"table", {
        columns: import("@blocksuite/data-view/view-presets").TableViewColumn[];
        filter: import("@blocksuite/data-view").FilterGroup;
        groupBy?: import("@blocksuite/data-view").GroupBy;
        groupProperties?: import("@blocksuite/data-view").GroupProperty[];
        sort?: import("@blocksuite/data-view").Sort;
        header?: {
            titleColumn?: string;
            iconColumn?: string;
            imageColumn?: string;
        };
    }> | import("@blocksuite/data-view").BasicViewDataType<"kanban", {
        columns: import("@blocksuite/data-view/view-presets").KanbanViewColumn[];
        filter: import("@blocksuite/data-view").FilterGroup;
        groupBy?: import("@blocksuite/data-view").GroupBy;
        sort?: import("@blocksuite/data-view").Sort;
        header: {
            titleColumn?: string;
            iconColumn?: string;
            coverColumn?: string;
        };
        groupProperties: import("@blocksuite/data-view").GroupProperty[];
    }>;
    databaseViewInitEmpty: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
    updateCell: typeof updateCell;
    updateView: <ViewData extends import("@blocksuite/affine-model").ViewBasicDataType>(model: DatabaseBlockModel, id: string, update: (data: ViewData) => Partial<ViewData>) => void;
    viewPresets: {
        tableViewConfig: {
            type: "table";
            model: import("@blocksuite/data-view").DataViewConfig<import("@blocksuite/data-view/view-presets").TableViewData>;
            renderer: import("@blocksuite/data-view").DataViewRendererConfig;
        };
        kanbanViewConfig: {
            type: "kanban";
            model: import("@blocksuite/data-view").DataViewConfig<import("@blocksuite/data-view/view-presets").KanbanViewData>;
            renderer: import("@blocksuite/data-view").DataViewRendererConfig;
        };
    };
    initDatabaseBlock(doc: Doc, model: BlockModel, databaseId: string, viewMeta: ViewMeta, isAppendNewRow?: boolean): void;
    mounted(): void;
}
//# sourceMappingURL=database-service.d.ts.map