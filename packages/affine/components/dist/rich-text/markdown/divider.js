import { matchFlavours } from '@lumensuite/affine-shared/utils';
import { focusTextModel } from '../dom.js';
import { beforeConvert } from './utils.js';
export function toDivider(std, model, prefix) {
    const { doc } = std;
    if (matchFlavours(model, ['affine:divider']) ||
        (matchFlavours(model, ['affine:paragraph']) && model.type === 'quote')) {
        return;
    }
    const parent = doc.getParent(model);
    if (!parent)
        return;
    const index = parent.children.indexOf(model);
    beforeConvert(std, model, prefix.length);
    const blockProps = {
        children: model.children,
    };
    doc.addBlock('affine:divider', blockProps, parent, index);
    const nextBlock = parent.children[index + 1];
    let id = nextBlock?.id;
    if (!id) {
        id = doc.addBlock('affine:paragraph', {}, parent);
    }
    focusTextModel(std, id);
    return id;
}
//# sourceMappingURL=divider.js.map