import type { BlockModel, Doc } from '@lumensuite/store';
export declare function matchFlavours<Key extends (keyof LumenSuite.BlockModels)[]>(model: BlockModel | null, expected: Key): model is LumenSuite.BlockModels[Key[number]];
export declare function isInsideBlockByFlavour(doc: Doc, block: BlockModel | string, flavour: string): boolean;
//# sourceMappingURL=checker.d.ts.map