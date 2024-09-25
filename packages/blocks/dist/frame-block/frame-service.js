import { FrameBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export class FrameBlockService extends BlockService {
    static { this.flavour = FrameBlockSchema.model.flavour; }
}
//# sourceMappingURL=frame-service.js.map