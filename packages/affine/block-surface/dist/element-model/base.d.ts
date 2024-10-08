import type { GfxPrimitiveElementModel } from '@lumensuite/block-std/gfx';
import type { OmitFunctionsAndKeysAndReadOnly } from './utility-type.js';
export type ModelToProps<T extends GfxPrimitiveElementModel, K extends keyof any> = OmitFunctionsAndKeysAndReadOnly<T, K | 'yMap' | 'surface' | 'display' | 'opacity' | 'externalXYWH'>;
export { GfxGroupLikeElementModel as SurfaceGroupLikeModel, GfxPrimitiveElementModel as SurfaceElementModel, } from '@lumensuite/block-std/gfx';
//# sourceMappingURL=base.d.ts.map