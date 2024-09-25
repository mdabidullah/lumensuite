import type { Command } from '@lumensuite/block-std';
export declare const copySelectedModelsCommand: Command<'draftedModels' | 'onCopy'>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            onCopy?: () => void;
        }
        interface Commands {
            copySelectedModels: typeof copySelectedModelsCommand;
        }
    }
}
//# sourceMappingURL=copy-selected-models.d.ts.map