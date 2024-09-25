import type { Command } from '@lumensuite/block-std';
export declare const dedentBlocks: Command<never, never, {
    blockIds?: string[];
    stopCapture?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            dedentBlocks: typeof dedentBlocks;
        }
    }
}
//# sourceMappingURL=dendent-blocks.d.ts.map