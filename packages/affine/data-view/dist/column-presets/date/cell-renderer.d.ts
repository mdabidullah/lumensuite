import { BaseCellRenderer } from '../../core/column/index.js';
export declare class DateCell extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1> | "";
}
export declare class DateCellEditing extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    private _prevPortalAbortController;
    private openDatePicker;
    private updateValue;
    get dateString(): string;
    firstUpdated(): void;
    onExitEditMode(): void;
    render(): import("lit").TemplateResult<1>;
    accessor tempValue: Date | undefined;
}
export declare const dateColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"date", Record<string, never>, number>;
//# sourceMappingURL=cell-renderer.d.ts.map