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
import { DEFAULT_ROUGHNESS, FontFamily, FontStyle, FontWeight, StrokeStyle, TextAlign, TextVerticalAlign, } from '@lumensuite/affine-model';
import { field, GfxPrimitiveElementModel, local, } from '@lumensuite/block-std/gfx';
import { DocCollection } from '@lumensuite/store';
import { LineColor, ShapeFillColor, ShapeStyle, ShapeTextFontSize, ShapeType, TextResizing, } from '../../consts/index.js';
import { shapeMethods } from './api/index.js';
export const SHAPE_TEXT_PADDING = 20;
export const SHAPE_TEXT_VERTICAL_PADDING = 10;
let ShapeElementModel = (() => {
    let _classSuper = GfxPrimitiveElementModel;
    let _color_decorators;
    let _color_initializers = [];
    let _color_extraInitializers = [];
    let _fillColor_decorators;
    let _fillColor_initializers = [];
    let _fillColor_extraInitializers = [];
    let _filled_decorators;
    let _filled_initializers = [];
    let _filled_extraInitializers = [];
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
    let _maxWidth_decorators;
    let _maxWidth_initializers = [];
    let _maxWidth_extraInitializers = [];
    let _padding_decorators;
    let _padding_initializers = [];
    let _padding_extraInitializers = [];
    let _radius_decorators;
    let _radius_initializers = [];
    let _radius_extraInitializers = [];
    let _rotate_decorators;
    let _rotate_initializers = [];
    let _rotate_extraInitializers = [];
    let _roughness_decorators;
    let _roughness_initializers = [];
    let _roughness_extraInitializers = [];
    let _shadow_decorators;
    let _shadow_initializers = [];
    let _shadow_extraInitializers = [];
    let _shapeStyle_decorators;
    let _shapeStyle_initializers = [];
    let _shapeStyle_extraInitializers = [];
    let _shapeType_decorators;
    let _shapeType_initializers = [];
    let _shapeType_extraInitializers = [];
    let _strokeColor_decorators;
    let _strokeColor_initializers = [];
    let _strokeColor_extraInitializers = [];
    let _strokeStyle_decorators;
    let _strokeStyle_initializers = [];
    let _strokeStyle_extraInitializers = [];
    let _strokeWidth_decorators;
    let _strokeWidth_initializers = [];
    let _strokeWidth_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _textAlign_decorators;
    let _textAlign_initializers = [];
    let _textAlign_extraInitializers = [];
    let _textDisplay_decorators;
    let _textDisplay_initializers = [];
    let _textDisplay_extraInitializers = [];
    let _textHorizontalAlign_decorators;
    let _textHorizontalAlign_initializers = [];
    let _textHorizontalAlign_extraInitializers = [];
    let _textResizing_decorators;
    let _textResizing_initializers = [];
    let _textResizing_extraInitializers = [];
    let _textVerticalAlign_decorators;
    let _textVerticalAlign_initializers = [];
    let _textVerticalAlign_extraInitializers = [];
    let _xywh_decorators;
    let _xywh_initializers = [];
    let _xywh_extraInitializers = [];
    return class ShapeElementModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _color_decorators = [field('#000000')];
            _fillColor_decorators = [field()];
            _filled_decorators = [field()];
            _fontFamily_decorators = [field(FontFamily.Inter)];
            _fontSize_decorators = [field(ShapeTextFontSize.MEDIUM)];
            _fontStyle_decorators = [field(FontStyle.Normal)];
            _fontWeight_decorators = [field(FontWeight.Regular)];
            _maxWidth_decorators = [field(false)];
            _padding_decorators = [field([SHAPE_TEXT_VERTICAL_PADDING, SHAPE_TEXT_PADDING])];
            _radius_decorators = [field()];
            _rotate_decorators = [field(0)];
            _roughness_decorators = [field(DEFAULT_ROUGHNESS)];
            _shadow_decorators = [field()];
            _shapeStyle_decorators = [field()];
            _shapeType_decorators = [field()];
            _strokeColor_decorators = [field()];
            _strokeStyle_decorators = [field()];
            _strokeWidth_decorators = [field()];
            _text_decorators = [field()];
            _textAlign_decorators = [field(TextAlign.Center)];
            _textDisplay_decorators = [local()];
            _textHorizontalAlign_decorators = [field(TextAlign.Center)];
            _textResizing_decorators = [field(TextResizing.AUTO_HEIGHT)];
            _textVerticalAlign_decorators = [field(TextVerticalAlign.Center)];
            _xywh_decorators = [field()];
            __esDecorate(this, null, _color_decorators, { kind: "accessor", name: "color", static: false, private: false, access: { has: obj => "color" in obj, get: obj => obj.color, set: (obj, value) => { obj.color = value; } }, metadata: _metadata }, _color_initializers, _color_extraInitializers);
            __esDecorate(this, null, _fillColor_decorators, { kind: "accessor", name: "fillColor", static: false, private: false, access: { has: obj => "fillColor" in obj, get: obj => obj.fillColor, set: (obj, value) => { obj.fillColor = value; } }, metadata: _metadata }, _fillColor_initializers, _fillColor_extraInitializers);
            __esDecorate(this, null, _filled_decorators, { kind: "accessor", name: "filled", static: false, private: false, access: { has: obj => "filled" in obj, get: obj => obj.filled, set: (obj, value) => { obj.filled = value; } }, metadata: _metadata }, _filled_initializers, _filled_extraInitializers);
            __esDecorate(this, null, _fontFamily_decorators, { kind: "accessor", name: "fontFamily", static: false, private: false, access: { has: obj => "fontFamily" in obj, get: obj => obj.fontFamily, set: (obj, value) => { obj.fontFamily = value; } }, metadata: _metadata }, _fontFamily_initializers, _fontFamily_extraInitializers);
            __esDecorate(this, null, _fontSize_decorators, { kind: "accessor", name: "fontSize", static: false, private: false, access: { has: obj => "fontSize" in obj, get: obj => obj.fontSize, set: (obj, value) => { obj.fontSize = value; } }, metadata: _metadata }, _fontSize_initializers, _fontSize_extraInitializers);
            __esDecorate(this, null, _fontStyle_decorators, { kind: "accessor", name: "fontStyle", static: false, private: false, access: { has: obj => "fontStyle" in obj, get: obj => obj.fontStyle, set: (obj, value) => { obj.fontStyle = value; } }, metadata: _metadata }, _fontStyle_initializers, _fontStyle_extraInitializers);
            __esDecorate(this, null, _fontWeight_decorators, { kind: "accessor", name: "fontWeight", static: false, private: false, access: { has: obj => "fontWeight" in obj, get: obj => obj.fontWeight, set: (obj, value) => { obj.fontWeight = value; } }, metadata: _metadata }, _fontWeight_initializers, _fontWeight_extraInitializers);
            __esDecorate(this, null, _maxWidth_decorators, { kind: "accessor", name: "maxWidth", static: false, private: false, access: { has: obj => "maxWidth" in obj, get: obj => obj.maxWidth, set: (obj, value) => { obj.maxWidth = value; } }, metadata: _metadata }, _maxWidth_initializers, _maxWidth_extraInitializers);
            __esDecorate(this, null, _padding_decorators, { kind: "accessor", name: "padding", static: false, private: false, access: { has: obj => "padding" in obj, get: obj => obj.padding, set: (obj, value) => { obj.padding = value; } }, metadata: _metadata }, _padding_initializers, _padding_extraInitializers);
            __esDecorate(this, null, _radius_decorators, { kind: "accessor", name: "radius", static: false, private: false, access: { has: obj => "radius" in obj, get: obj => obj.radius, set: (obj, value) => { obj.radius = value; } }, metadata: _metadata }, _radius_initializers, _radius_extraInitializers);
            __esDecorate(this, null, _rotate_decorators, { kind: "accessor", name: "rotate", static: false, private: false, access: { has: obj => "rotate" in obj, get: obj => obj.rotate, set: (obj, value) => { obj.rotate = value; } }, metadata: _metadata }, _rotate_initializers, _rotate_extraInitializers);
            __esDecorate(this, null, _roughness_decorators, { kind: "accessor", name: "roughness", static: false, private: false, access: { has: obj => "roughness" in obj, get: obj => obj.roughness, set: (obj, value) => { obj.roughness = value; } }, metadata: _metadata }, _roughness_initializers, _roughness_extraInitializers);
            __esDecorate(this, null, _shadow_decorators, { kind: "accessor", name: "shadow", static: false, private: false, access: { has: obj => "shadow" in obj, get: obj => obj.shadow, set: (obj, value) => { obj.shadow = value; } }, metadata: _metadata }, _shadow_initializers, _shadow_extraInitializers);
            __esDecorate(this, null, _shapeStyle_decorators, { kind: "accessor", name: "shapeStyle", static: false, private: false, access: { has: obj => "shapeStyle" in obj, get: obj => obj.shapeStyle, set: (obj, value) => { obj.shapeStyle = value; } }, metadata: _metadata }, _shapeStyle_initializers, _shapeStyle_extraInitializers);
            __esDecorate(this, null, _shapeType_decorators, { kind: "accessor", name: "shapeType", static: false, private: false, access: { has: obj => "shapeType" in obj, get: obj => obj.shapeType, set: (obj, value) => { obj.shapeType = value; } }, metadata: _metadata }, _shapeType_initializers, _shapeType_extraInitializers);
            __esDecorate(this, null, _strokeColor_decorators, { kind: "accessor", name: "strokeColor", static: false, private: false, access: { has: obj => "strokeColor" in obj, get: obj => obj.strokeColor, set: (obj, value) => { obj.strokeColor = value; } }, metadata: _metadata }, _strokeColor_initializers, _strokeColor_extraInitializers);
            __esDecorate(this, null, _strokeStyle_decorators, { kind: "accessor", name: "strokeStyle", static: false, private: false, access: { has: obj => "strokeStyle" in obj, get: obj => obj.strokeStyle, set: (obj, value) => { obj.strokeStyle = value; } }, metadata: _metadata }, _strokeStyle_initializers, _strokeStyle_extraInitializers);
            __esDecorate(this, null, _strokeWidth_decorators, { kind: "accessor", name: "strokeWidth", static: false, private: false, access: { has: obj => "strokeWidth" in obj, get: obj => obj.strokeWidth, set: (obj, value) => { obj.strokeWidth = value; } }, metadata: _metadata }, _strokeWidth_initializers, _strokeWidth_extraInitializers);
            __esDecorate(this, null, _text_decorators, { kind: "accessor", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(this, null, _textAlign_decorators, { kind: "accessor", name: "textAlign", static: false, private: false, access: { has: obj => "textAlign" in obj, get: obj => obj.textAlign, set: (obj, value) => { obj.textAlign = value; } }, metadata: _metadata }, _textAlign_initializers, _textAlign_extraInitializers);
            __esDecorate(this, null, _textDisplay_decorators, { kind: "accessor", name: "textDisplay", static: false, private: false, access: { has: obj => "textDisplay" in obj, get: obj => obj.textDisplay, set: (obj, value) => { obj.textDisplay = value; } }, metadata: _metadata }, _textDisplay_initializers, _textDisplay_extraInitializers);
            __esDecorate(this, null, _textHorizontalAlign_decorators, { kind: "accessor", name: "textHorizontalAlign", static: false, private: false, access: { has: obj => "textHorizontalAlign" in obj, get: obj => obj.textHorizontalAlign, set: (obj, value) => { obj.textHorizontalAlign = value; } }, metadata: _metadata }, _textHorizontalAlign_initializers, _textHorizontalAlign_extraInitializers);
            __esDecorate(this, null, _textResizing_decorators, { kind: "accessor", name: "textResizing", static: false, private: false, access: { has: obj => "textResizing" in obj, get: obj => obj.textResizing, set: (obj, value) => { obj.textResizing = value; } }, metadata: _metadata }, _textResizing_initializers, _textResizing_extraInitializers);
            __esDecorate(this, null, _textVerticalAlign_decorators, { kind: "accessor", name: "textVerticalAlign", static: false, private: false, access: { has: obj => "textVerticalAlign" in obj, get: obj => obj.textVerticalAlign, set: (obj, value) => { obj.textVerticalAlign = value; } }, metadata: _metadata }, _textVerticalAlign_initializers, _textVerticalAlign_extraInitializers);
            __esDecorate(this, null, _xywh_decorators, { kind: "accessor", name: "xywh", static: false, private: false, access: { has: obj => "xywh" in obj, get: obj => obj.xywh, set: (obj, value) => { obj.xywh = value; } }, metadata: _metadata }, _xywh_initializers, _xywh_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get type() {
            return 'shape';
        }
        static propsToY(props) {
            if (props.text && !(props.text instanceof DocCollection.Y.Text)) {
                props.text = new DocCollection.Y.Text(props.text);
            }
            return props;
        }
        containsBound(bounds) {
            return shapeMethods[this.shapeType].containsBound(bounds, this);
        }
        getLineIntersections(start, end) {
            return shapeMethods[this.shapeType].getLineIntersections(start, end, this);
        }
        getNearestPoint(point) {
            return shapeMethods[this.shapeType].getNearestPoint(point, this);
        }
        getRelativePointLocation(point) {
            return shapeMethods[this.shapeType].getRelativePointLocation(point, this);
        }
        includesPoint(x, y, options) {
            return shapeMethods[this.shapeType].includesPoint.call(this, x, y, {
                ...options,
                ignoreTransparent: options.ignoreTransparent ?? true,
            });
        }
        #color_accessor_storage;
        get color() { return this.#color_accessor_storage; }
        set color(value) { this.#color_accessor_storage = value; }
        #fillColor_accessor_storage;
        get fillColor() { return this.#fillColor_accessor_storage; }
        set fillColor(value) { this.#fillColor_accessor_storage = value; }
        #filled_accessor_storage;
        get filled() { return this.#filled_accessor_storage; }
        set filled(value) { this.#filled_accessor_storage = value; }
        #fontFamily_accessor_storage;
        get fontFamily() { return this.#fontFamily_accessor_storage; }
        set fontFamily(value) { this.#fontFamily_accessor_storage = value; }
        #fontSize_accessor_storage;
        get fontSize() { return this.#fontSize_accessor_storage; }
        set fontSize(value) { this.#fontSize_accessor_storage = value; }
        #fontStyle_accessor_storage;
        get fontStyle() { return this.#fontStyle_accessor_storage; }
        set fontStyle(value) { this.#fontStyle_accessor_storage = value; }
        #fontWeight_accessor_storage;
        get fontWeight() { return this.#fontWeight_accessor_storage; }
        set fontWeight(value) { this.#fontWeight_accessor_storage = value; }
        #maxWidth_accessor_storage;
        get maxWidth() { return this.#maxWidth_accessor_storage; }
        set maxWidth(value) { this.#maxWidth_accessor_storage = value; }
        #padding_accessor_storage;
        get padding() { return this.#padding_accessor_storage; }
        set padding(value) { this.#padding_accessor_storage = value; }
        #radius_accessor_storage;
        get radius() { return this.#radius_accessor_storage; }
        set radius(value) { this.#radius_accessor_storage = value; }
        #rotate_accessor_storage;
        get rotate() { return this.#rotate_accessor_storage; }
        set rotate(value) { this.#rotate_accessor_storage = value; }
        #roughness_accessor_storage;
        get roughness() { return this.#roughness_accessor_storage; }
        set roughness(value) { this.#roughness_accessor_storage = value; }
        #shadow_accessor_storage;
        get shadow() { return this.#shadow_accessor_storage; }
        set shadow(value) { this.#shadow_accessor_storage = value; }
        #shapeStyle_accessor_storage;
        get shapeStyle() { return this.#shapeStyle_accessor_storage; }
        set shapeStyle(value) { this.#shapeStyle_accessor_storage = value; }
        #shapeType_accessor_storage;
        get shapeType() { return this.#shapeType_accessor_storage; }
        set shapeType(value) { this.#shapeType_accessor_storage = value; }
        #strokeColor_accessor_storage;
        get strokeColor() { return this.#strokeColor_accessor_storage; }
        set strokeColor(value) { this.#strokeColor_accessor_storage = value; }
        #strokeStyle_accessor_storage;
        get strokeStyle() { return this.#strokeStyle_accessor_storage; }
        set strokeStyle(value) { this.#strokeStyle_accessor_storage = value; }
        #strokeWidth_accessor_storage;
        get strokeWidth() { return this.#strokeWidth_accessor_storage; }
        set strokeWidth(value) { this.#strokeWidth_accessor_storage = value; }
        #text_accessor_storage;
        get text() { return this.#text_accessor_storage; }
        set text(value) { this.#text_accessor_storage = value; }
        #textAlign_accessor_storage;
        get textAlign() { return this.#textAlign_accessor_storage; }
        set textAlign(value) { this.#textAlign_accessor_storage = value; }
        #textDisplay_accessor_storage;
        get textDisplay() { return this.#textDisplay_accessor_storage; }
        set textDisplay(value) { this.#textDisplay_accessor_storage = value; }
        #textHorizontalAlign_accessor_storage;
        get textHorizontalAlign() { return this.#textHorizontalAlign_accessor_storage; }
        set textHorizontalAlign(value) { this.#textHorizontalAlign_accessor_storage = value; }
        #textResizing_accessor_storage;
        get textResizing() { return this.#textResizing_accessor_storage; }
        set textResizing(value) { this.#textResizing_accessor_storage = value; }
        #textVerticalAlign_accessor_storage;
        get textVerticalAlign() { return this.#textVerticalAlign_accessor_storage; }
        set textVerticalAlign(value) { this.#textVerticalAlign_accessor_storage = value; }
        #xywh_accessor_storage;
        get xywh() { return this.#xywh_accessor_storage; }
        set xywh(value) { this.#xywh_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.textBound = null;
            this.#color_accessor_storage = __runInitializers(this, _color_initializers, void 0);
            this.#fillColor_accessor_storage = (__runInitializers(this, _color_extraInitializers), __runInitializers(this, _fillColor_initializers, ShapeFillColor.Yellow));
            this.#filled_accessor_storage = (__runInitializers(this, _fillColor_extraInitializers), __runInitializers(this, _filled_initializers, false));
            this.#fontFamily_accessor_storage = (__runInitializers(this, _filled_extraInitializers), __runInitializers(this, _fontFamily_initializers, void 0));
            this.#fontSize_accessor_storage = (__runInitializers(this, _fontFamily_extraInitializers), __runInitializers(this, _fontSize_initializers, void 0));
            this.#fontStyle_accessor_storage = (__runInitializers(this, _fontSize_extraInitializers), __runInitializers(this, _fontStyle_initializers, void 0));
            this.#fontWeight_accessor_storage = (__runInitializers(this, _fontStyle_extraInitializers), __runInitializers(this, _fontWeight_initializers, void 0));
            this.#maxWidth_accessor_storage = (__runInitializers(this, _fontWeight_extraInitializers), __runInitializers(this, _maxWidth_initializers, false));
            this.#padding_accessor_storage = (__runInitializers(this, _maxWidth_extraInitializers), __runInitializers(this, _padding_initializers, [
                SHAPE_TEXT_VERTICAL_PADDING,
                SHAPE_TEXT_PADDING,
            ]));
            this.#radius_accessor_storage = (__runInitializers(this, _padding_extraInitializers), __runInitializers(this, _radius_initializers, 0));
            this.#rotate_accessor_storage = (__runInitializers(this, _radius_extraInitializers), __runInitializers(this, _rotate_initializers, 0));
            this.#roughness_accessor_storage = (__runInitializers(this, _rotate_extraInitializers), __runInitializers(this, _roughness_initializers, DEFAULT_ROUGHNESS));
            this.#shadow_accessor_storage = (__runInitializers(this, _roughness_extraInitializers), __runInitializers(this, _shadow_initializers, null));
            this.#shapeStyle_accessor_storage = (__runInitializers(this, _shadow_extraInitializers), __runInitializers(this, _shapeStyle_initializers, ShapeStyle.General));
            this.#shapeType_accessor_storage = (__runInitializers(this, _shapeStyle_extraInitializers), __runInitializers(this, _shapeType_initializers, ShapeType.Rect));
            this.#strokeColor_accessor_storage = (__runInitializers(this, _shapeType_extraInitializers), __runInitializers(this, _strokeColor_initializers, LineColor.Yellow));
            this.#strokeStyle_accessor_storage = (__runInitializers(this, _strokeColor_extraInitializers), __runInitializers(this, _strokeStyle_initializers, StrokeStyle.Solid));
            this.#strokeWidth_accessor_storage = (__runInitializers(this, _strokeStyle_extraInitializers), __runInitializers(this, _strokeWidth_initializers, 4));
            this.#text_accessor_storage = (__runInitializers(this, _strokeWidth_extraInitializers), __runInitializers(this, _text_initializers, undefined));
            this.#textAlign_accessor_storage = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _textAlign_initializers, void 0));
            this.#textDisplay_accessor_storage = (__runInitializers(this, _textAlign_extraInitializers), __runInitializers(this, _textDisplay_initializers, true));
            this.#textHorizontalAlign_accessor_storage = (__runInitializers(this, _textDisplay_extraInitializers), __runInitializers(this, _textHorizontalAlign_initializers, void 0));
            this.#textResizing_accessor_storage = (__runInitializers(this, _textHorizontalAlign_extraInitializers), __runInitializers(this, _textResizing_initializers, TextResizing.AUTO_HEIGHT));
            this.#textVerticalAlign_accessor_storage = (__runInitializers(this, _textResizing_extraInitializers), __runInitializers(this, _textVerticalAlign_initializers, void 0));
            this.#xywh_accessor_storage = (__runInitializers(this, _textVerticalAlign_extraInitializers), __runInitializers(this, _xywh_initializers, '[0,0,100,100]'));
            __runInitializers(this, _xywh_extraInitializers);
        }
    };
})();
export { ShapeElementModel };
//# sourceMappingURL=shape.js.map