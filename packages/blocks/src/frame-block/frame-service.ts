import { FrameBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class FrameBlockService extends BlockService {
  static override readonly flavour = FrameBlockSchema.model.flavour;
}
