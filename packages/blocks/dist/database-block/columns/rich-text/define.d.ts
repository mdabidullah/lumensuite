import { type RichTextCellType } from '../utils.js';
export declare const richTextColumnType: {
    type: "rich-text";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: import("@blocksuite/data-view").ColumnConfig<ColumnData, CellData>) => import("@blocksuite/data-view").ColumnModel<"rich-text", ColumnData, CellData>;
};
export declare const richTextColumnModelConfig: import("@blocksuite/data-view").ColumnModel<"rich-text", Record<string, never>, RichTextCellType>;
//# sourceMappingURL=define.d.ts.map