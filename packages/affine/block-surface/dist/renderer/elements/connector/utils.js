import { ConnectorMode, } from '@lumensuite/affine-model';
import { getBezierParameters, getBezierTangent, Vec, } from '@lumensuite/global/utils';
export const DEFAULT_ARROW_SIZE = 15;
export function getArrowPoints(points, size = 10, mode, bezierParameters, endPoint = 'Rear', radians = Math.PI / 4) {
    const anchorPoint = getPointWithTangent(points, mode, endPoint, bezierParameters);
    const unit = Vec.mul(anchorPoint.tangent, -1);
    const angle = endPoint === 'Front' ? Math.PI : 0;
    return {
        points: [
            Vec.add(Vec.mul(Vec.rot(unit, angle + radians), size), anchorPoint),
            anchorPoint,
            Vec.add(Vec.mul(Vec.rot(unit, angle - radians), size), anchorPoint),
        ],
    };
}
export function getCircleCenterPoint(points, radius = 5, mode, bezierParameters, endPoint = 'Rear') {
    const anchorPoint = getPointWithTangent(points, mode, endPoint, bezierParameters);
    const unit = Vec.mul(anchorPoint.tangent, -1);
    const angle = endPoint === 'Front' ? Math.PI : 0;
    return Vec.add(Vec.mul(Vec.rot(unit, angle), radius), anchorPoint);
}
export function getPointWithTangent(points, mode, endPoint, bezierParameters) {
    const anchorIndex = endPoint === 'Rear' ? points.length - 1 : 0;
    const pointToAnchorIndex = endPoint === 'Rear' ? anchorIndex - 1 : anchorIndex + 1;
    const anchorPoint = points[anchorIndex];
    const pointToAnchor = points[pointToAnchorIndex];
    const clone = anchorPoint.clone();
    let tangent;
    if (mode !== ConnectorMode.Curve) {
        tangent =
            endPoint === 'Rear'
                ? Vec.tangent(anchorPoint, pointToAnchor)
                : Vec.tangent(pointToAnchor, anchorPoint);
    }
    else {
        tangent =
            endPoint === 'Rear'
                ? getBezierTangent(bezierParameters, 1)
                : getBezierTangent(bezierParameters, 0);
    }
    clone.tangent = tangent ?? [0, 0];
    return clone;
}
export function getDiamondPoints(point, size = 10, endPoint = 'Rear') {
    const unit = Vec.mul(point.tangent, -1);
    const angle = endPoint === 'Front' ? Math.PI : 0;
    const diamondPoints = [
        Vec.add(Vec.mul(Vec.rot(unit, angle + Math.PI * 0.25), size), point),
        point,
        Vec.add(Vec.mul(Vec.rot(unit, angle - Math.PI * 0.25), size), point),
        Vec.add(Vec.mul(Vec.rot(unit, angle), size * Math.sqrt(2)), point),
    ];
    return {
        points: diamondPoints,
    };
}
export function getArrowOptions(end, model, strokeColor) {
    const { seed, mode, rough, roughness, strokeWidth, path } = model;
    return {
        end,
        seed,
        mode,
        rough,
        roughness,
        strokeWidth,
        strokeColor,
        fillColor: strokeColor,
        fillStyle: 'solid',
        bezierParameters: getBezierParameters(path),
    };
}
export function getRcOptions(options) {
    const { seed, roughness, strokeWidth, strokeColor, fillColor } = options;
    return {
        seed,
        roughness,
        stroke: strokeColor,
        strokeWidth,
        fill: fillColor,
        fillStyle: 'solid',
    };
}
export function renderRoundedPolygon(ctx, points, color, strokeWidth, fill = true) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
        if (i === 0) {
            ctx.moveTo(points[i][0], points[i][1]);
        }
        else {
            ctx.lineTo(points[i][0], points[i][1]);
        }
    }
    if (fill) {
        ctx.closePath();
        ctx.fill();
    }
    ctx.stroke();
    ctx.restore();
}
export function renderArrow(points, ctx, rc, options) {
    const { mode, end, bezierParameters, rough, strokeColor, strokeWidth } = options;
    const radians = Math.PI / 4;
    const size = DEFAULT_ARROW_SIZE * (strokeWidth / 2);
    const { points: arrowPoints } = getArrowPoints(points, size, mode, bezierParameters, end, radians);
    if (rough) {
        rc.linearPath(arrowPoints, getRcOptions(options));
    }
    else {
        renderRoundedPolygon(ctx, arrowPoints, strokeColor, strokeWidth, false);
    }
}
export function renderTriangle(points, ctx, rc, options) {
    const { mode, end, bezierParameters, rough, strokeColor, strokeWidth } = options;
    const radians = Math.PI / 6;
    const size = DEFAULT_ARROW_SIZE * (strokeWidth / 2);
    const { points: trianglePoints } = getArrowPoints(points, size, mode, bezierParameters, end, radians);
    if (rough) {
        rc.polygon([
            [trianglePoints[0][0], trianglePoints[0][1]],
            [trianglePoints[1][0], trianglePoints[1][1]],
            [trianglePoints[2][0], trianglePoints[2][1]],
        ], getRcOptions(options));
    }
    else {
        renderRoundedPolygon(ctx, trianglePoints, strokeColor, strokeWidth);
    }
}
export function renderDiamond(points, ctx, rc, options) {
    const { mode, end, rough, bezierParameters, strokeColor, strokeWidth } = options;
    const anchorPoint = getPointWithTangent(points, mode, end, bezierParameters);
    const size = 10 * (strokeWidth / 2);
    const { points: diamondPoints } = getDiamondPoints(anchorPoint, size, end);
    if (rough) {
        rc.polygon([
            [diamondPoints[0][0], diamondPoints[0][1]],
            [diamondPoints[1][0], diamondPoints[1][1]],
            [diamondPoints[2][0], diamondPoints[2][1]],
            [diamondPoints[3][0], diamondPoints[3][1]],
        ], getRcOptions(options));
    }
    else {
        renderRoundedPolygon(ctx, diamondPoints, strokeColor, strokeWidth);
    }
}
export function renderCircle(points, ctx, rc, options) {
    const { bezierParameters, mode, end, fillColor, strokeColor, strokeWidth, rough, } = options;
    const radius = 5 * (strokeWidth / 2);
    const centerPoint = getCircleCenterPoint(points, radius, mode, bezierParameters, end);
    const cx = centerPoint[0];
    const cy = centerPoint[1];
    if (rough) {
        // radius + 2 when render rough circle to avoid connector line cross the circle and make it looks bad
        rc.circle(cx, cy, radius + 2, getRcOptions(options));
    }
    else {
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, radius, radius, 0, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}
//# sourceMappingURL=utils.js.map