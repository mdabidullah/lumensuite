import { type DBSchema, type IDBPDatabase } from 'idb';
import type { DocSource } from '../source.js';
export declare const dbVersion = 1;
export declare const DEFAULT_DB_NAME = "lumensuite-local";
type UpdateMessage = {
    timestamp: number;
    update: Uint8Array;
};
type DocCollectionPersist = {
    id: string;
    updates: UpdateMessage[];
};
interface LumenSuiteBinaryDB extends DBSchema {
    collection: {
        key: string;
        value: DocCollectionPersist;
    };
}
export declare function upgradeDB(db: IDBPDatabase<LumenSuiteBinaryDB>): void;
export declare class IndexedDBDocSource implements DocSource {
    readonly dbName: string;
    channel: BroadcastChannel;
    dbPromise: Promise<IDBPDatabase<LumenSuiteBinaryDB>> | null;
    mergeCount: number;
    name: string;
    constructor(dbName?: string);
    getDb(): Promise<IDBPDatabase<LumenSuiteBinaryDB>>;
    pull(docId: string, state: Uint8Array): Promise<{
        data: Uint8Array;
        state?: Uint8Array | undefined;
    } | null>;
    push(docId: string, data: Uint8Array): Promise<void>;
    subscribe(cb: (docId: string, data: Uint8Array) => void): () => void;
}
export {};
//# sourceMappingURL=indexeddb.d.ts.map