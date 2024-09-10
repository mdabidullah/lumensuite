import { type InsertToPosition } from '@blocksuite/affine-shared/utils';
import type { GroupManager } from '../../core/common/group-by/helper.js';
import type { TableSingleView } from './table-view-manager.js';
import { DataViewBase } from '../../core/view/data-view-base.js';
import './cell.js';
import { TableClipboardController } from './controller/clipboard.js';
import { TableDragController } from './controller/drag.js';
import { TableHotkeysController } from './controller/hotkeys.js';
import { TableSelectionController } from './controller/selection.js';
import './group.js';
import './header/column-header.js';
import './row/row.js';
import { type TableViewSelectionWithType } from './types.js';
export declare class DataViewTable extends DataViewBase<TableSingleView, TableViewSelectionWithType> {
    static styles: import("lit").CSSResult;
    private _addRow;
    clipboardController: TableClipboardController;
    dragController: TableDragController;
    getSelection: () => TableViewSelectionWithType | undefined;
    hotkeysController: TableHotkeysController;
    onWheel: (event: WheelEvent) => void;
    renderAddGroup: (groupHelper: GroupManager) => import("lit").TemplateResult | undefined;
    selectionController: TableSelectionController;
    private get readonly();
    private renderTable;
    addRow(position: InsertToPosition): void;
    focusFirstCell(): void;
    hideIndicator(): void;
    moveTo(id: string, evt: MouseEvent): void;
    render(): import("lit").TemplateResult;
    showIndicator(evt: MouseEvent): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-table': DataViewTable;
    }
}
//# sourceMappingURL=table-view.d.ts.map