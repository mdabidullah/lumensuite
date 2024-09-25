import { type SchemaToModel } from '@lumensuite/store';
export type ParagraphType = 'text' | 'quote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare const ParagraphBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<{
            type: ParagraphType;
            text: import("@lumensuite/store").Text;
        }>;
        flavour: "affine:paragraph";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: ParagraphType;
        text: import("@lumensuite/store").Text;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<{
        type: ParagraphType;
        text: import("@lumensuite/store").Text;
    }>) | undefined;
};
export type ParagraphBlockModel = SchemaToModel<typeof ParagraphBlockSchema>;
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:paragraph': ParagraphBlockModel;
        }
    }
}
//# sourceMappingURL=paragraph-model.d.ts.map