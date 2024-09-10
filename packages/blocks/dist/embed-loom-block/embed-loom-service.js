import { EmbedLoomBlockSchema, } from '@blocksuite/affine-model';
import { EmbedLoomStyles } from '@blocksuite/affine-model';
import { EmbedOptionProvider } from '@blocksuite/affine-shared/services';
import { BlockService } from '@blocksuite/block-std';
import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { loomUrlRegex } from './embed-loom-model.js';
import { queryEmbedLoomData } from './utils.js';
export class EmbedLoomBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.queryUrlData = (embedLoomModel, signal) => {
            return queryEmbedLoomData(embedLoomModel, signal);
        };
    }
    static { this.flavour = EmbedLoomBlockSchema.model.flavour; }
    static { this.linkPreviewer = new LinkPreviewer(); }
    static { this.setLinkPreviewEndpoint = EmbedLoomBlockService.linkPreviewer.setEndpoint; }
    mounted() {
        super.mounted();
        this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
            flavour: this.flavour,
            urlRegex: loomUrlRegex,
            styles: EmbedLoomStyles,
            viewType: 'embed',
        });
    }
}
//# sourceMappingURL=embed-loom-service.js.map