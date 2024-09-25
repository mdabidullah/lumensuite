import { noop } from '@lumensuite/global/utils';

import type { EmbedLoomBlockService } from './embed-loom-service.js';

import { EmbedLoomBlockComponent } from './embed-loom-block.js';
noop(EmbedLoomBlockComponent);

export * from './embed-loom-block.js';
export * from './embed-loom-model.js';
export * from './embed-loom-service.js';
export * from './embed-loom-spec.js';

declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:embed-loom': EmbedLoomBlockService;
    }
  }
}
