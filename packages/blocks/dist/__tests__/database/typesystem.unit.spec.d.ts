export declare const tString: import("@blocksuite/data-view").DataDefine<{
    value: string;
}>;
export declare const tBoolean: import("@blocksuite/data-view").DataDefine<{
    value: boolean;
}>;
export declare const tDate: import("@blocksuite/data-view").DataDefine<{
    value: number;
}>;
export declare const tURL: import("@blocksuite/data-view").DataDefine<import("@blocksuite/data-view").DataTypeShape>;
export declare const tEmail: import("@blocksuite/data-view").DataDefine<import("@blocksuite/data-view").DataTypeShape>;
export declare const tPhone: import("@blocksuite/data-view").DataDefine<import("@blocksuite/data-view").DataTypeShape>;
type Tag = {
    id: string;
    value: string;
    color: string;
};
export declare const tTag: import("@blocksuite/data-view").DataDefine<{
    tags: Tag[];
}>;
export {};
//# sourceMappingURL=typesystem.unit.spec.d.ts.map