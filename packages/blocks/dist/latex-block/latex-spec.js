import { BlockViewExtension, FlavourExtension, } from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';
import './latex-block.js';
import { LatexBlockService } from './latex-service.js';
export const LatexBlockSpec = [
    FlavourExtension('affine:latex'),
    LatexBlockService,
    BlockViewExtension('affine:latex', literal `affine-latex`),
];
//# sourceMappingURL=latex-spec.js.map