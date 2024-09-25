import type { SchemaToModel, Text } from '@lumensuite/store';
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
        props: import("@lumensuite/store").PropsGetter<ListProps>;
        flavour: "affine:list";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: ListProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<ListProps>) | undefined;
};
export type ListBlockModel = SchemaToModel<typeof ListBlockSchema>;
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:list': ListBlockModel;
        }
    }
}
//# sourceMappingURL=list-model.d.ts.map