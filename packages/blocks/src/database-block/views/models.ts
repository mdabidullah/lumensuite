import type { ViewMeta } from '@lumensuite/data-view';

import { viewPresets } from '@lumensuite/data-view/view-presets';

export const databaseBlockViews: ViewMeta[] = [
  viewPresets.tableViewConfig,
  viewPresets.kanbanViewConfig,
];

export const databaseBlockViewMap = Object.fromEntries(
  databaseBlockViews.map(view => [view.type, view])
);
