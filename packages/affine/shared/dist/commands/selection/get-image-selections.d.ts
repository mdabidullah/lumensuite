import type { ImageSelection } from '@lumensuite/affine-shared/selection';
import type { Command } from '@lumensuite/block-std';
export declare const getImageSelectionsCommand: Command<never, 'currentImageSelections'>;
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
//# sourceMappingURL=get-image-selections.d.ts.map