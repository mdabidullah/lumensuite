import type { GfxElementGeometry } from '@lumensuite/block-std/gfx';
import type { SerializedXYWH } from '@lumensuite/global/utils';
import { ImageBlockTransformer } from './image-transformer.js';
export type ImageBlockProps = {
    caption?: string;
    sourceId?: string;
    width?: number;
    height?: number;
    index: string;
    xywh: SerializedXYWH;
    rotate: number;
    size?: number;
};
export declare const ImageBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<ImageBlockProps>;
        flavour: "affine:image";
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: ImageBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => ImageBlockTransformer) | undefined;
};
declare const ImageBlockModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<ImageBlockProps>;
};
export declare class ImageBlockModel extends ImageBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:image': ImageBlockModel;
        }
        interface EdgelessBlockModelMap {
            'affine:image': ImageBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=image-model.d.ts.map