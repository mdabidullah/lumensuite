import type { ReferenceInfo } from '../../../consts/doc.js';
import type { EmbedCardStyle } from '../../../utils/index.js';
export declare const EmbedLinkedDocStyles: EmbedCardStyle[];
export type EmbedLinkedDocBlockProps = {
    style: EmbedCardStyle;
    caption: string | null;
} & ReferenceInfo;
declare const EmbedLinkedDocModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<{
        style: EmbedCardStyle;
        caption: string | null;
    } & {
        pageId: string;
        params?: {
            mode?: "page" | "edgeless" | undefined;
            blockIds?: string[] | undefined;
            elementIds?: string[] | undefined;
        } | undefined;
    } & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedLinkedDocModel extends EmbedLinkedDocModel_base {
}
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-linked-doc': EmbedLinkedDocModel;
        }
        interface BlockModels {
            'affine:embed-linked-doc': EmbedLinkedDocModel;
        }
    }
}
export {};
//# sourceMappingURL=linked-doc-model.d.ts.map