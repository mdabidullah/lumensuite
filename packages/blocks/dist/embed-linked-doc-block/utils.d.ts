import type { EmbedLinkedDocModel, EmbedLinkedDocStyles } from '@blocksuite/affine-model';
import type { TemplateResult } from 'lit';
type EmbedCardImages = {
    LoadingIcon: TemplateResult<1>;
    ReloadIcon: TemplateResult<1>;
    LinkedDocIcon: TemplateResult<1>;
    LinkedDocDeletedIcon: TemplateResult<1>;
    LinkedDocEmptyBanner: TemplateResult<1>;
    LinkedDocDeletedBanner: TemplateResult<1>;
    SyncedDocErrorBanner: TemplateResult<1>;
};
export declare function getEmbedLinkedDocIcons(editorMode: 'page' | 'edgeless', style: (typeof EmbedLinkedDocStyles)[number]): EmbedCardImages;
export declare function isLinkToNode({ params }: EmbedLinkedDocModel): boolean;
export {};
//# sourceMappingURL=utils.d.ts.map