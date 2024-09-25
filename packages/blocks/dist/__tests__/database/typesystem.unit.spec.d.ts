export declare const tString: import("@lumensuite/data-view").DataDefine<{
    value: string;
}>;
export declare const tBoolean: import("@lumensuite/data-view").DataDefine<{
    value: boolean;
}>;
export declare const tDate: import("@lumensuite/data-view").DataDefine<{
    value: number;
}>;
export declare const tURL: import("@lumensuite/data-view").DataDefine<import("@lumensuite/data-view").DataTypeShape>;
export declare const tEmail: import("@lumensuite/data-view").DataDefine<import("@lumensuite/data-view").DataTypeShape>;
export declare const tPhone: import("@lumensuite/data-view").DataDefine<import("@lumensuite/data-view").DataTypeShape>;
type Tag = {
    id: string;
    value: string;
    color: string;
};
export declare const tTag: import("@lumensuite/data-view").DataDefine<{
    tags: Tag[];
}>;
export {};
//# sourceMappingURL=typesystem.unit.spec.d.ts.map