import { type EmbedHtmlBlockProps } from './html-model.js';
export declare const EmbedHtmlBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedHtmlBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedHtmlBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedHtmlBlockProps>>) | undefined;
};
//# sourceMappingURL=html-schema.d.ts.map