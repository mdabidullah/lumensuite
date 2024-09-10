import { type EmbedSyncedDocBlockProps } from './synced-doc-model.js';
export declare const defaultEmbedSyncedDocBlockProps: EmbedSyncedDocBlockProps;
export declare const EmbedSyncedDocBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../../../utils/helper.js").EmbedProps<EmbedSyncedDocBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../../../utils/helper.js").EmbedProps<EmbedSyncedDocBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../../../utils/helper.js").EmbedProps<EmbedSyncedDocBlockProps>>) | undefined;
};
//# sourceMappingURL=synced-doc-schema.d.ts.map