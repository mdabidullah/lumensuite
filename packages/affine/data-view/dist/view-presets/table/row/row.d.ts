import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewRenderer } from '../../../core/data-view.js';
import type { TableSingleView } from '../table-view-manager.js';
import { type TableViewSelection } from '../types.js';
import './row-select-checkbox.js';
declare const TableRow_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TableRow extends TableRow_base {
    static styles: import("lit").CSSResult;
    private _clickDragHandler;
    contextMenu: (e: MouseEvent) => void;
    setSelection: (selection?: TableViewSelection) => void;
    get groupKey(): string | undefined;
    get selectionController(): import("../controller/selection.js").TableSelectionController | undefined;
    connectedCallback(): void;
    protected render(): unknown;
    accessor dataViewEle: DataViewRenderer;
    accessor rowId: string;
    accessor rowIndex: number;
    accessor view: TableSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-table-row': TableRow;
    }
}
export {};
//# sourceMappingURL=row.d.ts.map