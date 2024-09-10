import type { KanbanSingleView } from './kanban-view-manager.js';
import type { KanbanViewSelectionWithType } from './types.js';
import '../../core/common/group-by/define.js';
import { DataViewBase } from '../../core/view/data-view-base.js';
import { KanbanClipboardController } from './controller/clipboard.js';
import { KanbanHotkeysController } from './controller/hotkeys.js';
import { KanbanSelectionController } from './controller/selection.js';
import './header.js';
export declare class DataViewKanban extends DataViewBase<KanbanSingleView, KanbanViewSelectionWithType> {
    static styles: import("lit").CSSResult;
    private dragController;
    clipboardController: KanbanClipboardController;
    hotkeysController: KanbanHotkeysController;
    onWheel: (event: WheelEvent) => void;
    renderAddGroup: () => import("lit").TemplateResult | undefined;
    selectionController: KanbanSelectionController;
    get groupManager(): import("../../core/common/group-by/helper.js").GroupManager;
    firstUpdated(): void;
    focusFirstCell(): void;
    getSelection(): KanbanViewSelectionWithType | undefined;
    hideIndicator(): void;
    moveTo(id: string, evt: MouseEvent): void;
    render(): import("lit").TemplateResult;
    showIndicator(evt: MouseEvent): boolean;
    accessor groups: HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban': DataViewKanban;
    }
}
//# sourceMappingURL=kanban-view.d.ts.map