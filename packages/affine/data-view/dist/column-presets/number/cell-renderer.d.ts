import type { NumberColumnDataType } from './types.js';
import { BaseCellRenderer } from '../../core/column/index.js';
export declare class NumberCell extends BaseCellRenderer<number, NumberColumnDataType> {
    static styles: import("lit").CSSResult;
    private _getFormattedString;
    render(): import("lit").TemplateResult<1>;
}
export declare class NumberCellEditing extends BaseCellRenderer<number, NumberColumnDataType> {
    static styles: import("lit").CSSResult;
    private _getFormattedString;
    private _keydown;
    private _setValue;
    focusEnd: () => void;
    _blur(): void;
    _focus(): void;
    firstUpdated(): void;
    onExitEditMode(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _inputEle;
}
export declare const numberColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"number", NumberColumnDataType, number>;
//# sourceMappingURL=cell-renderer.d.ts.map