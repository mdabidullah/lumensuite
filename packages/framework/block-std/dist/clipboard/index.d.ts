import type { BaseAdapter, BlockSnapshot, Doc, JobMiddleware, Slice } from '@lumensuite/store';
import type { RootContentMap } from 'hast';
import { Job } from '@lumensuite/store';
import { LifeCycleWatcher } from '../extension/index.js';
type AdapterConstructor<T extends BaseAdapter> = new (job: Job) => T;
type HastUnionType<K extends keyof RootContentMap, V extends RootContentMap[K]> = V;
export declare function onlyContainImgElement(ast: HastUnionType<keyof RootContentMap, RootContentMap[keyof RootContentMap]>): 'yes' | 'no' | 'maybe';
export declare class Clipboard extends LifeCycleWatcher {
    static readonly key = "clipboard";
    private _adapterMap;
    private _getDataByType;
    private _getSnapshotByPriority;
    private _jobMiddlewares;
    copy: (slice: Slice) => Promise<void>;
    copySlice: (slice: Slice) => Promise<void>;
    duplicateSlice: (slice: Slice, doc: Doc, parent?: string, index?: number, type?: string) => Promise<void>;
    paste: (event: ClipboardEvent, doc: Doc, parent?: string, index?: number) => Promise<Slice | null | undefined>;
    pasteBlockSnapshot: (snapshot: BlockSnapshot, doc: Doc, parent?: string, index?: number) => Promise<import("@lumensuite/store").BlockModel<object, object & {}> | undefined>;
    registerAdapter: <T extends BaseAdapter>(mimeType: string, adapter: AdapterConstructor<T>, priority?: number) => void;
    unregisterAdapter: (mimeType: string) => void;
    unuse: (middleware: JobMiddleware) => void;
    use: (middleware: JobMiddleware) => void;
    get configs(): Map<string, string>;
    private _getClipboardItem;
    private _getJob;
    readFromClipboard(clipboardData: DataTransfer): any;
    writeToClipboard(updateItems: (items: Record<string, unknown>) => Promise<Record<string, unknown>> | Record<string, unknown>): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map