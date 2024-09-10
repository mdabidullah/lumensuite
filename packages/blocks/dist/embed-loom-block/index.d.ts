import type { EmbedLoomBlockService } from './embed-loom-service.js';
export * from './embed-loom-block.js';
export * from './embed-loom-model.js';
export * from './embed-loom-service.js';
export * from './embed-loom-spec.js';
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:embed-loom': EmbedLoomBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map