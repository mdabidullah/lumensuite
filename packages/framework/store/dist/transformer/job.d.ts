import type { BlockModel } from '../schema/index.js';
import type { Doc, DocCollection } from '../store/index.js';
import type { JobMiddleware } from './middleware.js';
import type { BlockSnapshot, CollectionInfoSnapshot, DocSnapshot, SliceSnapshot } from './type.js';
import { AssetsManager } from './assets.js';
import { type DraftModel } from './draft.js';
import { Slice } from './slice.js';
export type JobConfig = {
    collection: DocCollection;
    middlewares?: JobMiddleware[];
};
export declare class Job {
    private readonly _adapterConfigs;
    private readonly _assetsManager;
    private _batchCounter;
    private readonly _collection;
    private readonly _pendingOperations;
    private readonly _slots;
    private _unblockTimer?;
    blockToSnapshot: (model: DraftModel) => Promise<BlockSnapshot | undefined>;
    collectionInfoToSnapshot: () => CollectionInfoSnapshot | undefined;
    docToSnapshot: (doc: Doc) => Promise<DocSnapshot | undefined>;
    sliceToSnapshot: (slice: Slice) => Promise<SliceSnapshot | undefined>;
    snapshotToBlock: (snapshot: BlockSnapshot, doc: Doc, parent?: string, index?: number) => Promise<BlockModel | undefined>;
    snapshotToDoc: (snapshot: DocSnapshot) => Promise<Doc | undefined>;
    snapshotToModelData: (snapshot: BlockSnapshot) => Promise<import("./base.js").SnapshotReturn<object> | undefined>;
    snapshotToSlice: (snapshot: SliceSnapshot, doc: Doc, parent?: string, index?: number) => Promise<Slice | undefined>;
    walk: (snapshot: DocSnapshot, callback: (block: BlockSnapshot) => void) => void;
    get adapterConfigs(): Map<string, string>;
    get assets(): Map<string, Blob>;
    get assetsManager(): AssetsManager;
    get collection(): DocCollection;
    constructor({ collection, middlewares }: JobConfig);
    private _batchSnapshotToBlock;
    private _blockToSnapshot;
    private _exportDocMeta;
    private _getCollectionMeta;
    private _getSchema;
    private _getTransformer;
    private _snapshotToBlock;
    reset(): void;
}
//# sourceMappingURL=job.d.ts.map