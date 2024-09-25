import type { Command } from '@lumensuite/block-std';
export declare const insertEdgelessTextCommand: Command<never, 'textId', {
    x: number;
    y: number;
}>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            textId?: string;
        }
        interface Commands {
            insertEdgelessText: typeof insertEdgelessTextCommand;
        }
    }
}
//# sourceMappingURL=insert-edgeless-text.d.ts.map