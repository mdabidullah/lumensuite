import type { CodeBlockComponent } from '../../../code-block/code-block.js';
import { MenuContext } from '../../configs/toolbar.js';
export declare class CodeBlockToolbarContext extends MenuContext {
    blockComponent: CodeBlockComponent;
    abortController: AbortController;
    close: () => void;
    get doc(): import("@lumensuite/store").Doc;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): import("@lumensuite/affine-model").CodeBlockModel[];
    get std(): import("@lumensuite/block-std").BlockStdScope;
    constructor(blockComponent: CodeBlockComponent, abortController: AbortController);
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
}
//# sourceMappingURL=context.d.ts.map