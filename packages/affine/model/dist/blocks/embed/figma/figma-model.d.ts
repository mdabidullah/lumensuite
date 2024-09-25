import type { EmbedCardStyle } from '../../../utils/index.js';
export type EmbedFigmaBlockUrlData = {
    title: string | null;
    description: string | null;
};
export declare const EmbedFigmaStyles: EmbedCardStyle[];
export type EmbedFigmaBlockProps = {
    style: (typeof EmbedFigmaStyles)[number];
    url: string;
    caption: string | null;
} & EmbedFigmaBlockUrlData;
declare const EmbedFigmaModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<{
        style: (typeof EmbedFigmaStyles)[number];
        url: string;
        caption: string | null;
    } & EmbedFigmaBlockUrlData & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedFigmaModel extends EmbedFigmaModel_base {
}
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-figma': EmbedFigmaModel;
        }
        interface BlockModels {
            'affine:embed-figma': EmbedFigmaModel;
        }
    }
}
export {};
//# sourceMappingURL=figma-model.d.ts.map