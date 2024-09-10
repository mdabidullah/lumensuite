import { type ReadonlySignal } from '@lit-labs/preact-signals';
import type { SingleView } from './single-view.js';
import { type Cell, CellBase } from './cell.js';
export interface Row {
    cells$: ReadonlySignal<Cell[]>;
    rowId: string;
}
export declare class RowBase implements Row {
    readonly singleView: SingleView;
    readonly rowId: string;
    cells$: ReadonlySignal<CellBase<unknown, Record<string, unknown>>[]>;
    constructor(singleView: SingleView, rowId: string);
}
//# sourceMappingURL=row.d.ts.map