import { SurfaceRefBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
import { SurfaceRefRenderer } from './surface-ref-renderer.js';
export class SurfaceRefBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this._rendererMap = new Map();
    }
    static { this.flavour = SurfaceRefBlockSchema.model.flavour; }
    getRenderer(id, doc = this.doc, stackingCanvas = false) {
        if (this._rendererMap.has(id)) {
            return this._rendererMap.get(id);
        }
        const renderer = new SurfaceRefRenderer(id, doc, this.std, {
            enableStackingCanvas: stackingCanvas,
        });
        this._rendererMap.set(id, renderer);
        return renderer;
    }
    removeRenderer(id) {
        const renderer = this._rendererMap.get(id);
        if (renderer) {
            renderer.unmount();
            this._rendererMap.delete(id);
        }
    }
}
//# sourceMappingURL=surface-ref-service.js.map