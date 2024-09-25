import { BlockViewExtension, CommandExtension, FlavourExtension, } from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';
import { commands } from './commands/index.js';
import { EdgelessTextBlockService } from './edgeless-text-service.js';
export const EdgelessTextBlockSpec = [
    FlavourExtension('affine:edgeless-text'),
    EdgelessTextBlockService,
    CommandExtension(commands),
    BlockViewExtension('affine:edgeless-text', literal `affine-edgeless-text`),
];
//# sourceMappingURL=edgeless-text-spec.js.map