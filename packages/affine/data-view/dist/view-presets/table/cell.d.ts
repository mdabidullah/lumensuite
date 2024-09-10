import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewCellLifeCycle } from '../../core/column/index.js';
import type { SingleView } from '../../core/view-manager/single-view.js';
import type { TableColumn } from './table-view-manager.js';
import { type TableViewSelectionWithType } from './types.js';
declare const DatabaseCellContainer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseCellContainer extends DatabaseCellContainer_base {
    static styles: import("lit").CSSResult;
    private _cell;
    cell$: import("@preact/signals-core").ReadonlySignal<import("../../core/view-manager/cell.js").Cell<unknown, Record<string, unknown>>>;
    selectCurrentCell: (editing: boolean) => void;
    get cell(): DataViewCellLifeCycle | undefined;
    private get groupKey();
    private get readonly();
    private get selectionView();
    get table(): import("./table-view.js").DataViewTable;
    connectedCallback(): void;
    isSelected(selection: TableViewSelectionWithType): boolean | undefined;
    render(): import("lit").TemplateResult | undefined;
    accessor column: TableColumn;
    accessor columnId: string;
    accessor columnIndex: number;
    accessor isEditing: boolean;
    accessor rowId: string;
    accessor rowIndex: number;
    accessor view: SingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-cell-container': DatabaseCellContainer;
    }
}
export {};
//# sourceMappingURL=cell.d.ts.map