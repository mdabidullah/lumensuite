import { noop } from '@lumensuite/global/utils';

import type { EmbedHtmlBlockService } from './embed-html-service.js';

import { EmbedHtmlBlockComponent } from './embed-html-block.js';
noop(EmbedHtmlBlockComponent);

export * from './embed-html-block.js';
export * from './embed-html-service.js';
export * from './embed-html-spec.js';

declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:embed-html': EmbedHtmlBlockService;
    }
  }
}
