import type { GfxElementGeometry } from '@blocksuite/block-std/gfx';
import type { SerializedXYWH } from '@blocksuite/global/utils';
import { type EmbedCardStyle } from '../../utils/index.js';
import { AttachmentBlockTransformer } from './attachment-transformer.js';
/**
 * When the attachment is uploading, the `sourceId` is `undefined`.
 * And we can query the upload status by the `isAttachmentLoading` function.
 *
 * Other collaborators will see an error attachment block when the blob has not finished uploading.
 * This issue can be resolve by sync the upload status through the awareness system in the future.
 *
 * When the attachment is uploaded, the `sourceId` is the id of the blob.
 *
 * If there are no `sourceId` and the `isAttachmentLoading` function returns `false`,
 * it means that the attachment is failed to upload.
 */
/**
 * @deprecated
 */
type BackwardCompatibleUndefined = undefined;
export declare const AttachmentBlockStyles: EmbedCardStyle[];
export interface AttachmentBlockEdgelessProps {
    index: string;
    xywh: SerializedXYWH;
    rotate: number;
}
export type AttachmentBlockProps = {
    name: string;
    size: number;
    /**
     * MIME type
     */
    type: string;
    caption?: string;
    sourceId?: string;
    /**
     * Whether to show the attachment as an embed view.
     */
    embed: boolean | BackwardCompatibleUndefined;
    style?: (typeof AttachmentBlockStyles)[number];
} & AttachmentBlockEdgelessProps;
export declare const defaultAttachmentProps: AttachmentBlockProps;
export declare const AttachmentBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<AttachmentBlockProps>;
        flavour: "affine:attachment";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: AttachmentBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => AttachmentBlockTransformer) | undefined;
};
declare const AttachmentBlockModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<AttachmentBlockProps>;
};
export declare class AttachmentBlockModel extends AttachmentBlockModel_base implements GfxElementGeometry {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:attachment': AttachmentBlockModel;
        }
        interface BlockModels {
            'affine:attachment': AttachmentBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=attachment-model.d.ts.map