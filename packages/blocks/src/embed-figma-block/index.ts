import { noop } from '@lumensuite/global/utils';

import type { EmbedFigmaBlockService } from './embed-figma-service.js';

import { EmbedFigmaBlockComponent } from './embed-figma-block.js';
noop(EmbedFigmaBlockComponent);

export * from './embed-figma-block.js';
export * from './embed-figma-model.js';
export * from './embed-figma-spec.js';

declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:embed-figma': EmbedFigmaBlockService;
    }
  }
}
