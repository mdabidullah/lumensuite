import type { SerializedXYWH } from '@lumensuite/global/utils';

import { GfxCompatible } from '@lumensuite/block-std/gfx';
import { BlockModel, defineBlockSchema } from '@lumensuite/store';

type AIChatProps = {
  xywh: SerializedXYWH;
  index: string;
  scale: number;
  messages: string; // JSON string of ChatMessage[]
  sessionId: string; // forked session id
  rootWorkspaceId: string; // workspace id of root chat session
  rootDocId: string; // doc id of root chat session
};

export const AIChatBlockSchema = defineBlockSchema({
  flavour: 'affine:embed-ai-chat',
  props: (): AIChatProps => ({
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

export class AIChatBlockModel extends GfxCompatible<AIChatProps>(BlockModel) {}

declare global {
  namespace LumenSuite {
    interface EdgelessBlockModelMap {
      'affine:embed-ai-chat': AIChatBlockModel;
    }
    interface BlockModels {
      'affine:embed-ai-chat': AIChatBlockModel;
    }
  }
}
