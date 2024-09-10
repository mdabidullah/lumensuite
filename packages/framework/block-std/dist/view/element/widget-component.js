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
import { consume } from '@lit/context';
import { LitElement } from 'lit';
import { SignalWatcher } from '../signal-watcher.js';
import { WithDisposable } from '../utils/with-disposable.js';
import { modelContext, serviceContext } from './consts.js';
import { docContext, stdContext } from './lit-host.js';
let WidgetComponent = (() => {
    let _classSuper = SignalWatcher(WithDisposable(LitElement));
    let __doc_decorators;
    let __doc_initializers = [];
    let __doc_extraInitializers = [];
    let __model_decorators;
    let __model_initializers = [];
    let __model_extraInitializers = [];
    let __service_decorators;
    let __service_initializers = [];
    let __service_extraInitializers = [];
    let __std_decorators;
    let __std_initializers = [];
    let __std_extraInitializers = [];
    return class WidgetComponent extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __doc_decorators = [consume({ context: docContext })];
            __model_decorators = [consume({ context: modelContext })];
            __service_decorators = [consume({ context: serviceContext })];
            __std_decorators = [consume({ context: stdContext })];
            __esDecorate(this, null, __doc_decorators, { kind: "accessor", name: "_doc", static: false, private: false, access: { has: obj => "_doc" in obj, get: obj => obj._doc, set: (obj, value) => { obj._doc = value; } }, metadata: _metadata }, __doc_initializers, __doc_extraInitializers);
            __esDecorate(this, null, __model_decorators, { kind: "accessor", name: "_model", static: false, private: false, access: { has: obj => "_model" in obj, get: obj => obj._model, set: (obj, value) => { obj._model = value; } }, metadata: _metadata }, __model_initializers, __model_extraInitializers);
            __esDecorate(this, null, __service_decorators, { kind: "accessor", name: "_service", static: false, private: false, access: { has: obj => "_service" in obj, get: obj => obj._service, set: (obj, value) => { obj._service = value; } }, metadata: _metadata }, __service_initializers, __service_extraInitializers);
            __esDecorate(this, null, __std_decorators, { kind: "accessor", name: "_std", static: false, private: false, access: { has: obj => "_std" in obj, get: obj => obj._std, set: (obj, value) => { obj._std = value; } }, metadata: _metadata }, __std_initializers, __std_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get block() {
            return this.std.view.getBlock(this.model.id);
        }
        get doc() {
            return this._doc;
        }
        get flavour() {
            return this.model.flavour;
        }
        get host() {
            return this.std.host;
        }
        get model() {
            return this._model;
        }
        get service() {
            return this._service;
        }
        get std() {
            return this._std;
        }
        get widgetId() {
            return this.dataset.widgetId;
        }
        bindHotKey(keymap, options) {
            this._disposables.add(this.host.event.bindHotkey(keymap, {
                flavour: options?.global ? undefined : this.flavour,
            }));
        }
        connectedCallback() {
            super.connectedCallback();
            this.std.view.setWidget(this);
            this.service.specSlots.widgetConnected.emit({
                service: this.service,
                component: this,
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.std?.view.deleteWidget(this);
            this.service.specSlots.widgetDisconnected.emit({
                service: this.service,
                component: this,
            });
        }
        render() {
            return null;
        }
        #_doc_accessor_storage;
        get _doc() { return this.#_doc_accessor_storage; }
        set _doc(value) { this.#_doc_accessor_storage = value; }
        #_model_accessor_storage;
        get _model() { return this.#_model_accessor_storage; }
        set _model(value) { this.#_model_accessor_storage = value; }
        #_service_accessor_storage;
        get _service() { return this.#_service_accessor_storage; }
        set _service(value) { this.#_service_accessor_storage = value; }
        #_std_accessor_storage;
        get _std() { return this.#_std_accessor_storage; }
        set _std(value) { this.#_std_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.handleEvent = (name, handler, options) => {
                this._disposables.add(this.host.event.add(name, handler, {
                    flavour: options?.global ? undefined : this.flavour,
                }));
            };
            this.#_doc_accessor_storage = __runInitializers(this, __doc_initializers, void 0);
            this.#_model_accessor_storage = (__runInitializers(this, __doc_extraInitializers), __runInitializers(this, __model_initializers, void 0));
            this.#_service_accessor_storage = (__runInitializers(this, __model_extraInitializers), __runInitializers(this, __service_initializers, void 0));
            this.#_std_accessor_storage = (__runInitializers(this, __service_extraInitializers), __runInitializers(this, __std_initializers, void 0));
            __runInitializers(this, __std_extraInitializers);
        }
    };
})();
export { WidgetComponent };
//# sourceMappingURL=widget-component.js.map