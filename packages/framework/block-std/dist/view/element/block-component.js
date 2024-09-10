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
import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
import { Doc } from '@blocksuite/store';
import { BlockViewType } from '@blocksuite/store';
import { consume, provide } from '@lit/context';
import { computed } from '@lit-labs/preact-signals';
import { nothing, render } from 'lit';
import { property, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { when } from 'lit/directives/when.js';
import { html } from 'lit/static-html.js';
import { PropTypes, requiredProperties } from '../decorators/index.js';
import { SignalWatcher } from '../signal-watcher.js';
import { WithDisposable } from '../utils/with-disposable.js';
import { blockComponentSymbol, modelContext, serviceContext, } from './consts.js';
import { docContext, stdContext } from './lit-host.js';
import { ShadowlessElement } from './shadowless-element.js';
let BlockComponent = (() => {
    var _a;
    let _classDecorators = [requiredProperties({
            doc: PropTypes.instanceOf(Doc),
            std: PropTypes.object,
            widgets: PropTypes.recordOf(PropTypes.object),
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let __model_decorators;
    let __model_initializers = [];
    let __model_extraInitializers = [];
    let __renderers_decorators;
    let __renderers_initializers = [];
    let __renderers_extraInitializers = [];
    let __service_decorators;
    let __service_initializers = [];
    let __service_extraInitializers = [];
    let _dirty_decorators;
    let _dirty_initializers = [];
    let _dirty_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    let _viewType_decorators;
    let _viewType_initializers = [];
    let _viewType_extraInitializers = [];
    let _widgets_decorators;
    let _widgets_initializers = [];
    let _widgets_extraInitializers = [];
    var BlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static { _a = blockComponentSymbol; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __model_decorators = [provide({ context: modelContext }), state()];
            __renderers_decorators = [state()];
            __service_decorators = [provide({ context: serviceContext }), state()];
            _dirty_decorators = [property({ attribute: false })];
            _doc_decorators = [consume({ context: docContext })];
            _std_decorators = [consume({ context: stdContext })];
            _viewType_decorators = [property({ attribute: false })];
            _widgets_decorators = [property({
                    attribute: false,
                    hasChanged(value, oldValue) {
                        if (!value || !oldValue) {
                            return value !== oldValue;
                        }
                        // Is empty object
                        if (!Object.keys(value).length && !Object.keys(oldValue).length) {
                            return false;
                        }
                        return value !== oldValue;
                    },
                })];
            __esDecorate(this, null, __model_decorators, { kind: "accessor", name: "_model", static: false, private: false, access: { has: obj => "_model" in obj, get: obj => obj._model, set: (obj, value) => { obj._model = value; } }, metadata: _metadata }, __model_initializers, __model_extraInitializers);
            __esDecorate(this, null, __renderers_decorators, { kind: "accessor", name: "_renderers", static: false, private: false, access: { has: obj => "_renderers" in obj, get: obj => obj._renderers, set: (obj, value) => { obj._renderers = value; } }, metadata: _metadata }, __renderers_initializers, __renderers_extraInitializers);
            __esDecorate(this, null, __service_decorators, { kind: "accessor", name: "_service", static: false, private: false, access: { has: obj => "_service" in obj, get: obj => obj._service, set: (obj, value) => { obj._service = value; } }, metadata: _metadata }, __service_initializers, __service_extraInitializers);
            __esDecorate(this, null, _dirty_decorators, { kind: "accessor", name: "dirty", static: false, private: false, access: { has: obj => "dirty" in obj, get: obj => obj.dirty, set: (obj, value) => { obj.dirty = value; } }, metadata: _metadata }, _dirty_initializers, _dirty_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(this, null, _viewType_decorators, { kind: "accessor", name: "viewType", static: false, private: false, access: { has: obj => "viewType" in obj, get: obj => obj.viewType, set: (obj, value) => { obj.viewType = value; } }, metadata: _metadata }, _viewType_initializers, _viewType_extraInitializers);
            __esDecorate(this, null, _widgets_decorators, { kind: "accessor", name: "widgets", static: false, private: false, access: { has: obj => "widgets" in obj, get: obj => obj.widgets, set: (obj, value) => { obj.widgets = value; } }, metadata: _metadata }, _widgets_initializers, _widgets_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get blockId() {
            return this.dataset.blockId;
        }
        get childBlocks() {
            const childModels = this.model.children;
            return childModels
                .map(child => {
                return this.std.view.getBlock(child.id);
            })
                .filter((x) => !!x);
        }
        get flavour() {
            return this.model.flavour;
        }
        get host() {
            return this.std.host;
        }
        get isVersionMismatch() {
            const schema = this.doc.schema.flavourSchemaMap.get(this.model.flavour);
            if (!schema) {
                console.warn(`Schema not found for block ${this.model.id}, flavour ${this.model.flavour}`);
                return true;
            }
            const expectedVersion = schema.version;
            const actualVersion = this.model.version;
            if (expectedVersion !== actualVersion) {
                console.warn(`Version mismatch for block ${this.model.id}, expected ${expectedVersion}, actual ${actualVersion}`);
                return true;
            }
            return false;
        }
        get model() {
            if (this._model) {
                return this._model;
            }
            const model = this.doc.getBlockById(this.blockId);
            if (!model) {
                throw new BlockSuiteError(ErrorCode.MissingViewModelError, `Cannot find block model for id ${this.blockId}`);
            }
            this._model = model;
            return model;
        }
        get parentComponent() {
            const parent = this.model.parent;
            if (!parent)
                return null;
            return this.std.view.getBlock(parent.id);
        }
        get renderChildren() {
            return this.host.renderChildren.bind(this);
        }
        get rootComponent() {
            const rootId = this.doc.root?.id;
            if (!rootId) {
                return null;
            }
            const rootComponent = this.host.view.getBlock(rootId);
            return rootComponent ?? null;
        }
        get selected() {
            return this._selected.value;
        }
        get selection() {
            return this.host.selection;
        }
        get service() {
            if (this._service) {
                return this._service;
            }
            const service = this.std.getService(this.model.flavour);
            this._service = service;
            return service;
        }
        get topContenteditableElement() {
            return this.rootComponent;
        }
        get widgetComponents() {
            return Object.keys(this.widgets).reduce((mapping, key) => ({
                ...mapping,
                [key]: this.host.view.getWidget(key, this.blockId),
            }), {});
        }
        _renderMismatchBlock(content) {
            return when(this.isVersionMismatch, () => {
                const actualVersion = this.model.version;
                const schema = this.doc.schema.flavourSchemaMap.get(this.model.flavour);
                const expectedVersion = schema?.version ?? -1;
                return this.renderVersionMismatch(expectedVersion, actualVersion);
            }, () => content);
        }
        _renderViewType(content) {
            return choose(this.viewType, [
                [BlockViewType.Display, () => content],
                [BlockViewType.Hidden, () => nothing],
                [BlockViewType.Bypass, () => this.renderChildren(this.model)],
            ]);
        }
        addRenderer(renderer) {
            this._renderers.push(renderer);
        }
        bindHotKey(keymap, options) {
            const dispose = this.host.event.bindHotkey(keymap, {
                flavour: options?.global
                    ? undefined
                    : options?.flavour
                        ? this.model.flavour
                        : undefined,
                blockId: options?.global || options?.flavour ? undefined : this.blockId,
            });
            this._disposables.add(dispose);
            return dispose;
        }
        connectedCallback() {
            super.connectedCallback();
            this.std.view.setBlock(this);
            const disposable = this.std.doc.slots.blockUpdated.on(({ type, id }) => {
                if (id === this.model.id && type === 'delete') {
                    this.std.view.deleteBlock(this);
                    disposable.dispose();
                }
            });
            this._disposables.add(disposable);
            this._disposables.add(this.model.propsUpdated.on(() => {
                this.requestUpdate();
            }));
            this.service.specSlots.viewConnected.emit({
                service: this.service,
                component: this,
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.service?.specSlots.viewDisconnected.emit({
                service: this.service,
                component: this,
            });
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await Promise.all(this.childBlocks.map(el => el.updateComplete));
            return result;
        }
        render() {
            return this._renderers.reduce((acc, cur) => cur.call(this, acc), nothing);
        }
        renderBlock() {
            return nothing;
        }
        /**
         * Render a warning message when the block version is mismatched.
         * @param expectedVersion If the schema is not found, the expected version is -1.
         *        Which means the block is not supported in the current editor.
         * @param actualVersion The version of the block's crdt data.
         */
        renderVersionMismatch(expectedVersion, actualVersion) {
            return html `
      <dl class="version-mismatch-warning" contenteditable="false">
        <dt>
          <h4>Block Version Mismatched</h4>
        </dt>
        <dd>
          <p>
            We can not render this <var>${this.model.flavour}</var> block
            because the version is mismatched.
          </p>
          <p>Editor version: <var>${expectedVersion}</var></p>
          <p>Data version: <var>${actualVersion}</var></p>
        </dd>
      </dl>
    `;
        }
        update(changedProperties) {
            // In some cases, the DOM structure is directly modified, causing Lit to lose synchronization with the DOM structure.
            // We can restore this state through the `dirty` property.
            if (this.dirty) {
                // Here we made some hacks by referring to the source code of Lit.
                // https://github.com/lit/lit/blob/273ad4e23b8ec97f1a5015dbf398104f535f9c34/packages/lit-element/src/lit-element.ts#L162-L163
                // https://github.com/lit/lit/blob/273ad4e23b8ec97f1a5015dbf398104f535f9c34/packages/reactive-element/src/reactive-element.ts#L1586-L1589
                // https://github.com/lit/lit/blob/273ad4e23b8ec97f1a5015dbf398104f535f9c34/packages/reactive-element/src/reactive-element.ts#L1509-L1512
                //@ts-ignore
                this.__reflectingProperties &&= this.__reflectingProperties.forEach(p => 
                //@ts-ignore
                this.__propertyToAttribute(p, this[p]));
                //@ts-ignore
                this._$changedProperties = new Map();
                this.isUpdatePending = false;
                //@ts-ignore
                this.__childPart = render(nothing, this.renderRoot);
                this.updateComplete
                    .then(() => {
                    this.dirty = false;
                })
                    .catch(console.error);
            }
            else {
                super.update(changedProperties);
            }
        }
        #_model_accessor_storage;
        get _model() { return this.#_model_accessor_storage; }
        set _model(value) { this.#_model_accessor_storage = value; }
        #_renderers_accessor_storage;
        get _renderers() { return this.#_renderers_accessor_storage; }
        set _renderers(value) { this.#_renderers_accessor_storage = value; }
        #_service_accessor_storage;
        get _service() { return this.#_service_accessor_storage; }
        set _service(value) { this.#_service_accessor_storage = value; }
        #dirty_accessor_storage;
        get dirty() { return this.#dirty_accessor_storage; }
        set dirty(value) { this.#dirty_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #std_accessor_storage;
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        #viewType_accessor_storage;
        get viewType() { return this.#viewType_accessor_storage; }
        set viewType(value) { this.#viewType_accessor_storage = value; }
        #widgets_accessor_storage;
        get widgets() { return this.#widgets_accessor_storage; }
        set widgets(value) { this.#widgets_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._selected = computed(() => {
                const selection = this.std.selection.value.find(selection => {
                    return selection.blockId === this.model?.id;
                });
                if (!selection) {
                    return null;
                }
                return selection;
            });
            this[_a] = true;
            this.handleEvent = (name, handler, options) => {
                this._disposables.add(this.host.event.add(name, handler, {
                    flavour: options?.global
                        ? undefined
                        : options?.flavour
                            ? this.model?.flavour
                            : undefined,
                    blockId: options?.global || options?.flavour ? undefined : this.blockId,
                }));
            };
            this.#_model_accessor_storage = __runInitializers(this, __model_initializers, null);
            this.#_renderers_accessor_storage = (__runInitializers(this, __model_extraInitializers), __runInitializers(this, __renderers_initializers, [
                this.renderBlock,
                this._renderMismatchBlock,
                this._renderViewType,
            ]));
            this.#_service_accessor_storage = (__runInitializers(this, __renderers_extraInitializers), __runInitializers(this, __service_initializers, null));
            this.#dirty_accessor_storage = (__runInitializers(this, __service_extraInitializers), __runInitializers(this, _dirty_initializers, false));
            this.#doc_accessor_storage = (__runInitializers(this, _dirty_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#std_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _std_initializers, void 0));
            this.#viewType_accessor_storage = (__runInitializers(this, _std_extraInitializers), __runInitializers(this, _viewType_initializers, BlockViewType.Display));
            this.#widgets_accessor_storage = (__runInitializers(this, _viewType_extraInitializers), __runInitializers(this, _widgets_initializers, void 0));
            __runInitializers(this, _widgets_extraInitializers);
        }
    };
    return BlockComponent = _classThis;
})();
export { BlockComponent };
//# sourceMappingURL=block-component.js.map