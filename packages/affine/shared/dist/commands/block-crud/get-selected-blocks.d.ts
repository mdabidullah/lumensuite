import type { ImageSelection } from '@blocksuite/affine-shared/selection';
import type { BlockSelection, Command, TextSelection } from '@blocksuite/block-std';
import type { RoleType } from '@blocksuite/store';
import { BlockComponent } from '@blocksuite/block-std';
export declare const getSelectedBlocksCommand: Command<'currentTextSelection' | 'currentBlockSelections' | 'currentImageSelections', 'selectedBlocks', {
    textSelection?: TextSelection;
    blockSelections?: BlockSelection[];
    imageSelections?: ImageSelection[];
    filter?: (el: BlockComponent) => boolean;
    types?: Extract<BlockSuite.SelectionType, 'block' | 'text' | 'image'>[];
    roles?: RoleType[];
    mode?: 'all' | 'flat' | 'highest';
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            selectedBlocks?: BlockComponent[];
        }
        interface Commands {
            getSelectedBlocks: typeof getSelectedBlocksCommand;
        }
    }
}
//# sourceMappingURL=get-selected-blocks.d.ts.map