import type { Command } from '@blocksuite/block-std';
export declare const indentBlocks: Command<never, never, {
    blockIds?: string[];
    stopCapture?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            indentBlocks: typeof indentBlocks;
        }
    }
}
//# sourceMappingURL=indent-blocks.d.ts.map