import type { Command } from '@lumensuite/block-std';
import { type BlockModel, type DraftModel } from '@lumensuite/store';
export declare const draftSelectedModelsCommand: Command<'selectedModels', 'draftedModels'>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            draftedModels?: Promise<DraftModel<BlockModel<object>>[]>;
        }
        interface Commands {
            draftSelectedModels: typeof draftSelectedModelsCommand;
        }
    }
}
//# sourceMappingURL=draft-selected-models.d.ts.map