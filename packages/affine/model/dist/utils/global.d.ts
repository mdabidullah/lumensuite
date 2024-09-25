import type { GfxBlockElementModel, GfxGroupLikeElementModel, GfxLocalElementModel, GfxModel, GfxPrimitiveElementModel } from '@lumensuite/block-std/gfx';
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
        }
        type EdgelessBlockModelKeyType = keyof EdgelessBlockModelMap;
        type EdgelessBlockModelType = EdgelessBlockModelMap[EdgelessBlockModelKeyType] | GfxBlockElementModel;
        type EdgelessModel = GfxModel;
        interface EdgelessTextModelMap {
        }
        type EdgelessTextModelKeyType = keyof EdgelessTextModelMap;
        type EdgelessTextModelType = EdgelessTextModelMap[EdgelessTextModelKeyType];
        interface SurfaceElementModelMap {
        }
        type SurfaceElementModelKeys = keyof SurfaceElementModelMap;
        type SurfaceElementModel = SurfaceElementModelMap[SurfaceElementModelKeys] | GfxPrimitiveElementModel;
        interface SurfaceGroupLikeModelMap {
        }
        type SurfaceGroupLikeModelKeys = keyof SurfaceGroupLikeModelMap;
        type SurfaceGroupLikeModel = SurfaceGroupLikeModelMap[SurfaceGroupLikeModelKeys] | GfxGroupLikeElementModel;
        interface SurfaceLocalModelMap {
        }
        type SurfaceLocalModelKeys = keyof SurfaceLocalModelMap;
        type SurfaceLocalModel = SurfaceLocalModelMap[SurfaceLocalModelKeys] | GfxLocalElementModel;
        type SurfaceModel = SurfaceElementModel | SurfaceGroupLikeModel;
        type SurfaceModelKeyType = SurfaceElementModelKeys | SurfaceGroupLikeModelKeys;
    }
}
//# sourceMappingURL=global.d.ts.map