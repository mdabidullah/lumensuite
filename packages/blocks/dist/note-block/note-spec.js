import { BlockViewExtension, CommandExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import { commands } from './commands/index.js';
import { NoteBlockService } from './note-service.js';
export const NoteBlockSpec = [
    FlavourExtension('affine:note'),
    NoteBlockService,
    CommandExtension(commands),
    BlockViewExtension('affine:note', literal `affine-note`),
];
export const EdgelessNoteBlockSpec = [
    FlavourExtension('affine:note'),
    NoteBlockService,
    CommandExtension(commands),
    BlockViewExtension('affine:note', literal `affine-edgeless-note`),
];
//# sourceMappingURL=note-spec.js.map