import { BlockViewExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import './embed-edgeless-github-block.js';
import { EmbedGithubBlockService } from './embed-github-service.js';
export const EmbedGithubBlockSpec = [
    FlavourExtension('affine:embed-github'),
    EmbedGithubBlockService,
    BlockViewExtension('affine:embed-github', model => {
        return model.parent?.flavour === 'affine:surface'
            ? literal `affine-embed-edgeless-github-block`
            : literal `affine-embed-github-block`;
    }),
];
//# sourceMappingURL=embed-github-spec.js.map