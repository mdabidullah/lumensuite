import { viewPresets } from '@blocksuite/data-view/view-presets';
export const blockQueryViews = [
    viewPresets.tableViewConfig,
    viewPresets.kanbanViewConfig,
];
export const blockQueryViewMap = Object.fromEntries(blockQueryViews.map(view => [view.type, view]));
//# sourceMappingURL=index.js.map