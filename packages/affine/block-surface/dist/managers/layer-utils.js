import { nToLast } from '@blocksuite/global/utils';
import { SurfaceGroupLikeModel } from '../element-model/base.js';
export function getLayerEndZIndex(layers, layerIndex) {
    const layer = layers[layerIndex];
    return layer
        ? layer.type === 'block'
            ? layer.zIndex + layer.elements.length - 1
            : layer.zIndex
        : 1;
}
export function updateLayersZIndex(layers, startIdx) {
    const startLayer = layers[startIdx];
    let curIndex = startLayer.zIndex;
    for (let i = startIdx; i < layers.length; ++i) {
        const curLayer = layers[i];
        curLayer.zIndex = curIndex;
        curIndex += curLayer.type === 'block' ? curLayer.elements.length : 1;
    }
}
export function getElementIndex(indexable) {
    const groups = indexable.groups;
    if (groups.length) {
        const groupIndexes = groups
            .map(group => group.index)
            .reverse()
            .join('-');
        return `${groupIndexes}-${indexable.index}`;
    }
    return indexable.index;
}
export function ungroupIndex(index) {
    return index.split('-')[0];
}
export function insertToOrderedArray(array, element) {
    let idx = 0;
    while (idx < array.length &&
        [SortOrder.BEFORE, SortOrder.SAME].includes(compare(array[idx], element))) {
        ++idx;
    }
    array.splice(idx, 0, element);
}
export function removeFromOrderedArray(array, element) {
    const idx = array.indexOf(element);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
}
export var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["AFTER"] = 1] = "AFTER";
    SortOrder[SortOrder["BEFORE"] = -1] = "BEFORE";
    SortOrder[SortOrder["SAME"] = 0] = "SAME";
})(SortOrder || (SortOrder = {}));
export function isInRange(edges, target) {
    return compare(target, edges[0]) >= 0 && compare(target, edges[1]) < 0;
}
export function renderableInEdgeless(doc, surface, block) {
    const parent = doc.getParent(block);
    return parent === doc.root || parent === surface;
}
/**
 * A comparator function for sorting elements in the surface.
 * SortOrder.AFTER means a should be rendered after b and so on.
 * @returns
 */
export function compare(a, b) {
    if (a instanceof SurfaceGroupLikeModel && a.hasDescendant(b)) {
        return SortOrder.BEFORE;
    }
    else if (b instanceof SurfaceGroupLikeModel && b.hasDescendant(a)) {
        return SortOrder.AFTER;
    }
    else {
        const aGroups = a.groups;
        const bGroups = b.groups;
        let i = 1;
        let aGroup = nToLast(aGroups, i);
        let bGroup = nToLast(bGroups, i);
        while (aGroup === bGroup && aGroup) {
            ++i;
            aGroup = nToLast(aGroups, i);
            bGroup = nToLast(bGroups, i);
        }
        aGroup = aGroup ?? a;
        bGroup = bGroup ?? b;
        return aGroup.index === bGroup.index
            ? SortOrder.SAME
            : aGroup.index < bGroup.index
                ? SortOrder.BEFORE
                : SortOrder.AFTER;
    }
}
//# sourceMappingURL=layer-utils.js.map