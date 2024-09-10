import type { Command } from '@blocksuite/block-std';
/**
 * Append a paragraph block at the end of the whole page.
 */
export declare const appendParagraphCommand: Command<never, never, {
    text?: string;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            appendParagraph: typeof appendParagraphCommand;
        }
    }
}
//# sourceMappingURL=append-paragraph.d.ts.map