import type { BlockComponent, Command } from '@lumensuite/block-std';
export declare const getSelectedPeekableBlocksCommand: Command<'selectedBlocks', 'selectedPeekableBlocks'>;
export declare const peekSelectedBlockCommand: Command<'selectedBlocks'>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            selectedPeekableBlocks?: BlockComponent[];
        }
        interface Commands {
            peekSelectedBlock: typeof peekSelectedBlockCommand;
            getSelectedPeekableBlocks: typeof getSelectedPeekableBlocksCommand;
        }
    }
}
//# sourceMappingURL=commands.d.ts.map