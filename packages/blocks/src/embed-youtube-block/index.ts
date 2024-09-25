import { noop } from '@lumensuite/global/utils';

import type { EmbedYoutubeBlockService } from './embed-youtube-service.js';

import { EmbedYoutubeBlockComponent } from './embed-youtube-block.js';
noop(EmbedYoutubeBlockComponent);

export * from './embed-youtube-block.js';
export * from './embed-youtube-model.js';
export * from './embed-youtube-service.js';
export * from './embed-youtube-spec.js';

declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:embed-youtube': EmbedYoutubeBlockService;
    }
  }
}
