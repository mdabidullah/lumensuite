import { BlockViewExtension, CommandExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import { commands } from './commands/index.js';
import { ParagraphBlockService } from './paragraph-service.js';
export const ParagraphBlockSpec = [
    FlavourExtension('affine:paragraph'),
    ParagraphBlockService,
    CommandExtension(commands),
    BlockViewExtension('affine:paragraph', literal `affine-paragraph`),
];
//# sourceMappingURL=paragraph-spec.js.map