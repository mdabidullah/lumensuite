import type { Command } from '@lumensuite/block-std';
export declare const selectBlock: Command<'focusBlock'>;
declare global {
    namespace LumenSuite {
        interface Commands {
            selectBlock: typeof selectBlock;
        }
    }
}
//# sourceMappingURL=select-block.d.ts.map