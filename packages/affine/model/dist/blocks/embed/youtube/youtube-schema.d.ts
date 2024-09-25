import { type EmbedYoutubeBlockProps } from './youtube-model.js';
export declare const EmbedYoutubeBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedYoutubeBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedYoutubeBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedYoutubeBlockProps>>) | undefined;
};
//# sourceMappingURL=youtube-schema.d.ts.map