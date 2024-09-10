import { EPSILON, getBoundsFromPoints, lineIntersects, polygonPointDistance, } from '../math.js';
import { deserializeXYWH, serializeXYWH } from '../xywh.js';
export class Bound {
    get bl() {
        return [this.x, this.y + this.h];
    }
    get br() {
        return [this.x + this.w, this.y + this.h];
    }
    get center() {
        return [this.x + this.w / 2, this.y + this.h / 2];
    }
    set center([cx, cy]) {
        const [px, py] = this.center;
        this.x += cx - px;
        this.y += cy - py;
    }
    get horizontalLine() {
        return [
            [this.x, this.y + this.h / 2],
            [this.x + this.w, this.y + this.h / 2],
        ];
    }
    get leftLine() {
        return [
            [this.x, this.y],
            [this.x, this.y + this.h],
        ];
    }
    get lowerLine() {
        return [
            [this.x, this.y + this.h],
            [this.x + this.w, this.y + this.h],
        ];
    }
    get maxX() {
        return this.x + this.w;
    }
    get maxY() {
        return this.y + this.h;
    }
    get midPoints() {
        return [
            [this.x + this.w / 2, this.y],
            [this.x + this.w, this.y + this.h / 2],
            [this.x + this.w / 2, this.y + this.h],
            [this.x, this.y + this.h / 2],
        ];
    }
    get minX() {
        return this.x;
    }
    get minY() {
        return this.y;
    }
    get points() {
        return [
            [this.x, this.y],
            [this.x + this.w, this.y],
            [this.x + this.w, this.y + this.h],
            [this.x, this.y + this.h],
        ];
    }
    get rightLine() {
        return [
            [this.x + this.w, this.y],
            [this.x + this.w, this.y + this.h],
        ];
    }
    get tl() {
        return [this.x, this.y];
    }
    get tr() {
        return [this.x + this.w, this.y];
    }
    get upperLine() {
        return [
            [this.x, this.y],
            [this.x + this.w, this.y],
        ];
    }
    get verticalLine() {
        return [
            [this.x + this.w / 2, this.y],
            [this.x + this.w / 2, this.y + this.h],
        ];
    }
    constructor(x = 0, y = 0, w = 0, h = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    static deserialize(s) {
        const [x, y, w, h] = deserializeXYWH(s);
        return new Bound(x, y, w, h);
    }
    static from(arg1) {
        return new Bound(arg1.x, arg1.y, arg1.w, arg1.h);
    }
    static fromCenter(center, width, height) {
        const [x, y] = center;
        return new Bound(x - width / 2, y - height / 2, width, height);
    }
    static fromDOMRect({ left, top, width, height }) {
        return new Bound(left, top, width, height);
    }
    static fromPoints(points) {
        const { minX, minY, maxX, maxY } = getBoundsFromPoints(points);
        return new Bound(minX, minY, maxX - minX, maxY - minY);
    }
    static fromXYWH(xywh) {
        return new Bound(xywh[0], xywh[1], xywh[2], xywh[3]);
    }
    static serialize(bound) {
        return serializeXYWH(bound.x, bound.y, bound.w, bound.h);
    }
    clone() {
        return new Bound(this.x, this.y, this.w, this.h);
    }
    contains(bound) {
        return (bound.x >= this.x &&
            bound.y >= this.y &&
            bound.maxX <= this.maxX &&
            bound.maxY <= this.maxY);
    }
    containsPoint([x, y]) {
        const { minX, minY, maxX, maxY } = this;
        return minX <= x && x <= maxX && minY <= y && y <= maxY;
    }
    expand(left, top = left, right = left, bottom = top) {
        return new Bound(this.x - left, this.y - top, this.w + left + right, this.h + top + bottom);
    }
    getRelativePoint([x, y]) {
        return [this.x + x * this.w, this.y + y * this.h];
    }
    getVerticesAndMidpoints() {
        return [...this.points, ...this.midPoints];
    }
    horizontalDistance(bound) {
        return Math.min(Math.abs(this.minX - bound.maxX), Math.abs(this.maxX - bound.minX));
    }
    include(point) {
        const x1 = Math.min(this.x, point[0]), y1 = Math.min(this.y, point[1]), x2 = Math.max(this.maxX, point[0]), y2 = Math.max(this.maxY, point[1]);
        return new Bound(x1, y1, x2 - x1, y2 - y1);
    }
    intersectLine(sp, ep, infinite = false) {
        const rst = [];
        [
            [this.tl, this.tr],
            [this.tl, this.bl],
            [this.tr, this.br],
            [this.bl, this.br],
        ].forEach(([p1, p2]) => {
            const p = lineIntersects(sp, ep, p1, p2, infinite);
            if (p)
                rst.push(p);
        });
        return rst.length === 0 ? null : rst;
    }
    isHorizontalCross(bound) {
        return !(this.maxY < bound.minY || this.minY > bound.maxY);
    }
    isIntersectWithBound(bound, epsilon = EPSILON) {
        return (bound.maxX > this.minX - epsilon &&
            bound.maxY > this.minY - epsilon &&
            bound.minX < this.maxX + epsilon &&
            bound.minY < this.maxY + epsilon &&
            !this.contains(bound) &&
            !bound.contains(this));
    }
    isOverlapWithBound(bound, epsilon = EPSILON) {
        return (bound.maxX > this.minX - epsilon &&
            bound.maxY > this.minY - epsilon &&
            bound.minX < this.maxX + epsilon &&
            bound.minY < this.maxY + epsilon);
    }
    isPointInBound([x, y], tolerance = 0.01) {
        return (x > this.minX + tolerance &&
            x < this.maxX - tolerance &&
            y > this.minY + tolerance &&
            y < this.maxY - tolerance);
    }
    isPointNearBound([x, y], tolerance = 0.01) {
        return polygonPointDistance(this.points, [x, y]) < tolerance;
    }
    isVerticalCross(bound) {
        return !(this.maxX < bound.minX || this.minX > bound.maxX);
    }
    serialize() {
        return serializeXYWH(this.x, this.y, this.w, this.h);
    }
    toRelative([x, y]) {
        return [(x - this.x) / this.w, (y - this.y) / this.h];
    }
    toXYWH() {
        return [this.x, this.y, this.w, this.h];
    }
    unite(bound) {
        const x1 = Math.min(this.x, bound.x), y1 = Math.min(this.y, bound.y), x2 = Math.max(this.maxX, bound.maxX), y2 = Math.max(this.maxY, bound.maxY);
        return new Bound(x1, y1, x2 - x1, y2 - y1);
    }
    verticalDistance(bound) {
        return Math.min(Math.abs(this.minY - bound.maxY), Math.abs(this.maxY - bound.minY));
    }
}
//# sourceMappingURL=bound.js.map