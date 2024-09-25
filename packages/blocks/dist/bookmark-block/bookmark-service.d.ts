import { BlockService } from '@lumensuite/block-std';
export declare class BookmarkBlockService extends BlockService {
    static readonly flavour: "affine:bookmark";
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    private _dragHandleOption;
    queryUrlData: (url: string, signal?: AbortSignal) => Promise<Partial<import("@lumensuite/affine-model").LinkPreviewData>>;
    mounted(): void;
}
//# sourceMappingURL=bookmark-service.d.ts.map