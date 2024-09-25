import { BlockViewExtension, FlavourExtension, } from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';
import './embed-edgeless-html-block.js';
import { EmbedHtmlBlockService } from './embed-html-service.js';
export const EmbedHtmlBlockSpec = [
    FlavourExtension('affine:embed-html'),
    EmbedHtmlBlockService,
    BlockViewExtension('affine:embed-html', model => {
        return model.parent?.flavour === 'affine:surface'
            ? literal `affine-embed-edgeless-html-block`
            : literal `affine-embed-html-block`;
    }),
];
//# sourceMappingURL=embed-html-spec.js.map