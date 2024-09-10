import type { SelectColumnData } from '../../core/column/types.js';
export declare const multiSelectColumnType: {
    type: "multi-select";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: import("../../core/column/types.js").ColumnConfig<ColumnData, CellData>) => import("../../core/column/column-config.js").ColumnModel<"multi-select", ColumnData, CellData>;
};
export declare const multiSelectColumnModelConfig: import("../../core/column/column-config.js").ColumnModel<"multi-select", SelectColumnData, string[]>;
//# sourceMappingURL=define.d.ts.map