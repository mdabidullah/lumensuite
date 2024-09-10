export * from './converts.js';
export * from './number/types.js';
export declare const columnPresets: {
    checkboxColumnConfig: import("../index.js").ColumnMeta<"checkbox", Record<string, never>, boolean>;
    dateColumnConfig: import("../index.js").ColumnMeta<"date", Record<string, never>, number>;
    imageColumnConfig: import("../index.js").ColumnMeta<"image", Record<string, never>, string>;
    multiSelectColumnConfig: import("../index.js").ColumnMeta<"multi-select", import("../index.js").SelectColumnData, string[]>;
    numberColumnConfig: import("../index.js").ColumnMeta<"number", import("./number/types.js").NumberColumnDataType, number>;
    progressColumnConfig: import("../index.js").ColumnMeta<"progress", Record<string, never>, number>;
    selectColumnConfig: import("../index.js").ColumnMeta<"select", import("../index.js").SelectColumnData, string>;
    textColumnConfig: import("../index.js").ColumnMeta<"text", Record<string, never>, string>;
};
//# sourceMappingURL=index.d.ts.map