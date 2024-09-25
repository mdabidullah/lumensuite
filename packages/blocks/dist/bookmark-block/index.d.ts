import type { BookmarkBlockService } from './bookmark-service.js';
export * from './bookmark-block.js';
export * from './bookmark-service.js';
declare global {
    namespace LumenSuite {
        interface BlockServices {
            'affine:bookmark': BookmarkBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map