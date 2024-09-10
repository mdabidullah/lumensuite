const getSelection = (blockComponent) => blockComponent.host.selection;
function getBlockSelectionBySide(block, tail) {
    const selection = getSelection(block);
    const selections = selection.filter('block');
    const sel = selections.at(tail ? -1 : 0);
    return sel ?? null;
}
function getTextSelection(block) {
    const selection = getSelection(block);
    return selection.find('text');
}
const pathToBlock = (block, blockId) => block.host.view.getBlock(blockId);
export const moveBlockConfigs = [
    {
        name: 'Move Up',
        hotkey: ['Mod-Alt-ArrowUp', 'Mod-Shift-ArrowUp'],
        action: block => {
            const doc = block.doc;
            const textSelection = getTextSelection(block);
            if (textSelection) {
                const currentModel = pathToBlock(block, textSelection.from.blockId)?.model;
                if (!currentModel)
                    return;
                const previousSiblingModel = doc.getPrev(currentModel);
                if (!previousSiblingModel)
                    return;
                const parentModel = block.doc.getParent(previousSiblingModel);
                if (!parentModel)
                    return;
                block.doc.moveBlocks([currentModel], parentModel, previousSiblingModel, true);
                block.updateComplete
                    .then(() => {
                    block.std.range.syncTextSelectionToRange(textSelection);
                })
                    .catch(console.error);
                return true;
            }
            const blockSelection = getBlockSelectionBySide(block, true);
            if (blockSelection) {
                const currentModel = pathToBlock(block, blockSelection.blockId)?.model;
                if (!currentModel)
                    return;
                const previousSiblingModel = doc.getPrev(currentModel);
                if (!previousSiblingModel)
                    return;
                const parentModel = doc.getParent(previousSiblingModel);
                if (!parentModel)
                    return;
                doc.moveBlocks([currentModel], parentModel, previousSiblingModel, false);
                return true;
            }
            return;
        },
    },
    {
        name: 'Move Down',
        hotkey: ['Mod-Alt-ArrowDown', 'Mod-Shift-ArrowDown'],
        action: block => {
            const doc = block.doc;
            const textSelection = getTextSelection(block);
            if (textSelection) {
                const currentModel = pathToBlock(block, textSelection.from.blockId)?.model;
                if (!currentModel)
                    return;
                const nextSiblingModel = doc.getNext(currentModel);
                if (!nextSiblingModel)
                    return;
                const parentModel = doc.getParent(nextSiblingModel);
                if (!parentModel)
                    return;
                doc.moveBlocks([currentModel], parentModel, nextSiblingModel, false);
                block.updateComplete
                    .then(() => {
                    block.std.range.syncTextSelectionToRange(textSelection);
                })
                    .catch(console.error);
                return true;
            }
            const blockSelection = getBlockSelectionBySide(block, true);
            if (blockSelection) {
                const currentModel = pathToBlock(block, blockSelection.blockId)?.model;
                if (!currentModel)
                    return;
                const nextSiblingModel = doc.getNext(currentModel);
                if (!nextSiblingModel)
                    return;
                const parentModel = doc.getParent(nextSiblingModel);
                if (!parentModel)
                    return;
                doc.moveBlocks([currentModel], parentModel, nextSiblingModel, false);
                return true;
            }
            return;
        },
    },
];
//# sourceMappingURL=move-block.js.map