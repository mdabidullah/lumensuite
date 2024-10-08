import {
  EmbedLoomBlockSchema,
  type EmbedLoomModel,
} from '@lumensuite/affine-model';
import { EmbedLoomStyles } from '@lumensuite/affine-model';
import { EmbedOptionProvider } from '@lumensuite/affine-shared/services';
import { BlockService } from '@lumensuite/block-std';

import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { loomUrlRegex } from './embed-loom-model.js';
import { queryEmbedLoomData } from './utils.js';

export class EmbedLoomBlockService extends BlockService {
  static override readonly flavour = EmbedLoomBlockSchema.model.flavour;

  private static readonly linkPreviewer = new LinkPreviewer();

  static setLinkPreviewEndpoint =
    EmbedLoomBlockService.linkPreviewer.setEndpoint;

  queryUrlData = (embedLoomModel: EmbedLoomModel, signal?: AbortSignal) => {
    return queryEmbedLoomData(embedLoomModel, signal);
  };

  override mounted() {
    super.mounted();

    this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
      flavour: this.flavour,
      urlRegex: loomUrlRegex,
      styles: EmbedLoomStyles,
      viewType: 'embed',
    });
  }
}
