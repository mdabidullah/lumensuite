import { type SchemaToModel } from '@blocksuite/store';
export type ParagraphType = 'text' | 'quote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare const ParagraphBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<{
            type: ParagraphType;
            text: import("@blocksuite/store").Text;
        }>;
        flavour: "affine:paragraph";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: ParagraphType;
        text: import("@blocksuite/store").Text;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<{
        type: ParagraphType;
        text: import("@blocksuite/store").Text;
    }>) | undefined;
};
export type ParagraphBlockModel = SchemaToModel<typeof ParagraphBlockSchema>;
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'affine:paragraph': ParagraphBlockModel;
        }
    }
}
//# sourceMappingURL=paragraph-model.d.ts.map