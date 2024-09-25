import type { DatabaseBlockModel } from '@lumensuite/affine-model';

import type { DatabaseBlockService } from './database-service.js';

export { databaseBlockColumns } from './columns/index.js';

export type { DatabaseOptionsConfig } from './config.js';
export * from './database-block.js';
export * from './database-service.js';
declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:database': DatabaseBlockService;
    }
    interface BlockModels {
      'affine:database': DatabaseBlockModel;
    }
  }
}
