import type { BlockCommands, BlockComponent } from '@blocksuite/block-std';
export declare const commands: BlockCommands;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            focusBlock?: BlockComponent | null;
            anchorBlock?: BlockComponent | null;
        }
    }
}
//# sourceMappingURL=index.d.ts.map