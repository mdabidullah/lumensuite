import type { ColumnMeta } from '@lumensuite/data-view';
export * from './converts.js';
export declare const databaseBlockColumns: {
    checkboxColumnConfig: ColumnMeta<"checkbox", Record<string, never>, boolean>;
    dateColumnConfig: ColumnMeta<"date", Record<string, never>, number>;
    imageColumnConfig: ColumnMeta<"image", Record<string, never>, string>;
    multiSelectColumnConfig: ColumnMeta<"multi-select", import("@lumensuite/data-view").SelectColumnData, string[]>;
    numberColumnConfig: ColumnMeta<"number", import("@lumensuite/data-view/column-presets").NumberColumnDataType, number>;
    progressColumnConfig: ColumnMeta<"progress", Record<string, never>, number>;
    selectColumnConfig: ColumnMeta<"select", import("@lumensuite/data-view").SelectColumnData, string>;
    linkColumnConfig: ColumnMeta<"link", Record<string, never>, string>;
    richTextColumnConfig: ColumnMeta<"rich-text", Record<string, never>, import("./utils.js").RichTextCellType>;
};
export declare const databaseBlockColumnList: (ColumnMeta<"checkbox", Record<string, never>, boolean> | ColumnMeta<"date", Record<string, never>, number> | ColumnMeta<"image", Record<string, never>, string> | ColumnMeta<"multi-select", import("@lumensuite/data-view").SelectColumnData, string[]> | ColumnMeta<"number", import("@lumensuite/data-view/column-presets").NumberColumnDataType, number> | ColumnMeta<"progress", Record<string, never>, number> | ColumnMeta<"select", import("@lumensuite/data-view").SelectColumnData, string> | ColumnMeta<"link", Record<string, never>, string> | ColumnMeta<"rich-text", Record<string, never>, import("./utils.js").RichTextCellType>)[];
export declare const databaseBlockHiddenColumns: (ColumnMeta<"image", Record<string, never>, string> | ColumnMeta<"title", Record<string, never>, import("@lumensuite/store").Text>)[];
export declare const databaseBlockAllColumnMap: {
    [k: string]: ColumnMeta;
};
//# sourceMappingURL=index.d.ts.map