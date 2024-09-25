import type { ColumnMeta } from '@lumensuite/data-view';
export declare const queryBlockColumns: (ColumnMeta<"checkbox", Record<string, never>, boolean> | ColumnMeta<"date", Record<string, never>, number> | ColumnMeta<"multi-select", import("@lumensuite/data-view").SelectColumnData, string[]> | ColumnMeta<"number", import("@lumensuite/data-view/column-presets").NumberColumnDataType, number> | ColumnMeta<"progress", Record<string, never>, number> | ColumnMeta<"select", import("@lumensuite/data-view").SelectColumnData, string>)[];
export declare const queryBlockHiddenColumns: ColumnMeta<"rich-text", Record<string, never>, import("../../database-block/columns/utils.js").RichTextCellType>[];
export declare const queryBlockAllColumnMap: {
    [k: string]: ColumnMeta;
};
//# sourceMappingURL=index.d.ts.map