import type { CanvasRenderer } from '@lumensuite/affine-block-surface';
import type { EditorHost } from '@lumensuite/block-std';
import type { SurfaceRefBlockComponent } from '../../../surface-ref-block/surface-ref-block.js';
export declare const edgelessToBlob: (host: EditorHost, options: {
    surfaceRefBlock: SurfaceRefBlockComponent;
    surfaceRenderer: CanvasRenderer;
    edgelessElement: LumenSuite.EdgelessModel;
}) => Promise<Blob>;
export declare const writeImageBlobToClipboard: (blob: Blob) => Promise<void>;
//# sourceMappingURL=utils.d.ts.map