import { BlockService } from '@blocksuite/block-std';
export declare class EdgelessTextBlockService extends BlockService {
    static readonly flavour: "affine:edgeless-text";
}
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:edgeless-text': EdgelessTextBlockService;
        }
    }
}
//# sourceMappingURL=edgeless-text-service.d.ts.map