import type { EdgelessRootService } from '../root-block/index.js';
import { EmbedHtmlBlockComponent } from './embed-html-block.js';
declare const EmbedEdgelessHtmlBlockComponent_base: typeof EmbedHtmlBlockComponent & (new (...args: any[]) => import("@blocksuite/block-std").GfxBlockComponent);
export declare class EmbedEdgelessHtmlBlockComponent extends EmbedEdgelessHtmlBlockComponent_base {
    get rootService(): EdgelessRootService;
    renderGfxBlock(): unknown;
}
export {};
//# sourceMappingURL=embed-edgeless-html-block.d.ts.map