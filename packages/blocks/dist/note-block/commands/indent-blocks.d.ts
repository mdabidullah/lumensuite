import type { Command } from '@lumensuite/block-std';
export declare const indentBlocks: Command<never, never, {
    blockIds?: string[];
    stopCapture?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            indentBlocks: typeof indentBlocks;
        }
    }
}
//# sourceMappingURL=indent-blocks.d.ts.map