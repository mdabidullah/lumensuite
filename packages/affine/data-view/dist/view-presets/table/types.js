import { assertExists } from '@blocksuite/global/utils';
export const getTableContainer = (ele) => {
    const element = ele.closest('.affine-database-table-container');
    assertExists(element);
    return element;
};
export const RowWithGroup = {
    equal(a, b) {
        if (a == null || b == null) {
            return false;
        }
        return a.id === b.id && a.groupKey === b.groupKey;
    },
};
export const TableRowSelection = {
    rows: (selection) => {
        if (selection?.selectionType === 'row') {
            return selection.rows;
        }
        return [];
    },
    rowsIds: (selection) => {
        return TableRowSelection.rows(selection).map(v => v.id);
    },
    includes(selection, row) {
        if (!selection) {
            return false;
        }
        return TableRowSelection.rows(selection).some(v => RowWithGroup.equal(v, row));
    },
    create(options) {
        return {
            selectionType: 'row',
            rows: options.rows,
        };
    },
    is(selection) {
        return selection?.selectionType === 'row';
    },
};
export const TableAreaSelection = {
    create: (options) => {
        return {
            ...options,
            selectionType: 'area',
            rowsSelection: options.rowsSelection ?? {
                start: options.focus.rowIndex,
                end: options.focus.rowIndex,
            },
            columnsSelection: options.columnsSelection ?? {
                start: options.focus.columnIndex,
                end: options.focus.columnIndex,
            },
        };
    },
    isFocus(selection) {
        return (selection.focus.rowIndex === selection.rowsSelection.start &&
            selection.focus.rowIndex === selection.rowsSelection.end &&
            selection.focus.columnIndex === selection.columnsSelection.start &&
            selection.focus.columnIndex === selection.columnsSelection.end);
    },
};
//# sourceMappingURL=types.js.map