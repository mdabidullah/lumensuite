import type { Command, TextSelection } from '@lumensuite/block-std';
export declare const deleteTextCommand: Command<'currentTextSelection', never, {
    textSelection?: TextSelection;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            deleteText: typeof deleteTextCommand;
        }
    }
}
//# sourceMappingURL=delete-text.d.ts.map