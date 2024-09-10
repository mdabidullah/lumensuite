import { BlockViewExtension, CommandExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import { commands } from './commands/index.js';
import './embed-edgeless-linked-doc-block.js';
import { EmbedLinkedDocBlockService } from './embed-linked-doc-service.js';
export const EmbedLinkedDocBlockSpec = [
    FlavourExtension('affine:embed-linked-doc'),
    EmbedLinkedDocBlockService,
    CommandExtension(commands),
    BlockViewExtension('affine:embed-linked-doc', model => {
        return model.parent?.flavour === 'affine:surface'
            ? literal `affine-embed-edgeless-linked-doc-block`
            : literal `affine-embed-linked-doc-block`;
    }),
];
//# sourceMappingURL=embed-linked-doc-spec.js.map