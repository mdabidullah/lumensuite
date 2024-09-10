export declare const presetColumnConverts: ({
    from: any;
    to: any;
    convert: import("../core/index.js").ConvertFunction<import("../core/index.js").ColumnModel<"multi-select", import("../core/index.js").SelectColumnData, string[]>, import("../core/index.js").ColumnModel<"select", import("../core/index.js").SelectColumnData, string>>;
} | {
    from: any;
    to: any;
    convert: import("../core/index.js").ConvertFunction<import("../core/index.js").ColumnModel<"number", import("./index.js").NumberColumnDataType, number>, import("../core/index.js").ColumnModel<"progress", Record<string, never>, number>>;
} | {
    from: any;
    to: any;
    convert: import("../core/index.js").ConvertFunction<import("../core/index.js").ColumnModel<"progress", Record<string, never>, number>, import("../core/index.js").ColumnModel<"number", import("./index.js").NumberColumnDataType, number>>;
} | {
    from: any;
    to: any;
    convert: import("../core/index.js").ConvertFunction<import("../core/index.js").ColumnModel<"select", import("../core/index.js").SelectColumnData, string>, import("../core/index.js").ColumnModel<"multi-select", import("../core/index.js").SelectColumnData, string[]>>;
})[];
//# sourceMappingURL=converts.d.ts.map