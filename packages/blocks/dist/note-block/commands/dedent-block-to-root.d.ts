import type { Command } from '@blocksuite/block-std';
export declare const dedentBlockToRoot: Command<never, never, {
    blockId?: string;
    stopCapture?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            dedentBlockToRoot: typeof dedentBlockToRoot;
        }
    }
}
//# sourceMappingURL=dedent-block-to-root.d.ts.map