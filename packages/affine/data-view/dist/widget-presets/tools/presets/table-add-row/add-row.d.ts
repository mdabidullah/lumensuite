import type { InsertToPosition } from '@blocksuite/affine-shared/utils';
import { WidgetBase } from '../../../../core/widget/widget-base.js';
export declare class DataViewHeaderToolsAddRow extends WidgetBase {
    static styles: import("lit").CSSResult;
    private _onAddNewRecord;
    _dragStart: (e: MouseEvent) => void;
    addRow: (position: InsertToPosition | number) => void;
    private get readonly();
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | undefined;
    accessor showToolBar: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-add-row': DataViewHeaderToolsAddRow;
    }
}
//# sourceMappingURL=add-row.d.ts.map