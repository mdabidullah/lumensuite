import { insertEmbedCard } from '../../_common/embed-block-helper/insert-embed-card.js';
export const insertEmbedLinkedDocCommand = (ctx, next) => {
    const { docId, std } = ctx;
    const flavour = 'affine:embed-linked-doc';
    const targetStyle = 'vertical';
    const props = { pageId: docId };
    insertEmbedCard(std, { flavour, targetStyle, props });
    next();
};
//# sourceMappingURL=insert-embed-linked-doc.js.map