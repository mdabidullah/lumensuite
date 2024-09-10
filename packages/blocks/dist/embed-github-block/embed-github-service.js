import { EmbedGithubBlockSchema, EmbedGithubStyles, } from '@blocksuite/affine-model';
import { EmbedOptionProvider } from '@blocksuite/affine-shared/services';
import { BlockService } from '@blocksuite/block-std';
import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { githubUrlRegex } from './embed-github-model.js';
import { queryEmbedGithubApiData, queryEmbedGithubData } from './utils.js';
export class EmbedGithubBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.queryApiData = (embedGithubModel, signal) => {
            return queryEmbedGithubApiData(embedGithubModel, signal);
        };
        this.queryUrlData = (embedGithubModel, signal) => {
            return queryEmbedGithubData(embedGithubModel, EmbedGithubBlockService.linkPreviewer, signal);
        };
    }
    static { this.flavour = EmbedGithubBlockSchema.model.flavour; }
    static { this.linkPreviewer = new LinkPreviewer(); }
    static { this.setLinkPreviewEndpoint = EmbedGithubBlockService.linkPreviewer.setEndpoint; }
    mounted() {
        super.mounted();
        this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
            flavour: this.flavour,
            urlRegex: githubUrlRegex,
            styles: EmbedGithubStyles,
            viewType: 'card',
        });
    }
}
//# sourceMappingURL=embed-github-service.js.map