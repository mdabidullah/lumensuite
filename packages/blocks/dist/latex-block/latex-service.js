import { LatexBlockSchema } from '@blocksuite/affine-model';
import { BlockService } from '@blocksuite/block-std';
export class LatexBlockService extends BlockService {
    static { this.flavour = LatexBlockSchema.model.flavour; }
}
//# sourceMappingURL=latex-service.js.map