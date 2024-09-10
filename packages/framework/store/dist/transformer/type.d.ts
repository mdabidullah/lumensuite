import { z } from 'zod';
import type { DocMeta, DocsPropertiesMeta } from '../store/meta.js';
export type BlockSnapshot = {
    type: 'block';
    id: string;
    flavour: string;
    version?: number;
    props: Record<string, unknown>;
    children: BlockSnapshot[];
};
export declare const BlockSnapshotSchema: z.ZodType<BlockSnapshot>;
export type SliceSnapshot = {
    type: 'slice';
    content: BlockSnapshot[];
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare const SliceSnapshotSchema: z.ZodType<SliceSnapshot>;
export type CollectionInfoSnapshot = {
    id: string;
    type: 'info';
    pageVersion: number;
    workspaceVersion: number;
    properties: DocsPropertiesMeta;
};
export declare const CollectionInfoSnapshotSchema: z.ZodType<CollectionInfoSnapshot>;
export type DocSnapshot = {
    type: 'page';
    meta: DocMeta;
    blocks: BlockSnapshot;
};
export declare const DocSnapshotSchema: z.ZodType<DocSnapshot>;
//# sourceMappingURL=type.d.ts.map