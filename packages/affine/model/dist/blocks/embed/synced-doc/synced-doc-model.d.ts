import type { EmbedCardStyle } from '../../../utils/index.js';
export declare const EmbedSyncedDocStyles: EmbedCardStyle[];
export type EmbedSyncedDocBlockProps = {
    pageId: string;
    style: EmbedCardStyle;
    caption?: string | null;
    scale?: number;
};
declare const EmbedSyncedDocModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<EmbedSyncedDocBlockProps & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedSyncedDocModel extends EmbedSyncedDocModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-synced-doc': EmbedSyncedDocModel;
        }
        interface BlockModels {
            'affine:embed-synced-doc': EmbedSyncedDocModel;
        }
    }
}
export {};
//# sourceMappingURL=synced-doc-model.d.ts.map