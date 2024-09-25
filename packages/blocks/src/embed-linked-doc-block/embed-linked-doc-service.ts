import { EmbedLinkedDocBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class EmbedLinkedDocBlockService extends BlockService {
  static override readonly flavour = EmbedLinkedDocBlockSchema.model.flavour;
}
