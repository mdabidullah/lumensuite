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
import { focusTextModel } from '@lumensuite/affine-components/rich-text';
import { stopPropagation } from '@lumensuite/affine-shared/utils';
import { ZERO_WIDTH_SPACE } from '@lumensuite/inline/consts';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let BlockZeroWidth = (() => {
    let _classDecorators = [customElement('block-zero-width')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    var BlockZeroWidth = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockZeroWidth = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .block-zero-width {
      position: absolute;
      bottom: -10px;
      width: 100%;
      cursor: text;
      z-index: 1;
    }
  `; }
        connectedCallback() {
            super.connectedCallback();
        }
        handleClick(e) {
            stopPropagation(e);
            if (this.block.doc.readonly)
                return;
            const nextBlock = this.block.model.doc.getNext(this.block.model);
            if (nextBlock?.flavour !== 'affine:paragraph') {
                const [paragraphId] = this.block.doc.addSiblingBlocks(this.block.model, [
                    { flavour: 'affine:paragraph' },
                ]);
                focusTextModel(this.block.host.std, paragraphId);
            }
        }
        render() {
            return html `<div class="block-zero-width" @click=${this.handleClick}>
      <span>${ZERO_WIDTH_SPACE}</span>
    </div>`;
        }
        #block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _block_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BlockZeroWidth = _classThis;
})();
export { BlockZeroWidth };
//# sourceMappingURL=block-zero-width.js.map