import { type EmbedFigmaBlockProps } from './figma-model.js';
export declare const EmbedFigmaBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedFigmaBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedFigmaBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedFigmaBlockProps>>) | undefined;
};
//# sourceMappingURL=figma-schema.d.ts.map