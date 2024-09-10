import type { DataViewWidget, DataViewWidgetProps } from '../../core/widget/types.js';
export declare const toolsWidgetPresets: {
    filter: import("../../core/index.js").UniComponent<unknown, {}>;
    search: import("../../core/index.js").UniComponent<unknown, {}>;
    viewOptions: import("../../core/index.js").UniComponent<unknown, {}>;
    tableAddRow: import("../../core/index.js").UniComponent<unknown, {}>;
};
export declare const createWidgetTools: (toolsMap: Record<string, DataViewWidget[]>) => import("../../core/index.js").UniComponent<DataViewWidgetProps, {}>;
//# sourceMappingURL=index.d.ts.map