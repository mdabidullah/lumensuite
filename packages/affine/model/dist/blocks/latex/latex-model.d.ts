import type { SerializedXYWH } from '@lumensuite/global/utils';
import { type GfxElementGeometry } from '@lumensuite/block-std/gfx';
type LatexProps = {
    xywh: SerializedXYWH;
    index: string;
    scale: number;
    rotate: number;
    latex: string;
};
export declare const LatexBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<LatexProps>;
        flavour: "affine:latex";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: LatexProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<LatexProps>) | undefined;
};
declare const LatexBlockModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<LatexProps>;
};
export declare class LatexBlockModel extends LatexBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:latex': LatexBlockModel;
        }
        interface EdgelessBlockModelMap {
            'affine:latex': LatexBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=latex-model.d.ts.map