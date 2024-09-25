import type { ViewMeta } from '@lumensuite/data-view';

import { viewPresets } from '@lumensuite/data-view/view-presets';

export const blockQueryViews: ViewMeta[] = [
  viewPresets.tableViewConfig,
  viewPresets.kanbanViewConfig,
];

export const blockQueryViewMap = Object.fromEntries(
  blockQueryViews.map(view => [view.type, view])
);
