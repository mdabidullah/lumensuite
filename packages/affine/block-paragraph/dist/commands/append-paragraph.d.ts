import type { Command } from '@lumensuite/block-std';
/**
 * Append a paragraph block at the end of the whole page.
 */
export declare const appendParagraphCommand: Command<never, never, {
    text?: string;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            appendParagraph: typeof appendParagraphCommand;
        }
    }
}
//# sourceMappingURL=append-paragraph.d.ts.map