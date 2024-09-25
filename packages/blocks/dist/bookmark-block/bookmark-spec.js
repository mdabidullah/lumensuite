import { BlockViewExtension, CommandExtension, FlavourExtension, } from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';
import './bookmark-edgeless-block.js';
import { BookmarkBlockService } from './bookmark-service.js';
import { commands } from './commands/index.js';
export const BookmarkBlockSpec = [
    FlavourExtension('affine:bookmark'),
    BookmarkBlockService,
    CommandExtension(commands),
    BlockViewExtension('affine:bookmark', model => {
        return model.parent?.flavour === 'affine:surface'
            ? literal `affine-edgeless-bookmark`
            : literal `affine-bookmark`;
    }),
];
//# sourceMappingURL=bookmark-spec.js.map