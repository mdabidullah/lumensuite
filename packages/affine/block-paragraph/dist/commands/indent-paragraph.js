import { focusTextModel } from '@blocksuite/affine-components/rich-text';
import { matchFlavours } from '@blocksuite/affine-shared/utils';
export const indentParagraphCommand = (ctx, next) => {
    let { blockId, inlineIndex } = ctx;
    const { std } = ctx;
    const { selection, doc } = std;
    const { schema } = doc;
    if (!blockId) {
        const text = selection.find('text');
        /**
         * Do nothing if the selection:
         * - is not a text selection
         * - or spans multiple blocks
         */
        if (!text || (text.to && text.from.blockId !== text.to.blockId)) {
            return;
        }
        blockId = text.from.blockId;
        inlineIndex = text.from.index;
    }
    if (blockId == null || inlineIndex == null) {
        return;
    }
    const model = std.doc.getBlock(blockId)?.model;
    if (!model || !matchFlavours(model, ['affine:paragraph'])) {
        console.error(`block ${blockId} is not a paragraph block`);
        return;
    }
    const previousSibling = doc.getPrev(model);
    if (doc.readonly ||
        !previousSibling ||
        !schema.isValid(model.flavour, previousSibling.flavour)) {
        // Bottom, can not indent, do nothing
        return;
    }
    doc.captureSync();
    doc.moveBlocks([model], previousSibling);
    // update collapsed state
    if (matchFlavours(previousSibling, ['affine:list']) &&
        previousSibling.collapsed) {
        doc.updateBlock(previousSibling, {
            collapsed: false,
        });
    }
    focusTextModel(std, model.id, inlineIndex);
    return next();
};
//# sourceMappingURL=indent-paragraph.js.map