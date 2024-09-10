import type { SurfaceBlockProps } from '@blocksuite/block-std/gfx';
import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload, Y } from '@blocksuite/store';
import { BaseBlockTransformer } from '@blocksuite/store';
export declare class SurfaceBlockTransformer extends BaseBlockTransformer<SurfaceBlockProps> {
    private _elementToJSON;
    private _fromJSON;
    private _toJSON;
    elementFromJSON(element: Record<string, unknown>): Y.Map<unknown>;
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<SurfaceBlockProps>>;
    toSnapshot(payload: ToSnapshotPayload<SurfaceBlockProps>): Promise<{
        flavour: string;
        version?: number | undefined;
        id: string;
        props: Record<string, unknown>;
    }>;
}
//# sourceMappingURL=surface-transformer.d.ts.map