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
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@lumensuite/block-std';
import { property } from 'lit/decorators.js';
let BaseGroup = (() => {
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _readonly_decorators;
    let _readonly_initializers = [];
    let _readonly_extraInitializers = [];
    let _updateData_decorators;
    let _updateData_initializers = [];
    let _updateData_extraInitializers = [];
    let _updateValue_decorators;
    let _updateValue_initializers = [];
    let _updateValue_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    return class BaseGroup extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _data_decorators = [property({ attribute: false })];
            _readonly_decorators = [property({ attribute: false })];
            _updateData_decorators = [property({ attribute: false })];
            _updateValue_decorators = [property({ attribute: false })];
            _value_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _readonly_decorators, { kind: "accessor", name: "readonly", static: false, private: false, access: { has: obj => "readonly" in obj, get: obj => obj.readonly, set: (obj, value) => { obj.readonly = value; } }, metadata: _metadata }, _readonly_initializers, _readonly_extraInitializers);
            __esDecorate(this, null, _updateData_decorators, { kind: "accessor", name: "updateData", static: false, private: false, access: { has: obj => "updateData" in obj, get: obj => obj.updateData, set: (obj, value) => { obj.updateData = value; } }, metadata: _metadata }, _updateData_initializers, _updateData_extraInitializers);
            __esDecorate(this, null, _updateValue_decorators, { kind: "accessor", name: "updateValue", static: false, private: false, access: { has: obj => "updateValue" in obj, get: obj => obj.updateValue, set: (obj, value) => { obj.updateValue = value; } }, metadata: _metadata }, _updateValue_initializers, _updateValue_extraInitializers);
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #data_accessor_storage = __runInitializers(this, _data_initializers, void 0);
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        #readonly_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _readonly_initializers, void 0));
        get readonly() { return this.#readonly_accessor_storage; }
        set readonly(value) { this.#readonly_accessor_storage = value; }
        #updateData_accessor_storage = (__runInitializers(this, _readonly_extraInitializers), __runInitializers(this, _updateData_initializers, undefined));
        get updateData() { return this.#updateData_accessor_storage; }
        set updateData(value) { this.#updateData_accessor_storage = value; }
        #updateValue_accessor_storage = (__runInitializers(this, _updateData_extraInitializers), __runInitializers(this, _updateValue_initializers, undefined));
        get updateValue() { return this.#updateValue_accessor_storage; }
        set updateValue(value) { this.#updateValue_accessor_storage = value; }
        #value_accessor_storage = (__runInitializers(this, _updateValue_extraInitializers), __runInitializers(this, _value_initializers, void 0));
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _value_extraInitializers);
        }
    };
})();
export { BaseGroup };
//# sourceMappingURL=base.js.map