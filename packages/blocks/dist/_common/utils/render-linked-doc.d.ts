import type { DocMode, NoteBlockModel } from '@lumensuite/affine-model';
import { type EditorHost } from '@lumensuite/block-std';
import { type BlockModel, type Doc } from '@lumensuite/store';
import type { EmbedLinkedDocBlockComponent } from '../../embed-linked-doc-block/embed-linked-doc-block.js';
import type { EmbedSyncedDocCard } from '../../embed-synced-doc-block/components/embed-synced-doc-card.js';
export declare const embedNoteContentStyles: import("lit").CSSResult;
export declare function promptDocTitle(host: EditorHost, autofill?: string): Promise<string | null> | Promise<undefined>;
export declare function getTitleFromSelectedModels(selectedModels: BlockModel[]): string | undefined;
export declare function notifyDocCreated(host: EditorHost, doc: Doc): void;
export declare function renderLinkedDocInCard(card: EmbedLinkedDocBlockComponent | EmbedSyncedDocCard): void;
export declare function getNotesFromDoc(doc: Doc): BlockModel<object, object & {}>[] | null;
export declare function isEmptyDoc(doc: Doc | null, mode: DocMode): boolean;
export declare function isEmptyNote(note: BlockModel): boolean;
export declare function addBlocksToDoc(targetDoc: Doc, model: BlockModel, parentId: string): void;
export declare function convertSelectedBlocksToLinkedDoc(doc: Doc, selectedModels: BlockModel[], docTitle?: string): Doc;
export declare function createLinkedDocFromBlocks(doc: Doc, blocks: BlockModel[], docTitle?: string): Doc;
export declare function createLinkedDocFromNote(doc: Doc, note: NoteBlockModel, docTitle?: string): Doc;
export declare function createLinkedDocFromEdgelessElements(host: EditorHost, elements: LumenSuite.EdgelessModel[], docTitle?: string): Doc;
//# sourceMappingURL=render-linked-doc.d.ts.map