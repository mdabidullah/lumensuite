import type { Command } from '@lumensuite/block-std';
export declare const deleteSelectedModelsCommand: Command<'selectedModels'>;
declare global {
    namespace LumenSuite {
        interface Commands {
            deleteSelectedModels: typeof deleteSelectedModelsCommand;
        }
    }
}
//# sourceMappingURL=delete-selected-models.d.ts.map