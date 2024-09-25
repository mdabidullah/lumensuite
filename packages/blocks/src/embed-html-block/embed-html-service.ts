import { EmbedHtmlBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class EmbedHtmlBlockService extends BlockService {
  static override readonly flavour = EmbedHtmlBlockSchema.model.flavour;
}
