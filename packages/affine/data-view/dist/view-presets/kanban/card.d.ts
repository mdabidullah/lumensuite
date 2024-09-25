import { ShadowlessElement } from '@lumensuite/block-std';
import type { DataViewRenderer } from '../../core/data-view.js';
import type { KanbanSingleView } from './kanban-view-manager.js';
import './cell.js';
declare const KanbanCard_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class KanbanCard extends KanbanCard_base {
    static styles: import("lit").CSSResult;
    private clickEdit;
    private clickMore;
    private contextMenu;
    private getSelection;
    private renderBody;
    private renderHeader;
    private renderIcon;
    private renderOps;
    private renderTitle;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
    accessor cardId: string;
    accessor dataViewEle: DataViewRenderer;
    accessor groupKey: string;
    accessor isFocus: boolean;
    accessor view: KanbanSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-card': KanbanCard;
    }
}
export {};
//# sourceMappingURL=card.d.ts.map