import type { Command } from '@lumensuite/block-std';
export declare const focusBlockStart: Command<'focusBlock'>;
declare global {
    namespace LumenSuite {
        interface Commands {
            focusBlockStart: typeof focusBlockStart;
        }
    }
}
//# sourceMappingURL=focus-block-start.d.ts.map