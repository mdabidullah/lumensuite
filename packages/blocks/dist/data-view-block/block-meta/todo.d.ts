import { type ListBlockModel } from '@lumensuite/affine-model';
export declare const todoMeta: {
    addProperty: <Value>(property: {
        name: string;
        key: string;
        columnMeta: import("@lumensuite/data-view").ColumnMeta<string, {}, Value>;
        getColumnData?: ((block: ListBlockModel) => {}) | undefined;
        setColumnData?: ((block: ListBlockModel, data: {}) => void) | undefined;
        get: (block: ListBlockModel) => Value;
        set?: ((block: ListBlockModel, value: Value) => void) | undefined;
        updated: (block: ListBlockModel, callback: () => void) => import("@lumensuite/global/utils").Disposable;
    }) => void;
    selector: (block: import("@lumensuite/store").Block) => boolean;
    properties: {
        name: string;
        key: string;
        columnMeta: import("@lumensuite/data-view").ColumnMeta<string, {}, unknown>;
        getColumnData?: ((block: import("@lumensuite/store").BlockModel<object, object & {}>) => {}) | undefined;
        setColumnData?: ((block: import("@lumensuite/store").BlockModel<object, object & {}>, data: {}) => void) | undefined;
        get: (block: import("@lumensuite/store").BlockModel<object, object & {}>) => unknown;
        set?: ((block: import("@lumensuite/store").BlockModel<object, object & {}>, value: unknown) => void) | undefined;
        updated: (block: import("@lumensuite/store").BlockModel<object, object & {}>, callback: () => void) => import("@lumensuite/global/utils").Disposable;
    }[];
};
//# sourceMappingURL=todo.d.ts.map