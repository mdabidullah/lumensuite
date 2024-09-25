import type { PointTestOptions } from '@lumensuite/block-std/gfx';
import type { IBound, IVec } from '@lumensuite/global/utils';
import { Bound, PointLocation } from '@lumensuite/global/utils';
import type { ShapeElementModel } from '../shape.js';
export declare const triangle: {
    points({ x, y, w, h }: IBound): IVec[];
    draw(ctx: CanvasRenderingContext2D, { x, y, w, h, rotate }: IBound): void;
    includesPoint(this: ShapeElementModel, x: number, y: number, options: PointTestOptions): boolean;
    containsBound(bounds: Bound, element: ShapeElementModel): boolean;
    getNearestPoint(point: IVec, element: ShapeElementModel): IVec;
    getLineIntersections(start: IVec, end: IVec, element: ShapeElementModel): PointLocation[] | null;
    getRelativePointLocation(position: IVec, element: ShapeElementModel): PointLocation;
};
//# sourceMappingURL=triangle.d.ts.map