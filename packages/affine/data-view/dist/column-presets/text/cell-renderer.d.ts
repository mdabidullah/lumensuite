import { BaseCellRenderer } from '../../core/column/index.js';
export declare class TextCell extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export declare class TextCellEditing extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    private _keydown;
    private _setValue;
    focusEnd: () => void;
    firstUpdated(): void;
    onExitEditMode(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _inputEle;
}
export declare const textColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"text", Record<string, never>, string>;
//# sourceMappingURL=cell-renderer.d.ts.map