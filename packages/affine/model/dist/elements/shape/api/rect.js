import { Bound, getCenterAreaBounds, getPointsFromBoundsWithRotation, linePolygonIntersects, pointInPolygon, PointLocation, pointOnPolygonStoke, polygonGetPointTangent, polygonNearestPoint, rotatePoints, } from '@lumensuite/global/utils';
import { DEFAULT_CENTRAL_AREA_RATIO } from '../../../consts/index.js';
export const rect = {
    points({ x, y, w, h }) {
        return [
            [x, y],
            [x + w, y],
            [x + w, y + h],
            [x, y + h],
        ];
    },
    draw(ctx, { x, y, w, h, rotate = 0 }) {
        ctx.save();
        ctx.translate(x + w / 2, y + h / 2);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-x - w / 2, -y - h / 2);
        ctx.rect(x, y, w, h);
        ctx.restore();
    },
    includesPoint(x, y, options) {
        const point = [x, y];
        const points = getPointsFromBoundsWithRotation(this, undefined, options.responsePadding);
        let hit = pointOnPolygonStoke(point, points, (options?.hitThreshold ?? 1) / (options.zoom ?? 1));
        if (!hit) {
            // If the point is not on the stroke, check if it is in the shape
            // When the shape is filled and transparent is not ignored
            if (!options.ignoreTransparent || this.filled) {
                hit = pointInPolygon([x, y], points);
            }
            else {
                // If shape is not filled or transparent
                // Check if hit the text area
                const text = this.text;
                if (!text || !text.length) {
                    // if not, check the default center area of the shape
                    const centralBounds = getCenterAreaBounds(this, DEFAULT_CENTRAL_AREA_RATIO);
                    const centralPoints = getPointsFromBoundsWithRotation(centralBounds);
                    // Check if the point is in the center area
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
        const points = getPointsFromBoundsWithRotation(element);
        return points.some(point => bounds.containsPoint(point));
    },
    getNearestPoint(point, element) {
        const points = getPointsFromBoundsWithRotation(element);
        return polygonNearestPoint(points, point);
    },
    getLineIntersections(start, end, element) {
        const points = getPointsFromBoundsWithRotation(element);
        return linePolygonIntersects(start, end, points);
    },
    getRelativePointLocation(relativePoint, element) {
        const bound = Bound.deserialize(element.xywh);
        const point = bound.getRelativePoint(relativePoint);
        const rotatePoint = rotatePoints([point], bound.center, element.rotate ?? 0)[0];
        const points = rotatePoints(bound.points, bound.center, element.rotate ?? 0);
        const tangent = polygonGetPointTangent(points, rotatePoint);
        return new PointLocation(rotatePoint, tangent);
    },
};
//# sourceMappingURL=rect.js.map