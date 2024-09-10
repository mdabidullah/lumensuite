import type { Command } from '@blocksuite/block-std';
export declare const insertLinkByQuickSearchCommand: Command<never, 'insertedLinkType', {
    userInput?: string;
    skipSelection?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            insertedLinkType?: Promise<{
                flavour?: string;
                isNewDoc?: boolean;
            } | null>;
        }
        interface Commands {
            insertLinkByQuickSearch: typeof insertLinkByQuickSearchCommand;
        }
    }
}
//# sourceMappingURL=insert-link-by-quick-search.d.ts.map