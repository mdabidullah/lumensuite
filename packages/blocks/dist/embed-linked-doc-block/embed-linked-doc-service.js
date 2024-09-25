import { EmbedLinkedDocBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export class EmbedLinkedDocBlockService extends BlockService {
    static { this.flavour = EmbedLinkedDocBlockSchema.model.flavour; }
}
//# sourceMappingURL=embed-linked-doc-service.js.map