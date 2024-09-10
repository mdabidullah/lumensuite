import { createEmbedBlockSchema } from '../../../utils/index.js';
import { EmbedLinkedDocModel, EmbedLinkedDocStyles, } from './linked-doc-model.js';
const defaultEmbedLinkedDocBlockProps = {
    pageId: '',
    style: EmbedLinkedDocStyles[1],
    caption: null,
};
export const EmbedLinkedDocBlockSchema = createEmbedBlockSchema({
    name: 'linked-doc',
    version: 1,
    toModel: () => new EmbedLinkedDocModel(),
    props: () => defaultEmbedLinkedDocBlockProps,
});
//# sourceMappingURL=linked-doc-schema.js.map