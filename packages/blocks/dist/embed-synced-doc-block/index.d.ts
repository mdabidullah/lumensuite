import type { EmbedSyncedDocBlockService } from './embed-synced-doc-service.js';
export * from './embed-synced-doc-block.js';
export * from './embed-synced-doc-service.js';
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:embed-synced-doc': EmbedSyncedDocBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map