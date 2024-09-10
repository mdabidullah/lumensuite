import type { Command } from '@blocksuite/block-std';
export declare const insertEmbedLinkedDocCommand: Command<never, 'insertedLinkType', {
    docId: string;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            insertEmbedLinkedDoc: typeof insertEmbedLinkedDocCommand;
        }
    }
}
//# sourceMappingURL=insert-embed-linked-doc.d.ts.map