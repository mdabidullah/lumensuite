import type { AffineTextAttributes } from '@blocksuite/affine-components/rich-text';
import type { BlockSelection, Command } from '@blocksuite/block-std';
export declare const formatBlockCommand: Command<'currentBlockSelections', never, {
    blockSelections?: BlockSelection[];
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            formatBlock: typeof formatBlockCommand;
        }
    }
}
//# sourceMappingURL=format-block.d.ts.map