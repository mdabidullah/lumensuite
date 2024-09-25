import type { ColumnMeta } from '@lumensuite/data-view';
import type { Disposable } from '@lumensuite/global/utils';
import type { Block, BlockModel } from '@lumensuite/store';
type PropertyMeta<T extends BlockModel = BlockModel, Value = unknown, ColumnData extends NonNullable<unknown> = NonNullable<unknown>> = {
    name: string;
    key: string;
    columnMeta: ColumnMeta<string, ColumnData, Value>;
    getColumnData?: (block: T) => ColumnData;
    setColumnData?: (block: T, data: ColumnData) => void;
    get: (block: T) => Value;
    set?: (block: T, value: Value) => void;
    updated: (block: T, callback: () => void) => Disposable;
};
export type BlockMeta<T extends BlockModel = BlockModel> = {
    selector: (block: Block) => boolean;
    properties: PropertyMeta<T>[];
};
export declare const createBlockMeta: <T extends BlockModel>(options: Omit<BlockMeta<T>, "properties">) => {
    addProperty: <Value>(property: PropertyMeta<T, Value>) => void;
    selector: (block: Block) => boolean;
    properties: PropertyMeta<BlockModel<object, object & {}>, unknown, {}>[];
};
export {};
//# sourceMappingURL=base.d.ts.map