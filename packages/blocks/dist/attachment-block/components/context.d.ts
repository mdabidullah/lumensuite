import type { AttachmentBlockComponent } from '../attachment-block.js';
import { MenuContext } from '../../root-block/configs/toolbar.js';
export declare class AttachmentToolbarMoreMenuContext extends MenuContext {
    blockComponent: AttachmentBlockComponent;
    abortController: AbortController;
    close: () => void;
    get doc(): import("@lumensuite/store").Doc;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): import("@lumensuite/affine-model").AttachmentBlockModel[];
    get std(): import("@lumensuite/block-std").BlockStdScope;
    constructor(blockComponent: AttachmentBlockComponent, abortController: AbortController);
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
}
//# sourceMappingURL=context.d.ts.map