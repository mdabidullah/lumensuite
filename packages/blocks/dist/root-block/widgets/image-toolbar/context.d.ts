import type { ImageBlockComponent } from '../../../image-block/image-block.js';
import { MenuContext } from '../../configs/toolbar.js';
export declare class ImageToolbarContext extends MenuContext {
    blockComponent: ImageBlockComponent;
    abortController: AbortController;
    close: () => void;
    get doc(): import("@lumensuite/store").Doc;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): import("@lumensuite/affine-model").ImageBlockModel[];
    get std(): import("@lumensuite/block-std").BlockStdScope;
    constructor(blockComponent: ImageBlockComponent, abortController: AbortController);
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
}
//# sourceMappingURL=context.d.ts.map