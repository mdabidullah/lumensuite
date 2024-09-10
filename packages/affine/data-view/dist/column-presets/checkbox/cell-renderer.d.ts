import { BaseCellRenderer } from '../../core/column/index.js';
export declare class CheckboxCell extends BaseCellRenderer<boolean> {
    static styles: import("lit").CSSResult;
    beforeEnterEditMode(): boolean;
    onCopy(_e: ClipboardEvent): void;
    onCut(_e: ClipboardEvent): void;
    onPaste(_e: ClipboardEvent): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _checkbox;
}
export declare const checkboxColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"checkbox", Record<string, never>, boolean>;
//# sourceMappingURL=cell-renderer.d.ts.map