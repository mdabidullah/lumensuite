import type { SchemaToModel, Text } from '@blocksuite/store';
export type ListType = 'bulleted' | 'numbered' | 'todo' | 'toggle';
export interface ListProps {
    type: ListType;
    text: Text;
    checked: boolean;
    collapsed: boolean;
    order: number | null;
}
export declare const ListBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<ListProps>;
        flavour: "affine:list";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: ListProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<ListProps>) | undefined;
};
export type ListBlockModel = SchemaToModel<typeof ListBlockSchema>;
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'affine:list': ListBlockModel;
        }
    }
}
//# sourceMappingURL=list-model.d.ts.map