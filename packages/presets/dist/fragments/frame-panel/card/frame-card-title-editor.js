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
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
const styles = css `
  frame-card-title-editor rich-text .nowrap-lines::-webkit-scrollbar {
    display: none;
  }
`;
export const AFFINE_FRAME_TITLE_EDITOR = 'affine-frame-card-title-editor';
let FrameCardTitleEditor = (() => {
    let _classDecorators = [customElement(AFFINE_FRAME_TITLE_EDITOR)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _frameModel_decorators;
    let _frameModel_initializers = [];
    let _frameModel_extraInitializers = [];
    let _left_decorators;
    let _left_initializers = [];
    let _left_extraInitializers = [];
    let _maxWidth_decorators;
    let _maxWidth_initializers = [];
    let _maxWidth_extraInitializers = [];
    let _richText_decorators;
    let _richText_initializers = [];
    let _richText_extraInitializers = [];
    let _titleContentElement_decorators;
    let _titleContentElement_initializers = [];
    let _titleContentElement_extraInitializers = [];
    var FrameCardTitleEditor = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _frameModel_decorators = [property({ attribute: false })];
            _left_decorators = [property({ attribute: false })];
            _maxWidth_decorators = [property({ attribute: false })];
            _richText_decorators = [query('rich-text')];
            _titleContentElement_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _frameModel_decorators, { kind: "accessor", name: "frameModel", static: false, private: false, access: { has: obj => "frameModel" in obj, get: obj => obj.frameModel, set: (obj, value) => { obj.frameModel = value; } }, metadata: _metadata }, _frameModel_initializers, _frameModel_extraInitializers);
            __esDecorate(this, null, _left_decorators, { kind: "accessor", name: "left", static: false, private: false, access: { has: obj => "left" in obj, get: obj => obj.left, set: (obj, value) => { obj.left = value; } }, metadata: _metadata }, _left_initializers, _left_extraInitializers);
            __esDecorate(this, null, _maxWidth_decorators, { kind: "accessor", name: "maxWidth", static: false, private: false, access: { has: obj => "maxWidth" in obj, get: obj => obj.maxWidth, set: (obj, value) => { obj.maxWidth = value; } }, metadata: _metadata }, _maxWidth_initializers, _maxWidth_extraInitializers);
            __esDecorate(this, null, _richText_decorators, { kind: "accessor", name: "richText", static: false, private: false, access: { has: obj => "richText" in obj, get: obj => obj.richText, set: (obj, value) => { obj.richText = value; } }, metadata: _metadata }, _richText_initializers, _richText_extraInitializers);
            __esDecorate(this, null, _titleContentElement_decorators, { kind: "accessor", name: "titleContentElement", static: false, private: false, access: { has: obj => "titleContentElement" in obj, get: obj => obj.titleContentElement, set: (obj, value) => { obj.titleContentElement = value; } }, metadata: _metadata }, _titleContentElement_initializers, _titleContentElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FrameCardTitleEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get inlineEditor() {
            return this.richText.inlineEditor;
        }
        _unmount() {
            // dispose in advance to avoid execute `this.remove()` twice
            this.disposables.dispose();
            this.remove();
            this.titleContentElement.style.display = 'block';
        }
        firstUpdated() {
            this.updateComplete
                .then(() => {
                if (this.inlineEditor === null)
                    return;
                this.titleContentElement.style.display = 'none';
                this.inlineEditor.selectAll();
                this.inlineEditor.slots.renderComplete.on(() => {
                    this.requestUpdate();
                });
                const inlineEditorContainer = this.inlineEditor.rootElement;
                this.disposables.addFromEvent(inlineEditorContainer, 'blur', () => {
                    this._unmount();
                });
                this.disposables.addFromEvent(inlineEditorContainer, 'click', e => {
                    e.stopPropagation();
                });
                this.disposables.addFromEvent(inlineEditorContainer, 'dblclick', e => {
                    e.stopPropagation();
                });
                this.disposables.addFromEvent(inlineEditorContainer, 'keydown', e => {
                    e.stopPropagation();
                    if (e.key === 'Enter' && !this._isComposing) {
                        this._unmount();
                    }
                });
            })
                .catch(console.error);
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.richText?.updateComplete;
            return result;
        }
        render() {
            const inlineEditorStyle = styleMap({
                transformOrigin: 'top left',
                borderRadius: '4px',
                maxWidth: `${this.maxWidth}px`,
                maxHeight: '20px',
                width: 'fit-content',
                height: '20px',
                fontSize: 'var(--affine-font-sm)',
                lineHeight: '20px',
                position: 'absolute',
                left: `${this.left}px`,
                top: '0px',
                minWidth: '8px',
                background: 'var(--affine-background-primary-color)',
                border: '1px solid var(--affine-primary-color)',
                color: 'var(--affine-text-primary-color)',
                boxShadow: '0px 0px 0px 2px rgba(30, 150, 235, 0.30)',
                zIndex: '1',
                display: 'block',
            });
            return html `<rich-text
      .yText=${this.frameModel.title.yText}
      .enableFormat=${false}
      .enableAutoScrollHorizontally=${true}
      .enableUndoRedo=${false}
      .wrapText=${false}
      style=${inlineEditorStyle}
    ></rich-text>`;
        }
        #frameModel_accessor_storage;
        get frameModel() { return this.#frameModel_accessor_storage; }
        set frameModel(value) { this.#frameModel_accessor_storage = value; }
        #left_accessor_storage;
        get left() { return this.#left_accessor_storage; }
        set left(value) { this.#left_accessor_storage = value; }
        #maxWidth_accessor_storage;
        get maxWidth() { return this.#maxWidth_accessor_storage; }
        set maxWidth(value) { this.#maxWidth_accessor_storage = value; }
        #richText_accessor_storage;
        get richText() { return this.#richText_accessor_storage; }
        set richText(value) { this.#richText_accessor_storage = value; }
        #titleContentElement_accessor_storage;
        get titleContentElement() { return this.#titleContentElement_accessor_storage; }
        set titleContentElement(value) { this.#titleContentElement_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._isComposing = false;
            this.#frameModel_accessor_storage = __runInitializers(this, _frameModel_initializers, void 0);
            this.#left_accessor_storage = (__runInitializers(this, _frameModel_extraInitializers), __runInitializers(this, _left_initializers, void 0));
            this.#maxWidth_accessor_storage = (__runInitializers(this, _left_extraInitializers), __runInitializers(this, _maxWidth_initializers, void 0));
            this.#richText_accessor_storage = (__runInitializers(this, _maxWidth_extraInitializers), __runInitializers(this, _richText_initializers, void 0));
            this.#titleContentElement_accessor_storage = (__runInitializers(this, _richText_extraInitializers), __runInitializers(this, _titleContentElement_initializers, void 0));
            __runInitializers(this, _titleContentElement_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FrameCardTitleEditor = _classThis;
})();
export { FrameCardTitleEditor };
//# sourceMappingURL=frame-card-title-editor.js.map