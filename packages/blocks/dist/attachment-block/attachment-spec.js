import { BlockViewExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import './attachment-edgeless-block.js';
import { AttachmentBlockService } from './attachment-service.js';
export const AttachmentBlockSpec = [
    FlavourExtension('affine:attachment'),
    AttachmentBlockService,
    BlockViewExtension('affine:attachment', model => {
        return model.parent?.flavour === 'affine:surface'
            ? literal `affine-edgeless-attachment`
            : literal `affine-attachment`;
    }),
];
//# sourceMappingURL=attachment-spec.js.map