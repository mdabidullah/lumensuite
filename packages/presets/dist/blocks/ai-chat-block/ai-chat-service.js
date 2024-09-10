import { BlockService } from '@blocksuite/block-std';
import { AIChatBlockSchema } from './ai-chat-model.js';
export class AIChatBlockService extends BlockService {
    static { this.flavour = AIChatBlockSchema.model.flavour; }
}
//# sourceMappingURL=ai-chat-service.js.map