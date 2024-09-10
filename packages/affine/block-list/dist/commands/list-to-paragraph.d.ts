import type { Command } from '@blocksuite/block-std';
export declare const listToParagraphCommand: Command<never, 'listConvertedId', {
    id: string;
    stopCapturing?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            listToParagraph: typeof listToParagraphCommand;
        }
    }
}
//# sourceMappingURL=list-to-paragraph.d.ts.map