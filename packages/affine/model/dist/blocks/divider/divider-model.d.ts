import { type SchemaToModel } from '@lumensuite/store';
export declare const DividerBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<object>;
        flavour: "affine:divider";
    } & {
        version: number;
        role: "content";
        children: never[];
    };
    onUpgrade?: ((data: object, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<object>) | undefined;
};
export type DividerBlockModel = SchemaToModel<typeof DividerBlockSchema>;
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:divider': DividerBlockModel;
        }
    }
}
//# sourceMappingURL=divider-model.d.ts.map