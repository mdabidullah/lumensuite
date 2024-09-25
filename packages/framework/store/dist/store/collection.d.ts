import { type Logger, Slot } from '@lumensuite/global/utils';
import { AwarenessEngine, type AwarenessSource, BlobEngine, type BlobSource, DocEngine, type DocSource } from '@lumensuite/sync';
import * as Y from 'yjs';
import type { Schema } from '../schema/index.js';
import type { IdGenerator } from '../utils/id-generator.js';
import type { Doc, Query } from './doc/index.js';
import type { IdGeneratorType } from './id.js';
import { AwarenessStore, LumenSuiteDoc } from '../yjs/index.js';
import { DocCollectionAddonType } from './addon/index.js';
import { BlockCollection, type GetDocOptions } from './doc/block-collection.js';
import { DocCollectionMeta, type DocMeta } from './meta.js';
export type DocCollectionOptions = {
    schema: Schema;
    id?: string;
    idGenerator?: IdGeneratorType | IdGenerator;
    defaultFlags?: Partial<LumenSuiteFlags>;
    logger?: Logger;
    docSources?: {
        main: DocSource;
        shadows?: DocSource[];
    };
    blobSources?: {
        main: BlobSource;
        shadows?: BlobSource[];
    };
    awarenessSources?: AwarenessSource[];
};
export interface StackItem {
    meta: Map<'cursor-location' | 'selection-state', unknown>;
}
export declare class DocCollection extends DocCollectionAddonType {
    static Y: typeof Y;
    protected readonly _schema: Schema;
    readonly awarenessStore: AwarenessStore;
    readonly awarenessSync: AwarenessEngine;
    readonly blobSync: BlobEngine;
    readonly blockCollections: Map<string, BlockCollection>;
    readonly doc: LumenSuiteDoc;
    readonly docSync: DocEngine;
    readonly id: string;
    readonly idGenerator: IdGenerator;
    meta: DocCollectionMeta;
    slots: {
        docAdded: Slot<string>;
        docUpdated: Slot<void>;
        docRemoved: Slot<string>;
        docCreated: Slot<string>;
    };
    get docs(): Map<string, BlockCollection>;
    get isEmpty(): boolean;
    get schema(): Schema;
    constructor({ id, schema, idGenerator, defaultFlags, awarenessSources, docSources, blobSources, logger, }: DocCollectionOptions);
    private _bindDocMetaEvents;
    private _hasDoc;
    /**
     * Verify that all data has been successfully saved to the primary storage.
     * Return true if the data transfer is complete and it is secure to terminate the synchronization operation.
     */
    canGracefulStop(): void;
    /**
     * By default, only an empty doc will be created.
     * If the `init` parameter is passed, a `surface`, `note`, and `paragraph` block
     * will be created in the doc simultaneously.
     */
    createDoc(options?: {
        id?: string;
        query?: Query;
    }): Doc;
    /**
     * Terminate the data sync process forcefully, which may cause data loss.
     * It is advised to invoke `canGracefulStop` before calling this method.
     */
    forceStop(): void;
    getBlockCollection(docId: string): BlockCollection | null;
    getDoc(docId: string, options?: GetDocOptions): Doc | null;
    removeDoc(docId: string): void;
    /** Update doc meta state. Note that this intentionally does not mutate doc state. */
    setDocMeta(docId: string, props: Partial<DocMeta>): void;
    /**
     * Start the data sync process
     */
    start(): void;
    /**
     * Wait for all data has been successfully saved to the primary storage.
     */
    waitForGracefulStop(abort?: AbortSignal): Promise<void>;
    waitForSynced(): Promise<unknown>;
}
//# sourceMappingURL=collection.d.ts.map