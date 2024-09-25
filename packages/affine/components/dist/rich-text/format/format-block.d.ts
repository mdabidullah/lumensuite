import type { AffineTextAttributes } from '@lumensuite/affine-components/rich-text';
import type { BlockSelection, Command } from '@lumensuite/block-std';
export declare const formatBlockCommand: Command<'currentBlockSelections', never, {
    blockSelections?: BlockSelection[];
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            formatBlock: typeof formatBlockCommand;
        }
    }
}
//# sourceMappingURL=format-block.d.ts.map