import type { Command } from '@lumensuite/block-std';
export declare const insertEmbedLinkedDocCommand: Command<never, 'insertedLinkType', {
    docId: string;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            insertEmbedLinkedDoc: typeof insertEmbedLinkedDocCommand;
        }
    }
}
//# sourceMappingURL=insert-embed-linked-doc.d.ts.map