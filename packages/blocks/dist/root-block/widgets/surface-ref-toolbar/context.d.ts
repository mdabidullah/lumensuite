import type { SurfaceRefBlockComponent } from '../../../surface-ref-block/surface-ref-block.js';
import { MenuContext } from '../../configs/toolbar.js';
export declare class SurfaceRefToolbarContext extends MenuContext {
    blockComponent: SurfaceRefBlockComponent;
    abortController: AbortController;
    close: () => void;
    get doc(): import("@lumensuite/store").Doc;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): import("@lumensuite/affine-model").SurfaceRefBlockModel[];
    get std(): import("@lumensuite/block-std").BlockStdScope;
    constructor(blockComponent: SurfaceRefBlockComponent, abortController: AbortController);
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
}
//# sourceMappingURL=context.d.ts.map