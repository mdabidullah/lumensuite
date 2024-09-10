import type { EmbedHtmlBlockService } from './embed-html-service.js';
export * from './embed-html-block.js';
export * from './embed-html-service.js';
export * from './embed-html-spec.js';
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:embed-html': EmbedHtmlBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map