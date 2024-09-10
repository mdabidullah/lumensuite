import type { Text } from '@blocksuite/store';
export declare const titleColumnType: {
    type: "title";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: import("@blocksuite/data-view").ColumnConfig<ColumnData, CellData>) => import("@blocksuite/data-view").ColumnModel<"title", ColumnData, CellData>;
};
export declare const titlePureColumnConfig: import("@blocksuite/data-view").ColumnModel<"title", Record<string, never>, Text>;
//# sourceMappingURL=define.d.ts.map