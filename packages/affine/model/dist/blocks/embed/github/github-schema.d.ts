import { type EmbedGithubBlockProps } from './github-model.js';
export declare const EmbedGithubBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedGithubBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedGithubBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedGithubBlockProps>>) | undefined;
};
//# sourceMappingURL=github-schema.d.ts.map