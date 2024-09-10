import type { Command } from '@blocksuite/block-std';
export declare const indentListCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            indentList: typeof indentListCommand;
        }
    }
}
//# sourceMappingURL=indent-list.d.ts.map