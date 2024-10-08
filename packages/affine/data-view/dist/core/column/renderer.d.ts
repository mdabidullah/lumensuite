import type { BaseCellRenderer } from './base-cell.js';
import type { CellRenderer, DataViewCellComponent } from './manager.js';
import { type UniComponent } from '../utils/uni-component/index.js';
export interface Renderer<Data extends NonNullable<unknown> = NonNullable<unknown>, Value = unknown> {
    type: string;
    icon?: UniComponent;
    cellRenderer: CellRenderer<Data, Value>;
    detailCellRenderer?: CellRenderer<Data, Value>;
}
export declare const createFromBaseCellRenderer: <Value, Data extends Record<string, unknown> = Record<string, unknown>>(renderer: new () => BaseCellRenderer<Value, Data>) => DataViewCellComponent;
//# sourceMappingURL=renderer.d.ts.map