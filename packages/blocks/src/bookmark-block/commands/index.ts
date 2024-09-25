import type { BlockCommands } from '@lumensuite/block-std';

import { insertBookmarkCommand } from './insert-bookmark.js';

export const commands: BlockCommands = {
  insertBookmark: insertBookmarkCommand,
};
