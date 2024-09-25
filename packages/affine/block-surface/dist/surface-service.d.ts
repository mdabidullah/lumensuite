import { BlockService } from '@lumensuite/block-std';
import { type SurfaceBlockModel } from './surface-model.js';
export declare class SurfaceBlockService extends BlockService {
    static readonly flavour: "affine:surface";
    surface: SurfaceBlockModel;
    get layer(): import("@lumensuite/block-std/gfx").LayerManager;
    mounted(): void;
}
//# sourceMappingURL=surface-service.d.ts.map