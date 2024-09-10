import { EmbedFigmaBlockComponent } from './embed-figma-block.js';
declare const EmbedEdgelessBlockComponent_base: typeof EmbedFigmaBlockComponent & (new (...args: any[]) => import("@blocksuite/block-std").GfxBlockComponent);
export declare class EmbedEdgelessBlockComponent extends EmbedEdgelessBlockComponent_base {
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-edgeless-figma-block': EmbedEdgelessBlockComponent;
    }
}
export {};
//# sourceMappingURL=embed-edgeless-figma-block.d.ts.map