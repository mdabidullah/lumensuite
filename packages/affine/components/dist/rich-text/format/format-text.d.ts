import type { Command, TextSelection } from '@lumensuite/block-std';
import type { AffineTextAttributes } from '../extension/index.js';
export declare const formatTextCommand: Command<'currentTextSelection', never, {
    textSelection?: TextSelection;
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            formatText: typeof formatTextCommand;
        }
    }
}
//# sourceMappingURL=format-text.d.ts.map