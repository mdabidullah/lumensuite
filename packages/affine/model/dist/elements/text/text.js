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
import { FontFamily, FontStyle, FontWeight, TextAlign, } from '@lumensuite/affine-model';
import { field, GfxPrimitiveElementModel } from '@lumensuite/block-std/gfx';
import { Bound, getPointsFromBoundsWithRotation, linePolygonIntersects, pointInPolygon, polygonNearestPoint, } from '@lumensuite/global/utils';
import { DocCollection } from '@lumensuite/store';
let TextElementModel = (() => {
    let _classSuper = GfxPrimitiveElementModel;
    let _color_decorators;
    let _color_initializers = [];
    let _color_extraInitializers = [];
    let _fontFamily_decorators;
    let _fontFamily_initializers = [];
    let _fontFamily_extraInitializers = [];
    let _fontSize_decorators;
    let _fontSize_initializers = [];
    let _fontSize_extraInitializers = [];
    let _fontStyle_decorators;
    let _fontStyle_initializers = [];
    let _fontStyle_extraInitializers = [];
    let _fontWeight_decorators;
    let _fontWeight_initializers = [];
    let _fontWeight_extraInitializers = [];
    let _hasMaxWidth_decorators;
    let _hasMaxWidth_initializers = [];
    let _hasMaxWidth_extraInitializers = [];
    let _rotate_decorators;
    let _rotate_initializers = [];
    let _rotate_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _textAlign_decorators;
    let _textAlign_initializers = [];
    let _textAlign_extraInitializers = [];
    let _xywh_decorators;
    let _xywh_initializers = [];
    let _xywh_extraInitializers = [];
    return class TextElementModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _color_decorators = [field()];
            _fontFamily_decorators = [field()];
            _fontSize_decorators = [field()];
            _fontStyle_decorators = [field(FontStyle.Normal)];
            _fontWeight_decorators = [field(FontWeight.Regular)];
            _hasMaxWidth_decorators = [field(false)];
            _rotate_decorators = [field(0)];
            _text_decorators = [field()];
            _textAlign_decorators = [field()];
            _xywh_decorators = [field()];
            __esDecorate(this, null, _color_decorators, { kind: "accessor", name: "color", static: false, private: false, access: { has: obj => "color" in obj, get: obj => obj.color, set: (obj, value) => { obj.color = value; } }, metadata: _metadata }, _color_initializers, _color_extraInitializers);
            __esDecorate(this, null, _fontFamily_decorators, { kind: "accessor", name: "fontFamily", static: false, private: false, access: { has: obj => "fontFamily" in obj, get: obj => obj.fontFamily, set: (obj, value) => { obj.fontFamily = value; } }, metadata: _metadata }, _fontFamily_initializers, _fontFamily_extraInitializers);
            __esDecorate(this, null, _fontSize_decorators, { kind: "accessor", name: "fontSize", static: false, private: false, access: { has: obj => "fontSize" in obj, get: obj => obj.fontSize, set: (obj, value) => { obj.fontSize = value; } }, metadata: _metadata }, _fontSize_initializers, _fontSize_extraInitializers);
            __esDecorate(this, null, _fontStyle_decorators, { kind: "accessor", name: "fontStyle", static: false, private: false, access: { has: obj => "fontStyle" in obj, get: obj => obj.fontStyle, set: (obj, value) => { obj.fontStyle = value; } }, metadata: _metadata }, _fontStyle_initializers, _fontStyle_extraInitializers);
            __esDecorate(this, null, _fontWeight_decorators, { kind: "accessor", name: "fontWeight", static: false, private: false, access: { has: obj => "fontWeight" in obj, get: obj => obj.fontWeight, set: (obj, value) => { obj.fontWeight = value; } }, metadata: _metadata }, _fontWeight_initializers, _fontWeight_extraInitializers);
            __esDecorate(this, null, _hasMaxWidth_decorators, { kind: "accessor", name: "hasMaxWidth", static: false, private: false, access: { has: obj => "hasMaxWidth" in obj, get: obj => obj.hasMaxWidth, set: (obj, value) => { obj.hasMaxWidth = value; } }, metadata: _metadata }, _hasMaxWidth_initializers, _hasMaxWidth_extraInitializers);
            __esDecorate(this, null, _rotate_decorators, { kind: "accessor", name: "rotate", static: false, private: false, access: { has: obj => "rotate" in obj, get: obj => obj.rotate, set: (obj, value) => { obj.rotate = value; } }, metadata: _metadata }, _rotate_initializers, _rotate_extraInitializers);
            __esDecorate(this, null, _text_decorators, { kind: "accessor", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(this, null, _textAlign_decorators, { kind: "accessor", name: "textAlign", static: false, private: false, access: { has: obj => "textAlign" in obj, get: obj => obj.textAlign, set: (obj, value) => { obj.textAlign = value; } }, metadata: _metadata }, _textAlign_initializers, _textAlign_extraInitializers);
            __esDecorate(this, null, _xywh_decorators, { kind: "accessor", name: "xywh", static: false, private: false, access: { has: obj => "xywh" in obj, get: obj => obj.xywh, set: (obj, value) => { obj.xywh = value; } }, metadata: _metadata }, _xywh_initializers, _xywh_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get type() {
            return 'text';
        }
        static propsToY(props) {
            if (props.text && !(props.text instanceof DocCollection.Y.Text)) {
                props.text = new DocCollection.Y.Text(props.text);
            }
            return props;
        }
        containsBound(bounds) {
            const points = getPointsFromBoundsWithRotation(this);
            return points.some(point => bounds.containsPoint(point));
        }
        getLineIntersections(start, end) {
            const points = getPointsFromBoundsWithRotation(this);
            return linePolygonIntersects(start, end, points);
        }
        getNearestPoint(point) {
            return polygonNearestPoint(Bound.deserialize(this.xywh).points, point);
        }
        includesPoint(x, y) {
            const points = getPointsFromBoundsWithRotation(this);
            return pointInPolygon([x, y], points);
        }
        #color_accessor_storage = __runInitializers(this, _color_initializers, '#000000');
        get color() { return this.#color_accessor_storage; }
        set color(value) { this.#color_accessor_storage = value; }
        #fontFamily_accessor_storage = (__runInitializers(this, _color_extraInitializers), __runInitializers(this, _fontFamily_initializers, FontFamily.Inter));
        get fontFamily() { return this.#fontFamily_accessor_storage; }
        set fontFamily(value) { this.#fontFamily_accessor_storage = value; }
        #fontSize_accessor_storage = (__runInitializers(this, _fontFamily_extraInitializers), __runInitializers(this, _fontSize_initializers, 16));
        get fontSize() { return this.#fontSize_accessor_storage; }
        set fontSize(value) { this.#fontSize_accessor_storage = value; }
        #fontStyle_accessor_storage = (__runInitializers(this, _fontSize_extraInitializers), __runInitializers(this, _fontStyle_initializers, FontStyle.Normal));
        get fontStyle() { return this.#fontStyle_accessor_storage; }
        set fontStyle(value) { this.#fontStyle_accessor_storage = value; }
        #fontWeight_accessor_storage = (__runInitializers(this, _fontStyle_extraInitializers), __runInitializers(this, _fontWeight_initializers, FontWeight.Regular));
        get fontWeight() { return this.#fontWeight_accessor_storage; }
        set fontWeight(value) { this.#fontWeight_accessor_storage = value; }
        #hasMaxWidth_accessor_storage = (__runInitializers(this, _fontWeight_extraInitializers), __runInitializers(this, _hasMaxWidth_initializers, false));
        get hasMaxWidth() { return this.#hasMaxWidth_accessor_storage; }
        set hasMaxWidth(value) { this.#hasMaxWidth_accessor_storage = value; }
        #rotate_accessor_storage = (__runInitializers(this, _hasMaxWidth_extraInitializers), __runInitializers(this, _rotate_initializers, 0));
        get rotate() { return this.#rotate_accessor_storage; }
        set rotate(value) { this.#rotate_accessor_storage = value; }
        #text_accessor_storage = (__runInitializers(this, _rotate_extraInitializers), __runInitializers(this, _text_initializers, new DocCollection.Y.Text()));
        get text() { return this.#text_accessor_storage; }
        set text(value) { this.#text_accessor_storage = value; }
        #textAlign_accessor_storage = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _textAlign_initializers, TextAlign.Center));
        get textAlign() { return this.#textAlign_accessor_storage; }
        set textAlign(value) { this.#textAlign_accessor_storage = value; }
        #xywh_accessor_storage = (__runInitializers(this, _textAlign_extraInitializers), __runInitializers(this, _xywh_initializers, '[0,0,16,16]'));
        get xywh() { return this.#xywh_accessor_storage; }
        set xywh(value) { this.#xywh_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _xywh_extraInitializers);
        }
    };
})();
export { TextElementModel };
//# sourceMappingURL=text.js.map