import { LatexBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class LatexBlockService extends BlockService {
  static override readonly flavour = LatexBlockSchema.model.flavour;
}
