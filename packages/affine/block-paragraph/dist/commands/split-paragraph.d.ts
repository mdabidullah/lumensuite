import type { Command } from '@lumensuite/block-std';
export declare const splitParagraphCommand: Command<never, 'paragraphConvertedId', {
    blockId?: string;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            splitParagraph: typeof splitParagraphCommand;
        }
    }
}
//# sourceMappingURL=split-paragraph.d.ts.map