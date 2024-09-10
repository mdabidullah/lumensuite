import type { FilterGroup } from '../../core/common/ast.js';
import type { GroupBy, GroupProperty, Sort } from '../../core/common/types.js';
import { type BasicViewDataType } from '../../core/view/data-view.js';
export declare const kanbanViewType: {
    type: "kanban";
    modelConfig: <Data extends import("../../core/view/data-view.js").DataViewDataType>(model: import("../../core/view/data-view.js").DataViewConfig<Data>) => {
        type: "kanban";
        model: import("../../core/view/data-view.js").DataViewConfig<Data>;
        rendererConfig: (renderer: import("../../core/view/data-view.js").DataViewRendererConfig) => {
            type: "kanban";
            model: import("../../core/view/data-view.js").DataViewConfig<Data>;
            renderer: import("../../core/view/data-view.js").DataViewRendererConfig;
        };
    };
};
declare global {
    interface DataViewDataTypeMap {
        kanban: DataType;
    }
}
export type KanbanViewColumn = {
    id: string;
    hide?: boolean;
};
type DataType = {
    columns: KanbanViewColumn[];
    filter: FilterGroup;
    groupBy?: GroupBy;
    sort?: Sort;
    header: {
        titleColumn?: string;
        iconColumn?: string;
        coverColumn?: string;
    };
    groupProperties: GroupProperty[];
};
export type KanbanViewData = BasicViewDataType<typeof kanbanViewType.type, DataType>;
export declare const kanbanViewModel: {
    type: "kanban";
    model: import("../../core/view/data-view.js").DataViewConfig<KanbanViewData>;
    rendererConfig: (renderer: import("../../core/view/data-view.js").DataViewRendererConfig) => {
        type: "kanban";
        model: import("../../core/view/data-view.js").DataViewConfig<KanbanViewData>;
        renderer: import("../../core/view/data-view.js").DataViewRendererConfig;
    };
};
export {};
//# sourceMappingURL=define.d.ts.map