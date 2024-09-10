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
export declare function getTopElements(elements: BlockSuite.EdgelessModel[]): import("@blocksuite/block-std/gfx").GfxModel[];
/**
 * Get all descendant elements of the given element.
 */
export declare function getAllDescendantElements(element: BlockSuite.EdgelessModel, includeSelf?: boolean): import("@blocksuite/block-std/gfx").GfxModel[];
//# sourceMappingURL=tree.d.ts.map