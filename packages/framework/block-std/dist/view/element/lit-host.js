/* eslint-disable lit/binding-positions, lit/no-invalid-html */
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
import { BlockSuiteError, ErrorCode, handleError, } from '@blocksuite/global/exceptions';
import { Slot } from '@blocksuite/global/utils';
import { Doc } from '@blocksuite/store';
import { BlockViewType } from '@blocksuite/store';
import { createContext, provide } from '@lit/context';
import { css, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import { WidgetViewMapIdentifier } from '../../identifier.js';
import { PropTypes, requiredProperties } from '../decorators/index.js';
import { SignalWatcher } from '../signal-watcher.js';
import { WithDisposable } from '../utils/with-disposable.js';
import { BLOCK_ID_ATTR, WIDGET_ID_ATTR } from './consts.js';
import { ShadowlessElement } from './shadowless-element.js';
export const docContext = createContext('doc');
export const stdContext = createContext('std');
let EditorHost = (() => {
    let _classDecorators = [requiredProperties({
            doc: PropTypes.instanceOf(Doc),
            std: PropTypes.object,
        }), customElement('editor-host')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    var EditorHost = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _doc_decorators = [provide({ context: docContext }), property({ attribute: false })];
            _std_decorators = [provide({ context: stdContext }), property({ attribute: false })];
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EditorHost = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    editor-host {
      outline: none;
      isolation: isolate;
      display: block;
      height: 100%;
    }
  `; }
        get command() {
            return this.std.command;
        }
        get event() {
            return this.std.event;
        }
        get range() {
            return this.std.range;
        }
        get selection() {
            return this.std.selection;
        }
        get view() {
            return this.std.view;
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.doc.root) {
                throw new BlockSuiteError(ErrorCode.NoRootModelError, 'This doc is missing root block. Please initialize the default block structure before connecting the editor to DOM.');
            }
            this.std.mount();
            this.tabIndex = 0;
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.std.unmount();
            this.slots.unmounted.emit();
        }
        async getUpdateComplete() {
            try {
                const result = await super.getUpdateComplete();
                const rootModel = this.doc.root;
                if (!rootModel)
                    return result;
                const view = this.std.getView(rootModel.flavour);
                if (!view)
                    return result;
                const widgetViewMap = this.std.getOptional(WidgetViewMapIdentifier(rootModel.flavour));
                const widgetTags = Object.values(widgetViewMap ?? {});
                const elementsTags = [
                    typeof view === 'function' ? view(rootModel) : view,
                    ...widgetTags,
                ];
                await Promise.all(elementsTags.map(tag => {
                    const element = this.renderRoot.querySelector(tag._$litStatic$);
                    if (element instanceof LitElement) {
                        return element.updateComplete;
                    }
                    return;
                }));
                return result;
            }
            catch (e) {
                if (e instanceof Error) {
                    handleError(e);
                }
                else {
                    console.error(e);
                }
                return true;
            }
        }
        render() {
            const { root } = this.doc;
            if (!root)
                return nothing;
            return this._renderModel(root);
        }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #std_accessor_storage;
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._renderModel = (model) => {
                const { flavour } = model;
                const block = this.doc.getBlock(model.id);
                if (!block || block.blockViewType === BlockViewType.Hidden) {
                    return html `${nothing}`;
                }
                const schema = this.doc.schema.flavourSchemaMap.get(flavour);
                const view = this.std.getView(flavour);
                if (!schema || !view) {
                    console.warn(`Cannot find render flavour ${flavour}.`);
                    return html `${nothing}`;
                }
                const widgetViewMap = this.std.getOptional(WidgetViewMapIdentifier(flavour));
                const tag = typeof view === 'function' ? view(model) : view;
                const widgets = widgetViewMap
                    ? Object.entries(widgetViewMap).reduce((mapping, [key, tag]) => {
                        const template = html `<${tag} ${unsafeStatic(WIDGET_ID_ATTR)}=${key}></${tag}>`;
                        return {
                            ...mapping,
                            [key]: template,
                        };
                    }, {})
                    : {};
                return html `<${tag}
      ${unsafeStatic(BLOCK_ID_ATTR)}=${model.id}
      .widgets=${widgets}
      .viewType=${block.blockViewType}
    ></${tag}>`;
            };
            /**
             * Render a block model manually instead of let blocksuite render it.
             * If you render the same block model multiple times,
             * the event flow and data binding will be broken.
             * Only use this method as a last resort.
             */
            this.dangerouslyRenderModel = (model) => {
                return this._renderModel(model);
            };
            this.renderChildren = (model, filter) => {
                return html `${repeat(model.children.filter(filter ?? (() => true)), child => child.id, child => this._renderModel(child))}`;
            };
            this.slots = {
                unmounted: new Slot(),
            };
            this.#doc_accessor_storage = __runInitializers(this, _doc_initializers, void 0);
            this.#std_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _std_initializers, void 0));
            __runInitializers(this, _std_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EditorHost = _classThis;
})();
export { EditorHost };
//# sourceMappingURL=lit-host.js.map