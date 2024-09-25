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
import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ZERO_WIDTH_SPACE } from '../consts.js';
import { getInlineEditorInsideRoot } from '../utils/query.js';
let VElement = (() => {
    let _classDecorators = [customElement('v-element')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    let _endOffset_decorators;
    let _endOffset_initializers = [];
    let _endOffset_extraInitializers = [];
    let _lineIndex_decorators;
    let _lineIndex_initializers = [];
    let _lineIndex_extraInitializers = [];
    let _selected_decorators;
    let _selected_initializers = [];
    let _selected_extraInitializers = [];
    let _startOffset_decorators;
    let _startOffset_initializers = [];
    let _startOffset_extraInitializers = [];
    var VElement = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            _endOffset_decorators = [property({ attribute: false })];
            _lineIndex_decorators = [property({ attribute: false })];
            _selected_decorators = [property({ attribute: false })];
            _startOffset_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(this, null, _endOffset_decorators, { kind: "accessor", name: "endOffset", static: false, private: false, access: { has: obj => "endOffset" in obj, get: obj => obj.endOffset, set: (obj, value) => { obj.endOffset = value; } }, metadata: _metadata }, _endOffset_initializers, _endOffset_extraInitializers);
            __esDecorate(this, null, _lineIndex_decorators, { kind: "accessor", name: "lineIndex", static: false, private: false, access: { has: obj => "lineIndex" in obj, get: obj => obj.lineIndex, set: (obj, value) => { obj.lineIndex = value; } }, metadata: _metadata }, _lineIndex_initializers, _lineIndex_extraInitializers);
            __esDecorate(this, null, _selected_decorators, { kind: "accessor", name: "selected", static: false, private: false, access: { has: obj => "selected" in obj, get: obj => obj.selected, set: (obj, value) => { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _selected_extraInitializers);
            __esDecorate(this, null, _startOffset_decorators, { kind: "accessor", name: "startOffset", static: false, private: false, access: { has: obj => "startOffset" in obj, get: obj => obj.startOffset, set: (obj, value) => { obj.startOffset = value; } }, metadata: _metadata }, _startOffset_initializers, _startOffset_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VElement = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        createRenderRoot() {
            return this;
        }
        render() {
            const inlineEditor = getInlineEditorInsideRoot(this);
            if (!inlineEditor) {
                return nothing;
            }
            const attributeRenderer = inlineEditor.attributeService.attributeRenderer;
            const renderProps = {
                delta: this.delta,
                selected: this.selected,
                startOffset: this.startOffset,
                endOffset: this.endOffset,
                lineIndex: this.lineIndex,
                editor: inlineEditor,
            };
            const isEmbed = inlineEditor.isEmbed(this.delta);
            if (isEmbed) {
                if (this.delta.insert.length !== 1) {
                    throw new LumenSuiteError(ErrorCode.InlineEditorError, `The length of embed node should only be 1.
          This seems to be an internal issue with inline editor.
          Please go to https://github.com/toeverything/lumensuite/issues
          to report it.`);
                }
                return html `<span
        data-v-embed="true"
        data-v-element="true"
        contenteditable="false"
        style=${styleMap({ userSelect: 'none' })}
        >${attributeRenderer(renderProps)}</span
      >`;
            }
            // we need to avoid \n appearing before and after the span element, which will
            // cause the unexpected space
            return html `<span data-v-element="true"
      >${attributeRenderer(renderProps)}</span
    >`;
        }
        #delta_accessor_storage = __runInitializers(this, _delta_initializers, {
            insert: ZERO_WIDTH_SPACE,
        });
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        #endOffset_accessor_storage = (__runInitializers(this, _delta_extraInitializers), __runInitializers(this, _endOffset_initializers, void 0));
        get endOffset() { return this.#endOffset_accessor_storage; }
        set endOffset(value) { this.#endOffset_accessor_storage = value; }
        #lineIndex_accessor_storage = (__runInitializers(this, _endOffset_extraInitializers), __runInitializers(this, _lineIndex_initializers, void 0));
        get lineIndex() { return this.#lineIndex_accessor_storage; }
        set lineIndex(value) { this.#lineIndex_accessor_storage = value; }
        #selected_accessor_storage = (__runInitializers(this, _lineIndex_extraInitializers), __runInitializers(this, _selected_initializers, false));
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        #startOffset_accessor_storage = (__runInitializers(this, _selected_extraInitializers), __runInitializers(this, _startOffset_initializers, void 0));
        get startOffset() { return this.#startOffset_accessor_storage; }
        set startOffset(value) { this.#startOffset_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _startOffset_extraInitializers);
        }
    };
    return VElement = _classThis;
})();
export { VElement };
//# sourceMappingURL=v-element.js.map