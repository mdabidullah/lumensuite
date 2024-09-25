import { EmbedSyncedDocBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

export class EmbedSyncedDocBlockService extends BlockService {
  static override readonly flavour = EmbedSyncedDocBlockSchema.model.flavour;
}
