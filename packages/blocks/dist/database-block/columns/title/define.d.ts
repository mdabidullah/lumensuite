import type { Text } from '@lumensuite/store';
export declare const titleColumnType: {
    type: "title";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: import("@lumensuite/data-view").ColumnConfig<ColumnData, CellData>) => import("@lumensuite/data-view").ColumnModel<"title", ColumnData, CellData>;
};
export declare const titlePureColumnConfig: import("@lumensuite/data-view").ColumnModel<"title", Record<string, never>, Text>;
//# sourceMappingURL=define.d.ts.map