import type { Command } from '@lumensuite/block-std';
export declare const dedentParagraphCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            dedentParagraph: typeof dedentParagraphCommand;
        }
    }
}
//# sourceMappingURL=dedent-paragraph.d.ts.map