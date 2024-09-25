import { EmbedSyncedDocBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export class EmbedSyncedDocBlockService extends BlockService {
    static { this.flavour = EmbedSyncedDocBlockSchema.model.flavour; }
}
//# sourceMappingURL=embed-synced-doc-service.js.map