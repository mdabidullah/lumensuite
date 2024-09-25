import type { EmbedToolbarBlockComponent } from '../../../_common/components/embed-card/type.js';
import { MenuContext } from '../../configs/toolbar.js';
export declare class EmbedCardToolbarContext extends MenuContext {
    blockComponent: EmbedToolbarBlockComponent;
    abortController: AbortController;
    close: () => void;
    get doc(): import("@lumensuite/store").Doc;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): (import("@lumensuite/affine-model").BookmarkBlockModel | import("@lumensuite/affine-model").EmbedFigmaModel | import("@lumensuite/affine-model").EmbedGithubModel | import("@lumensuite/affine-model").EmbedLinkedDocModel | import("@lumensuite/affine-model").EmbedLoomModel | import("@lumensuite/affine-model").EmbedSyncedDocModel | import("@lumensuite/affine-model").EmbedYoutubeModel)[];
    get std(): import("@lumensuite/block-std").BlockStdScope;
    constructor(blockComponent: EmbedToolbarBlockComponent, abortController: AbortController);
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
}
//# sourceMappingURL=context.d.ts.map