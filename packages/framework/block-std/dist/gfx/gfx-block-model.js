import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
import { Bound, getBoundsWithRotation, getPointsFromBoundsWithRotation, linePolygonIntersects, PointLocation, polygonGetPointTangent, polygonNearestPoint, rotatePoints, } from '@blocksuite/global/utils';
import { BlockModel } from '@blocksuite/store';
import { SurfaceBlockModel } from './surface/surface-model.js';
export class GfxBlockElementModel extends BlockModel {
    constructor() {
        super(...arguments);
        this._externalXYWH = undefined;
        this.connectable = true;
        this.rotate = 0;
    }
    get elementBound() {
        const bound = Bound.deserialize(this.xywh);
        return Bound.from(getBoundsWithRotation({ ...bound, rotate: this.rotate }));
    }
    get externalBound() {
        return this._externalXYWH ? Bound.deserialize(this._externalXYWH) : null;
    }
    get externalXYWH() {
        return this._externalXYWH;
    }
    set externalXYWH(xywh) {
        this._externalXYWH = xywh;
    }
    get group() {
        const surface = this.doc
            .getBlocks()
            .find(block => block instanceof SurfaceBlockModel);
        if (!surface)
            return null;
        return surface.getGroup(this.id) ?? null;
    }
    get groups() {
        const surface = this.doc
            .getBlocks()
            .find(block => block instanceof SurfaceBlockModel);
        if (!surface)
            return [];
        return surface.getGroups(this.id);
    }
    containsBound(bounds) {
        const bound = Bound.deserialize(this.xywh);
        const points = getPointsFromBoundsWithRotation({
            x: bound.x,
            y: bound.y,
            w: bound.w,
            h: bound.h,
            rotate: this.rotate,
        });
        return points.some(point => bounds.containsPoint(point));
    }
    getLineIntersections(start, end) {
        const bound = Bound.deserialize(this.xywh);
        return linePolygonIntersects(start, end, rotatePoints(bound.points, bound.center, this.rotate ?? 0));
    }
    getNearestPoint(point) {
        const bound = Bound.deserialize(this.xywh);
        return polygonNearestPoint(rotatePoints(bound.points, bound.center, this.rotate ?? 0), point);
    }
    getRelativePointLocation(relativePoint) {
        const bound = Bound.deserialize(this.xywh);
        const point = bound.getRelativePoint(relativePoint);
        const rotatePoint = rotatePoints([point], bound.center, this.rotate ?? 0)[0];
        const points = rotatePoints(bound.points, bound.center, this.rotate ?? 0);
        const tangent = polygonGetPointTangent(points, rotatePoint);
        return new PointLocation(rotatePoint, tangent);
    }
    includesPoint(x, y, _, __) {
        const bound = Bound.deserialize(this.xywh);
        return bound.isPointInBound([x, y], 0);
    }
    intersectsBound(bound) {
        return (this.containsBound(bound) ||
            bound.points.some((point, i, points) => this.getLineIntersections(point, points[(i + 1) % points.length])));
    }
}
export function GfxCompatible(BlockModelSuperClass) {
    if (BlockModelSuperClass === BlockModel) {
        return GfxBlockElementModel;
    }
    else {
        let currentClass = BlockModelSuperClass;
        while (Object.getPrototypeOf(currentClass.prototype) !== BlockModel.prototype &&
            Object.getPrototypeOf(currentClass.prototype) !== null) {
            currentClass = Object.getPrototypeOf(currentClass.prototype).constructor;
        }
        if (Object.getPrototypeOf(currentClass.prototype) === null) {
            throw new BlockSuiteError(ErrorCode.GfxBlockElementError, 'The SuperClass is not a subclass of BlockModel');
        }
        Object.setPrototypeOf(currentClass.prototype, GfxBlockElementModel.prototype);
    }
    return BlockModelSuperClass;
}
//# sourceMappingURL=gfx-block-model.js.map