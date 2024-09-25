import type { Command } from '@lumensuite/block-std';

import { assertExists } from '@lumensuite/global/utils';

export const deleteSelectedModelsCommand: Command<'selectedModels'> = (
  ctx,
  next
) => {
  const models = ctx.selectedModels;
  assertExists(
    models,
    '`selectedModels` is required, you need to use `getSelectedModels` command before adding this command to the pipeline.'
  );

  models.forEach(model => {
    ctx.std.doc.deleteBlock(model);
  });

  return next();
};

declare global {
  namespace LumenSuite {
    interface Commands {
      deleteSelectedModels: typeof deleteSelectedModelsCommand;
    }
  }
}
