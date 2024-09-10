import { viewType } from '../../core/view/data-view.js';
import { KanbanSingleView } from './kanban-view-manager.js';
export const kanbanViewType = viewType('kanban');
export const kanbanViewModel = kanbanViewType.modelConfig({
    defaultName: 'Kanban View',
    dataViewManager: KanbanSingleView,
});
//# sourceMappingURL=define.js.map