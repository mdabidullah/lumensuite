import { ShadowlessElement } from '@blocksuite/block-std';
import { type PropertyValues } from 'lit';
import type { GroupData } from '../../core/common/group-by/helper.js';
import type { DataViewRenderer } from '../../core/data-view.js';
import type { DataViewTable } from './table-view.js';
import type { TableSingleView } from './table-view-manager.js';
import './stats/column-stats-bar.js';
import './stats/column-stats-column.js';
declare const TableGroup_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TableGroup extends TableGroup_base {
    static styles: import("lit").CSSResult;
    private clickAddRow;
    private clickAddRowInStart;
    private clickGroupOptions;
    private renderGroupHeader;
    get rows(): string[];
    private renderRows;
    render(): import("lit").TemplateResult<1>;
    protected updated(_changedProperties: PropertyValues): void;
    accessor dataViewEle: DataViewRenderer;
    accessor group: GroupData | undefined;
    accessor view: TableSingleView;
    accessor viewEle: DataViewTable;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-table-group': TableGroup;
    }
}
export {};
//# sourceMappingURL=group.d.ts.map