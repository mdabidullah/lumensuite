import type { ImageSelection } from '@lumensuite/affine-shared/selection';
import type { Command } from '@lumensuite/block-std';

export const getImageSelectionsCommand: Command<
  never,
  'currentImageSelections'
> = (ctx, next) => {
  const currentImageSelections = ctx.std.selection.filter('image');
  if (currentImageSelections.length === 0) return;

  next({ currentImageSelections });
};

declare global {
  namespace LumenSuite {
    interface CommandContext {
      currentImageSelections?: ImageSelection[];
    }

    interface Commands {
      getImageSelections: typeof getImageSelectionsCommand;
    }
  }
}
