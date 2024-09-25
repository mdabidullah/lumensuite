import type { Command } from '@lumensuite/block-std';
export declare const indentListCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            indentList: typeof indentListCommand;
        }
    }
}
//# sourceMappingURL=indent-list.d.ts.map