import type { Command } from '@blocksuite/block-std';
export declare const insertEdgelessTextCommand: Command<never, 'textId', {
    x: number;
    y: number;
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            textId?: string;
        }
        interface Commands {
            insertEdgelessText: typeof insertEdgelessTextCommand;
        }
    }
}
//# sourceMappingURL=insert-edgeless-text.d.ts.map