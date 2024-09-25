import type { AttachmentBlockService } from './attachment-service.js';

export * from './attachment-block.js';
export * from './attachment-service.js';

declare global {
  namespace LumenSuite {
    interface BlockServices {
      'affine:attachment': AttachmentBlockService;
    }
  }
}
