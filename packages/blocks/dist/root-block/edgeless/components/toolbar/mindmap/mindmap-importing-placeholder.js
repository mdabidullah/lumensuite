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
import { LightLoadingIcon } from '@lumensuite/affine-components/icons';
import { ShadowlessElement } from '@lumensuite/block-std';
import { cssVarV2 } from '@toeverything/theme/v2';
import { css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { importMindMapIcon } from './icons.js';
let MindMapPlaceholder = (() => {
    let _classDecorators = [customElement('mindmap-import-placeholder')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    var MindMapPlaceholder = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MindMapPlaceholder = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    mindmap-import-placeholder {
      display: flex;
      flex-direction: column;

      padding: 28px 12px 12px;
      box-sizing: border-box;
      width: 200px;
      height: 122px;

      border-radius: 12px;
      gap: 12px;

      background-color: ${unsafeCSS(cssVarV2('layer/background/secondary'))};
      border: 1px solid ${unsafeCSS(cssVarV2('layer/insideBorder/border'))};
      color: ${unsafeCSS(cssVarV2('text/placeholder'))};

      box-shadow: 0px 0px 4px 0px rgba(66, 65, 73, 0.14);
    }

    mindmap-import-placeholder .preview-icon {
      text-align: center;
    }

    mindmap-import-placeholder .description {
      display: flex;
      gap: 8px;

      color: ${unsafeCSS(cssVarV2('text/placeholder'))};
      font-size: 14px;
      line-height: 22px;

      align-items: center;
    }
  `; }
        render() {
            return html `<div class="placeholder-container">
      <div class="preview-icon">${importMindMapIcon}</div>
      <div class="description">
        ${LightLoadingIcon}
        <span>Importing mind map...</span>
      </div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return MindMapPlaceholder = _classThis;
})();
export { MindMapPlaceholder };
//# sourceMappingURL=mindmap-importing-placeholder.js.map