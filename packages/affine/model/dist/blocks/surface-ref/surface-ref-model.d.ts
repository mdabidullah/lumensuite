import { type SchemaToModel } from '@lumensuite/store';
type SurfaceRefProps = {
    reference: string;
    caption: string;
    refFlavour: string;
};
export declare const SurfaceRefBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<SurfaceRefProps>;
        flavour: "affine:surface-ref";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: SurfaceRefProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<SurfaceRefProps>) | undefined;
};
export type SurfaceRefBlockModel = SchemaToModel<typeof SurfaceRefBlockSchema>;
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:surface-ref': SurfaceRefBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=surface-ref-model.d.ts.map