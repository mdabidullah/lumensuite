import type { BlockModel, Doc } from '@lumensuite/store';
import { type DatabaseBlockModel } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
import { type ViewMeta } from '@lumensuite/data-view';
import { addColumn, applyColumnUpdate, updateCell } from './utils.js';
export declare class DatabaseBlockService extends BlockService {
    static readonly flavour: "affine:database";
    addColumn: typeof addColumn;
    applyColumnUpdate: typeof applyColumnUpdate;
    databaseViewAddView: (model: DatabaseBlockModel, viewMeta: ViewMeta) => import("@lumensuite/data-view").BasicViewDataType<"table", {
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
    databaseViewInitEmpty: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
    updateCell: typeof updateCell;
    updateView: <ViewData extends import("@lumensuite/affine-model").ViewBasicDataType>(model: DatabaseBlockModel, id: string, update: (data: ViewData) => Partial<ViewData>) => void;
    viewPresets: {
        tableViewConfig: {
            type: "table";
            model: import("@lumensuite/data-view").DataViewConfig<import("@lumensuite/data-view/view-presets").TableViewData>;
            renderer: import("@lumensuite/data-view").DataViewRendererConfig;
        };
        kanbanViewConfig: {
            type: "kanban";
            model: import("@lumensuite/data-view").DataViewConfig<import("@lumensuite/data-view/view-presets").KanbanViewData>;
            renderer: import("@lumensuite/data-view").DataViewRendererConfig;
        };
    };
    initDatabaseBlock(doc: Doc, model: BlockModel, databaseId: string, viewMeta: ViewMeta, isAppendNewRow?: boolean): void;
    mounted(): void;
}
//# sourceMappingURL=database-service.d.ts.map