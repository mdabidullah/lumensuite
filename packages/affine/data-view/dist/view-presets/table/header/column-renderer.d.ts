import { ShadowlessElement } from '@blocksuite/block-std';
import type { Column } from '../../../core/view-manager/column.js';
import type { TableSingleView } from '../table-view-manager.js';
declare const DataViewColumnPreview_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataViewColumnPreview extends DataViewColumnPreview_base {
    static styles: import("lit").CSSResult;
    private renderGroup;
    render(): import("lit").TemplateResult | import("lit").TemplateResult[];
    accessor column: Column;
    accessor table: HTMLElement;
    accessor tableViewManager: TableSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-column-preview': DataViewColumnPreview;
    }
}
export {};
//# sourceMappingURL=column-renderer.d.ts.map