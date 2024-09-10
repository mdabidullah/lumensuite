import type { FilterGroup } from '../../core/common/ast.js';
import type { GroupBy, GroupProperty, Sort } from '../../core/common/types.js';
import { type BasicViewDataType } from '../../core/view/data-view.js';
export declare const tableViewType: {
    type: "table";
    modelConfig: <Data extends import("../../core/view/data-view.js").DataViewDataType>(model: import("../../core/view/data-view.js").DataViewConfig<Data>) => {
        type: "table";
        model: import("../../core/view/data-view.js").DataViewConfig<Data>;
        rendererConfig: (renderer: import("../../core/view/data-view.js").DataViewRendererConfig) => {
            type: "table";
            model: import("../../core/view/data-view.js").DataViewConfig<Data>;
            renderer: import("../../core/view/data-view.js").DataViewRendererConfig;
        };
    };
};
declare global {
    interface DataViewDataTypeMap {
        table: DataType;
    }
}
export type TableViewColumn = {
    id: string;
    width: number;
    statCalcType?: string;
    hide?: boolean;
};
type DataType = {
    columns: TableViewColumn[];
    filter: FilterGroup;
    groupBy?: GroupBy;
    groupProperties?: GroupProperty[];
    sort?: Sort;
    header?: {
        titleColumn?: string;
        iconColumn?: string;
        imageColumn?: string;
    };
};
export type TableViewData = BasicViewDataType<typeof tableViewType.type, DataType>;
export declare const tableViewModel: {
    type: "table";
    model: import("../../core/view/data-view.js").DataViewConfig<TableViewData>;
    rendererConfig: (renderer: import("../../core/view/data-view.js").DataViewRendererConfig) => {
        type: "table";
        model: import("../../core/view/data-view.js").DataViewConfig<TableViewData>;
        renderer: import("../../core/view/data-view.js").DataViewRendererConfig;
    };
};
export {};
//# sourceMappingURL=define.d.ts.map