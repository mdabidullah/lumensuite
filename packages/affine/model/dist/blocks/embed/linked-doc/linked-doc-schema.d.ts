import { type EmbedLinkedDocBlockProps } from './linked-doc-model.js';
export declare const EmbedLinkedDocBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedLinkedDocBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedLinkedDocBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedLinkedDocBlockProps>>) | undefined;
};
//# sourceMappingURL=linked-doc-schema.d.ts.map