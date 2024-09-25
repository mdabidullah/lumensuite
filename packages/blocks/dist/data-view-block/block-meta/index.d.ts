export declare const blockMetaMap: {
    todo: {
        addProperty: <Value>(property: {
            name: string;
            key: string;
            columnMeta: import("@lumensuite/data-view").ColumnMeta<string, {}, Value>;
            getColumnData?: ((block: import("@lumensuite/affine-model").ListBlockModel) => {}) | undefined;
            setColumnData?: ((block: import("@lumensuite/affine-model").ListBlockModel, data: {}) => void) | undefined;
            get: (block: import("@lumensuite/affine-model").ListBlockModel) => Value;
            set?: ((block: import("@lumensuite/affine-model").ListBlockModel, value: Value) => void) | undefined;
            updated: (block: import("@lumensuite/affine-model").ListBlockModel, callback: () => void) => import("@lumensuite/global/utils").Disposable;
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
};
//# sourceMappingURL=index.d.ts.map