import type { Text } from '@lumensuite/store';
import { BlockModel } from '@lumensuite/store';
type RootBlockProps = {
    title: Text;
};
export declare class RootBlockModel extends BlockModel<RootBlockProps> {
    constructor();
}
export declare const RootBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<RootBlockProps>;
        flavour: "affine:page";
    } & {
        version: number;
        role: "root";
    };
    onUpgrade?: ((data: RootBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<RootBlockProps>) | undefined;
};
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:page': RootBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=root-block-model.d.ts.map