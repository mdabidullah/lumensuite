import type { LinkPreviewData } from './types.js';
export declare class LinkPreviewer {
    private _endpoint;
    query: (url: string, signal?: AbortSignal) => Promise<Partial<LinkPreviewData>>;
    setEndpoint: (endpoint: string) => void;
    private _getStringFromHTML;
}
//# sourceMappingURL=helper.d.ts.map