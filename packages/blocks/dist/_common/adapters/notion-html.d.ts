import { type AssetsManager, BaseAdapter, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot } from '@lumensuite/store';
export type NotionHtml = string;
type NotionHtmlToSliceSnapshotPayload = {
    file: NotionHtml;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
type NotionHtmlToDocSnapshotPayload = {
    file: NotionHtml;
    assets?: AssetsManager;
    pageId?: string;
    pageMap?: Map<string, string>;
};
type NotionHtmlToBlockSnapshotPayload = NotionHtmlToDocSnapshotPayload;
export declare class NotionHtmlAdapter extends BaseAdapter<NotionHtml> {
    private _hastToDelta;
    private _hastToDeltaSpreaded;
    private _traverseNotionHtml;
    private _htmlToAst;
    fromBlockSnapshot(_payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<NotionHtml>>;
    fromDocSnapshot(_payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<NotionHtml>>;
    fromSliceSnapshot(_payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<NotionHtml>>;
    toBlockSnapshot(payload: NotionHtmlToBlockSnapshotPayload): Promise<BlockSnapshot>;
    toDoc(payload: NotionHtmlToDocSnapshotPayload): Promise<import("@lumensuite/store").Doc | undefined>;
    toDocSnapshot(payload: NotionHtmlToDocSnapshotPayload): Promise<DocSnapshot>;
    toSliceSnapshot(payload: NotionHtmlToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=notion-html.d.ts.map