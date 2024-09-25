import type { BlockCommands, BlockComponent } from '@lumensuite/block-std';
export declare const commands: BlockCommands;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            focusBlock?: BlockComponent | null;
            anchorBlock?: BlockComponent | null;
        }
    }
}
//# sourceMappingURL=index.d.ts.map