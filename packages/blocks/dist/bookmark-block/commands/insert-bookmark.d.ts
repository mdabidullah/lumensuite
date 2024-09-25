import type { Command } from '@lumensuite/block-std';
export declare const insertBookmarkCommand: Command<never, 'insertedLinkType', {
    url: string;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            insertBookmark: typeof insertBookmarkCommand;
        }
    }
}
//# sourceMappingURL=insert-bookmark.d.ts.map