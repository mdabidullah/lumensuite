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
import { BlockStdScope, EditorHost, ShadowlessElement, WithDisposable, } from '@lumensuite/block-std';
import { PageEditorBlockSpecs } from '@lumensuite/blocks';
import { noop } from '@lumensuite/global/utils';
import { css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';
noop(EditorHost);
let PageEditor = (() => {
    let _classDecorators = [customElement('page-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _hasViewport_decorators;
    let _hasViewport_initializers = [];
    let _hasViewport_extraInitializers = [];
    let _specs_decorators;
    let _specs_initializers = [];
    let _specs_extraInitializers = [];
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    var PageEditor = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _doc_decorators = [property({ attribute: false })];
            _hasViewport_decorators = [property({ type: Boolean })];
            _specs_decorators = [property({ attribute: false })];
            _std_decorators = [state()];
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _hasViewport_decorators, { kind: "accessor", name: "hasViewport", static: false, private: false, access: { has: obj => "hasViewport" in obj, get: obj => obj.hasViewport, set: (obj, value) => { obj.hasViewport = value; } }, metadata: _metadata }, _hasViewport_initializers, _hasViewport_extraInitializers);
            __esDecorate(this, null, _specs_decorators, { kind: "accessor", name: "specs", static: false, private: false, access: { has: obj => "specs" in obj, get: obj => obj.specs, set: (obj, value) => { obj.specs = value; } }, metadata: _metadata }, _specs_initializers, _specs_extraInitializers);
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            PageEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    page-editor {
      font-family: var(--affine-font-family);
      background: var(--affine-background-primary-color);
    }

    page-editor * {
      box-sizing: border-box;
    }

    @media print {
      page-editor {
        height: auto;
      }
    }

    .affine-page-viewport {
      position: relative;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      container-name: viewport;
      container-type: inline-size;
    }

    .page-editor-container {
      display: block;
      height: 100%;
    }
  `; }
        get host() {
            try {
                return this.std.host;
            }
            catch {
                return null;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.doc.slots.rootAdded.on(() => this.requestUpdate()));
            this.std = new BlockStdScope({
                doc: this.doc,
                extensions: this.specs,
            });
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.host?.updateComplete;
            return result;
        }
        render() {
            const std = this.std;
            if (!this.doc.root)
                return nothing;
            return html `
      <div
        class=${this.hasViewport
                ? 'affine-page-viewport'
                : 'page-editor-container'}
      >
        ${guard([std], () => std.render())}
      </div>
    `;
        }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            if (changedProperties.has('doc')) {
                this.std = new BlockStdScope({
                    doc: this.doc,
                    extensions: this.specs,
                });
            }
        }
        #doc_accessor_storage = __runInitializers(this, _doc_initializers, void 0);
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #hasViewport_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _hasViewport_initializers, true));
        get hasViewport() { return this.#hasViewport_accessor_storage; }
        set hasViewport(value) { this.#hasViewport_accessor_storage = value; }
        #specs_accessor_storage = (__runInitializers(this, _hasViewport_extraInitializers), __runInitializers(this, _specs_initializers, PageEditorBlockSpecs));
        get specs() { return this.#specs_accessor_storage; }
        set specs(value) { this.#specs_accessor_storage = value; }
        #std_accessor_storage = (__runInitializers(this, _specs_extraInitializers), __runInitializers(this, _std_initializers, void 0));
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _std_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return PageEditor = _classThis;
})();
export { PageEditor };
//# sourceMappingURL=page-editor.js.map