import { viewPresets } from '@blocksuite/data-view/view-presets';
export const databaseBlockViews = [
    viewPresets.tableViewConfig,
    viewPresets.kanbanViewConfig,
];
export const databaseBlockViewMap = Object.fromEntries(databaseBlockViews.map(view => [view.type, view]));
//# sourceMappingURL=index.js.map