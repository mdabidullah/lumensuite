import type { Point } from '@lumensuite/global/utils';
import type { BlockModel } from '@lumensuite/store';
import { type BlockComponent, type EditorHost } from '@lumensuite/block-std';
import type { RootBlockComponent } from '../../index.js';
/**
 * This function is used to build model's "normal" block path.
 * If this function does not meet your needs, you may need to build path manually to satisfy your needs.
 * You should not modify this function.
 */
export declare function buildPath(model: BlockModel | null): string[];
export declare function getRootByEditorHost(editorHost: EditorHost): RootBlockComponent | null;
/** If it's not in the page mode, it will return `null` directly */
export declare function getPageRootByEditorHost(editorHost: EditorHost): import("../../index.js").PageRootBlockComponent | null;
/** If it's not in the edgeless mode, it will return `null` directly */
export declare function getEdgelessRootByEditorHost(editorHost: EditorHost): import("../../index.js").EdgelessRootBlockComponent | null;
/**
 * Get block component by model.
 * Note that this function is used for compatibility only, and may be removed in the future.
 *
 * Use `root.view.viewFromPath` instead.
 * @deprecated
 */
export declare function getBlockComponentByModel(editorHost: EditorHost, model: BlockModel | null): BlockComponent<BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
/**
 * Returns rect of the block element.
 *
 * Compatible with Safari!
 * https://github.com/toeverything/lumensuite/issues/902
 * https://github.com/toeverything/lumensuite/pull/1121
 */
export declare function getRectByBlockComponent(element: Element | BlockComponent): DOMRect;
/**
 * Get hovering note with given a point in edgeless mode.
 */
export declare function getHoveringNote(point: Point): Element | null;
/**
 * Returns a flag for the drop target.
 */
export declare enum DropFlags {
    Normal = 0,
    Database = 1,
    EmptyDatabase = 2
}
/**
 * Gets the drop rect by block and point.
 */
export declare function getDropRectByPoint(point: Point, model: BlockModel, element: Element): {
    rect: DOMRect;
    flag: DropFlags;
};
/**
 * Return `true` if the element has class name in the class list.
 */
export declare function hasClassNameInList(element: Element, classList: string[]): boolean;
//# sourceMappingURL=query.d.ts.map