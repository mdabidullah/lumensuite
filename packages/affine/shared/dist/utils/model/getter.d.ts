import type { BlockComponent, EditorHost } from '@lumensuite/block-std';
import type { BlockModel, Doc } from '@lumensuite/store';
import { type NoteBlockModel } from '@lumensuite/affine-model';
export declare function findAncestorModel(model: BlockModel, match: (m: BlockModel) => boolean): BlockModel<object, object & {}> | null;
/**
 * Get block component by its model and wait for the doc element to finish updating.
 *
 */
export declare function asyncGetBlockComponent(editorHost: EditorHost, id: string): Promise<BlockComponent | null>;
export declare function findNoteBlockModel(model: BlockModel): NoteBlockModel | null;
export declare function getLastNoteBlock(doc: Doc): NoteBlockModel | null;
//# sourceMappingURL=getter.d.ts.map