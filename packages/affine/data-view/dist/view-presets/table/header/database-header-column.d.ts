import { ShadowlessElement } from '@blocksuite/block-std';
import type { TableColumn, TableSingleView } from '../table-view-manager.js';
import './number-format-bar.js';
declare const DatabaseHeaderColumn_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseHeaderColumn extends DatabaseHeaderColumn_base {
    static styles: import("lit").CSSResult;
    private _clickColumn;
    private _clickTypeIcon;
    private _columnsOffset;
    private _contextMenu;
    private _enterWidthDragBar;
    private _leaveWidthDragBar;
    private drawWidthDragBar;
    private drawWidthDragBarTask;
    private moveColumn;
    private widthDragBar;
    editTitle: () => void;
    private get readonly();
    private popMenu;
    private widthDragStart;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
    accessor column: TableColumn;
    accessor grabStatus: 'grabStart' | 'grabEnd' | 'grabbing';
    accessor tableViewManager: TableSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-header-column': DatabaseHeaderColumn;
    }
}
export {};
//# sourceMappingURL=database-header-column.d.ts.map