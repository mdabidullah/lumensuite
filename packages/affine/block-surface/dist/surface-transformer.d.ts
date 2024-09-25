import type { SurfaceBlockProps } from '@lumensuite/block-std/gfx';
import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload, Y } from '@lumensuite/store';
import { BaseBlockTransformer } from '@lumensuite/store';
export declare class SurfaceBlockTransformer extends BaseBlockTransformer<SurfaceBlockProps> {
    private _elementToJSON;
    private _fromJSON;
    private _toJSON;
    elementFromJSON(element: Record<string, unknown>): Y.Map<unknown>;
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<SurfaceBlockProps>>;
    toSnapshot(payload: ToSnapshotPayload<SurfaceBlockProps>): Promise<{
        id: string;
        flavour: string;
        version?: number | undefined;
        props: Record<string, unknown>;
    }>;
}
//# sourceMappingURL=surface-transformer.d.ts.map