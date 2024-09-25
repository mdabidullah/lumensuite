import type { IBound } from '@lumensuite/global/utils';
import type { Doc } from '@lumensuite/store';
import { type GfxModel } from './gfx-block-model.js';
import { SurfaceBlockModel } from './surface/surface-model.js';
export declare const DEFAULT_GRID_SIZE = 3000;
export declare class GridManager {
    private _elementToGrids;
    private _externalElementToGrids;
    private _externalGrids;
    private _grids;
    get isEmpty(): boolean;
    private _addToExternalGrids;
    private _createExternalGrid;
    private _createGrid;
    private _getExternalGrid;
    private _getGrid;
    private _removeFromExternalGrids;
    private _searchExternal;
    add(element: GfxModel): void;
    boundHasChanged(a: IBound, b: IBound): boolean;
    /**
     *
     * @param bound
     * @param strict
     * @param reverseChecking If true, check if the bound is inside the elements instead of checking if the elements are inside the bound
     * @returns
     */
    has(bound: IBound, strict?: boolean, reverseChecking?: boolean, filter?: (model: GfxModel) => boolean): boolean;
    pick(x: number, y: number): GfxModel[];
    remove(element: GfxModel): void;
    search(bound: IBound, strict?: boolean, options?: {
        useSet?: false;
        filter?: (model: GfxModel) => boolean;
    }): GfxModel[];
    search(bound: IBound, strict: boolean | undefined, options: {
        useSet: true;
        filter?: (model: GfxModel) => boolean;
    }): Set<GfxModel>;
    update(element: GfxModel): void;
    watch(blocks: {
        doc?: Doc;
        surface?: SurfaceBlockModel | null;
    }): () => void;
}
//# sourceMappingURL=grid.d.ts.map