import type { BlockComponent, Command } from '@lumensuite/block-std';
export declare const getPrevBlockCommand: Command<'currentSelectionPath', 'prevBlock', {
    path?: string;
}>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            prevBlock?: BlockComponent;
        }
        interface Commands {
            getPrevBlock: typeof getPrevBlockCommand;
        }
    }
}
//# sourceMappingURL=get-prev-block.d.ts.map