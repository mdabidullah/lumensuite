import type { EmbedCardStyle } from '../../../utils/index.js';
export declare const EmbedHtmlStyles: EmbedCardStyle[];
export type EmbedHtmlBlockProps = {
    style: (typeof EmbedHtmlStyles)[number];
    caption: string | null;
    html?: string;
    design?: string;
};
declare const EmbedHtmlModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<EmbedHtmlBlockProps & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedHtmlModel extends EmbedHtmlModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-html': EmbedHtmlModel;
        }
        interface BlockModels {
            'affine:embed-html': EmbedHtmlModel;
        }
    }
}
export {};
//# sourceMappingURL=html-model.d.ts.map