import { viewType } from '../../core/view/data-view.js';
import { TableSingleView } from './table-view-manager.js';
export const tableViewType = viewType('table');
export const tableViewModel = tableViewType.modelConfig({
    defaultName: 'Table View',
    dataViewManager: TableSingleView,
});
//# sourceMappingURL=define.js.map