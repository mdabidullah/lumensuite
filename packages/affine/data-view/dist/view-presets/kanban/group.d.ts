import { ShadowlessElement } from '@blocksuite/block-std';
import type { GroupData } from '../../core/common/group-by/helper.js';
import type { DataViewRenderer } from '../../core/data-view.js';
import type { KanbanSingleView } from './kanban-view-manager.js';
import './card.js';
declare const KanbanGroup_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanGroup extends KanbanGroup_base {
    static styles: import("lit").CSSResult;
    private clickAddCard;
    private clickAddCardInStart;
    private clickGroupOptions;
    render(): import("lit").TemplateResult;
    accessor dataViewEle: DataViewRenderer;
    accessor group: GroupData;
    accessor view: KanbanSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-group': KanbanGroup;
    }
}
export {};
//# sourceMappingURL=group.d.ts.map