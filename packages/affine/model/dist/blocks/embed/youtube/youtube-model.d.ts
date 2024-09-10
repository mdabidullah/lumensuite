import type { EmbedCardStyle } from '../../../utils/index.js';
export type EmbedYoutubeBlockUrlData = {
    videoId: string | null;
    image: string | null;
    title: string | null;
    description: string | null;
    creator: string | null;
    creatorUrl: string | null;
    creatorImage: string | null;
};
export declare const EmbedYoutubeStyles: EmbedCardStyle[];
export type EmbedYoutubeBlockProps = {
    style: (typeof EmbedYoutubeStyles)[number];
    url: string;
    caption: string | null;
} & EmbedYoutubeBlockUrlData;
declare const EmbedYoutubeModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<{
        style: (typeof EmbedYoutubeStyles)[number];
        url: string;
        caption: string | null;
    } & EmbedYoutubeBlockUrlData & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedYoutubeModel extends EmbedYoutubeModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-youtube': EmbedYoutubeModel;
        }
        interface BlockModels {
            'affine:embed-youtube': EmbedYoutubeModel;
        }
    }
}
export {};
//# sourceMappingURL=youtube-model.d.ts.map