import { EmbedOptionProvider } from '@lumensuite/affine-shared/services';
import { insertEmbedCard } from '../../_common/embed-block-helper/insert-embed-card.js';
export const insertBookmarkCommand = (ctx, next) => {
    const { url, std } = ctx;
    const embedOptions = std.get(EmbedOptionProvider).getEmbedBlockOptions(url);
    let flavour = 'affine:bookmark';
    let targetStyle = 'vertical';
    const props = { url };
    if (embedOptions) {
        flavour = embedOptions.flavour;
        targetStyle = embedOptions.styles[0];
    }
    insertEmbedCard(std, { flavour, targetStyle, props });
    next();
};
//# sourceMappingURL=insert-bookmark.js.map