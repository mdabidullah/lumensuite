import type { GfxElementGeometry } from '@blocksuite/block-std/gfx';
import type { SerializedXYWH } from '@blocksuite/global/utils';
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
        props: import("@blocksuite/store").PropsGetter<BookmarkBlockProps>;
        flavour: "affine:bookmark";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: BookmarkBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<BookmarkBlockProps>) | undefined;
};
declare const BookmarkBlockModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<BookmarkBlockProps>;
};
export declare class BookmarkBlockModel extends BookmarkBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace BlockSuite {
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