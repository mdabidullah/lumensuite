import { BlockService } from '@lumensuite/block-std';
export declare class EdgelessTextBlockService extends BlockService {
    static readonly flavour: "affine:edgeless-text";
}
declare global {
    namespace LumenSuite {
        interface BlockServices {
            'affine:edgeless-text': EdgelessTextBlockService;
        }
    }
}
//# sourceMappingURL=edgeless-text-service.d.ts.map