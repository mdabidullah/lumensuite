var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { convert, derive, field, GfxPrimitiveElementModel, watch, } from '@lumensuite/block-std/gfx';
import { Bound, getBoundFromPoints, getPointsFromBoundsWithRotation, getQuadBoundsWithRotation, getSolidStrokePoints, getSvgPathFromStroke, inflateBound, isPointOnlines, lineIntersects, PointLocation, polyLineNearestPoint, transformPointsToNewBound, Vec, } from '@lumensuite/global/utils';
let BrushElementModel = (() => {
    let _classSuper = GfxPrimitiveElementModel;
    let _color_decorators;
    let _color_initializers = [];
    let _color_extraInitializers = [];
    let _lineWidth_decorators;
    let _lineWidth_initializers = [];
    let _lineWidth_extraInitializers = [];
    let _points_decorators;
    let _points_initializers = [];
    let _points_extraInitializers = [];
    let _rotate_decorators;
    let _rotate_initializers = [];
    let _rotate_extraInitializers = [];
    let _xywh_decorators;
    let _xywh_initializers = [];
    let _xywh_extraInitializers = [];
    return class BrushElementModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _color_decorators = [field()];
            _lineWidth_decorators = [watch((_, instance) => {
                    instance['_local'].delete('commands');
                }), derive((lineWidth, instance) => {
                    if (lineWidth === instance.lineWidth)
                        return {};
                    const bound = instance.elementBound;
                    const points = instance.points;
                    const transformed = transformPointsToNewBound(points.map(([x, y]) => ({ x, y })), bound, lineWidth / 2, inflateBound(bound, lineWidth - instance.lineWidth), lineWidth / 2);
                    return {
                        points: transformed.points.map((p, i) => [
                            p.x,
                            p.y,
                            ...(points[i][2] !== undefined ? [points[i][2]] : []),
                        ]),
                        xywh: transformed.bound.serialize(),
                    };
                }), field()];
            _points_decorators = [watch((_, instance) => {
                    instance['_local'].delete('commands');
                }), derive((points, instance) => {
                    const lineWidth = instance.lineWidth;
                    const bound = getBoundFromPoints(points);
                    const boundWidthLineWidth = inflateBound(bound, lineWidth);
                    return {
                        xywh: boundWidthLineWidth.serialize(),
                    };
                }), convert((points, instance) => {
                    const lineWidth = instance.lineWidth;
                    const bound = getBoundFromPoints(points);
                    const boundWidthLineWidth = inflateBound(bound, lineWidth);
                    const relativePoints = points.map(([x, y, pressure]) => [
                        x - boundWidthLineWidth.x,
                        y - boundWidthLineWidth.y,
                        ...(pressure !== undefined ? [pressure] : []),
                    ]);
                    return relativePoints;
                }), field()];
            _rotate_decorators = [field(0)];
            _xywh_decorators = [derive((xywh, instance) => {
                    const bound = Bound.deserialize(xywh);
                    if (bound.w === instance.w && bound.h === instance.h)
                        return {};
                    const { lineWidth } = instance;
                    const transformed = transformPointsToNewBound(instance.points.map(([x, y]) => ({ x, y })), instance, lineWidth / 2, bound, lineWidth / 2);
                    return {
                        points: transformed.points.map((p, i) => [
                            p.x,
                            p.y,
                            ...(instance.points[i][2] !== undefined ? [instance.points[i][2]] : []),
                        ]),
                    };
                }), field()];
            __esDecorate(this, null, _color_decorators, { kind: "accessor", name: "color", static: false, private: false, access: { has: obj => "color" in obj, get: obj => obj.color, set: (obj, value) => { obj.color = value; } }, metadata: _metadata }, _color_initializers, _color_extraInitializers);
            __esDecorate(this, null, _lineWidth_decorators, { kind: "accessor", name: "lineWidth", static: false, private: false, access: { has: obj => "lineWidth" in obj, get: obj => obj.lineWidth, set: (obj, value) => { obj.lineWidth = value; } }, metadata: _metadata }, _lineWidth_initializers, _lineWidth_extraInitializers);
            __esDecorate(this, null, _points_decorators, { kind: "accessor", name: "points", static: false, private: false, access: { has: obj => "points" in obj, get: obj => obj.points, set: (obj, value) => { obj.points = value; } }, metadata: _metadata }, _points_initializers, _points_extraInitializers);
            __esDecorate(this, null, _rotate_decorators, { kind: "accessor", name: "rotate", static: false, private: false, access: { has: obj => "rotate" in obj, get: obj => obj.rotate, set: (obj, value) => { obj.rotate = value; } }, metadata: _metadata }, _rotate_initializers, _rotate_extraInitializers);
            __esDecorate(this, null, _xywh_decorators, { kind: "accessor", name: "xywh", static: false, private: false, access: { has: obj => "xywh" in obj, get: obj => obj.xywh, set: (obj, value) => { obj.xywh = value; } }, metadata: _metadata }, _xywh_initializers, _xywh_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        /**
         * The SVG path commands for the brush.
         */
        get commands() {
            if (!this._local.has('commands')) {
                const stroke = getSolidStrokePoints(this.points, this.lineWidth);
                const commands = getSvgPathFromStroke(stroke);
                this._local.set('commands', commands);
            }
            return this._local.get('commands');
        }
        get connectable() {
            return false;
        }
        get type() {
            return 'brush';
        }
        static propsToY(props) {
            return props;
        }
        containsBound(bounds) {
            const points = getPointsFromBoundsWithRotation(this);
            return points.some(point => bounds.containsPoint(point));
        }
        getLineIntersections(start, end) {
            const tl = [this.x, this.y];
            const points = getPointsFromBoundsWithRotation(this, _ => this.points.map(point => Vec.add(point, tl)));
            const box = Bound.fromDOMRect(getQuadBoundsWithRotation(this));
            if (box.w < 8 && box.h < 8) {
                return Vec.distanceToLineSegment(start, end, box.center) < 5 ? [] : null;
            }
            if (box.intersectLine(start, end, true)) {
                const len = points.length;
                for (let i = 1; i < len; i++) {
                    const result = lineIntersects(start, end, points[i - 1], points[i]);
                    if (result) {
                        return [
                            new PointLocation(result, Vec.normalize(Vec.sub(points[i], points[i - 1]))),
                        ];
                    }
                }
            }
            return null;
        }
        getNearestPoint(point) {
            const { x, y } = this;
            return polyLineNearestPoint(this.points.map(p => Vec.add(p, [x, y])), point);
        }
        getRelativePointLocation(position) {
            const point = Bound.deserialize(this.xywh).getRelativePoint(position);
            return new PointLocation(point);
        }
        includesPoint(px, py, options) {
            const hit = isPointOnlines(Bound.deserialize(this.xywh), this.points, this.rotate, [px, py], (options?.hitThreshold ?? 10) / Math.min(options?.zoom ?? 1, 1));
            return hit;
        }
        #color_accessor_storage = __runInitializers(this, _color_initializers, '#000000');
        get color() { return this.#color_accessor_storage; }
        set color(value) { this.#color_accessor_storage = value; }
        #lineWidth_accessor_storage = (__runInitializers(this, _color_extraInitializers), __runInitializers(this, _lineWidth_initializers, 4));
        get lineWidth() { return this.#lineWidth_accessor_storage; }
        set lineWidth(value) { this.#lineWidth_accessor_storage = value; }
        #points_accessor_storage = (__runInitializers(this, _lineWidth_extraInitializers), __runInitializers(this, _points_initializers, []));
        get points() { return this.#points_accessor_storage; }
        set points(value) { this.#points_accessor_storage = value; }
        #rotate_accessor_storage = (__runInitializers(this, _points_extraInitializers), __runInitializers(this, _rotate_initializers, 0));
        get rotate() { return this.#rotate_accessor_storage; }
        set rotate(value) { this.#rotate_accessor_storage = value; }
        #xywh_accessor_storage = (__runInitializers(this, _rotate_extraInitializers), __runInitializers(this, _xywh_initializers, '[0,0,0,0]'));
        get xywh() { return this.#xywh_accessor_storage; }
        set xywh(value) { this.#xywh_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _xywh_extraInitializers);
        }
    };
})();
export { BrushElementModel };
//# sourceMappingURL=brush.js.map