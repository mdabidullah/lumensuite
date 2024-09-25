import type { Command } from '@lumensuite/block-std';
/**
 * Add a paragraph next to the current block.
 */
export declare const addParagraphCommand: Command<never, 'paragraphConvertedId', {
    blockId?: string;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            addParagraph: typeof addParagraphCommand;
        }
    }
}
//# sourceMappingURL=add-paragraph.d.ts.map