import { BlockViewExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import './embed-edgeless-youtube-block.js';
import { EmbedYoutubeBlockService } from './embed-youtube-service.js';
export const EmbedYoutubeBlockSpec = [
    FlavourExtension('affine:embed-youtube'),
    EmbedYoutubeBlockService,
    BlockViewExtension('affine:embed-youtube', model => {
        return model.parent?.flavour === 'affine:surface'
            ? literal `affine-embed-edgeless-youtube-block`
            : literal `affine-embed-youtube-block`;
    }),
];
//# sourceMappingURL=embed-youtube-spec.js.map