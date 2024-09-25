import type { EmbedCardStyle } from '../../../utils/index.js';
export type EmbedLoomBlockUrlData = {
    videoId: string | null;
    image: string | null;
    title: string | null;
    description: string | null;
};
export declare const EmbedLoomStyles: EmbedCardStyle[];
export type EmbedLoomBlockProps = {
    style: (typeof EmbedLoomStyles)[number];
    url: string;
    caption: string | null;
} & EmbedLoomBlockUrlData;
declare const EmbedLoomModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<{
        style: (typeof EmbedLoomStyles)[number];
        url: string;
        caption: string | null;
    } & EmbedLoomBlockUrlData & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedLoomModel extends EmbedLoomModel_base {
}
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-loom': EmbedLoomModel;
        }
        interface BlockModels {
            'affine:embed-loom': EmbedLoomModel;
        }
    }
}
export {};
//# sourceMappingURL=loom-model.d.ts.map