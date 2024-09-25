import type { Command } from '@lumensuite/block-std';
export declare const convertToNumberedListCommand: Command<never, 'listConvertedId', {
    id: string;
    order: number;
    stopCapturing?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            convertToNumberedList: typeof convertToNumberedListCommand;
        }
    }
}
//# sourceMappingURL=convert-to-numbered-list.d.ts.map