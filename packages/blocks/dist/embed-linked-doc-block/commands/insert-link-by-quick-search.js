import { QuickSearchProvider } from '@lumensuite/affine-shared/services';
export const insertLinkByQuickSearchCommand = (ctx, next) => {
    const { userInput, skipSelection, std } = ctx;
    const quickSearchService = std.getOptional(QuickSearchProvider);
    if (!quickSearchService) {
        next();
        return;
    }
    const insertedLinkType = quickSearchService
        .searchDoc({
        action: 'insert',
        userInput,
        skipSelection,
    })
        .then(result => {
        // add linked doc
        if (result && 'docId' in result) {
            std.command.exec('insertEmbedLinkedDoc', { docId: result.docId });
            return {
                flavour: 'affine:embed-linked-doc',
                isNewDoc: !!result.isNewDoc,
            };
        }
        // add normal link;
        if (result && 'userInput' in result) {
            std.command.exec('insertBookmark', { url: result.userInput });
            return {
                flavour: 'affine:bookmark',
            };
        }
        return null;
    });
    next({ insertedLinkType });
};
//# sourceMappingURL=insert-link-by-quick-search.js.map