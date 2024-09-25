import type { SurfaceBlockComponent } from '@lumensuite/affine-block-surface';
import type { BlockModel } from '@lumensuite/store';
import type { EdgelessRootBlockComponent } from '../../../edgeless/edgeless-root-block.js';
import type { EdgelessRootService } from '../../../edgeless/edgeless-root-service.js';
import type { EdgelessSelectionManager } from '../../../edgeless/services/selection-manager.js';
import { MenuContext } from '../../../configs/toolbar.js';
export declare class ElementToolbarMoreMenuContext extends MenuContext {
    #private;
    edgeless: EdgelessRootBlockComponent;
    get doc(): import("@lumensuite/store").Doc;
    get firstBlockComponent(): import("@lumensuite/block-std").BlockComponent<BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
    get firstElement(): import("@lumensuite/block-std/gfx").GfxModel;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): BlockModel<object, object & {}>[];
    get selectedElements(): import("@lumensuite/block-std/gfx").GfxModel[];
    get selection(): EdgelessSelectionManager;
    get service(): EdgelessRootService;
    get std(): import("@lumensuite/block-std").BlockStdScope;
    get surface(): SurfaceBlockComponent;
    get view(): import("@lumensuite/block-std").ViewStore;
    constructor(edgeless: EdgelessRootBlockComponent);
    getBlockComponent(id: string): import("@lumensuite/block-std").BlockComponent<BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
    getLinkedDocBlock(): import("@lumensuite/affine-model").EmbedLinkedDocModel | import("@lumensuite/affine-model").EmbedSyncedDocModel | null;
    getNoteBlock(): import("@lumensuite/affine-model").NoteBlockModel | null;
    hasFrame(): boolean;
    isElement(): boolean;
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
    refreshable(model: BlockModel): boolean;
}
//# sourceMappingURL=context.d.ts.map