import { type AssetsManager, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot, type ToBlockSnapshotPayload, type ToDocSnapshotPayload } from '@lumensuite/store';
import { BaseAdapter } from '@lumensuite/store';
export type Html = string;
type HtmlToSliceSnapshotPayload = {
    file: Html;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class HtmlAdapter extends BaseAdapter<Html> {
    private _astToHtml;
    private _deltaToHast;
    private _hastToDelta;
    private _hastToDeltaSpreaded;
    private _traverseHtml;
    private _traverseSnapshot;
    private _htmlToAst;
    fromBlockSnapshot(payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<string>>;
    fromDocSnapshot(payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<string>>;
    fromSliceSnapshot(payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<string>>;
    toBlockSnapshot(payload: ToBlockSnapshotPayload<string>): Promise<BlockSnapshot>;
    toDocSnapshot(payload: ToDocSnapshotPayload<string>): Promise<DocSnapshot>;
    toSliceSnapshot(payload: HtmlToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=html.d.ts.map