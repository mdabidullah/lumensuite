import type { Command } from '@lumensuite/block-std';

import { focusTextModel } from '@lumensuite/affine-components/rich-text';
import { getLastNoteBlock } from '@lumensuite/affine-shared/utils';

/**
 * Append a paragraph block at the end of the whole page.
 */
export const appendParagraphCommand: Command<
  never,
  never,
  { text?: string }
> = (ctx, next) => {
  const { std, text = '' } = ctx;
  const { doc } = std;
  if (!doc.root) return;

  const note = getLastNoteBlock(doc);
  let noteId = note?.id;
  if (!noteId) {
    noteId = doc.addBlock('affine:note', {}, doc.root.id);
  }
  const id = doc.addBlock(
    'affine:paragraph',
    { text: new doc.Text(text) },
    noteId
  );

  focusTextModel(std, id, text.length);
  next();
};

declare global {
  namespace LumenSuite {
    interface Commands {
      appendParagraph: typeof appendParagraphCommand;
    }
  }
}
