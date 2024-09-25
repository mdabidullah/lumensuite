import type { SurfaceBlockModel, SurfaceBlockService } from '@lumensuite/affine-block-surface';
import type { BlockStdScope } from '@lumensuite/block-std';
import type { Doc } from '@lumensuite/store';
import { CanvasRenderer } from '@lumensuite/affine-block-surface';
import { Viewport } from '@lumensuite/block-std/gfx';
import { DisposableGroup, Slot } from '@lumensuite/global/utils';
export declare class SurfaceRefRenderer {
    readonly id: string;
    readonly doc: Doc;
    readonly std: BlockStdScope;
    private _surfaceModel;
    private readonly _surfaceRenderer;
    private readonly _viewport;
    protected _disposables: DisposableGroup;
    slots: {
        surfaceRendererInit: Slot<void>;
        surfaceRendererRefresh: Slot<void>;
        surfaceModelChanged: Slot<SurfaceBlockModel>;
        mounted: Slot<void>;
        unmounted: Slot<void>;
    };
    get surfaceModel(): SurfaceBlockModel | null;
    get surfaceRenderer(): CanvasRenderer;
    get surfaceService(): SurfaceBlockService;
    get viewport(): Viewport;
    constructor(id: string, doc: Doc, std: BlockStdScope, options?: {
        enableStackingCanvas?: boolean;
    });
    private _initSurfaceModel;
    private _initSurfaceRenderer;
    getModel(id: string): LumenSuite.EdgelessModel | null;
    mount(): void;
    unmount(): void;
}
//# sourceMappingURL=surface-ref-renderer.d.ts.map