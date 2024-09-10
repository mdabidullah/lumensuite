import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
export interface DateCell {
    date: Date;
    label: string;
    isToday: boolean;
    notCurrentMonth: boolean;
    selected?: boolean;
    tabIndex?: number;
}
declare const DatePicker_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
/**
 * Date picker
 */
export declare class DatePicker extends DatePicker_base {
    static styles: import("lit").CSSResult;
    /** current active month */
    private _cursor;
    private _maxYear;
    private _minYear;
    get _cardStyle(): {
        '--cell-size': string;
        '--gap-h': string;
        '--gap-v': string;
        'min-width': string;
        'min-height': string;
        padding: string;
    };
    get cardHeight(): number;
    get cardWidth(): number;
    get date(): number;
    get day(): number;
    get dayLabel(): string;
    get minHeight(): number;
    get month(): number;
    get monthLabel(): string;
    get year(): number;
    get yearLabel(): number;
    /** Cell */
    private _cellRenderer;
    private _dateContent;
    /** Week header */
    private _dayHeaderRenderer;
    private _getMatrix;
    private _getYearMatrix;
    private _modeDecade;
    private _monthContent;
    private _moveMonth;
    /** Actions */
    private _navAction;
    private _onChange;
    private _switchMode;
    private _yearContent;
    closeMonthSelector(): void;
    closeYearSelector(): void;
    connectedCallback(): void;
    firstUpdated(): void;
    /**
     * Focus on date-cell
     */
    focusDateCell(): void;
    focusMonthCell(): void;
    focusYearCell(): void;
    /**
     * check if date-cell is focused
     * @returns
     */
    isDateCellFocused(): boolean;
    isMonthCellFocused(): boolean;
    isYearCellFocused(): boolean;
    openMonthSelector(): void;
    openYearSelector(): void;
    render(): TemplateResult<1>;
    toggleMonthSelector(): void;
    toggleYearSelector(): void;
    updated(_changedProperties: PropertyValues): void;
    /** date matrix */
    private accessor _matrix;
    private accessor _mode;
    /** web-accessibility for month select */
    private accessor _monthCursor;
    private accessor _monthPickYearCursor;
    private accessor _yearCursor;
    private accessor _yearMatrix;
    /** horizontal gap between cells in px */
    accessor gapH: number;
    /** vertical gap between cells in px */
    accessor gapV: number;
    accessor onChange: ((value: Date) => void) | undefined;
    accessor onEscape: ((value: Date) => void) | undefined;
    /** card padding in px */
    accessor padding: number;
    /** cell size in px */
    accessor size: number;
    /** Checked date timestamp */
    accessor value: number | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'date-picker': DatePicker;
    }
}
export {};
//# sourceMappingURL=date-picker.d.ts.map