import type { Constructor, SerializedXYWH } from '@lumensuite/global/utils';
import { GfxBlockElementModel } from '@lumensuite/block-std/gfx';
import { BlockModel } from '@lumensuite/store';
export type GfxCompatibleProps = {
    xywh: SerializedXYWH;
    index: string;
};
export declare function GfxCompatible<Props extends GfxCompatibleProps, T extends Constructor<BlockModel<Props>> = Constructor<BlockModel<Props>>>(BlockModelSuperClass: T): typeof GfxBlockElementModel<Props>;
//# sourceMappingURL=gfx-compatible.d.ts.map