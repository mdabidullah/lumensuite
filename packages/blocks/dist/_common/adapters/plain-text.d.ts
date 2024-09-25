import { type AssetsManager, BaseAdapter, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot, type ToBlockSnapshotPayload, type ToDocSnapshotPayload } from '@lumensuite/store';
export type PlainText = string;
type PlainTextToSliceSnapshotPayload = {
    file: PlainText;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class PlainTextAdapter extends BaseAdapter<PlainText> {
    private _traverseSnapshot;
    fromBlockSnapshot({ snapshot, }: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<PlainText>>;
    fromDocSnapshot({ snapshot, assets, }: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<PlainText>>;
    fromSliceSnapshot({ snapshot, }: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<PlainText>>;
    toBlockSnapshot(payload: ToBlockSnapshotPayload<PlainText>): BlockSnapshot;
    toDocSnapshot(payload: ToDocSnapshotPayload<PlainText>): DocSnapshot;
    toSliceSnapshot(payload: PlainTextToSliceSnapshotPayload): SliceSnapshot | null;
}
export {};
//# sourceMappingURL=plain-text.d.ts.map