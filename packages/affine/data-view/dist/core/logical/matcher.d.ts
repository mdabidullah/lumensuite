import type { TType } from './typesystem.js';
type MatcherData<Data, Type extends TType = TType> = {
    type: Type;
    data: Data;
};
export declare class Matcher<Data, Type extends TType = TType> {
    private _match;
    private list;
    constructor(_match?: (type: Type, target: TType) => boolean);
    all(): MatcherData<Data, Type>[];
    allMatched(type: TType): MatcherData<Data>[];
    allMatchedData(type: TType): Data[];
    find(f: (data: MatcherData<Data, Type>) => boolean): MatcherData<Data, Type> | undefined;
    findData(f: (data: Data) => boolean): Data | undefined;
    isMatched(type: Type, target: TType): boolean;
    match(type: TType): Data | undefined;
    register(type: Type, data: Data): void;
}
export {};
//# sourceMappingURL=matcher.d.ts.map