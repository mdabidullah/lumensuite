import { toast } from '@lumensuite/affine-components/toast';
import { TableAreaSelection, TableRowSelection, } from '../types.js';
const BLOCKSUITE_DATABASE_TABLE = 'lumensuite/database/table';
const TEXT = 'text/plain';
export class TableClipboardController {
    get readonly() {
        return this.host.view.readonly$.value;
    }
    get std() {
        return this.host.std;
    }
    constructor(host) {
        this.host = host;
        this._onCopy = (tableSelection, isCut = false) => {
            const table = this.host;
            const area = getSelectedArea(tableSelection, table);
            if (!area) {
                return;
            }
            const stringResult = area
                .map(row => row.cells.map(cell => cell.stringValue$.value).join('\t'))
                .join('\n');
            const jsonResult = area.map(row => row.cells.map(cell => cell.stringValue$.value));
            if (isCut) {
                const deleteRows = [];
                for (const row of area) {
                    if (row.row) {
                        deleteRows.push(row.row.rowId);
                    }
                    else {
                        for (const cell of row.cells) {
                            cell.setValue(undefined);
                        }
                    }
                }
                if (deleteRows.length) {
                    table.view.rowDelete(deleteRows);
                }
            }
            this.std.clipboard
                .writeToClipboard(items => {
                return {
                    ...items,
                    [TEXT]: stringResult,
                    [BLOCKSUITE_DATABASE_TABLE]: JSON.stringify(jsonResult),
                };
            })
                .then(() => {
                if (area[0]?.row) {
                    toast(this.host.std.host, `${area.length} row${area.length > 1 ? 's' : ''} copied to clipboard`);
                }
                else {
                    const count = area.flatMap(row => row.cells).length;
                    toast(this.host.std.host, `${count} cell${count > 1 ? 's' : ''} copied to clipboard`);
                }
            })
                .catch(console.error);
            return true;
        };
        this._onCut = (tableSelection) => {
            this._onCopy(tableSelection, true);
        };
        this._onPaste = async (_context) => {
            const event = _context.get('clipboardState').raw;
            event.stopPropagation();
            const view = this.host;
            const clipboardData = event.clipboardData;
            if (!clipboardData)
                return;
            const tableSelection = this.host.selectionController.selection;
            if (TableRowSelection.is(tableSelection)) {
                return;
            }
            if (tableSelection) {
                const json = await this.std.clipboard.readFromClipboard(clipboardData);
                const dataString = json[BLOCKSUITE_DATABASE_TABLE];
                if (!dataString)
                    return;
                const jsonAreaData = JSON.parse(dataString);
                pasteToCells(view, jsonAreaData, tableSelection);
            }
            return true;
        };
        host.addController(this);
    }
    copy() {
        const tableSelection = this.host.selectionController.selection;
        if (!tableSelection) {
            return;
        }
        this._onCopy(tableSelection);
    }
    cut() {
        const tableSelection = this.host.selectionController.selection;
        if (!tableSelection) {
            return;
        }
        this._onCopy(tableSelection, true);
    }
    hostConnected() {
        this.host.disposables.add(this.host.handleEvent('copy', _ctx => {
            const tableSelection = this.host.selectionController.selection;
            if (!tableSelection)
                return false;
            this._onCopy(tableSelection);
            return true;
        }));
        this.host.disposables.add(this.host.handleEvent('cut', _ctx => {
            const tableSelection = this.host.selectionController.selection;
            if (!tableSelection)
                return false;
            this._onCut(tableSelection);
            return true;
        }));
        this.host.disposables.add(this.host.handleEvent('paste', ctx => {
            if (this.readonly)
                return false;
            this._onPaste(ctx).catch(console.error);
            return true;
        }));
    }
}
function getSelectedArea(selection, table) {
    const view = table.view;
    if (TableRowSelection.is(selection)) {
        const rows = TableRowSelection.rows(selection)
            .map(row => {
            const y = table.selectionController
                .getRow(row.groupKey, row.id)
                ?.getBoundingClientRect().y ?? 0;
            return {
                y,
                row,
            };
        })
            .sort((a, b) => a.y - b.y)
            .map(v => v.row);
        return rows.map(r => {
            const row = view.rowGet(r.id);
            return {
                row,
                cells: row.cells$.value,
            };
        });
    }
    const { rowsSelection, columnsSelection, groupKey } = selection;
    const data = [];
    const rows = groupKey
        ? view.groupManager.groupDataMap$.value?.[groupKey].rows
        : view.rows$.value;
    const columns = view.columns$.value;
    if (!rows) {
        return;
    }
    for (let i = rowsSelection.start; i <= rowsSelection.end; i++) {
        const row = {
            cells: [],
        };
        const rowId = rows[i];
        for (let j = columnsSelection.start; j <= columnsSelection.end; j++) {
            const columnId = columns[j];
            const cell = view.cellGet(rowId, columnId);
            row.cells.push(cell);
        }
        data.push(row);
    }
    return data;
}
function getTargetRangeFromSelection(selection, data) {
    const { rowsSelection, columnsSelection, focus } = selection;
    return TableAreaSelection.isFocus(selection)
        ? {
            row: {
                start: focus.rowIndex,
                length: data.length,
            },
            column: {
                start: focus.columnIndex,
                length: data[0].length,
            },
        }
        : {
            row: {
                start: rowsSelection.start,
                length: rowsSelection.end - rowsSelection.start + 1,
            },
            column: {
                start: columnsSelection.start,
                length: columnsSelection.end - columnsSelection.start + 1,
            },
        };
}
function pasteToCells(table, rows, selection) {
    const srcRowLength = rows.length;
    const srcColumnLength = rows[0].length;
    const targetRange = getTargetRangeFromSelection(selection, rows);
    for (let i = 0; i < targetRange.row.length; i++) {
        for (let j = 0; j < targetRange.column.length; j++) {
            const rowIndex = targetRange.row.start + i;
            const columnIndex = targetRange.column.start + j;
            const srcRowIndex = i % srcRowLength;
            const srcColumnIndex = j % srcColumnLength;
            const dataString = rows[srcRowIndex][srcColumnIndex];
            const targetContainer = table.selectionController.getCellContainer(selection.groupKey, rowIndex, columnIndex);
            const rowId = targetContainer?.dataset.rowId;
            const columnId = targetContainer?.dataset.columnId;
            if (rowId && columnId) {
                targetContainer?.column.setValueFromString(rowId, dataString);
            }
        }
    }
}
//# sourceMappingURL=clipboard.js.map