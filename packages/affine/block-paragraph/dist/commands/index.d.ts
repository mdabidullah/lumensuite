import type { BlockCommands } from '@blocksuite/block-std';
export declare const commands: BlockCommands;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            paragraphConvertedId?: string;
        }
    }
}
//# sourceMappingURL=index.d.ts.map