import type { Constructor, IVec, SerializedXYWH } from '@lumensuite/global/utils';
import { Bound, PointLocation } from '@lumensuite/global/utils';
import { BlockModel } from '@lumensuite/store';
import type { EditorHost } from '../view/index.js';
import type { GfxCompatibleProps, GfxElementGeometry, GfxGroupLikeElementModel, GfxPrimitiveElementModel, PointTestOptions } from './surface/element-model.js';
export declare class GfxBlockElementModel<Props extends GfxCompatibleProps = GfxCompatibleProps> extends BlockModel<Props> implements GfxElementGeometry {
    private _externalXYWH;
    connectable: boolean;
    rotate: number;
    get elementBound(): Bound;
    get externalBound(): Bound | null;
    get externalXYWH(): SerializedXYWH | undefined;
    set externalXYWH(xywh: SerializedXYWH | undefined);
    get group(): GfxGroupLikeElementModel | null;
    get groups(): GfxGroupLikeElementModel[];
    containsBound(bounds: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    getNearestPoint(point: IVec): IVec;
    getRelativePointLocation(relativePoint: IVec): PointLocation;
    includesPoint(x: number, y: number, _: PointTestOptions, __: EditorHost): boolean;
    intersectsBound(bound: Bound): boolean;
}
export declare function GfxCompatible<Props extends GfxCompatibleProps, T extends Constructor<BlockModel<Props>> = Constructor<BlockModel<Props>>>(BlockModelSuperClass: T): typeof GfxBlockElementModel<Props>;
export type GfxModel = GfxBlockElementModel | GfxPrimitiveElementModel;
//# sourceMappingURL=gfx-block-model.d.ts.map