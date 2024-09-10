import type { EdgelessRootService } from '../root-block/index.js';
import { EmbedLinkedDocBlockComponent } from './embed-linked-doc-block.js';
declare const EmbedEdgelessLinkedDocBlockComponent_base: typeof EmbedLinkedDocBlockComponent & (new (...args: any[]) => import("@blocksuite/block-std").GfxBlockComponent);
export declare class EmbedEdgelessLinkedDocBlockComponent extends EmbedEdgelessLinkedDocBlockComponent_base {
    convertToEmbed: () => void;
    get rootService(): EdgelessRootService;
    protected _handleClick(evt: MouseEvent): void;
}
export {};
//# sourceMappingURL=embed-edgeless-linked-doc-block.d.ts.map