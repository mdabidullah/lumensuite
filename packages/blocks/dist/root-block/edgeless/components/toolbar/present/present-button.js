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
import { FrameNavigatorIcon } from '@lumensuite/affine-components/icons';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
let EdgelessPresentButton = (() => {
    let _classDecorators = [customElement('edgeless-present-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = QuickToolMixin(EdgelessToolbarToolMixin(LitElement));
    var EdgelessPresentButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.type = 'frameNavigator';
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessPresentButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
    }
    .edgeless-note-button {
      display: flex;
      position: relative;
    }
    .arrow-up-icon {
      position: absolute;
      top: 4px;
      right: 2px;
      font-size: 0;
    }
  `; }
        render() {
            return html `<edgeless-tool-icon-button
    class="edgeless-frame-navigator-button"
    .tooltip=${'Present'}
    .tooltipOffset=${17}
    .iconContainerPadding=${6}
    @click=${() => {
                this.setEdgelessTool({
                    type: 'frameNavigator',
                });
            }}
  >
    ${FrameNavigatorIcon}
    </edgeless-tool-icon-button>
  </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessPresentButton = _classThis;
})();
export { EdgelessPresentButton };
//# sourceMappingURL=present-button.js.map