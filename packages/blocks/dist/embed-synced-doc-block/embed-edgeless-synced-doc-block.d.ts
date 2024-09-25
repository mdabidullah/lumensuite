import type { EdgelessRootService } from '../root-block/index.js';
import { EmbedSyncedDocBlockComponent } from './embed-synced-doc-block.js';
declare const EmbedEdgelessSyncedDocBlockComponent_base: typeof EmbedSyncedDocBlockComponent & (new (...args: any[]) => import("@lumensuite/block-std").GfxBlockComponent);
export declare class EmbedEdgelessSyncedDocBlockComponent extends EmbedEdgelessSyncedDocBlockComponent_base {
    protected _renderSyncedView: () => import("lit").TemplateResult<1>;
    convertToCard: () => void;
    get rootService(): EdgelessRootService;
    renderGfxBlock(): unknown;
    accessor useCaptionEditor: boolean;
}
export {};
//# sourceMappingURL=embed-edgeless-synced-doc-block.d.ts.map