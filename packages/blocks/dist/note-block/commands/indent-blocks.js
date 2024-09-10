export const indentBlocks = (ctx, next) => {
    let { blockIds } = ctx;
    const { std, stopCapture = true } = ctx;
    const { doc } = std;
    const { schema } = doc;
    if (!blockIds || !blockIds.length) {
        const text = std.selection.find('text');
        if (text) {
            blockIds = [text.from.blockId, text.to?.blockId].filter((x) => !!x);
        }
        else {
            blockIds = std.selection.getGroup('note').map(sel => sel.blockId);
        }
    }
    if (!blockIds || !blockIds.length || doc.readonly)
        return;
    // Find the first model that can be indented
    let firstIndentIndex = -1;
    let previousSibling = null;
    for (let i = 0; i < blockIds.length; i++) {
        previousSibling = doc.getPrev(blockIds[i]);
        const model = doc.getBlock(blockIds[i])?.model;
        if (model &&
            previousSibling &&
            schema.isValid(model.flavour, previousSibling.flavour)) {
            firstIndentIndex = i;
            break;
        }
    }
    // No model can be indented
    if (firstIndentIndex === -1)
        return;
    if (stopCapture)
        doc.captureSync();
    // Models waiting to be indented
    const indentIds = blockIds.slice(firstIndentIndex);
    indentIds.forEach(id => {
        const parent = doc.getParent(id);
        if (!parent)
            return;
        // Only indent the model which parent is not in the `indentModels`
        // When parent is in the `indentModels`, it means the parent has been indented
        // And the model should be indented with its parent
        if (!indentIds.includes(parent.id)) {
            std.command.exec('indentBlock', { blockId: id, stopCapture: false });
        }
    });
    return next();
};
//# sourceMappingURL=indent-blocks.js.map