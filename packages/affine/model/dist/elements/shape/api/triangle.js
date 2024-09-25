import { Bound, getCenterAreaBounds, getPointsFromBoundsWithRotation, linePolygonIntersects, pointInPolygon, PointLocation, pointOnPolygonStoke, polygonGetPointTangent, polygonNearestPoint, rotatePoints, } from '@lumensuite/global/utils';
import { DEFAULT_CENTRAL_AREA_RATIO } from '../../../consts/index.js';
export const triangle = {
    points({ x, y, w, h }) {
        return [
            [x, y + h],
            [x + w / 2, y],
            [x + w, y + h],
        ];
    },
    draw(ctx, { x, y, w, h, rotate = 0 }) {
        const cx = x + w / 2;
        const cy = y + h / 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.moveTo(x, y + h);
        ctx.lineTo(x + w / 2, y);
        ctx.lineTo(x + w, y + h);
        ctx.closePath();
        ctx.restore();
    },
    includesPoint(x, y, options) {
        const point = [x, y];
        const points = getPointsFromBoundsWithRotation(this, triangle.points);
        let hit = pointOnPolygonStoke(point, points, (options?.hitThreshold ?? 1) / (options?.zoom ?? 1));
        if (!hit) {
            if (!options.ignoreTransparent || this.filled) {
                hit = pointInPolygon([x, y], points);
            }
            else {
                // If shape is not filled or transparent
                const text = this.text;
                if (!text || !text.length) {
                    // Check the center area of the shape
                    const centralBounds = getCenterAreaBounds(this, DEFAULT_CENTRAL_AREA_RATIO);
                    const centralPoints = getPointsFromBoundsWithRotation(centralBounds, triangle.points);
                    hit = pointInPolygon([x, y], centralPoints);
                }
                else if (this.textBound) {
                    hit = pointInPolygon(point, getPointsFromBoundsWithRotation(this, () => Bound.from(this.textBound).points));
                }
            }
        }
        return hit;
    },
    containsBound(bounds, element) {
        const points = getPointsFromBoundsWithRotation(element, triangle.points);
        return points.some(point => bounds.containsPoint(point));
    },
    getNearestPoint(point, element) {
        const points = getPointsFromBoundsWithRotation(element, triangle.points);
        return polygonNearestPoint(points, point);
    },
    getLineIntersections(start, end, element) {
        const points = getPointsFromBoundsWithRotation(element, triangle.points);
        return linePolygonIntersects(start, end, points);
    },
    getRelativePointLocation(position, element) {
        const bound = Bound.deserialize(element.xywh);
        const point = bound.getRelativePoint(position);
        let points = triangle.points(bound);
        points.push(point);
        points = rotatePoints(points, bound.center, element.rotate);
        const rotatePoint = points.pop();
        const tangent = polygonGetPointTangent(points, rotatePoint);
        return new PointLocation(rotatePoint, tangent);
    },
};
//# sourceMappingURL=triangle.js.map