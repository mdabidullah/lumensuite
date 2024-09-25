import type { BlockSelection, Command } from '@lumensuite/block-std';
export declare const getBlockSelectionsCommand: Command<never, 'currentBlockSelections'>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            currentBlockSelections?: BlockSelection[];
        }
        interface Commands {
            getBlockSelections: typeof getBlockSelectionsCommand;
        }
    }
}
//# sourceMappingURL=get-block-selections.d.ts.map