import type { EmbedYoutubeBlockService } from './embed-youtube-service.js';
export * from './embed-youtube-block.js';
export * from './embed-youtube-model.js';
export * from './embed-youtube-service.js';
export * from './embed-youtube-spec.js';
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:embed-youtube': EmbedYoutubeBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map