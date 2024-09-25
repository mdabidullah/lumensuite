import { DividerBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class DividerBlockService extends BlockService {
  static override readonly flavour = DividerBlockSchema.model.flavour;
}
