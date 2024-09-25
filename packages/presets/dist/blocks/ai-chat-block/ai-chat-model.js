import { GfxCompatible } from '@lumensuite/block-std/gfx';
import { BlockModel, defineBlockSchema } from '@lumensuite/store';
export const AIChatBlockSchema = defineBlockSchema({
    flavour: 'affine:embed-ai-chat',
    props: () => ({
        xywh: '[0,0,0,0]',
        index: 'a0',
        scale: 1,
        messages: '',
        sessionId: '',
        rootWorkspaceId: '',
        rootDocId: '',
    }),
    metadata: {
        version: 1,
        role: 'content',
        children: [],
    },
    toModel: () => {
        return new AIChatBlockModel();
    },
});
export class AIChatBlockModel extends GfxCompatible(BlockModel) {
}
//# sourceMappingURL=ai-chat-model.js.map