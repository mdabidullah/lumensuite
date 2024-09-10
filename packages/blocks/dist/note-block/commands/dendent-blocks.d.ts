import type { Command } from '@blocksuite/block-std';
export declare const dedentBlocks: Command<never, never, {
    blockIds?: string[];
    stopCapture?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            dedentBlocks: typeof dedentBlocks;
        }
    }
}
//# sourceMappingURL=dendent-blocks.d.ts.map