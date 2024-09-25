import type { Command } from '@lumensuite/block-std';
export declare const dedentBlockToRoot: Command<never, never, {
    blockId?: string;
    stopCapture?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            dedentBlockToRoot: typeof dedentBlockToRoot;
        }
    }
}
//# sourceMappingURL=dedent-block-to-root.d.ts.map