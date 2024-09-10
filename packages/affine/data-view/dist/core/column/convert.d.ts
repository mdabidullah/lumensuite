import type { ColumnModel } from './column-config.js';
import type { GetCellDataFromConfig, GetColumnDataFromConfig } from './types.js';
export type ConvertFunction<From extends ColumnModel = ColumnModel, To extends ColumnModel = ColumnModel> = (column: GetColumnDataFromConfig<From['config']>, cells: (GetCellDataFromConfig<From['config']> | undefined)[]) => {
    column: GetColumnDataFromConfig<To['config']>;
    cells: (GetCellDataFromConfig<To['config']> | undefined)[];
};
export declare const createColumnConvert: <From extends ColumnModel<any, any, any>, To extends ColumnModel<any, any, any>>(from: From, to: To, convert: ConvertFunction<From, To>) => {
    from: any;
    to: any;
    convert: ConvertFunction<From, To>;
};
//# sourceMappingURL=convert.d.ts.map