import type { Command } from '@lumensuite/block-std';
export declare const listToParagraphCommand: Command<never, 'listConvertedId', {
    id: string;
    stopCapturing?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            listToParagraph: typeof listToParagraphCommand;
        }
    }
}
//# sourceMappingURL=list-to-paragraph.d.ts.map