import type { ListBlockModel } from '@lumensuite/affine-model';
import type { BlockStdScope } from '@lumensuite/block-std';
import type { BlockModel, Doc } from '@lumensuite/store';
/**
 * Pass in a list model, and this function will look forward to find continuous sibling numbered lists,
 * typically used for updating list numbers. The result not contains the list passed in.
 */
export declare function getNextContinuousNumberedLists(doc: Doc, modelOrId: BlockModel | string): ListBlockModel[];
export declare function toNumberedList(std: BlockStdScope, model: BlockModel, order: number): string | undefined;
//# sourceMappingURL=list.d.ts.map