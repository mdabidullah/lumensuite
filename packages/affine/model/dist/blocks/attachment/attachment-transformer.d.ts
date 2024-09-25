import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload } from '@lumensuite/store';
import { BaseBlockTransformer } from '@lumensuite/store';
import type { AttachmentBlockProps } from './attachment-model.js';
export declare class AttachmentBlockTransformer extends BaseBlockTransformer<AttachmentBlockProps> {
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<AttachmentBlockProps>>;
    toSnapshot(payload: ToSnapshotPayload<AttachmentBlockProps>): Promise<{
        version?: number | undefined;
        flavour: string;
        id: string;
        props: Record<string, unknown>;
    }>;
}
//# sourceMappingURL=attachment-transformer.d.ts.map