import { type EmbedLoomModel } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export declare class EmbedLoomBlockService extends BlockService {
    static readonly flavour: `affine:embed-${string}`;
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    queryUrlData: (embedLoomModel: EmbedLoomModel, signal?: AbortSignal) => Promise<Partial<import("@lumensuite/affine-model").EmbedLoomBlockUrlData>>;
    mounted(): void;
}
//# sourceMappingURL=embed-loom-service.d.ts.map