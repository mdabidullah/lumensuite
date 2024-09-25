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
import { DisposableGroup } from '@lumensuite/global/utils';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { FrameCardTitleEditor } from './frame-card-title-editor.js';
const styles = css `
  .frame-card-title-container {
    display: flex;
    white-space: nowrap;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    gap: 6px;
    font-size: var(--affine-font-sm);
    cursor: default;
    position: relative;
  }

  .frame-card-title-container .card-index {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 2px;
    background: var(--affine-black);
    margin-left: 2px;

    color: var(--affine-white);
    text-align: center;
    font-weight: 500;
    line-height: 18px;
  }

  .frame-card-title-container .card-title {
    height: 20px;
    color: var(--affine-text-primary-color);
    font-weight: 400;
    line-height: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
`;
export const AFFINE_FRAME_CARD_TITLE = 'affine-frame-card-title';
let FrameCardTitle = (() => {
    let _classDecorators = [customElement(AFFINE_FRAME_CARD_TITLE)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _cardIndex_decorators;
    let _cardIndex_initializers = [];
    let _cardIndex_extraInitializers = [];
    let _frame_decorators;
    let _frame_initializers = [];
    let _frame_extraInitializers = [];
    let _titleContainer_decorators;
    let _titleContainer_initializers = [];
    let _titleContainer_extraInitializers = [];
    let _titleContentElement_decorators;
    let _titleContentElement_initializers = [];
    let _titleContentElement_extraInitializers = [];
    let _titleIndexElement_decorators;
    let _titleIndexElement_initializers = [];
    let _titleIndexElement_extraInitializers = [];
    var FrameCardTitle = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _cardIndex_decorators = [property({ attribute: false })];
            _frame_decorators = [property({ attribute: false })];
            _titleContainer_decorators = [query('.frame-card-title-container')];
            _titleContentElement_decorators = [query('.frame-card-title-container .card-title')];
            _titleIndexElement_decorators = [query('.frame-card-title-container .card-index')];
            __esDecorate(this, null, _cardIndex_decorators, { kind: "accessor", name: "cardIndex", static: false, private: false, access: { has: obj => "cardIndex" in obj, get: obj => obj.cardIndex, set: (obj, value) => { obj.cardIndex = value; } }, metadata: _metadata }, _cardIndex_initializers, _cardIndex_extraInitializers);
            __esDecorate(this, null, _frame_decorators, { kind: "accessor", name: "frame", static: false, private: false, access: { has: obj => "frame" in obj, get: obj => obj.frame, set: (obj, value) => { obj.frame = value; } }, metadata: _metadata }, _frame_initializers, _frame_extraInitializers);
            __esDecorate(this, null, _titleContainer_decorators, { kind: "accessor", name: "titleContainer", static: false, private: false, access: { has: obj => "titleContainer" in obj, get: obj => obj.titleContainer, set: (obj, value) => { obj.titleContainer = value; } }, metadata: _metadata }, _titleContainer_initializers, _titleContainer_extraInitializers);
            __esDecorate(this, null, _titleContentElement_decorators, { kind: "accessor", name: "titleContentElement", static: false, private: false, access: { has: obj => "titleContentElement" in obj, get: obj => obj.titleContentElement, set: (obj, value) => { obj.titleContentElement = value; } }, metadata: _metadata }, _titleContentElement_initializers, _titleContentElement_extraInitializers);
            __esDecorate(this, null, _titleIndexElement_decorators, { kind: "accessor", name: "titleIndexElement", static: false, private: false, access: { has: obj => "titleIndexElement" in obj, get: obj => obj.titleIndexElement, set: (obj, value) => { obj.titleIndexElement = value; } }, metadata: _metadata }, _titleIndexElement_initializers, _titleIndexElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FrameCardTitle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _setFrameDisposables(title) {
            this._clearTitleDisposables();
            title.observe(this._updateElement);
            this._titleDisposables = new DisposableGroup();
            this._titleDisposables.add({
                dispose: () => {
                    title.unobserve(this._updateElement);
                },
            });
        }
        connectedCallback() {
            super.connectedCallback();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearTitleDisposables();
        }
        render() {
            return html `<div class="frame-card-title-container">
      <div
        class="card-index"
        @click=${(e) => e.stopPropagation()}
        @dblclick=${(e) => e.stopPropagation()}
      >
        ${this.cardIndex + 1}
      </div>
      <div class="card-title">
        <span
          @click=${(e) => e.stopPropagation()}
          @dblclick=${this._mountTitleEditor}
          >${this.frame.title}</span
        >
      </div>
    </div>`;
        }
        updated(_changedProperties) {
            if (_changedProperties.has('frame')) {
                this._setFrameDisposables(this.frame.title.yText);
            }
        }
        #cardIndex_accessor_storage;
        get cardIndex() { return this.#cardIndex_accessor_storage; }
        set cardIndex(value) { this.#cardIndex_accessor_storage = value; }
        #frame_accessor_storage;
        get frame() { return this.#frame_accessor_storage; }
        set frame(value) { this.#frame_accessor_storage = value; }
        #titleContainer_accessor_storage;
        get titleContainer() { return this.#titleContainer_accessor_storage; }
        set titleContainer(value) { this.#titleContainer_accessor_storage = value; }
        #titleContentElement_accessor_storage;
        get titleContentElement() { return this.#titleContentElement_accessor_storage; }
        set titleContentElement(value) { this.#titleContentElement_accessor_storage = value; }
        #titleIndexElement_accessor_storage;
        get titleIndexElement() { return this.#titleIndexElement_accessor_storage; }
        set titleIndexElement(value) { this.#titleIndexElement_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._clearTitleDisposables = () => {
                this._titleDisposables?.dispose();
                this._titleDisposables = null;
            };
            this._mountTitleEditor = (e) => {
                e.stopPropagation();
                const titleEditor = new FrameCardTitleEditor();
                titleEditor.frameModel = this.frame;
                titleEditor.titleContentElement = this.titleContentElement;
                const left = this.titleIndexElement.offsetWidth + 6;
                titleEditor.left = left;
                titleEditor.maxWidth = this.titleContainer.offsetWidth - left - 6;
                this.titleContainer.append(titleEditor);
            };
            this._titleDisposables = null;
            this._updateElement = () => {
                this.requestUpdate();
            };
            this.#cardIndex_accessor_storage = __runInitializers(this, _cardIndex_initializers, void 0);
            this.#frame_accessor_storage = (__runInitializers(this, _cardIndex_extraInitializers), __runInitializers(this, _frame_initializers, void 0));
            this.#titleContainer_accessor_storage = (__runInitializers(this, _frame_extraInitializers), __runInitializers(this, _titleContainer_initializers, void 0));
            this.#titleContentElement_accessor_storage = (__runInitializers(this, _titleContainer_extraInitializers), __runInitializers(this, _titleContentElement_initializers, void 0));
            this.#titleIndexElement_accessor_storage = (__runInitializers(this, _titleContentElement_extraInitializers), __runInitializers(this, _titleIndexElement_initializers, void 0));
            __runInitializers(this, _titleIndexElement_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FrameCardTitle = _classThis;
})();
export { FrameCardTitle };
//# sourceMappingURL=frame-card-title.js.map