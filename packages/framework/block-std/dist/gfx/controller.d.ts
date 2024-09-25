import type { ServiceIdentifier } from '@lumensuite/global/di';
import type { BlockModel } from '@lumensuite/store';
import { Bound, type IBound } from '@lumensuite/global/utils';
import type { BlockStdScope } from '../scope/block-std-scope.js';
import type { SurfaceBlockModel } from './surface/surface-model.js';
import { LifeCycleWatcher } from '../extension/lifecycle-watcher.js';
import { GfxBlockElementModel, type GfxModel } from './gfx-block-model.js';
import { GridManager } from './grid.js';
import { LayerManager } from './layer.js';
import { GfxPrimitiveElementModel, type PointTestOptions } from './surface/element-model.js';
import { Viewport } from './viewport.js';
export declare class GfxController extends LifeCycleWatcher {
    static key: string;
    private _disposables;
    private _surface;
    readonly grid: GridManager;
    readonly layer: LayerManager;
    readonly viewport: Viewport;
    get doc(): import("@lumensuite/store").Doc;
    get surface(): SurfaceBlockModel | null;
    constructor(std: BlockStdScope);
    /**
     * Get a block or element by its id.
     * Note that non-gfx block can also be queried in this method.
     * @param id
     * @returns
     */
    getElementById<T extends GfxModel | BlockModel<object> = GfxModel | BlockModel<object>>(id: string): T | null;
    /**
     * Get elements on a specific point.
     * @param x
     * @param y
     * @param options
     */
    getElementByPoint(x: number, y: number, options: {
        all: true;
    } & PointTestOptions): GfxModel[];
    getElementByPoint(x: number, y: number, options?: {
        all?: false;
    } & PointTestOptions): GfxModel | null;
    /**
     * Query all elements in an area.
     * @param bound
     * @param options
     */
    getElementsByBound(bound: IBound | Bound, options?: {
        type: 'all';
    }): GfxModel[];
    getElementsByBound(bound: IBound | Bound, options: {
        type: 'canvas';
    }): GfxPrimitiveElementModel[];
    getElementsByBound(bound: IBound | Bound, options: {
        type: 'block';
    }): GfxBlockElementModel[];
    getElementsByType(type: string): (GfxModel | BlockModel<object>)[];
    mounted(): void;
    unmounted(): void;
}
export declare const GfxControllerIdentifier: ServiceIdentifier<GfxController>;
//# sourceMappingURL=controller.d.ts.map