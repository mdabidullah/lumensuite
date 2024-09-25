import type { Command } from '@lumensuite/block-std';
export declare const dedentListCommand: Command<never, never, {
    blockId?: string;
    inlineIndex?: number;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            dedentList: typeof dedentListCommand;
        }
    }
}
//# sourceMappingURL=dedent-list.d.ts.map