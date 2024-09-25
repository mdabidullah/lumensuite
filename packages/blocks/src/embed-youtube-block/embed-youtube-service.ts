import {
  EmbedYoutubeBlockSchema,
  type EmbedYoutubeModel,
  EmbedYoutubeStyles,
} from '@lumensuite/affine-model';
import { EmbedOptionProvider } from '@lumensuite/affine-shared/services';
import { BlockService } from '@lumensuite/block-std';

import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { youtubeUrlRegex } from './embed-youtube-model.js';
import { queryEmbedYoutubeData } from './utils.js';

export class EmbedYoutubeBlockService extends BlockService {
  static override readonly flavour = EmbedYoutubeBlockSchema.model.flavour;

  private static readonly linkPreviewer = new LinkPreviewer();

  static setLinkPreviewEndpoint =
    EmbedYoutubeBlockService.linkPreviewer.setEndpoint;

  queryUrlData = (
    embedYoutubeModel: EmbedYoutubeModel,
    signal?: AbortSignal
  ) => {
    return queryEmbedYoutubeData(
      embedYoutubeModel,
      EmbedYoutubeBlockService.linkPreviewer,
      signal
    );
  };

  override mounted() {
    super.mounted();

    this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
      flavour: this.flavour,
      urlRegex: youtubeUrlRegex,
      styles: EmbedYoutubeStyles,
      viewType: 'embed',
    });
  }
}
