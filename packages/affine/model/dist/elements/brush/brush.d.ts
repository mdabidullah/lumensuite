import type { BaseElementProps, PointTestOptions } from '@lumensuite/block-std/gfx';
import { GfxPrimitiveElementModel } from '@lumensuite/block-std/gfx';
import { Bound, type IVec, type IVec3, PointLocation, type SerializedXYWH } from '@lumensuite/global/utils';
import type { Color } from '../../consts/index.js';
export type BrushProps = BaseElementProps & {
    /**
     * [[x0,y0,pressure0?],[x1,y1,pressure1?]...]
     * pressure is optional and exsits when pressure sensitivity is supported, otherwise not.
     */
    points: number[][];
    color: Color;
    lineWidth: number;
};
export declare class BrushElementModel extends GfxPrimitiveElementModel<BrushProps> {
    /**
     * The SVG path commands for the brush.
     */
    get commands(): string;
    get connectable(): boolean;
    get type(): string;
    static propsToY(props: BrushProps): BrushProps;
    containsBound(bounds: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    getNearestPoint(point: IVec): IVec;
    getRelativePointLocation(position: IVec): PointLocation;
    includesPoint(px: number, py: number, options?: PointTestOptions): boolean;
    accessor color: Color;
    accessor lineWidth: number;
    accessor points: (IVec | IVec3)[];
    accessor rotate: number;
    accessor xywh: SerializedXYWH;
}
declare global {
    namespace LumenSuite {
        interface SurfaceElementModelMap {
            brush: BrushElementModel;
        }
    }
}
//# sourceMappingURL=brush.d.ts.map