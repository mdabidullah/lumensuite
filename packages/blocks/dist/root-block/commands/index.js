import { getSelectedPeekableBlocksCommand, peekSelectedBlockCommand, } from '@lumensuite/affine-components/peek';
import { textCommands } from '@lumensuite/affine-components/rich-text';
import { copySelectedModelsCommand, deleteSelectedModelsCommand, draftSelectedModelsCommand, getSelectedModelsCommand, } from '@lumensuite/affine-shared/commands';
export const commands = {
    // models
    copySelectedModels: copySelectedModelsCommand,
    deleteSelectedModels: deleteSelectedModelsCommand,
    draftSelectedModels: draftSelectedModelsCommand,
    getSelectedModels: getSelectedModelsCommand,
    // text
    ...textCommands,
    // peekable
    peekSelectedBlock: peekSelectedBlockCommand,
    getSelectedPeekableBlocks: getSelectedPeekableBlocksCommand,
};
//# sourceMappingURL=index.js.map