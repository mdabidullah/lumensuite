import { BlockService } from '@lumensuite/block-std';

import { AIChatBlockSchema } from './ai-chat-model.js';

export class AIChatBlockService extends BlockService {
  static override readonly flavour = AIChatBlockSchema.model.flavour;
}
