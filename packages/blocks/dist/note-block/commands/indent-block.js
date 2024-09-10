import { matchFlavours } from '@blocksuite/affine-shared/utils';
/**
 * @example
 * before indent:
 * - aaa
 *   - bbb
 * - ccc|
 *   - ddd
 *   - eee
 *
 * after indent:
 * - aaa
 *   - bbb
 *   - ccc|
 *     - ddd
 *     - eee
 */
export const indentBlock = (ctx, next) => {
    let { blockId } = ctx;
    const { std, stopCapture = true } = ctx;
    const { doc } = std;
    const { schema } = doc;
    if (!blockId) {
        const sel = std.selection.getGroup('note').at(0);
        blockId = sel?.blockId;
    }
    if (!blockId)
        return;
    const model = std.doc.getBlock(blockId)?.model;
    if (!model)
        return;
    const previousSibling = doc.getPrev(model);
    if (doc.readonly ||
        !previousSibling ||
        !schema.isValid(model.flavour, previousSibling.flavour)) {
        // can not indent, do nothing
        return;
    }
    if (stopCapture)
        doc.captureSync();
    doc.moveBlocks([model], previousSibling);
    // update collapsed state of affine list
    if (matchFlavours(previousSibling, ['affine:list']) &&
        previousSibling.collapsed) {
        doc.updateBlock(previousSibling, {
            collapsed: false,
        });
    }
    return next();
};
//# sourceMappingURL=indent-block.js.map