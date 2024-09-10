import type { Command } from '@blocksuite/block-std';
export declare const splitListCommand: Command<never, never, {
    blockId: string;
    inlineIndex: number;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            splitList: typeof splitListCommand;
        }
    }
}
//# sourceMappingURL=split-list.d.ts.map