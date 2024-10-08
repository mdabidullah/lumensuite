import type { AttachmentBlockModel, BookmarkBlockModel, EmbedFigmaModel, EmbedGithubModel, EmbedHtmlModel, EmbedLinkedDocModel, EmbedLoomModel, EmbedSyncedDocModel, EmbedYoutubeModel, ImageBlockModel } from '@lumensuite/affine-model';
import type { BlockModel } from '@lumensuite/store';
import { ShadowlessElement } from '@lumensuite/block-std';
import { type TemplateResult } from 'lit';
declare const SurfaceRefGenericBlockPortal_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class SurfaceRefGenericBlockPortal extends SurfaceRefGenericBlockPortal_base {
    static styles: import("lit").CSSResult;
    firstUpdated(): void;
    render(): TemplateResult;
    accessor index: number;
    accessor model: ImageBlockModel | AttachmentBlockModel | BookmarkBlockModel | EmbedGithubModel | EmbedYoutubeModel | EmbedFigmaModel | EmbedLinkedDocModel | EmbedSyncedDocModel | EmbedHtmlModel | EmbedLoomModel;
    accessor renderModel: (model: BlockModel) => TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'surface-ref-generic-block-portal': SurfaceRefGenericBlockPortal;
    }
}
export {};
//# sourceMappingURL=generic-block.d.ts.map