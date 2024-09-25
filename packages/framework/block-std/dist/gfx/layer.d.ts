import type { Doc } from '@lumensuite/store';
import { GfxBlockElementModel } from '@lumensuite/block-std/gfx';
import { Slot } from '@lumensuite/global/utils';
import type { GfxModel } from './gfx-block-model.js';
import { SortOrder } from '../utils/layer.js';
import { GfxPrimitiveElementModel } from './surface/element-model.js';
import { SurfaceBlockModel } from './surface/surface-model.js';
export type ReorderingDirection = 'front' | 'forward' | 'backward' | 'back';
type BaseLayer<T> = {
    set: Set<T>;
    elements: Array<T>;
    /**
     * fractional indexing range
     */
    indexes: [string, string];
};
export type BlockLayer = BaseLayer<GfxBlockElementModel> & {
    type: 'block';
    /**
     * The z-index of the first block in this layer.
     *
     * A block layer may contains multiple blocks,
     * the block should be rendered with this `zIndex` + "its index in the layer" as the z-index property.
     */
    zIndex: number;
};
export type CanvasLayer = BaseLayer<GfxPrimitiveElementModel> & {
    type: 'canvas';
    /**
     * The z-index of canvas layer.
     *
     * A canvas layer renders all the elements in a single canvas,
     *  this property is used to render the canvas with correct z-index.
     */
    zIndex: number;
};
export type Layer = BlockLayer | CanvasLayer;
export declare class LayerManager {
    private _doc;
    private _surface;
    static INITIAL_INDEX: string;
    private _disposable;
    blocks: GfxBlockElementModel[];
    canvasElements: GfxPrimitiveElementModel[];
    canvasLayers: {
        set: Set<GfxPrimitiveElementModel>;
        /**
         * fractional index
         */
        indexes: [string, string];
        /**
         * z-index, used for actual rendering
         */
        zIndex: number;
        elements: Array<GfxPrimitiveElementModel>;
    }[];
    layers: Layer[];
    slots: {
        layerUpdated: Slot<{
            type: "delete" | "add" | "update";
            initiatingElement: GfxModel;
        }>;
    };
    constructor(_doc: Doc, _surface: SurfaceBlockModel | null, options?: {
        watch: boolean;
    });
    private _buildCanvasLayers;
    private _getModelType;
    private _initLayers;
    private _insertIntoLayer;
    private _removeFromLayer;
    private _reset;
    /**
     * @returns a boolean value to indicate whether the layers have been updated
     */
    private _updateLayer;
    add(element: GfxModel): void;
    /**
     * Pass to the `Array.sort` to  sort the elements by their index
     */
    compare(a: GfxModel, b: GfxModel): SortOrder;
    /**
     * In some cases, we need to generate a bunch of indexes in advance before acutally adding the elements to the layer manager.
     * Eg. when importing a template. The `generateIndex` is a function only depends on the current state of the manager.
     * So we cannot use it because it will always return the same index if the element is not added to manager.
     *
     * This function return a index generator that can "remember" the index it generated without actually adding the element to the manager.
     *
     * @note The generator cannot work with `group` element.
     *
     * @param ignoreRule If true, the generator will not distinguish between `block` and `canvas` elements.
     * @returns
     */
    createIndexGenerator(ignoreRule?: boolean): (elementType: string) => string;
    delete(element: GfxModel): void;
    dispose(): void;
    generateIndex(elementType: string): string;
    getCanvasLayers(): {
        set: Set<GfxPrimitiveElementModel>;
        /**
         * fractional index
         */
        indexes: [string, string];
        /**
         * z-index, used for actual rendering
         */
        zIndex: number;
        elements: Array<GfxPrimitiveElementModel>;
    }[];
    getReorderedIndex(element: GfxModel, direction: ReorderingDirection): string;
    getZIndex(element: GfxModel): number;
    update(element: GfxModel, props?: Record<string, unknown>): void;
    watch(blocks: {
        doc?: Doc;
        surface: SurfaceBlockModel | null;
    }): void;
}
export {};
//# sourceMappingURL=layer.d.ts.map