import type { Command } from '@lumensuite/block-std';
export declare const splitListCommand: Command<never, never, {
    blockId: string;
    inlineIndex: number;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            splitList: typeof splitListCommand;
        }
    }
}
//# sourceMappingURL=split-list.d.ts.map