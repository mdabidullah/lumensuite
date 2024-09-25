import type { ImageSelection } from '@lumensuite/affine-shared/selection';
import type { BlockSelection, Command, TextSelection } from '@lumensuite/block-std';
import type { RoleType } from '@lumensuite/store';
import { BlockComponent } from '@lumensuite/block-std';
export declare const getSelectedBlocksCommand: Command<'currentTextSelection' | 'currentBlockSelections' | 'currentImageSelections', 'selectedBlocks', {
    textSelection?: TextSelection;
    blockSelections?: BlockSelection[];
    imageSelections?: ImageSelection[];
    filter?: (el: BlockComponent) => boolean;
    types?: Extract<LumenSuite.SelectionType, 'block' | 'text' | 'image'>[];
    roles?: RoleType[];
    mode?: 'all' | 'flat' | 'highest';
}>;
declare global {
    namespace LumenSuite {
        interface CommandContext {
            selectedBlocks?: BlockComponent[];
        }
        interface Commands {
            getSelectedBlocks: typeof getSelectedBlocksCommand;
        }
    }
}
//# sourceMappingURL=get-selected-blocks.d.ts.map