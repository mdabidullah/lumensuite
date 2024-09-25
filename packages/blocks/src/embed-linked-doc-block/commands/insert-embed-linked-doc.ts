import type { EmbedCardStyle } from '@lumensuite/affine-model';
import type { Command } from '@lumensuite/block-std';

import { insertEmbedCard } from '../../_common/embed-block-helper/insert-embed-card.js';

export const insertEmbedLinkedDocCommand: Command<
  never,
  'insertedLinkType',
  { docId: string }
> = (ctx, next) => {
  const { docId, std } = ctx;
  const flavour = 'affine:embed-linked-doc';
  const targetStyle: EmbedCardStyle = 'vertical';
  const props: Record<string, unknown> = { pageId: docId };
  insertEmbedCard(std, { flavour, targetStyle, props });
  next();
};

declare global {
  namespace LumenSuite {
    interface Commands {
      insertEmbedLinkedDoc: typeof insertEmbedLinkedDocCommand;
    }
  }
}
