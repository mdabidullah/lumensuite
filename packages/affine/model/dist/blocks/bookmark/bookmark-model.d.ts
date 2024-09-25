import type { GfxElementGeometry } from '@lumensuite/block-std/gfx';
import type { SerializedXYWH } from '@lumensuite/global/utils';
import type { EmbedCardStyle, LinkPreviewData } from '../../utils/index.js';
export interface BookmarkBlockEdgelessProps {
    index: string;
    xywh: SerializedXYWH;
    rotate: number;
}
export declare const BookmarkStyles: EmbedCardStyle[];
export type BookmarkBlockProps = {
    style: (typeof BookmarkStyles)[number];
    url: string;
    caption: string | null;
} & LinkPreviewData & BookmarkBlockEdgelessProps;
export declare const BookmarkBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<BookmarkBlockProps>;
        flavour: "affine:bookmark";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: BookmarkBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<BookmarkBlockProps>) | undefined;
};
declare const BookmarkBlockModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<BookmarkBlockProps>;
};
export declare class BookmarkBlockModel extends BookmarkBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
            'affine:bookmark': BookmarkBlockModel;
        }
        interface BlockModels {
            'affine:bookmark': BookmarkBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=bookmark-model.d.ts.map