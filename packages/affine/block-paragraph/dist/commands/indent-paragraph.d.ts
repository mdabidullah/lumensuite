import type { Command } from '@blocksuite/block-std';
export declare const indentParagraphCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            indentParagraph: typeof indentParagraphCommand;
        }
    }
}
//# sourceMappingURL=indent-paragraph.d.ts.map