import type { Command } from '@blocksuite/block-std';
export declare const dedentListCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            dedentList: typeof dedentListCommand;
        }
    }
}
//# sourceMappingURL=dedent-list.d.ts.map