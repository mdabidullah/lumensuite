import { type EmbedGithubModel } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export declare class EmbedGithubBlockService extends BlockService {
    static readonly flavour: `affine:embed-${string}`;
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    queryApiData: (embedGithubModel: EmbedGithubModel, signal?: AbortSignal) => Promise<Partial<import("@lumensuite/affine-model").EmbedGithubBlockUrlData>>;
    queryUrlData: (embedGithubModel: EmbedGithubModel, signal?: AbortSignal) => Promise<Partial<import("@lumensuite/affine-model").EmbedGithubBlockUrlData>>;
    mounted(): void;
}
//# sourceMappingURL=embed-github-service.d.ts.map