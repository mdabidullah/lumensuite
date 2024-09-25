import { BlockViewExtension, FlavourExtension, } from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';
import { FrameBlockService } from './frame-service.js';
export const FrameBlockSpec = [
    FlavourExtension('affine:frame'),
    FrameBlockService,
    BlockViewExtension('affine:frame', literal `affine-frame`),
];
//# sourceMappingURL=frame-spec.js.map