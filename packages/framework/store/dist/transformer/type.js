import { z } from 'zod';
export const BlockSnapshotSchema = z.object({
    type: z.literal('block'),
    id: z.string(),
    flavour: z.string(),
    version: z.number().optional(),
    props: z.record(z.unknown()),
    children: z.lazy(() => BlockSnapshotSchema.array()),
});
export const SliceSnapshotSchema = z.object({
    type: z.literal('slice'),
    content: BlockSnapshotSchema.array(),
    pageVersion: z.number(),
    workspaceVersion: z.number(),
    workspaceId: z.string(),
    pageId: z.string(),
});
export const CollectionInfoSnapshotSchema = z.object({
    id: z.string(),
    type: z.literal('info'),
    pageVersion: z.number(),
    workspaceVersion: z.number(),
    properties: z.record(z.any()),
});
const DocMetaSchema = z.object({
    id: z.string(),
    title: z.string(),
    createDate: z.number(),
    tags: z.array(z.string()),
});
export const DocSnapshotSchema = z.object({
    type: z.literal('page'),
    meta: DocMetaSchema,
    blocks: BlockSnapshotSchema,
});
//# sourceMappingURL=type.js.map