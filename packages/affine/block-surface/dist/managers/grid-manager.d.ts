import type { GfxModel } from '@lumensuite/block-std/gfx';
import type { IBound } from '@lumensuite/global/utils';
export declare class GridManager<T extends GfxModel> {
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
    add(element: T): void;
    boundHasChanged(a: IBound, b: IBound): boolean;
    /**
     *
     * @param bound
     * @param strict
     * @param reverseChecking If true, check if the bound is inside the elements instead of checking if the elements are inside the bound
     * @returns
     */
    has(bound: IBound, strict?: boolean, reverseChecking?: boolean, exclude?: Set<T>): boolean;
    pick(x: number, y: number): T[];
    remove(element: T): void;
    search(bound: IBound, strict?: boolean, getSet?: false): T[];
    search(bound: IBound, strict: boolean | undefined, getSet: true): Set<T>;
    update(element: T): void;
}
//# sourceMappingURL=grid-manager.d.ts.map