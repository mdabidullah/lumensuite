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
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
/**
 * A wrapper around `requestConnectedFrame` that only calls at most once in one frame
 */
export function requestThrottledConnectedFrame(func, element) {
    let raqId = undefined;
    let latestArgs = [];
    return ((...args) => {
        latestArgs = args;
        if (raqId === undefined) {
            raqId = requestAnimationFrame(() => {
                raqId = undefined;
                if (!element || element.isConnected) {
                    func(...latestArgs);
                }
            });
        }
    });
}
let GfxViewportElement = (() => {
    let _classDecorators = [customElement('gfx-viewport')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _container_decorators;
    let _container_initializers = [];
    let _container_extraInitializers = [];
    let _getModelsInViewport_decorators;
    let _getModelsInViewport_initializers = [];
    let _getModelsInViewport_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _maxConcurrentRenders_decorators;
    let _maxConcurrentRenders_initializers = [];
    let _maxConcurrentRenders_extraInitializers = [];
    var GfxViewportElement = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _container_decorators = [query('.gfx-viewport')];
            _getModelsInViewport_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _maxConcurrentRenders_decorators = [property({ type: Number })];
            __esDecorate(this, null, _container_decorators, { kind: "accessor", name: "container", static: false, private: false, access: { has: obj => "container" in obj, get: obj => obj.container, set: (obj, value) => { obj.container = value; } }, metadata: _metadata }, _container_initializers, _container_extraInitializers);
            __esDecorate(this, null, _getModelsInViewport_decorators, { kind: "accessor", name: "getModelsInViewport", static: false, private: false, access: { has: obj => "getModelsInViewport" in obj, get: obj => obj.getModelsInViewport, set: (obj, value) => { obj.getModelsInViewport = value; } }, metadata: _metadata }, _getModelsInViewport_initializers, _getModelsInViewport_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _maxConcurrentRenders_decorators, { kind: "accessor", name: "maxConcurrentRenders", static: false, private: false, access: { has: obj => "maxConcurrentRenders" in obj, get: obj => obj.maxConcurrentRenders, set: (obj, value) => { obj.maxConcurrentRenders = value; } }, metadata: _metadata }, _maxConcurrentRenders_initializers, _maxConcurrentRenders_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            GfxViewportElement = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .gfx-viewport {
      position: absolute;
      left: 0;
      top: 0;
      contain: size layout style;
      display: block;
    }
  `; }
        _toCSSTransform(translateX, translateY, zoom) {
            return `translate3d(${translateX}px, ${translateY}px, 0) scale(${zoom})`;
        }
        connectedCallback() {
            super.connectedCallback();
            this.viewport.viewportUpdated.on(() => {
                this._refreshViewport();
                this._hideOutsideBlock();
            });
        }
        render() {
            return html `<div class="gfx-viewport">
      <slot></slot>
    </div>`;
        }
        scheduleUpdateChildren(id) {
            const { promise, resolve } = Promise.withResolvers();
            this._pendingChildrenUpdates.push({ id, resolve });
            if (!this._updatingChildrenFlag) {
                this._updatingChildrenFlag = true;
                const schedule = () => {
                    if (this._pendingChildrenUpdates.length) {
                        const childToUpdates = this._pendingChildrenUpdates.splice(0, this.maxConcurrentRenders);
                        childToUpdates.forEach(({ resolve }) => resolve());
                        if (this._pendingChildrenUpdates.length) {
                            requestAnimationFrame(() => {
                                this.isConnected && schedule();
                            });
                        }
                        else {
                            this._updatingChildrenFlag = false;
                        }
                    }
                };
                requestAnimationFrame(() => {
                    this.isConnected && schedule();
                });
            }
            return promise;
        }
        #container_accessor_storage;
        get container() { return this.#container_accessor_storage; }
        set container(value) { this.#container_accessor_storage = value; }
        #getModelsInViewport_accessor_storage;
        get getModelsInViewport() { return this.#getModelsInViewport_accessor_storage; }
        set getModelsInViewport(value) { this.#getModelsInViewport_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #maxConcurrentRenders_accessor_storage;
        get maxConcurrentRenders() { return this.#maxConcurrentRenders_accessor_storage; }
        set maxConcurrentRenders(value) { this.#maxConcurrentRenders_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._hideOutsideBlock = requestThrottledConnectedFrame(() => {
                if (this.getModelsInViewport && this.host) {
                    const host = this.host;
                    const modelsInViewport = this.getModelsInViewport();
                    modelsInViewport.forEach(model => {
                        const view = host.std.view.getBlock(model.id);
                        if (view) {
                            view.style.display = '';
                        }
                        if (this._lastVisibleModels?.has(model)) {
                            this._lastVisibleModels.delete(model);
                        }
                    });
                    this._lastVisibleModels?.forEach(model => {
                        const view = host.std.view.getBlock(model.id);
                        if (view) {
                            view.style.display = 'none';
                        }
                    });
                    this._lastVisibleModels = modelsInViewport;
                }
            }, this);
            this._pendingChildrenUpdates = [];
            this._refreshViewport = requestThrottledConnectedFrame(() => {
                const { translateX, translateY, zoom } = this.viewport;
                if (this.container) {
                    this.container.style.transform = this._toCSSTransform(translateX, translateY, zoom);
                }
            }, this);
            this._updatingChildrenFlag = false;
            this.renderingBlocks = new Set();
            this.#container_accessor_storage = __runInitializers(this, _container_initializers, null);
            this.#getModelsInViewport_accessor_storage = (__runInitializers(this, _container_extraInitializers), __runInitializers(this, _getModelsInViewport_initializers, void 0));
            this.#host_accessor_storage = (__runInitializers(this, _getModelsInViewport_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.#maxConcurrentRenders_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _maxConcurrentRenders_initializers, 2));
            __runInitializers(this, _maxConcurrentRenders_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return GfxViewportElement = _classThis;
})();
export { GfxViewportElement };
//# sourceMappingURL=viewport-element.js.map