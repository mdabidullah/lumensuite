import type { Constructor, SerializedXYWH } from '@blocksuite/global/utils';
import { GfxBlockElementModel } from '@blocksuite/block-std/gfx';
import { BlockModel } from '@blocksuite/store';
export type GfxCompatibleProps = {
    xywh: SerializedXYWH;
    index: string;
};
export declare function GfxCompatible<Props extends GfxCompatibleProps, T extends Constructor<BlockModel<Props>> = Constructor<BlockModel<Props>>>(BlockModelSuperClass: T): typeof GfxBlockElementModel<Props>;
//# sourceMappingURL=gfx-compatible.d.ts.map