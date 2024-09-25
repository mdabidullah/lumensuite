import type { Command } from '@lumensuite/block-std';
export declare const selectBlocksBetween: Command<'focusBlock' | 'anchorBlock', never, {
    tail: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            selectBlocksBetween: typeof selectBlocksBetween;
        }
    }
}
//# sourceMappingURL=select-blocks-between.d.ts.map