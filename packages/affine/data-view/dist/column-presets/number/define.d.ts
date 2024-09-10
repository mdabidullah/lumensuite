import type { NumberColumnDataType } from './types.js';
export declare const numberColumnType: {
    type: "number";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: import("../../index.js").ColumnConfig<ColumnData, CellData>) => import("../../core/column/column-config.js").ColumnModel<"number", ColumnData, CellData>;
};
export declare const numberColumnModelConfig: import("../../core/column/column-config.js").ColumnModel<"number", NumberColumnDataType, number>;
//# sourceMappingURL=define.d.ts.map