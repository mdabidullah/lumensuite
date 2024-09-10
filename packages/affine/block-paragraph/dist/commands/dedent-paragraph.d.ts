import type { Command } from '@blocksuite/block-std';
export declare const dedentParagraphCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            dedentParagraph: typeof dedentParagraphCommand;
        }
    }
}
//# sourceMappingURL=dedent-paragraph.d.ts.map