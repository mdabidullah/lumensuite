import { EmbedFigmaBlockSchema, EmbedFigmaStyles, } from '@lumensuite/affine-model';
import { EmbedOptionProvider } from '@lumensuite/affine-shared/services';
import { BlockService } from '@lumensuite/block-std';
import { figmaUrlRegex } from './embed-figma-model.js';
export class EmbedFigmaBlockService extends BlockService {
    static { this.flavour = EmbedFigmaBlockSchema.model.flavour; }
    mounted() {
        super.mounted();
        this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
            flavour: this.flavour,
            urlRegex: figmaUrlRegex,
            styles: EmbedFigmaStyles,
            viewType: 'embed',
        });
    }
}
//# sourceMappingURL=embed-figma-service.js.map