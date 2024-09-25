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
import { derive, field, GfxPrimitiveElementModel, local, } from '@lumensuite/block-std/gfx';
import { Bound, curveIntersects, getBezierNearestPoint, getBezierNearestTime, getBezierParameters, getBezierPoint, linePolylineIntersects, PointLocation, Polyline, polyLineNearestPoint, Vec, } from '@lumensuite/global/utils';
import { DocCollection } from '@lumensuite/store';
import { CONNECTOR_LABEL_MAX_WIDTH, ConnectorLabelOffsetAnchor, ConnectorMode, DEFAULT_ROUGHNESS, FontFamily, FontStyle, FontWeight, StrokeStyle, TextAlign, } from '../../consts/index.js';
export const getConnectorModeName = (mode) => {
    return {
        [ConnectorMode.Straight]: 'Straight',
        [ConnectorMode.Orthogonal]: 'Elbowed',
        [ConnectorMode.Curve]: 'Curve',
    }[mode];
};
let ConnectorElementModel = (() => {
    let _classSuper = GfxPrimitiveElementModel;
    let _absolutePath_decorators;
    let _absolutePath_initializers = [];
    let _absolutePath_extraInitializers = [];
    let _frontEndpointStyle_decorators;
    let _frontEndpointStyle_initializers = [];
    let _frontEndpointStyle_extraInitializers = [];
    let _labelConstraints_decorators;
    let _labelConstraints_initializers = [];
    let _labelConstraints_extraInitializers = [];
    let _labelDisplay_decorators;
    let _labelDisplay_initializers = [];
    let _labelDisplay_extraInitializers = [];
    let _labelOffset_decorators;
    let _labelOffset_initializers = [];
    let _labelOffset_extraInitializers = [];
    let _labelStyle_decorators;
    let _labelStyle_initializers = [];
    let _labelStyle_extraInitializers = [];
    let _labelXYWH_decorators;
    let _labelXYWH_initializers = [];
    let _labelXYWH_extraInitializers = [];
    let _lableEditing_decorators;
    let _lableEditing_initializers = [];
    let _lableEditing_extraInitializers = [];
    let _mode_decorators;
    let _mode_initializers = [];
    let _mode_extraInitializers = [];
    let _path_decorators;
    let _path_initializers = [];
    let _path_extraInitializers = [];
    let _rearEndpointStyle_decorators;
    let _rearEndpointStyle_initializers = [];
    let _rearEndpointStyle_extraInitializers = [];
    let _rotate_decorators;
    let _rotate_initializers = [];
    let _rotate_extraInitializers = [];
    let _rough_decorators;
    let _rough_initializers = [];
    let _rough_extraInitializers = [];
    let _roughness_decorators;
    let _roughness_initializers = [];
    let _roughness_extraInitializers = [];
    let _source_decorators;
    let _source_initializers = [];
    let _source_extraInitializers = [];
    let _stroke_decorators;
    let _stroke_initializers = [];
    let _stroke_extraInitializers = [];
    let _strokeStyle_decorators;
    let _strokeStyle_initializers = [];
    let _strokeStyle_extraInitializers = [];
    let _strokeWidth_decorators;
    let _strokeWidth_initializers = [];
    let _strokeWidth_extraInitializers = [];
    let _target_decorators;
    let _target_initializers = [];
    let _target_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _xywh_decorators;
    let _xywh_initializers = [];
    let _xywh_extraInitializers = [];
    return class ConnectorElementModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _absolutePath_decorators = [local()];
            _frontEndpointStyle_decorators = [field('None')];
            _labelConstraints_decorators = [field({
                    hasMaxWidth: true,
                    maxWidth: CONNECTOR_LABEL_MAX_WIDTH,
                })];
            _labelDisplay_decorators = [field(true)];
            _labelOffset_decorators = [field({
                    distance: 0.5,
                    anchor: ConnectorLabelOffsetAnchor.Center,
                })];
            _labelStyle_decorators = [field({
                    color: '#000000',
                    fontFamily: FontFamily.Inter,
                    fontSize: 16,
                    fontStyle: FontStyle.Normal,
                    fontWeight: FontWeight.Regular,
                    textAlign: TextAlign.Center,
                })];
            _labelXYWH_decorators = [field()];
            _lableEditing_decorators = [local()];
            _mode_decorators = [field()];
            _path_decorators = [derive((path, instance) => {
                    const { x, y } = instance;
                    return {
                        absolutePath: path.map(p => p.clone().setVec(Vec.add(p, [x, y]))),
                    };
                }), local()];
            _rearEndpointStyle_decorators = [field('Arrow')];
            _rotate_decorators = [local()];
            _rough_decorators = [field()];
            _roughness_decorators = [field()];
            _source_decorators = [field()];
            _stroke_decorators = [field()];
            _strokeStyle_decorators = [field()];
            _strokeWidth_decorators = [field()];
            _target_decorators = [field()];
            _text_decorators = [field()];
            _xywh_decorators = [local()];
            __esDecorate(this, null, _absolutePath_decorators, { kind: "accessor", name: "absolutePath", static: false, private: false, access: { has: obj => "absolutePath" in obj, get: obj => obj.absolutePath, set: (obj, value) => { obj.absolutePath = value; } }, metadata: _metadata }, _absolutePath_initializers, _absolutePath_extraInitializers);
            __esDecorate(this, null, _frontEndpointStyle_decorators, { kind: "accessor", name: "frontEndpointStyle", static: false, private: false, access: { has: obj => "frontEndpointStyle" in obj, get: obj => obj.frontEndpointStyle, set: (obj, value) => { obj.frontEndpointStyle = value; } }, metadata: _metadata }, _frontEndpointStyle_initializers, _frontEndpointStyle_extraInitializers);
            __esDecorate(this, null, _labelConstraints_decorators, { kind: "accessor", name: "labelConstraints", static: false, private: false, access: { has: obj => "labelConstraints" in obj, get: obj => obj.labelConstraints, set: (obj, value) => { obj.labelConstraints = value; } }, metadata: _metadata }, _labelConstraints_initializers, _labelConstraints_extraInitializers);
            __esDecorate(this, null, _labelDisplay_decorators, { kind: "accessor", name: "labelDisplay", static: false, private: false, access: { has: obj => "labelDisplay" in obj, get: obj => obj.labelDisplay, set: (obj, value) => { obj.labelDisplay = value; } }, metadata: _metadata }, _labelDisplay_initializers, _labelDisplay_extraInitializers);
            __esDecorate(this, null, _labelOffset_decorators, { kind: "accessor", name: "labelOffset", static: false, private: false, access: { has: obj => "labelOffset" in obj, get: obj => obj.labelOffset, set: (obj, value) => { obj.labelOffset = value; } }, metadata: _metadata }, _labelOffset_initializers, _labelOffset_extraInitializers);
            __esDecorate(this, null, _labelStyle_decorators, { kind: "accessor", name: "labelStyle", static: false, private: false, access: { has: obj => "labelStyle" in obj, get: obj => obj.labelStyle, set: (obj, value) => { obj.labelStyle = value; } }, metadata: _metadata }, _labelStyle_initializers, _labelStyle_extraInitializers);
            __esDecorate(this, null, _labelXYWH_decorators, { kind: "accessor", name: "labelXYWH", static: false, private: false, access: { has: obj => "labelXYWH" in obj, get: obj => obj.labelXYWH, set: (obj, value) => { obj.labelXYWH = value; } }, metadata: _metadata }, _labelXYWH_initializers, _labelXYWH_extraInitializers);
            __esDecorate(this, null, _lableEditing_decorators, { kind: "accessor", name: "lableEditing", static: false, private: false, access: { has: obj => "lableEditing" in obj, get: obj => obj.lableEditing, set: (obj, value) => { obj.lableEditing = value; } }, metadata: _metadata }, _lableEditing_initializers, _lableEditing_extraInitializers);
            __esDecorate(this, null, _mode_decorators, { kind: "accessor", name: "mode", static: false, private: false, access: { has: obj => "mode" in obj, get: obj => obj.mode, set: (obj, value) => { obj.mode = value; } }, metadata: _metadata }, _mode_initializers, _mode_extraInitializers);
            __esDecorate(this, null, _path_decorators, { kind: "accessor", name: "path", static: false, private: false, access: { has: obj => "path" in obj, get: obj => obj.path, set: (obj, value) => { obj.path = value; } }, metadata: _metadata }, _path_initializers, _path_extraInitializers);
            __esDecorate(this, null, _rearEndpointStyle_decorators, { kind: "accessor", name: "rearEndpointStyle", static: false, private: false, access: { has: obj => "rearEndpointStyle" in obj, get: obj => obj.rearEndpointStyle, set: (obj, value) => { obj.rearEndpointStyle = value; } }, metadata: _metadata }, _rearEndpointStyle_initializers, _rearEndpointStyle_extraInitializers);
            __esDecorate(this, null, _rotate_decorators, { kind: "accessor", name: "rotate", static: false, private: false, access: { has: obj => "rotate" in obj, get: obj => obj.rotate, set: (obj, value) => { obj.rotate = value; } }, metadata: _metadata }, _rotate_initializers, _rotate_extraInitializers);
            __esDecorate(this, null, _rough_decorators, { kind: "accessor", name: "rough", static: false, private: false, access: { has: obj => "rough" in obj, get: obj => obj.rough, set: (obj, value) => { obj.rough = value; } }, metadata: _metadata }, _rough_initializers, _rough_extraInitializers);
            __esDecorate(this, null, _roughness_decorators, { kind: "accessor", name: "roughness", static: false, private: false, access: { has: obj => "roughness" in obj, get: obj => obj.roughness, set: (obj, value) => { obj.roughness = value; } }, metadata: _metadata }, _roughness_initializers, _roughness_extraInitializers);
            __esDecorate(this, null, _source_decorators, { kind: "accessor", name: "source", static: false, private: false, access: { has: obj => "source" in obj, get: obj => obj.source, set: (obj, value) => { obj.source = value; } }, metadata: _metadata }, _source_initializers, _source_extraInitializers);
            __esDecorate(this, null, _stroke_decorators, { kind: "accessor", name: "stroke", static: false, private: false, access: { has: obj => "stroke" in obj, get: obj => obj.stroke, set: (obj, value) => { obj.stroke = value; } }, metadata: _metadata }, _stroke_initializers, _stroke_extraInitializers);
            __esDecorate(this, null, _strokeStyle_decorators, { kind: "accessor", name: "strokeStyle", static: false, private: false, access: { has: obj => "strokeStyle" in obj, get: obj => obj.strokeStyle, set: (obj, value) => { obj.strokeStyle = value; } }, metadata: _metadata }, _strokeStyle_initializers, _strokeStyle_extraInitializers);
            __esDecorate(this, null, _strokeWidth_decorators, { kind: "accessor", name: "strokeWidth", static: false, private: false, access: { has: obj => "strokeWidth" in obj, get: obj => obj.strokeWidth, set: (obj, value) => { obj.strokeWidth = value; } }, metadata: _metadata }, _strokeWidth_initializers, _strokeWidth_extraInitializers);
            __esDecorate(this, null, _target_decorators, { kind: "accessor", name: "target", static: false, private: false, access: { has: obj => "target" in obj, get: obj => obj.target, set: (obj, value) => { obj.target = value; } }, metadata: _metadata }, _target_initializers, _target_extraInitializers);
            __esDecorate(this, null, _text_decorators, { kind: "accessor", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(this, null, _xywh_decorators, { kind: "accessor", name: "xywh", static: false, private: false, access: { has: obj => "xywh" in obj, get: obj => obj.xywh, set: (obj, value) => { obj.xywh = value; } }, metadata: _metadata }, _xywh_initializers, _xywh_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        // @ts-ignore
        get connectable() {
            return false;
        }
        get connected() {
            return !!(this.source.id || this.target.id);
        }
        get elementBound() {
            let bounds = super.elementBound;
            if (this.hasLabel()) {
                bounds = bounds.unite(Bound.fromXYWH(this.labelXYWH));
            }
            return bounds;
        }
        get type() {
            return 'connector';
        }
        static propsToY(props) {
            if (props.text && !(props.text instanceof DocCollection.Y.Text)) {
                props.text = new DocCollection.Y.Text(props.text);
            }
            return props;
        }
        containsBound(bounds) {
            return (this.absolutePath.some(point => bounds.containsPoint(point)) ||
                (this.hasLabel() &&
                    Bound.fromXYWH(this.labelXYWH).points.some(p => bounds.containsPoint(p))));
        }
        getLineIntersections(start, end) {
            const { mode, absolutePath: path } = this;
            let intersected = null;
            if (mode === ConnectorMode.Curve && path.length > 1) {
                intersected = curveIntersects(path, [start, end]);
            }
            else {
                intersected = linePolylineIntersects(start, end, path);
            }
            if (!intersected && this.hasLabel()) {
                intersected = linePolylineIntersects(start, end, Bound.fromXYWH(this.labelXYWH).points);
            }
            return intersected;
        }
        /**
         * Calculate the closest point on the curve via a point.
         */
        getNearestPoint(point) {
            const { mode, absolutePath: path } = this;
            if (mode === ConnectorMode.Straight) {
                const first = path[0];
                const last = path[path.length - 1];
                return Vec.nearestPointOnLineSegment(first, last, point, true);
            }
            if (mode === ConnectorMode.Orthogonal) {
                const points = path.map(p => [p[0], p[1]]);
                return Polyline.nearestPoint(points, point);
            }
            const b = getBezierParameters(path);
            const t = getBezierNearestTime(b, point);
            const p = getBezierPoint(b, t);
            if (p)
                return p;
            const { x, y } = this;
            return [x, y];
        }
        /**
         * Calculating the computed distance along a path via a point.
         *
         * The point is relative to the viewport.
         */
        getOffsetDistanceByPoint(point, bounds) {
            const { mode, absolutePath: path } = this;
            let { x, y, w, h } = this;
            if (bounds) {
                x = bounds.x;
                y = bounds.y;
                w = bounds.w;
                h = bounds.h;
            }
            point[0] = Vec.clamp(point[0], x, x + w);
            point[1] = Vec.clamp(point[1], y, y + h);
            if (mode === ConnectorMode.Straight) {
                const s = path[0];
                const e = path[path.length - 1];
                const pl = Vec.dist(s, point);
                const fl = Vec.dist(s, e);
                return pl / fl;
            }
            if (mode === ConnectorMode.Orthogonal) {
                const points = path.map(p => [p[0], p[1]]);
                const p = Polyline.nearestPoint(points, point);
                const pl = Polyline.lenAtPoint(points, p);
                const fl = Polyline.len(points);
                return pl / fl;
            }
            const b = getBezierParameters(path);
            return getBezierNearestTime(b, point);
        }
        /**
         * Calculating the computed point along a path via a offset distance.
         *
         * Returns a point relative to the viewport.
         */
        getPointByOffsetDistance(offsetDistance = 0.5, bounds) {
            const { mode, absolutePath: path } = this;
            if (mode === ConnectorMode.Straight) {
                const first = path[0];
                const last = path[path.length - 1];
                return Vec.lrp(first, last, offsetDistance);
            }
            let { x, y, w, h } = this;
            if (bounds) {
                x = bounds.x;
                y = bounds.y;
                w = bounds.w;
                h = bounds.h;
            }
            if (mode === ConnectorMode.Orthogonal) {
                const points = path.map(p => [p[0], p[1]]);
                const point = Polyline.pointAt(points, offsetDistance);
                if (point)
                    return point;
                return [x + w / 2, y + h / 2];
            }
            const b = getBezierParameters(path);
            const point = getBezierPoint(b, offsetDistance);
            if (point)
                return point;
            return [x + w / 2, y + h / 2];
        }
        getRelativePointLocation(point) {
            return new PointLocation(Bound.deserialize(this.xywh).getRelativePoint(point));
        }
        hasLabel() {
            return Boolean(!this.lableEditing && this.labelDisplay && this.labelXYWH);
        }
        includesPoint(x, y, options) {
            const currentPoint = [x, y];
            if (this.labelIncludesPoint(currentPoint)) {
                return true;
            }
            const { mode, strokeWidth, absolutePath: path } = this;
            const point = mode === ConnectorMode.Curve
                ? getBezierNearestPoint(getBezierParameters(path), currentPoint)
                : polyLineNearestPoint(path, currentPoint);
            return (Vec.dist(point, currentPoint) <
                (options?.hitThreshold ? strokeWidth / 2 : 0) + 8);
        }
        labelIncludesPoint(point) {
            return (this.hasLabel() && Bound.fromXYWH(this.labelXYWH).isPointInBound(point));
        }
        moveTo(bound) {
            const oldBound = Bound.deserialize(this.xywh);
            const offset = Vec.sub([bound.x, bound.y], [oldBound.x, oldBound.y]);
            const { source, target } = this;
            if (!source.id && source.position) {
                this.source = {
                    position: Vec.add(source.position, offset),
                };
            }
            if (!target.id && target.position) {
                this.target = {
                    position: Vec.add(target.position, offset),
                };
            }
            // Updates Connector's Label position.
            if (this.hasLabel()) {
                const [x, y, w, h] = this.labelXYWH;
                this.labelXYWH = [x + offset[0], y + offset[1], w, h];
            }
        }
        resize(bounds, originalPath, matrix) {
            this.updatingPath = false;
            const path = this.resizePath(originalPath, matrix);
            // the property assignment order matters
            this.xywh = bounds.serialize();
            this.path = path.map(p => p.clone().setVec(Vec.sub(p, bounds.tl)));
            const props = {};
            // Updates Connector's Label position.
            if (this.hasLabel()) {
                const [cx, cy] = this.getPointByOffsetDistance(this.labelOffset.distance);
                const [, , w, h] = this.labelXYWH;
                props.labelXYWH = [cx - w / 2, cy - h / 2, w, h];
            }
            if (!this.source.id) {
                props.source = {
                    ...this.source,
                    position: path[0].toVec(),
                };
            }
            if (!this.target.id) {
                props.target = {
                    ...this.target,
                    position: path[path.length - 1].toVec(),
                };
            }
            return props;
        }
        resizePath(originalPath, matrix) {
            if (this.mode === ConnectorMode.Curve) {
                return originalPath.map(point => {
                    const [p, t, absIn, absOut] = [
                        point,
                        point.tangent,
                        point.absIn,
                        point.absOut,
                    ]
                        .map(p => new DOMPoint(...p).matrixTransform(matrix))
                        .map(p => [p.x, p.y]);
                    const ip = Vec.sub(absIn, p);
                    const op = Vec.sub(absOut, p);
                    return new PointLocation(p, t, ip, op);
                });
            }
            return originalPath.map(point => {
                const { x, y } = new DOMPoint(...point).matrixTransform(matrix);
                const p = [x, y];
                return PointLocation.fromVec(p);
            });
        }
        serialize() {
            const result = super.serialize();
            result.xywh = this.xywh;
            return result;
        }
        #absolutePath_accessor_storage;
        get absolutePath() { return this.#absolutePath_accessor_storage; }
        set absolutePath(value) { this.#absolutePath_accessor_storage = value; }
        #frontEndpointStyle_accessor_storage;
        get frontEndpointStyle() { return this.#frontEndpointStyle_accessor_storage; }
        set frontEndpointStyle(value) { this.#frontEndpointStyle_accessor_storage = value; }
        #labelConstraints_accessor_storage;
        /**
         * Defines the size constraints of the label.
         */
        get labelConstraints() { return this.#labelConstraints_accessor_storage; }
        set labelConstraints(value) { this.#labelConstraints_accessor_storage = value; }
        #labelDisplay_accessor_storage;
        /**
         * Control display and hide.
         */
        get labelDisplay() { return this.#labelDisplay_accessor_storage; }
        set labelDisplay(value) { this.#labelDisplay_accessor_storage = value; }
        #labelOffset_accessor_storage;
        /**
         * The offset property specifies the label along the connector path.
         */
        get labelOffset() { return this.#labelOffset_accessor_storage; }
        set labelOffset(value) { this.#labelOffset_accessor_storage = value; }
        #labelStyle_accessor_storage;
        /**
         * Defines the style of the label.
         */
        get labelStyle() { return this.#labelStyle_accessor_storage; }
        set labelStyle(value) { this.#labelStyle_accessor_storage = value; }
        #labelXYWH_accessor_storage;
        /**
         * Returns a `XYWH` array providing information about the size of a label
         * and its position relative to the viewport.
         */
        get labelXYWH() { return this.#labelXYWH_accessor_storage; }
        set labelXYWH(value) { this.#labelXYWH_accessor_storage = value; }
        #lableEditing_accessor_storage;
        /**
         * Local control display and hide, mainly used in editing scenarios.
         */
        get lableEditing() { return this.#lableEditing_accessor_storage; }
        set lableEditing(value) { this.#lableEditing_accessor_storage = value; }
        #mode_accessor_storage;
        get mode() { return this.#mode_accessor_storage; }
        set mode(value) { this.#mode_accessor_storage = value; }
        #path_accessor_storage;
        get path() { return this.#path_accessor_storage; }
        set path(value) { this.#path_accessor_storage = value; }
        #rearEndpointStyle_accessor_storage;
        get rearEndpointStyle() { return this.#rearEndpointStyle_accessor_storage; }
        set rearEndpointStyle(value) { this.#rearEndpointStyle_accessor_storage = value; }
        #rotate_accessor_storage;
        get rotate() { return this.#rotate_accessor_storage; }
        set rotate(value) { this.#rotate_accessor_storage = value; }
        #rough_accessor_storage;
        get rough() { return this.#rough_accessor_storage; }
        set rough(value) { this.#rough_accessor_storage = value; }
        #roughness_accessor_storage;
        get roughness() { return this.#roughness_accessor_storage; }
        set roughness(value) { this.#roughness_accessor_storage = value; }
        #source_accessor_storage;
        get source() { return this.#source_accessor_storage; }
        set source(value) { this.#source_accessor_storage = value; }
        #stroke_accessor_storage;
        get stroke() { return this.#stroke_accessor_storage; }
        set stroke(value) { this.#stroke_accessor_storage = value; }
        #strokeStyle_accessor_storage;
        get strokeStyle() { return this.#strokeStyle_accessor_storage; }
        set strokeStyle(value) { this.#strokeStyle_accessor_storage = value; }
        #strokeWidth_accessor_storage;
        get strokeWidth() { return this.#strokeWidth_accessor_storage; }
        set strokeWidth(value) { this.#strokeWidth_accessor_storage = value; }
        #target_accessor_storage;
        get target() { return this.#target_accessor_storage; }
        set target(value) { this.#target_accessor_storage = value; }
        #text_accessor_storage;
        /**
         * The content of the label.
         */
        get text() { return this.#text_accessor_storage; }
        set text(value) { this.#text_accessor_storage = value; }
        #xywh_accessor_storage;
        get xywh() { return this.#xywh_accessor_storage; }
        set xywh(value) { this.#xywh_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.updatingPath = false;
            this.#absolutePath_accessor_storage = __runInitializers(this, _absolutePath_initializers, []);
            this.#frontEndpointStyle_accessor_storage = (__runInitializers(this, _absolutePath_extraInitializers), __runInitializers(this, _frontEndpointStyle_initializers, void 0));
            this.#labelConstraints_accessor_storage = (__runInitializers(this, _frontEndpointStyle_extraInitializers), __runInitializers(this, _labelConstraints_initializers, void 0));
            this.#labelDisplay_accessor_storage = (__runInitializers(this, _labelConstraints_extraInitializers), __runInitializers(this, _labelDisplay_initializers, void 0));
            this.#labelOffset_accessor_storage = (__runInitializers(this, _labelDisplay_extraInitializers), __runInitializers(this, _labelOffset_initializers, void 0));
            this.#labelStyle_accessor_storage = (__runInitializers(this, _labelOffset_extraInitializers), __runInitializers(this, _labelStyle_initializers, void 0));
            this.#labelXYWH_accessor_storage = (__runInitializers(this, _labelStyle_extraInitializers), __runInitializers(this, _labelXYWH_initializers, undefined));
            this.#lableEditing_accessor_storage = (__runInitializers(this, _labelXYWH_extraInitializers), __runInitializers(this, _lableEditing_initializers, false));
            this.#mode_accessor_storage = (__runInitializers(this, _lableEditing_extraInitializers), __runInitializers(this, _mode_initializers, ConnectorMode.Orthogonal));
            this.#path_accessor_storage = (__runInitializers(this, _mode_extraInitializers), __runInitializers(this, _path_initializers, []));
            this.#rearEndpointStyle_accessor_storage = (__runInitializers(this, _path_extraInitializers), __runInitializers(this, _rearEndpointStyle_initializers, void 0));
            this.#rotate_accessor_storage = (__runInitializers(this, _rearEndpointStyle_extraInitializers), __runInitializers(this, _rotate_initializers, 0));
            this.#rough_accessor_storage = (__runInitializers(this, _rotate_extraInitializers), __runInitializers(this, _rough_initializers, undefined));
            this.#roughness_accessor_storage = (__runInitializers(this, _rough_extraInitializers), __runInitializers(this, _roughness_initializers, DEFAULT_ROUGHNESS));
            this.#source_accessor_storage = (__runInitializers(this, _roughness_extraInitializers), __runInitializers(this, _source_initializers, {
                position: [0, 0],
            }));
            this.#stroke_accessor_storage = (__runInitializers(this, _source_extraInitializers), __runInitializers(this, _stroke_initializers, '#000000'));
            this.#strokeStyle_accessor_storage = (__runInitializers(this, _stroke_extraInitializers), __runInitializers(this, _strokeStyle_initializers, StrokeStyle.Solid));
            this.#strokeWidth_accessor_storage = (__runInitializers(this, _strokeStyle_extraInitializers), __runInitializers(this, _strokeWidth_initializers, 4));
            this.#target_accessor_storage = (__runInitializers(this, _strokeWidth_extraInitializers), __runInitializers(this, _target_initializers, {
                position: [0, 0],
            }));
            this.#text_accessor_storage = (__runInitializers(this, _target_extraInitializers), __runInitializers(this, _text_initializers, undefined));
            this.#xywh_accessor_storage = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _xywh_initializers, '[0,0,0,0]'));
            __runInitializers(this, _xywh_extraInitializers);
        }
    };
})();
export { ConnectorElementModel };
//# sourceMappingURL=connector.js.map