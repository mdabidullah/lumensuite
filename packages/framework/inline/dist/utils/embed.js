import { VElement } from '../components/v-element.js';
export function isInEmbedElement(node) {
    if (node instanceof Element) {
        if (node instanceof VElement) {
            return node.querySelector('[data-v-embed="true"]') !== null;
        }
        const vElement = node.closest('[data-v-embed="true"]');
        return !!vElement;
    }
    else {
        const vElement = node.parentElement?.closest('[data-v-embed="true"]');
        return !!vElement;
    }
}
export function isInEmbedGap(node) {
    const el = node instanceof Element ? node : node.parentElement;
    if (!el)
        return false;
    return !!el.closest('[data-v-embed-gap="true"]');
}
export function transformDeltasToEmbedDeltas(editor, deltas) {
    // According to our regulations, the length of each "embed" node should only be 1.
    // Therefore, if the length of an "embed" type node is greater than 1,
    // we will divide it into multiple parts.
    const result = [];
    for (const delta of deltas) {
        if (editor.isEmbed(delta)) {
            const dividedDeltas = [...delta.insert].map(subInsert => ({
                insert: subInsert,
                attributes: delta.attributes,
            }));
            result.push(...dividedDeltas);
        }
        else {
            result.push(delta);
        }
    }
    return result;
}
//# sourceMappingURL=embed.js.map