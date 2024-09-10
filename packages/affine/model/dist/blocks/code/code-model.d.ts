import { type SchemaToModel, type Text } from '@blocksuite/store';
interface CodeBlockProps {
    text: Text;
    language: string | null;
    wrap: boolean;
    caption: string;
}
export declare const CodeBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<CodeBlockProps>;
        flavour: "affine:code";
    } & {
        version: number;
        role: "content";
        parent: string[];
        children: never[];
    };
    onUpgrade?: ((data: CodeBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<CodeBlockProps>) | undefined;
};
export type CodeBlockModel = SchemaToModel<typeof CodeBlockSchema>;
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'affine:code': CodeBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=code-model.d.ts.map