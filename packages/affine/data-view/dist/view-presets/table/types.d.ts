export type ColumnType = string;
export interface Column<Data extends Record<string, unknown> = Record<string, unknown>> {
    id: string;
    type: ColumnType;
    name: string;
    data: Data;
}
export type StatCalcOpType = string | undefined;
export declare const getTableContainer: (ele: HTMLElement) => HTMLElement;
type WithTableViewType<T> = T extends unknown ? {
    viewId: string;
    type: 'table';
} & T : never;
export type RowWithGroup = {
    id: string;
    groupKey?: string;
};
export declare const RowWithGroup: {
    equal(a?: RowWithGroup, b?: RowWithGroup): boolean;
};
export type TableRowSelection = {
    selectionType: 'row';
    rows: RowWithGroup[];
};
export declare const TableRowSelection: {
    rows: (selection?: TableViewSelection) => RowWithGroup[];
    rowsIds: (selection?: TableViewSelection) => string[];
    includes(selection: TableViewSelection | undefined, row: RowWithGroup): boolean;
    create(options: {
        rows: RowWithGroup[];
    }): TableRowSelection;
    is(selection?: TableViewSelection): selection is TableRowSelection;
};
export type TableAreaSelection = {
    selectionType: 'area';
    groupKey?: string;
    rowsSelection: MultiSelection;
    columnsSelection: MultiSelection;
    focus: CellFocus;
    isEditing: boolean;
};
export declare const TableAreaSelection: {
    create: (options: {
        groupKey?: string;
        focus: CellFocus;
        rowsSelection?: MultiSelection;
        columnsSelection?: MultiSelection;
        isEditing: boolean;
    }) => TableAreaSelection;
    isFocus(selection: TableAreaSelection): boolean;
};
export type CellFocus = {
    rowIndex: number;
    columnIndex: number;
};
export type MultiSelection = {
    start: number;
    end: number;
};
export type TableViewSelection = TableAreaSelection | TableRowSelection;
export type TableViewSelectionWithType = WithTableViewType<TableAreaSelection | TableRowSelection>;
export {};
//# sourceMappingURL=types.d.ts.map