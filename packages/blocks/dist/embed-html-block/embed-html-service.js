import { EmbedHtmlBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export class EmbedHtmlBlockService extends BlockService {
    static { this.flavour = EmbedHtmlBlockSchema.model.flavour; }
}
//# sourceMappingURL=embed-html-service.js.map