import { ShadowlessElement } from '@blocksuite/block-std';
import type { KanbanSingleView } from './kanban-view-manager.js';
import './card.js';
declare const KanbanHeader_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanHeader extends KanbanHeader_base {
    static styles: import("lit").CSSResult;
    private clickGroup;
    render(): import("lit").TemplateResult;
    accessor view: KanbanSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-header': KanbanHeader;
    }
}
export {};
//# sourceMappingURL=header.d.ts.map