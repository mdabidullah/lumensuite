import { type Disposable, Slot } from '@lumensuite/global/utils';
import type { BlockModel, Schema } from '../../schema/index.js';
import type { BlockCollection, BlockProps } from './block-collection.js';
import type { DocCRUD } from './crud.js';
import { Block } from './block/index.js';
import { type Query } from './query.js';
type DocOptions = {
    schema: Schema;
    blockCollection: BlockCollection;
    crud: DocCRUD;
    readonly?: boolean;
    query?: Query;
};
export declare class Doc {
    private _runQuery;
    protected readonly _blockCollection: BlockCollection;
    protected readonly _blocks: import("@preact/signals-core").Signal<Record<string, Block>>;
    protected readonly _crud: DocCRUD;
    protected readonly _disposeBlockUpdated: Disposable;
    protected readonly _query: Query;
    protected readonly _readonly?: boolean;
    protected readonly _schema: Schema;
    readonly slots: BlockCollection['slots'] & {
        /** This is always triggered after `doc.load` is called. */
        ready: Slot;
        /**
         * This fires when the root block is added via API call or has just been initialized from existing ydoc.
         * useful for internal block UI components to start subscribing following up events.
         * Note that at this moment, the whole block tree may not be fully initialized yet.
         */
        rootAdded: Slot<string>;
        rootDeleted: Slot<string>;
        blockUpdated: Slot<{
            type: 'add';
            id: string;
            init: boolean;
            flavour: string;
            model: BlockModel;
        } | {
            type: 'delete';
            id: string;
            flavour: string;
            parent: string;
            model: BlockModel;
        } | {
            type: 'update';
            id: string;
            flavour: string;
            props: {
                key: string;
            };
        }>;
    };
    private get _yBlocks();
    get awarenessStore(): import("../../index.js").AwarenessStore<LumenSuiteFlags>;
    get awarenessSync(): import("@lumensuite/sync").AwarenessEngine;
    get blobSync(): import("@lumensuite/sync").BlobEngine;
    get blockCollection(): BlockCollection;
    get blocks(): import("@preact/signals-core").Signal<Record<string, Block>>;
    get blockSize(): number;
    get canRedo(): boolean;
    get canUndo(): boolean;
    get captureSync(): () => void;
    get clear(): () => void;
    get collection(): import("../collection.js").DocCollection;
    get docSync(): import("@lumensuite/sync").DocEngine;
    get generateBlockId(): () => string;
    get history(): import("yjs").UndoManager;
    get id(): string;
    get isEmpty(): boolean;
    get loaded(): boolean;
    get meta(): import("../meta.js").DocMeta | undefined;
    get readonly(): boolean;
    get ready(): boolean;
    get redo(): () => void;
    get resetHistory(): () => void;
    get root(): BlockModel<object, object & {}> | null;
    get rootDoc(): import("../../index.js").LumenSuiteDoc;
    get schema(): Schema;
    get spaceDoc(): import("yjs").Doc;
    get Text(): typeof import("../../index.js").Text;
    get transact(): (fn: () => void, shouldTransact?: boolean) => void;
    get undo(): () => void;
    get withoutTransact(): (callback: () => void) => void;
    constructor({ schema, blockCollection, crud, readonly, query }: DocOptions);
    private _getSiblings;
    private _onBlockAdded;
    private _onBlockRemoved;
    addBlock<Key extends LumenSuite.Flavour>(flavour: Key, blockProps?: LumenSuite.ModelProps<LumenSuite.BlockModels[Key]>, parent?: BlockModel | string | null, parentIndex?: number): string;
    addBlock(flavour: never, blockProps?: Partial<BlockProps & Omit<BlockProps, 'flavour'>>, parent?: BlockModel | string | null, parentIndex?: number): string;
    addBlocks(blocks: Array<{
        flavour: string;
        blockProps?: Partial<BlockProps & Omit<BlockProps, 'flavour' | 'id'>>;
    }>, parent?: BlockModel | string | null, parentIndex?: number): string[];
    addSiblingBlocks(targetModel: BlockModel, props: Array<Partial<BlockProps>>, place?: 'after' | 'before'): string[];
    deleteBlock(model: BlockModel, options?: {
        bringChildrenTo?: BlockModel;
        deleteChildren?: boolean;
    }): void;
    dispose(): void;
    getBlock(id: string): Block | undefined;
    getBlock$(id: string): Block | undefined;
    /**
     * @deprecated
     * Use `getBlocksByFlavour` instead.
     */
    getBlockByFlavour(blockFlavour: string | string[]): BlockModel<object, object & {}>[];
    /**
     * @deprecated
     * Use `getBlock` instead.
     */
    getBlockById<Model extends BlockModel = BlockModel>(id: string): Model | null;
    getBlocks(): BlockModel<object, object & {}>[];
    getBlocksByFlavour(blockFlavour: string | string[]): Block[];
    getNext(block: BlockModel | string): BlockModel<object, object & {}> | null;
    getNexts(block: BlockModel | string): BlockModel<object, object & {}>[];
    getParent(target: BlockModel | string): BlockModel | null;
    getPrev(block: BlockModel | string): BlockModel<object, object & {}> | null;
    getPrevs(block: BlockModel | string): BlockModel<object, object & {}>[];
    getSchemaByFlavour(flavour: LumenSuite.Flavour): {
        version: number;
        model: {
            flavour: string;
            role: "root" | "hub" | "content";
            children?: string[] | undefined;
            parent?: string[] | undefined;
            props?: ((args_0: import("../../schema/base.js").InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
            toModel?: ((...args: unknown[]) => BlockModel<object, object & {}>) | undefined;
        };
        transformer?: ((...args: unknown[]) => import("../../index.js").BaseBlockTransformer<object>) | undefined;
        onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
    } | undefined;
    hasBlock(id: string): boolean;
    /**
     * @deprecated
     * Use `hasBlock` instead.
     */
    hasBlockById(id: string): boolean;
    load(initFn?: () => void): this;
    moveBlocks(blocksToMove: BlockModel[], newParent: BlockModel, targetSibling?: BlockModel | null, shouldInsertBeforeSibling?: boolean): void;
    updateBlock<T extends Partial<BlockProps>>(model: BlockModel, props: T): void;
    updateBlock(model: BlockModel, callback: () => void): void;
}
export {};
//# sourceMappingURL=doc.d.ts.map