import { LatexBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export class LatexBlockService extends BlockService {
    static { this.flavour = LatexBlockSchema.model.flavour; }
}
//# sourceMappingURL=latex-service.js.map