export interface QuickSearchService {
    searchDoc: (options: {
        action?: 'insert';
        userInput?: string;
        skipSelection?: boolean;
        trigger?: 'edgeless-toolbar' | 'slash-command' | 'shortcut';
    }) => Promise<QuickSearchResult>;
}
export type QuickSearchResult = {
    docId: string;
    isNewDoc?: boolean;
} | {
    userInput: string;
} | null;
export declare const QuickSearchProvider: import("@blocksuite/global/di").ServiceIdentifier<QuickSearchService> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<QuickSearchService>);
//# sourceMappingURL=quick-search-service.d.ts.map