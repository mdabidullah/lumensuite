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
import { ShadowlessElement, SignalWatcher } from '@blocksuite/block-std';
import { customElement, property } from 'lit/decorators.js';
let AnyRender = (() => {
    let _classDecorators = [customElement('any-render')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(ShadowlessElement);
    let _props_decorators;
    let _props_initializers = [];
    let _props_extraInitializers = [];
    let _renderTemplate_decorators;
    let _renderTemplate_initializers = [];
    let _renderTemplate_extraInitializers = [];
    var AnyRender = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _props_decorators = [property({ attribute: false })];
            _renderTemplate_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _props_decorators, { kind: "accessor", name: "props", static: false, private: false, access: { has: obj => "props" in obj, get: obj => obj.props, set: (obj, value) => { obj.props = value; } }, metadata: _metadata }, _props_initializers, _props_extraInitializers);
            __esDecorate(this, null, _renderTemplate_decorators, { kind: "accessor", name: "renderTemplate", static: false, private: false, access: { has: obj => "renderTemplate" in obj, get: obj => obj.renderTemplate, set: (obj, value) => { obj.renderTemplate = value; } }, metadata: _metadata }, _renderTemplate_initializers, _renderTemplate_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AnyRender = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            return this.renderTemplate(this.props);
        }
        #props_accessor_storage = __runInitializers(this, _props_initializers, void 0);
        get props() { return this.#props_accessor_storage; }
        set props(value) { this.#props_accessor_storage = value; }
        #renderTemplate_accessor_storage = (__runInitializers(this, _props_extraInitializers), __runInitializers(this, _renderTemplate_initializers, void 0));
        get renderTemplate() { return this.#renderTemplate_accessor_storage; }
        set renderTemplate(value) { this.#renderTemplate_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _renderTemplate_extraInitializers);
        }
    };
    return AnyRender = _classThis;
})();
export { AnyRender };
export const renderTemplate = (renderTemplate) => {
    const ins = new AnyRender();
    ins.renderTemplate = renderTemplate;
    return ins;
};
//# sourceMappingURL=render-template.js.map