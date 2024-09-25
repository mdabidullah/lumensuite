import type { Command } from '@lumensuite/block-std';
import type { BlockModel } from '@lumensuite/store';
type UpdateBlockConfig = {
    flavour: LumenSuite.Flavour;
    props?: Record<string, unknown>;
};
export declare const updateBlockType: Command<'selectedBlocks', 'updatedBlocks', UpdateBlockConfig>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            updatedBlocks?: BlockModel[];
        }
        interface Commands {
            updateBlockType: typeof updateBlockType;
        }
    }
}
export {};
//# sourceMappingURL=block-type.d.ts.map