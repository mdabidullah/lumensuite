import type { Command } from '@lumensuite/block-std';
export declare const focusBlockEnd: Command<'focusBlock'>;
declare global {
    namespace LumenSuite {
        interface Commands {
            focusBlockEnd: typeof focusBlockEnd;
        }
    }
}
//# sourceMappingURL=focus-block-end.d.ts.map