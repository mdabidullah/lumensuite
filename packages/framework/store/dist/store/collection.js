var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { NoopLogger, Slot } from '@lumensuite/global/utils';
import { AwarenessEngine, BlobEngine, DocEngine, MemoryBlobSource, NoopDocSource, } from '@lumensuite/sync';
import clonedeep from 'lodash.clonedeep';
import merge from 'lodash.merge';
import { Awareness } from 'y-protocols/awareness.js';
import * as Y from 'yjs';
import { AwarenessStore, LumenSuiteDoc, } from '../yjs/index.js';
import { DocCollectionAddonType, test } from './addon/index.js';
import { BlockCollection } from './doc/block-collection.js';
import { pickIdGenerator } from './id.js';
import { DocCollectionMeta } from './meta.js';
const FLAGS_PRESET = {
    enable_synced_doc_block: false,
    enable_pie_menu: false,
    enable_database_number_formatting: false,
    enable_database_attachment_note: false,
    enable_legacy_validation: true,
    enable_block_query: false,
    enable_lasso_tool: false,
    enable_edgeless_text: true,
    enable_ai_onboarding: false,
    enable_ai_chat_block: false,
    enable_color_picker: false,
    enable_mind_map_import: false,
    readonly: {},
};
let DocCollection = (() => {
    let _classDecorators = [test];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = DocCollectionAddonType;
    var DocCollection = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DocCollection = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.Y = Y; }
        get docs() {
            return this.blockCollections;
        }
        get isEmpty() {
            if (this.doc.store.clients.size === 0)
                return true;
            let flag = false;
            if (this.doc.store.clients.size === 1) {
                const items = Array.from(this.doc.store.clients.values())[0];
                // workspaceVersion and pageVersion were set when the collection is initialized
                if (items.length <= 2) {
                    flag = true;
                }
            }
            return flag;
        }
        get schema() {
            return this._schema;
        }
        constructor({ id, schema, idGenerator, defaultFlags, awarenessSources = [], docSources = {
            main: new NoopDocSource(),
        }, blobSources = {
            main: new MemoryBlobSource(),
        }, logger = new NoopLogger(), }) {
            super();
            this.blockCollections = new Map();
            this.slots = {
                docAdded: new Slot(),
                docUpdated: new Slot(),
                docRemoved: new Slot(),
                docCreated: new Slot(),
            };
            this._schema = schema;
            this.id = id || '';
            this.doc = new LumenSuiteDoc({ guid: id });
            this.awarenessStore = new AwarenessStore(new Awareness(this.doc), merge(clonedeep(FLAGS_PRESET), defaultFlags));
            this.awarenessSync = new AwarenessEngine(this.awarenessStore.awareness, awarenessSources);
            this.docSync = new DocEngine(this.doc, docSources.main, docSources.shadows ?? [], logger);
            this.blobSync = new BlobEngine(blobSources.main, blobSources.shadows ?? [], logger);
            this.idGenerator = pickIdGenerator(idGenerator, this.doc.clientID);
            this.meta = new DocCollectionMeta(this.doc);
            this._bindDocMetaEvents();
        }
        _bindDocMetaEvents() {
            this.meta.docMetaAdded.on(docId => {
                const doc = new BlockCollection({
                    id: docId,
                    collection: this,
                    doc: this.doc,
                    awarenessStore: this.awarenessStore,
                    idGenerator: this.idGenerator,
                });
                this.blockCollections.set(doc.id, doc);
                this.slots.docAdded.emit(doc.id);
            });
            this.meta.docMetaUpdated.on(() => this.slots.docUpdated.emit());
            this.meta.docMetaRemoved.on(id => {
                const space = this.getBlockCollection(id);
                if (!space)
                    return;
                this.blockCollections.delete(id);
                space.remove();
                this.slots.docRemoved.emit(id);
            });
        }
        _hasDoc(docId) {
            return this.docs.has(docId);
        }
        /**
         * Verify that all data has been successfully saved to the primary storage.
         * Return true if the data transfer is complete and it is secure to terminate the synchronization operation.
         */
        canGracefulStop() {
            this.docSync.canGracefulStop();
        }
        /**
         * By default, only an empty doc will be created.
         * If the `init` parameter is passed, a `surface`, `note`, and `paragraph` block
         * will be created in the doc simultaneously.
         */
        createDoc(options = {}) {
            const { id: docId = this.idGenerator(), query } = options;
            if (this._hasDoc(docId)) {
                throw new LumenSuiteError(ErrorCode.DocCollectionError, 'doc already exists');
            }
            this.meta.addDocMeta({
                id: docId,
                title: '',
                createDate: Date.now(),
                tags: [],
            });
            this.slots.docCreated.emit(docId);
            return this.getDoc(docId, { query });
        }
        /**
         * Terminate the data sync process forcefully, which may cause data loss.
         * It is advised to invoke `canGracefulStop` before calling this method.
         */
        forceStop() {
            this.docSync.forceStop();
            this.blobSync.stop();
            this.awarenessSync.disconnect();
        }
        getBlockCollection(docId) {
            const space = this.docs.get(docId);
            return space ?? null;
        }
        getDoc(docId, options) {
            const collection = this.getBlockCollection(docId);
            return collection?.getDoc(options) ?? null;
        }
        removeDoc(docId) {
            const docMeta = this.meta.getDocMeta(docId);
            if (!docMeta) {
                throw new LumenSuiteError(ErrorCode.DocCollectionError, `doc meta not found: ${docId}`);
            }
            const blockCollection = this.getBlockCollection(docId);
            if (!blockCollection)
                return;
            blockCollection.dispose();
            this.meta.removeDocMeta(docId);
            this.blockCollections.delete(docId);
        }
        /** Update doc meta state. Note that this intentionally does not mutate doc state. */
        setDocMeta(docId, 
        // You should not update subDocIds directly.
        props) {
            this.meta.setDocMeta(docId, props);
        }
        /**
         * Start the data sync process
         */
        start() {
            this.docSync.start();
            this.blobSync.start();
            this.awarenessSync.connect();
        }
        /**
         * Wait for all data has been successfully saved to the primary storage.
         */
        waitForGracefulStop(abort) {
            return this.docSync.waitForGracefulStop(abort);
        }
        waitForSynced() {
            return this.docSync.waitForSynced();
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DocCollection = _classThis;
})();
export { DocCollection };
//# sourceMappingURL=collection.js.map