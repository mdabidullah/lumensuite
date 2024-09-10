import { BaseCellRenderer } from '../../core/column/index.js';
export declare class ProgressCell extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    protected render(): import("lit").TemplateResult<1>;
}
export declare class ProgressCellEditing extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    startDrag: (event: MouseEvent) => void;
    get _value(): number;
    _onChange(value?: number): void;
    firstUpdated(): void;
    onCopy(_e: ClipboardEvent): void;
    onCut(_e: ClipboardEvent): void;
    onExitEditMode(): void;
    onPaste(_e: ClipboardEvent): void;
    protected render(): import("lit").TemplateResult<1>;
    private accessor _progressBg;
    private accessor tempValue;
}
export declare const progressColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"progress", Record<string, never>, number>;
//# sourceMappingURL=cell-renderer.d.ts.map