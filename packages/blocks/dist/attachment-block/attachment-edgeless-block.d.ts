import type { HoverController } from '@lumensuite/affine-components/hover';
import type { EdgelessRootService } from '../root-block/index.js';
import { AttachmentBlockComponent } from './attachment-block.js';
declare const AttachmentEdgelessBlockComponent_base: typeof AttachmentBlockComponent & (new (...args: any[]) => import("@lumensuite/block-std").GfxBlockComponent);
export declare class AttachmentEdgelessBlockComponent extends AttachmentEdgelessBlockComponent_base {
    protected _whenHover: HoverController | null;
    protected get embedView(): undefined;
    get rootService(): EdgelessRootService;
    connectedCallback(): void;
    onClick(_: MouseEvent): void;
    renderGfxBlock(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-attachment': AttachmentEdgelessBlockComponent;
    }
}
export {};
//# sourceMappingURL=attachment-edgeless-block.d.ts.map