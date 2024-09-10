import { createEmbedBlockSchema } from '../../../utils/index.js';
import { EmbedSyncedDocModel, EmbedSyncedDocStyles, } from './synced-doc-model.js';
export const defaultEmbedSyncedDocBlockProps = {
    pageId: '',
    style: EmbedSyncedDocStyles[0],
    caption: undefined,
    scale: undefined,
};
export const EmbedSyncedDocBlockSchema = createEmbedBlockSchema({
    name: 'synced-doc',
    version: 1,
    toModel: () => new EmbedSyncedDocModel(),
    props: () => defaultEmbedSyncedDocBlockProps,
});
//# sourceMappingURL=synced-doc-schema.js.map