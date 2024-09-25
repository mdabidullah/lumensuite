import type { ImageBlockService } from './image-service.js';
export * from './image-block.js';
export * from './image-edgeless-block.js';
export * from './image-service.js';
export { ImageSelection } from '@lumensuite/affine-shared/selection';
declare global {
    namespace LumenSuite {
        interface BlockServices {
            'affine:image': ImageBlockService;
        }
    }
}
//# sourceMappingURL=index.d.ts.map