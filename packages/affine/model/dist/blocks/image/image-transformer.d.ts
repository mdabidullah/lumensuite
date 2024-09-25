import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload } from '@lumensuite/store';
import { BaseBlockTransformer } from '@lumensuite/store';
import type { ImageBlockProps } from './image-model.js';
export declare class ImageBlockTransformer extends BaseBlockTransformer<ImageBlockProps> {
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<ImageBlockProps>>;
    toSnapshot(payload: ToSnapshotPayload<ImageBlockProps>): Promise<{
        version?: number | undefined;
        flavour: string;
        id: string;
        props: Record<string, unknown>;
    }>;
}
//# sourceMappingURL=image-transformer.d.ts.map