import type { BlockCommands } from '@lumensuite/block-std';

import { getImageSelectionsCommand } from '@lumensuite/affine-shared/commands';

export const commands: BlockCommands = {
  getImageSelections: getImageSelectionsCommand,
};
