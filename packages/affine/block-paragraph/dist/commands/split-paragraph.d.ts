import type { Command } from '@blocksuite/block-std';
export declare const splitParagraphCommand: Command<never, 'paragraphConvertedId', {
    blockId?: string;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            splitParagraph: typeof splitParagraphCommand;
        }
    }
}
//# sourceMappingURL=split-paragraph.d.ts.map