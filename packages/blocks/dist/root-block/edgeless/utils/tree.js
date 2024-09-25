import { isGfxContainerElm } from '@lumensuite/block-std/gfx';
/**
 * Get the top elements from the list of elements, which are in some tree structures.
 *
 * For example: a list `[F1, F2, E6, E1, G1, E5, E2, E3, E4]`,
 * and they are in the edgeless container tree structure:
 * ```
 *     F1         F2      E6
 *    /  \        |
 *  E1   G1       E5
 *       / \
 *      E2  G2*
 *         / \
 *        E3 E4
 * ```
 * where the star symbol `*` represent it is not in the list.
 *
 * The result should be `[F1, F2, E6, E3, E4]`.
 */
export function getTopElements(elements) {
    const topElements = new Set(elements);
    const visitedElements = new Map();
    elements.forEach(element => {
        visitedElements.set(element, false);
    });
    const traverse = (element) => {
        // Skip if not in the list
        if (!visitedElements.has(element))
            return;
        // Skip if already visited, its children also are already visited
        if (visitedElements.get(element))
            return;
        visitedElements.set(element, true);
        if (isGfxContainerElm(element)) {
            element.childElements.forEach(child => {
                topElements.delete(child);
                traverse(child);
            });
        }
    };
    visitedElements.forEach((_, element) => {
        traverse(element);
    });
    return [...topElements];
}
/**
 * Get all descendant elements of the given element.
 */
export function getAllDescendantElements(element, includeSelf = false) {
    const elements = [];
    const traverse = (element) => {
        elements.push(element);
        if (isGfxContainerElm(element)) {
            element.childElements.forEach(child => {
                traverse(child);
            });
        }
    };
    if (includeSelf) {
        traverse(element);
    }
    else {
        if (isGfxContainerElm(element)) {
            element.childElements.forEach(child => {
                traverse(child);
            });
        }
    }
    return elements;
}
//# sourceMappingURL=tree.js.map