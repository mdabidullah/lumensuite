import { type EmbedLoomBlockProps } from './loom-model.js';
export declare const EmbedLoomBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedLoomBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedLoomBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedLoomBlockProps>>) | undefined;
};
//# sourceMappingURL=loom-schema.d.ts.map