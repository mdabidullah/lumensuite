import type { GfxElementGeometry } from '@blocksuite/block-std/gfx';
import type { SerializedXYWH } from '@blocksuite/global/utils';
import { type TextStyleProps } from '../../consts/index.js';
type EdgelessTextProps = {
    xywh: SerializedXYWH;
    index: string;
    scale: number;
    rotate: number;
    hasMaxWidth: boolean;
} & Omit<TextStyleProps, 'fontSize'>;
export declare const EdgelessTextBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<EdgelessTextProps>;
        flavour: "affine:edgeless-text";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: EdgelessTextProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<EdgelessTextProps>) | undefined;
};
declare const EdgelessTextBlockModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<EdgelessTextProps>;
};
export declare class EdgelessTextBlockModel extends EdgelessTextBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'affine:edgeless-text': EdgelessTextBlockModel;
        }
        interface EdgelessBlockModelMap {
            'affine:edgeless-text': EdgelessTextBlockModel;
        }
        interface EdgelessTextModelMap {
            'edgeless-text': EdgelessTextBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=edgeless-text-model.d.ts.map