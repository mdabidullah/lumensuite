import type { SerializedXYWH } from '@blocksuite/global/utils';
import { type GfxElementGeometry } from '@blocksuite/block-std/gfx';
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
        props: import("@blocksuite/store").PropsGetter<LatexProps>;
        flavour: "affine:latex";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: LatexProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<LatexProps>) | undefined;
};
declare const LatexBlockModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<LatexProps>;
};
export declare class LatexBlockModel extends LatexBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace BlockSuite {
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