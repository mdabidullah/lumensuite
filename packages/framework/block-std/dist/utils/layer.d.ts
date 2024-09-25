import type { Doc } from '@lumensuite/store';
import type { GfxBlockElementModel, GfxModel } from '../gfx/gfx-block-model.js';
import type { Layer } from '../gfx/layer.js';
import type { SurfaceBlockModel } from '../gfx/surface/surface-model.js';
export declare function getLayerEndZIndex(layers: Layer[], layerIndex: number): number;
export declare function updateLayersZIndex(layers: Layer[], startIdx: number): void;
export declare function getElementIndex(indexable: GfxModel): string;
export declare function ungroupIndex(index: string): string;
export declare function insertToOrderedArray(array: GfxModel[], element: GfxModel): void;
export declare function removeFromOrderedArray(array: GfxModel[], element: GfxModel): void;
export declare enum SortOrder {
    AFTER = 1,
    BEFORE = -1,
    SAME = 0
}
export declare function isInRange(edges: [GfxModel, GfxModel], target: GfxModel): boolean;
export declare function renderableInEdgeless(doc: Doc, surface: SurfaceBlockModel, block: GfxBlockElementModel): boolean;
/**
 * A comparator function for sorting elements in the surface.
 * SortOrder.AFTER means a should be rendered after b and so on.
 * @returns
 */
export declare function compare(a: GfxModel, b: GfxModel): SortOrder;
//# sourceMappingURL=layer.d.ts.map