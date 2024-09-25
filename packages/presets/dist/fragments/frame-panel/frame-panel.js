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
import { ShadowlessElement, WithDisposable } from '@lumensuite/block-std';
import { FramePreview } from '@lumensuite/blocks';
import { DisposableGroup } from '@lumensuite/global/utils';
import { baseTheme } from '@toeverything/theme';
import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './body/frame-panel-body.js';
import './header/frame-panel-header.js';
const styles = css `
  frame-panel {
    display: block;
    width: 100%;
    height: 100%;
  }

  .frame-panel-container {
    background-color: var(--affine-background-primary-color);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    height: 100%;
    font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    padding: 8px;
  }

  .frame-panel-body {
    padding-top: 12px;
    flex-grow: 1;
    width: 100%;

    overflow: auto;
    overflow-x: hidden;
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: transparent transparent; /* For Firefox */
  }

  .frame-panel-body::-webkit-scrollbar {
    width: 4px;
  }

  .frame-panel-body::-webkit-scrollbar-thumb {
    border-radius: 2px;
  }

  .frame-panel-body:hover::-webkit-scrollbar-thumb {
    background-color: var(--affine-black-30);
  }

  .frame-panel-body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .frame-panel-body::-webkit-scrollbar-corner {
    display: none;
  }
`;
export const AFFINE_FRAME_PANEL = 'affine-frame-panel';
let FramePanel = (() => {
    let _classDecorators = [customElement(AFFINE_FRAME_PANEL)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    let _fitPadding_decorators;
    let _fitPadding_initializers = [];
    let _fitPadding_extraInitializers = [];
    var FramePanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _editor_decorators = [property({ attribute: false })];
            _fitPadding_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(this, null, _fitPadding_decorators, { kind: "accessor", name: "fitPadding", static: false, private: false, access: { has: obj => "fitPadding" in obj, get: obj => obj.fitPadding, set: (obj, value) => { obj.fitPadding = value; } }, metadata: _metadata }, _fitPadding_initializers, _fitPadding_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FramePanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get doc() {
            return this.editor.doc;
        }
        get edgeless() {
            return this.editor.querySelector('affine-edgeless-root');
        }
        get host() {
            return this.editor.host;
        }
        _clearEditorDisposables() {
            this._editorDisposables?.dispose();
            this._editorDisposables = null;
        }
        _setEditorDisposables() {
            this._clearEditorDisposables();
            this._editorDisposables = new DisposableGroup();
            this._editorDisposables.add(this.editor.slots.editorModeSwitched.on(() => {
                this.editor.updateComplete
                    .then(() => this.requestUpdate())
                    .catch(console.error);
            }));
            this._editorDisposables.add(this.editor.slots.docUpdated.on(() => {
                this.editor.updateComplete
                    .then(() => {
                    this.requestUpdate();
                })
                    .catch(console.error);
            }));
        }
        connectedCallback() {
            super.connectedCallback();
            if (!customElements.get('frame-preview')) {
                customElements.define('frame-preview', FramePreview);
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearEditorDisposables();
        }
        render() {
            return html `<div class="frame-panel-container">
      <affine-frame-panel-header
        .edgeless=${this.edgeless}
        .editorHost=${this.host}
      ></affine-frame-panel-header>
      <affine-frame-panel-body
        class="frame-panel-body"
        .edgeless=${this.edgeless}
        .doc=${this.doc}
        .editorHost=${this.host}
        .fitPadding=${this.fitPadding}
      ></affine-frame-panel-body>
    </div>`;
        }
        updated(_changedProperties) {
            if (_changedProperties.has('editor')) {
                this._setEditorDisposables();
            }
        }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        #fitPadding_accessor_storage;
        get fitPadding() { return this.#fitPadding_accessor_storage; }
        set fitPadding(value) { this.#fitPadding_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._editorDisposables = null;
            this.#editor_accessor_storage = __runInitializers(this, _editor_initializers, void 0);
            this.#fitPadding_accessor_storage = (__runInitializers(this, _editor_extraInitializers), __runInitializers(this, _fitPadding_initializers, [50, 380, 50, 50]));
            __runInitializers(this, _fitPadding_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FramePanel = _classThis;
})();
export { FramePanel };
//# sourceMappingURL=frame-panel.js.map