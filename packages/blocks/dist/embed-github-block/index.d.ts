import type { EmbedGithubBlockService } from './embed-github-service.js';
export * from './embed-github-block.js';
export * from './embed-github-service.js';
export * from './embed-github-spec.js';
declare global {
    namespace LumenSuite {
        interface BlockServices {
            'affine:embed-github': EmbedGithubBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map