import type { Command } from '@lumensuite/block-std';
export declare const indentParagraphCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            indentParagraph: typeof indentParagraphCommand;
        }
    }
}
//# sourceMappingURL=indent-paragraph.d.ts.map