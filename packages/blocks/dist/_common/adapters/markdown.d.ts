import { type AssetsManager, BaseAdapter, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot, type ToBlockSnapshotPayload, type ToDocSnapshotPayload } from '@lumensuite/store';
export type Markdown = string;
type MarkdownToSliceSnapshotPayload = {
    file: Markdown;
    assets?: AssetsManager;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class MarkdownAdapter extends BaseAdapter<Markdown> {
    private _traverseMarkdown;
    private _traverseSnapshot;
    private _astToMarkdown;
    private _deltaToMdAST;
    private _markdownToAst;
    private _mdastToDelta;
    fromBlockSnapshot({ snapshot, assets, }: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<Markdown>>;
    fromDocSnapshot({ snapshot, assets, }: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<Markdown>>;
    fromSliceSnapshot({ snapshot, assets, }: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<Markdown>>;
    toBlockSnapshot(payload: ToBlockSnapshotPayload<Markdown>): Promise<BlockSnapshot>;
    toDocSnapshot(payload: ToDocSnapshotPayload<Markdown>): Promise<DocSnapshot>;
    toSliceSnapshot(payload: MarkdownToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=markdown.d.ts.map