import type { ImageSelection } from '@blocksuite/affine-shared/selection';
import type { Command } from '@blocksuite/block-std';
export declare const getImageSelectionsCommand: Command<never, 'currentImageSelections'>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            currentImageSelections?: ImageSelection[];
        }
        interface Commands {
            getImageSelections: typeof getImageSelectionsCommand;
        }
    }
}
//# sourceMappingURL=get-image-selections.d.ts.map