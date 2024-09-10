import type { SelectColumnData } from '../../core/column/types.js';
export declare const selectColumnType: {
    type: "select";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: import("../../core/column/types.js").ColumnConfig<ColumnData, CellData>) => import("../../core/column/column-config.js").ColumnModel<"select", ColumnData, CellData>;
};
export declare const selectColumnModelConfig: import("../../core/column/column-config.js").ColumnModel<"select", SelectColumnData, string>;
//# sourceMappingURL=define.d.ts.map