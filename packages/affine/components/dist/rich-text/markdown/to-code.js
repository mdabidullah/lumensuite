import { matchFlavours } from '@lumensuite/affine-shared/utils';
import { focusTextModel } from '../dom.js';
export function toCode(std, model, prefixText, language) {
    if (matchFlavours(model, ['affine:paragraph']) && model.type === 'quote') {
        return;
    }
    const doc = model.doc;
    const parent = doc.getParent(model);
    if (!parent) {
        return;
    }
    doc.captureSync();
    const index = parent.children.indexOf(model);
    const codeId = doc.addBlock('affine:code', { language }, parent, index);
    if (model.text && model.text.length > prefixText.length) {
        const text = model.text.clone();
        doc.addBlock('affine:paragraph', { text }, parent, index + 1);
        text.delete(0, prefixText.length);
    }
    doc.deleteBlock(model, { bringChildrenTo: parent });
    focusTextModel(std, codeId);
    return codeId;
}
//# sourceMappingURL=to-code.js.map