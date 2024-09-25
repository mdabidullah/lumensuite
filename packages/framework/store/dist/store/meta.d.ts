import type * as Y from 'yjs';
import { Slot } from '@lumensuite/global/utils';
import type { LumenSuiteDoc } from '../yjs/index.js';
import type { DocCollection } from './collection.js';
export interface DocMeta {
    id: string;
    title: string;
    tags: string[];
    createDate: number;
    updatedDate?: number;
}
export type Tag = {
    id: string;
    value: string;
    color: string;
};
export type DocsPropertiesMeta = {
    tags?: {
        options: Tag[];
    };
};
export type DocCollectionMetaState = {
    pages?: unknown[];
    properties?: DocsPropertiesMeta;
    workspaceVersion?: number;
    pageVersion?: number;
    blockVersions?: Record<string, number>;
    name?: string;
    avatar?: string;
};
export declare class DocCollectionMeta {
    private _handleDocCollectionMetaEvents;
    private _prevDocs;
    protected readonly _proxy: DocCollectionMetaState;
    protected readonly _yMap: Y.Map<DocCollectionMetaState[keyof DocCollectionMetaState]>;
    commonFieldsUpdated: Slot<void>;
    readonly doc: LumenSuiteDoc;
    docMetaAdded: Slot<string>;
    docMetaRemoved: Slot<string>;
    docMetaUpdated: Slot<void>;
    readonly id: string;
    get avatar(): string | undefined;
    get blockVersions(): Record<string, number> | undefined;
    get docMetas(): DocMeta[];
    get docs(): unknown[] | undefined;
    get hasVersion(): boolean;
    get name(): string | undefined;
    get pageVersion(): number | undefined;
    get properties(): DocsPropertiesMeta;
    get workspaceVersion(): number | undefined;
    get yDocs(): Y.Array<unknown>;
    constructor(doc: LumenSuiteDoc);
    private _handleCommonFieldsEvent;
    private _handleDocMetaEvent;
    addDocMeta(doc: DocMeta, index?: number): void;
    getDocMeta(id: string): DocMeta | undefined;
    initialize(): void;
    removeDocMeta(id: string): void;
    setAvatar(avatar: string): void;
    setDocMeta(id: string, props: Partial<DocMeta>): void;
    setName(name: string): void;
    setProperties(meta: DocsPropertiesMeta): void;
    updateVersion(collection: DocCollection): void;
    /**
     * @deprecated Only used for legacy doc version validation
     */
    validateVersion(collection: DocCollection): void;
    /**
     * @internal Only for doc initialization
     */
    writeVersion(collection: DocCollection): void;
}
//# sourceMappingURL=meta.d.ts.map