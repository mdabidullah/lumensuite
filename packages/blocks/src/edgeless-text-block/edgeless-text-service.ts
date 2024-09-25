import { EdgelessTextBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class EdgelessTextBlockService extends BlockService {
  static override readonly flavour = EdgelessTextBlockSchema.model.flavour;
}

declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:edgeless-text': EdgelessTextBlockService;
    }
  }
}
