import type { Doc } from '@lumensuite/store';
import { FrameBlockModel } from '@lumensuite/affine-model';
import { GfxBlockElementModel, type GfxModel } from '@lumensuite/block-std/gfx';
import { Slot } from '@lumensuite/global/utils';
import type { SurfaceBlockModel } from '../surface-model.js';
import { SurfaceElementModel } from '../element-model/base.js';
import { GridManager } from './grid-manager.js';
import { SortOrder } from './layer-utils.js';
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
export type CanvasLayer = BaseLayer<SurfaceElementModel> & {
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
    static INITAL_INDEX: string;
    private _disposables;
    blocks: GfxBlockElementModel[];
    blocksGrid: GridManager<GfxBlockElementModel>;
    canvasElements: SurfaceElementModel[];
    canvasGrid: GridManager<SurfaceElementModel<import("@lumensuite/block-std/gfx").BaseElementProps>>;
    canvasLayers: {
        set: Set<SurfaceElementModel>;
        /**
         * fractional index
         */
        indexes: [string, string];
        /**
         * z-index, used for actual rendering
         */
        zIndex: number;
        elements: Array<SurfaceElementModel>;
    }[];
    frames: FrameBlockModel[];
    framesGrid: GridManager<FrameBlockModel>;
    layers: Layer[];
    slots: {
        layerUpdated: Slot<{
            type: "delete" | "add" | "update";
            initiatingElement: GfxModel;
        }>;
    };
    constructor(_doc: Doc, _surface: SurfaceBlockModel);
    static create(doc: Doc, surface: SurfaceBlockModel): LayerManager;
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
    private listen;
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
        set: Set<SurfaceElementModel>;
        /**
         * fractional index
         */
        indexes: [string, string];
        /**
         * z-index, used for actual rendering
         */
        zIndex: number;
        elements: Array<SurfaceElementModel>;
    }[];
    getReorderedIndex(element: GfxModel, direction: ReorderingDirection): string;
    getZIndex(element: GfxModel): number;
    update(element: GfxModel, props?: Record<string, unknown>): void;
}
export {};
//# sourceMappingURL=layer-manager.d.ts.map