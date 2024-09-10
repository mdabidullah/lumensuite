export { getBlockIndexCommand, getNextBlockCommand, getPrevBlockCommand, getSelectedBlocksCommand, } from './block-crud/index.js';
export { copySelectedModelsCommand, deleteSelectedModelsCommand, draftSelectedModelsCommand, getSelectedModelsCommand, } from './model-crud/index.js';
export { getBlockSelectionsCommand, getImageSelectionsCommand, getTextSelectionCommand, } from './selection/index.js';
declare global {
    namespace BlockSuite {
        interface CommandContext {
            currentSelectionPath?: string;
        }
    }
}
//# sourceMappingURL=index.d.ts.map