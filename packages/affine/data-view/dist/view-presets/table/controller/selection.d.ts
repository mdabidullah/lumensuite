import type { ReactiveController } from 'lit';
import type { Ref } from 'lit/directives/ref.js';
import { ShadowlessElement } from '@lumensuite/block-std';
import type { DatabaseCellContainer } from '../cell.js';
import type { TableRow } from '../row/row.js';
import type { DataViewTable } from '../table-view.js';
import { type CellFocus, type MultiSelection, RowWithGroup, TableAreaSelection, type TableViewSelection, type TableViewSelectionWithType } from '../types.js';
import { DragToFillElement } from './drag-to-fill.js';
export declare class TableSelectionController implements ReactiveController {
    host: DataViewTable;
    private _tableViewSelection?;
    private getFocusCellContainer;
    __dragToFillElement: DragToFillElement;
    __selectionElement: SelectionElement;
    selectionStyleUpdateTask: number;
    private get areaSelectionElement();
    get dragToFillDraggable(): HTMLDivElement | undefined;
    private get focusSelectionElement();
    get selection(): TableViewSelectionWithType | undefined;
    set selection(data: TableViewSelection | undefined);
    get tableContainer(): Element | null;
    get view(): import("../table-view-manager.js").TableSingleView;
    get viewData(): import("../table-view-manager.js").TableSingleView;
    constructor(host: DataViewTable);
    private clearSelection;
    private handleDragEvent;
    private handleSelectionChange;
    private insertTo;
    private resolveDragStartTarget;
    private scrollToAreaSelection;
    private scrollToFocus;
    areaToRows(selection: TableAreaSelection): {
        id: string;
        groupKey: string | undefined;
    }[];
    cellPosition(groupKey: string | undefined): (x1: number, x2: number, y1: number, y2: number) => {
        row: MultiSelection;
        column: MultiSelection;
    };
    deleteRow(rowId: string): void;
    focusFirstCell(): void;
    focusToArea(selection: TableAreaSelection): {
        rowsSelection: MultiSelection;
        columnsSelection: MultiSelection;
        isEditing: false;
        selectionType: "area";
        groupKey?: string;
        focus: CellFocus;
    };
    focusToCell(position: 'left' | 'right' | 'up' | 'down'): void;
    getCellContainer(groupKey: string | undefined, rowIndex: number, columnIndex: number): DatabaseCellContainer | undefined;
    getGroup(groupKey: string | undefined): Element | null;
    getRect(groupKey: string | undefined, top: number, bottom: number, left: number, right: number): undefined | {
        top: number;
        left: number;
        width: number;
        height: number;
        scale: number;
    };
    getRow(groupKey: string | undefined, rowId: string): Element | null | undefined;
    getSelectionAreaBorder(position: 'left' | 'right' | 'top' | 'bottom'): Element | null | undefined;
    hostConnected(): void;
    insertRowAfter(groupKey: string | undefined, rowId: string): void;
    insertRowBefore(groupKey: string | undefined, rowId: string): void;
    isRowSelection(): boolean;
    isValidSelection(selection?: TableViewSelectionWithType): boolean;
    navigateRowSelection(direction: 'up' | 'down', append?: boolean): void;
    rows(groupKey: string | undefined): NodeListOf<TableRow> | undefined;
    rowSelectionChange({ add, remove, }: {
        add: RowWithGroup[];
        remove: RowWithGroup[];
    }): void;
    rowsToArea(rows: string[]): {
        start: number;
        end: number;
        groupKey?: string;
    } | undefined;
    selectionAreaDown(): void;
    selectionAreaLeft(): void;
    selectionAreaRight(): void;
    selectionAreaUp(): void;
    startDrag(evt: PointerEvent, cell: DatabaseCellContainer, fillValues?: boolean): void;
    toggleRow(rowId: string, groupKey?: string): void;
}
declare const SelectionElement_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
declare class SelectionElement extends SelectionElement_base {
    static styles: import("lit").CSSResult;
    focusRef: Ref<HTMLDivElement>;
    preTask: number;
    selectionRef: Ref<HTMLDivElement>;
    get selection$(): import("@preact/signals-core").ReadonlySignal<TableViewSelectionWithType | undefined>;
    clearAreaStyle(): void;
    clearFocusStyle(): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    startUpdate(selection?: TableViewSelection): void;
    updateAreaSelectionStyle(groupKey: string | undefined, rowSelection: MultiSelection, columnSelection: MultiSelection): void;
    updateFocusSelectionStyle(groupKey: string | undefined, focus: CellFocus, isEditing: boolean, showDragToFillHandle?: boolean): void;
    accessor controller: TableSelectionController;
}
export {};
//# sourceMappingURL=selection.d.ts.map