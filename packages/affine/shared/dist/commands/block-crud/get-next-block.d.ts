import type { BlockComponent, Command } from '@lumensuite/block-std';
export declare const getNextBlockCommand: Command<'currentSelectionPath', 'nextBlock', {
    path?: string;
}>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            nextBlock?: BlockComponent;
        }
        interface Commands {
            getNextBlock: typeof getNextBlockCommand;
        }
    }
}
//# sourceMappingURL=get-next-block.d.ts.map