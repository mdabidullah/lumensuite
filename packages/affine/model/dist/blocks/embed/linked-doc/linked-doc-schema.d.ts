import { type EmbedLinkedDocBlockProps } from './linked-doc-model.js';
export declare const EmbedLinkedDocBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedLinkedDocBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedLinkedDocBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedLinkedDocBlockProps>>) | undefined;
};
//# sourceMappingURL=linked-doc-schema.d.ts.map