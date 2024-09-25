import type { Command } from '@lumensuite/block-std';

export const focusBlockStart: Command<'focusBlock'> = (ctx, next) => {
  const { focusBlock, std } = ctx;
  if (!focusBlock || !focusBlock.model.text) return;

  const { selection } = std;

  selection.setGroup('note', [
    selection.create('text', {
      from: { blockId: focusBlock.blockId, index: 0, length: 0 },
      to: null,
    }),
  ]);

  return next();
};

declare global {
  namespace LumenSuite {
    interface Commands {
      focusBlockStart: typeof focusBlockStart;
    }
  }
}
