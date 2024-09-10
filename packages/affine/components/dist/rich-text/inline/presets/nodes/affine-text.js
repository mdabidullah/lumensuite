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
import { ShadowlessElement } from '@blocksuite/block-std';
import { ZERO_WIDTH_SPACE } from '@blocksuite/inline';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
export function affineTextStyles(props, override) {
    let textDecorations = '';
    if (props.underline) {
        textDecorations += 'underline';
    }
    if (props.strike) {
        textDecorations += ' line-through';
    }
    let inlineCodeStyle = {};
    if (props.code) {
        inlineCodeStyle = {
            'font-family': 'var(--affine-font-code-family)',
            background: 'var(--affine-background-code-block)',
            border: '1px solid var(--affine-border-color)',
            'border-radius': '4px',
            color: 'var(--affine-text-primary-color)',
            'font-variant-ligatures': 'none',
            'line-height': 'auto',
        };
    }
    return styleMap({
        'font-weight': props.bold ? 'bolder' : 'inherit',
        'font-style': props.italic ? 'italic' : 'normal',
        'background-color': props.background ? props.background : undefined,
        color: props.color ? props.color : undefined,
        'text-decoration': textDecorations.length > 0 ? textDecorations : 'none',
        ...inlineCodeStyle,
        ...override,
    });
}
let AffineText = (() => {
    let _classDecorators = [customElement('affine-text')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    var AffineText = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineText = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            const style = this.delta.attributes
                ? affineTextStyles(this.delta.attributes)
                : styleMap({});
            // we need to avoid \n appearing before and after the span element, which will
            // cause the unexpected space
            if (this.delta.attributes?.code) {
                return html `<code style=${style}
        ><v-text .str=${this.delta.insert}></v-text
      ></code>`;
            }
            // we need to avoid \n appearing before and after the span element, which will
            // cause the unexpected space
            return html `<span style=${style}
      ><v-text .str=${this.delta.insert}></v-text
    ></span>`;
        }
        #delta_accessor_storage = __runInitializers(this, _delta_initializers, {
            insert: ZERO_WIDTH_SPACE,
        });
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _delta_extraInitializers);
        }
    };
    return AffineText = _classThis;
})();
export { AffineText };
//# sourceMappingURL=affine-text.js.map