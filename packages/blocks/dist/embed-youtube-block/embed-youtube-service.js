import { EmbedYoutubeBlockSchema, EmbedYoutubeStyles, } from '@lumensuite/affine-model';
import { EmbedOptionProvider } from '@lumensuite/affine-shared/services';
import { BlockService } from '@lumensuite/block-std';
import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { youtubeUrlRegex } from './embed-youtube-model.js';
import { queryEmbedYoutubeData } from './utils.js';
export class EmbedYoutubeBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.queryUrlData = (embedYoutubeModel, signal) => {
            return queryEmbedYoutubeData(embedYoutubeModel, EmbedYoutubeBlockService.linkPreviewer, signal);
        };
    }
    static { this.flavour = EmbedYoutubeBlockSchema.model.flavour; }
    static { this.linkPreviewer = new LinkPreviewer(); }
    static { this.setLinkPreviewEndpoint = EmbedYoutubeBlockService.linkPreviewer.setEndpoint; }
    mounted() {
        super.mounted();
        this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
            flavour: this.flavour,
            urlRegex: youtubeUrlRegex,
            styles: EmbedYoutubeStyles,
            viewType: 'embed',
        });
    }
}
//# sourceMappingURL=embed-youtube-service.js.map