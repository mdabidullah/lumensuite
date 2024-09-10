import { EmbedLinkedDocBlockSchema } from '@blocksuite/affine-model';
import { BlockService } from '@blocksuite/block-std';
export class EmbedLinkedDocBlockService extends BlockService {
    static { this.flavour = EmbedLinkedDocBlockSchema.model.flavour; }
}
//# sourceMappingURL=embed-linked-doc-service.js.map