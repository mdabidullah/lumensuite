import { Slot } from '@lumensuite/global/utils';
import * as Y from 'yjs';
import type { BlockModel } from '../../schema/base.js';
import type { IdGenerator } from '../../utils/id-generator.js';
import type { AwarenessStore, LumenSuiteDoc } from '../../yjs/index.js';
import type { DocCollection } from '../collection.js';
import type { YBlock } from './index.js';
import type { Query } from './query.js';
import { Text } from '../../reactive/text.js';
import { DocCRUD } from './crud.js';
import { Doc } from './doc.js';
export type YBlocks = Y.Map<YBlock>;
/** JSON-serializable properties of a block */
export type BlockSysProps = {
    id: string;
    flavour: string;
    children?: BlockModel[];
};
export type BlockProps = BlockSysProps & Record<string, unknown>;
type DocOptions = {
    id: string;
    collection: DocCollection;
    doc: LumenSuiteDoc;
    awarenessStore: AwarenessStore;
    idGenerator?: IdGenerator;
};
export type GetDocOptions = {
    query?: Query;
    readonly?: boolean;
};
export declare class BlockCollection {
    private readonly _collection;
    private readonly _docCRUD;
    private _docMap;
    private _handleYEvents;
    private _history;
    private _historyObserver;
    private readonly _idGenerator;
    private _initSubDoc;
    private _loaded;
    private _onLoadSlot;
    private _onSubdocEvent;
    /** Indicate whether the block tree is ready */
    private _ready;
    private _shouldTransact;
    protected readonly _yBlocks: Y.Map<YBlock>;
    /**
     * @internal Used for convenient access to the underlying Yjs map,
     * can be used interchangeably with ySpace
     */
    protected readonly _ySpaceDoc: Y.Doc;
    readonly awarenessStore: AwarenessStore;
    readonly id: string;
    readonly rootDoc: LumenSuiteDoc;
    readonly slots: {
        historyUpdated: Slot<void>;
        yBlockUpdated: Slot<{
            type: "add";
            id: string;
        } | {
            type: "delete";
            id: string;
        }>;
    };
    get awarenessSync(): import("@lumensuite/sync").AwarenessEngine;
    get blobSync(): import("@lumensuite/sync").BlobEngine;
    get canRedo(): boolean;
    get canUndo(): boolean;
    get collection(): DocCollection;
    get crud(): DocCRUD;
    get docSync(): import("@lumensuite/sync").DocEngine;
    get history(): Y.UndoManager;
    get isEmpty(): boolean;
    get loaded(): boolean;
    get meta(): import("../meta.js").DocMeta | undefined;
    get readonly(): boolean;
    get ready(): boolean;
    get schema(): import("../../index.js").Schema;
    get spaceDoc(): Y.Doc;
    get Text(): typeof Text;
    get yBlocks(): Y.Map<YBlock>;
    constructor({ id, collection, doc, awarenessStore, idGenerator, }: DocOptions);
    private _getReadonlyKey;
    private _handleVersion;
    private _handleYBlockAdd;
    private _handleYBlockDelete;
    private _handleYEvent;
    private _initYBlocks;
    /** Capture current operations to undo stack synchronously. */
    captureSync(): void;
    clear(): void;
    clearQuery(query: Query, readonly?: boolean): void;
    destroy(): void;
    dispose(): void;
    generateBlockId(): string;
    getDoc({ readonly, query }?: GetDocOptions): Doc;
    load(initFn?: () => void): this;
    redo(): void;
    remove(): void;
    resetHistory(): void;
    /**
     * If `shouldTransact` is `false`, the transaction will not be push to the history stack.
     */
    transact(fn: () => void, shouldTransact?: boolean): void;
    undo(): void;
    withoutTransact(callback: () => void): void;
}
declare global {
    namespace LumenSuite {
        interface BlockModels {
        }
        type Flavour = string & keyof BlockModels;
        type ModelProps<Model> = Partial<Model extends BlockModel<infer U> ? U : never>;
    }
}
export {};
//# sourceMappingURL=block-collection.d.ts.map