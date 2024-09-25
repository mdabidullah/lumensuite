import { type EmbedYoutubeModel } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export declare class EmbedYoutubeBlockService extends BlockService {
    static readonly flavour: `affine:embed-${string}`;
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    queryUrlData: (embedYoutubeModel: EmbedYoutubeModel, signal?: AbortSignal) => Promise<Partial<import("@lumensuite/affine-model").EmbedYoutubeBlockUrlData>>;
    mounted(): void;
}
//# sourceMappingURL=embed-youtube-service.d.ts.map