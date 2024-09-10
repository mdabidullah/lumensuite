import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewCellLifeCycle } from '../../core/column/index.js';
import type { Column } from '../../core/view-manager/column.js';
import type { KanbanSingleView } from './kanban-view-manager.js';
import type { KanbanViewSelection } from './types.js';
declare const KanbanCell_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanCell extends KanbanCell_base {
    static styles: import("lit").CSSResult;
    private _cell;
    selectCurrentCell: (editing: boolean) => void;
    get cell(): DataViewCellLifeCycle | undefined;
    get selection(): import("./controller/selection.js").KanbanSelectionController | undefined;
    connectedCallback(): void;
    isSelected(selection: KanbanViewSelection): boolean | undefined;
    render(): import("lit").TemplateResult | undefined;
    renderIcon(): import("lit").TemplateResult | undefined;
    accessor cardId: string;
    accessor column: Column;
    accessor contentOnly: boolean;
    accessor editing: boolean;
    accessor groupKey: string;
    accessor isFocus: boolean;
    accessor view: KanbanSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-cell': KanbanCell;
    }
}
export {};
//# sourceMappingURL=cell.d.ts.map