import { type ReadonlySignal } from '@lit-labs/preact-signals';
import type { Column } from './column.js';
import type { Row } from './row.js';
import type { SingleView } from './single-view.js';
export interface Cell<Value = unknown, Data extends Record<string, unknown> = Record<string, unknown>> {
    view: SingleView;
    columnId: string;
    column: Column<Value, Data>;
    rowId: string;
    row: Row;
    isEmpty$: ReadonlySignal<boolean>;
    value$: ReadonlySignal<Value | undefined>;
    stringValue$: ReadonlySignal<string>;
    jsonValue$: ReadonlySignal<unknown>;
    setValue(value: Value | undefined): void;
    getExtra(): unknown;
}
export declare class CellBase<Value = unknown, Data extends Record<string, unknown> = Record<string, unknown>> implements Cell<Value, Data> {
    view: SingleView;
    columnId: string;
    rowId: string;
    column$: ReadonlySignal<Column<Value, Data>>;
    isEmpty$: ReadonlySignal<boolean>;
    jsonValue$: ReadonlySignal<unknown>;
    meta$: ReadonlySignal<import("../index.js").ColumnMeta>;
    stringValue$: ReadonlySignal<string>;
    value$: ReadonlySignal<Value>;
    get column(): Column<Value, Data>;
    get row(): Row;
    constructor(view: SingleView, columnId: string, rowId: string);
    getExtra(): unknown;
    setValue(value: unknown | undefined): void;
}
//# sourceMappingURL=cell.d.ts.map