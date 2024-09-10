import { columnPresets } from '@blocksuite/data-view/column-presets';
import { richTextColumnConfig } from '../../database-block/columns/rich-text/cell-renderer.js';
export const queryBlockColumns = [
    columnPresets.dateColumnConfig,
    columnPresets.numberColumnConfig,
    columnPresets.progressColumnConfig,
    columnPresets.selectColumnConfig,
    columnPresets.multiSelectColumnConfig,
    columnPresets.checkboxColumnConfig,
];
export const queryBlockHiddenColumns = [richTextColumnConfig];
const queryBlockAllColumns = [...queryBlockColumns, ...queryBlockHiddenColumns];
export const queryBlockAllColumnMap = Object.fromEntries(queryBlockAllColumns.map(v => [v.type, v]));
//# sourceMappingURL=index.js.map