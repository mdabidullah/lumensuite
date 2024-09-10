import type { TemplateResult } from 'lit';
type EmbedCardIcons = {
    LoadingIcon: TemplateResult<1>;
    EmbedCardBannerIcon: TemplateResult<1>;
    EmbedCardHorizontalIcon: TemplateResult<1>;
    EmbedCardListIcon: TemplateResult<1>;
    EmbedCardVerticalIcon: TemplateResult<1>;
    EmbedCardCubeIcon: TemplateResult<1>;
};
export declare function getEmbedCardIcons(): EmbedCardIcons;
export declare function extractSearchParams(link: string): {
    params: {
        mode?: "page" | "edgeless" | undefined;
        blockIds?: string[] | undefined;
        elementIds?: string[] | undefined;
    };
} | null;
export {};
//# sourceMappingURL=url.d.ts.map