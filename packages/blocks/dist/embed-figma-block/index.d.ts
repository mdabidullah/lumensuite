import type { EmbedFigmaBlockService } from './embed-figma-service.js';
export * from './embed-figma-block.js';
export * from './embed-figma-model.js';
export * from './embed-figma-spec.js';
declare global {
    namespace LumenSuite {
        interface BlockServices {
            'affine:embed-figma': EmbedFigmaBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map