import type { Command } from '@lumensuite/block-std';
export declare const dedentBlocksToRoot: Command<never, never, {
    blockIds?: string[];
    stopCapture?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            dedentBlocksToRoot: typeof dedentBlocksToRoot;
        }
    }
}
//# sourceMappingURL=dedent-blocks-to-root.d.ts.map