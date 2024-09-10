import type { Command } from '@blocksuite/block-std';
export declare const insertBookmarkCommand: Command<never, 'insertedLinkType', {
    url: string;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            insertBookmark: typeof insertBookmarkCommand;
        }
    }
}
//# sourceMappingURL=insert-bookmark.d.ts.map