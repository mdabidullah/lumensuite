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
import { ShapeType } from '@lumensuite/affine-model';
import { SignalWatcher } from '@lumensuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ShapeToolController } from '../../../tools/shape-tool.js';
import '../../buttons/toolbar-button.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
import './shape-draggable.js';
import './shape-menu.js';
let EdgelessShapeToolButton = (() => {
    let _classDecorators = [customElement('edgeless-shape-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(SignalWatcher(LitElement));
    var EdgelessShapeToolButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._handleShapeClick = (shape) => {
                this.setEdgelessTool({
                    type: this.type,
                    shapeName: shape.name,
                });
                if (!this.popper)
                    this._toggleMenu();
            };
            this._handleWrapperClick = () => {
                if (this.tryDisposePopper())
                    return;
                this.setEdgelessTool({
                    type: this.type,
                    shapeName: ShapeType.Rect,
                });
                if (!this.popper)
                    this._toggleMenu();
            };
            this.type = 'shape';
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessShapeToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    edgeless-toolbar-button,
    .shapes {
      width: 100%;
      height: 64px;
    }
  `; }
        _toggleMenu() {
            this.createPopper('edgeless-shape-menu', this, {
                setProps: ele => {
                    ele.edgeless = this.edgeless;
                    ele.onChange = (shapeName) => {
                        this.setEdgelessTool({
                            type: this.type,
                            shapeName,
                        });
                        this._updateOverlay();
                    };
                },
            });
        }
        _updateOverlay() {
            const controller = this.edgeless.tools.currentController;
            if (controller instanceof ShapeToolController) {
                controller.createOverlay();
            }
        }
        render() {
            const { active } = this;
            return html `
      <edgeless-toolbar-button
        class="edgeless-shape-button"
        .tooltip=${this.popper ? '' : getTooltipWithShortcut('Shape', 'S')}
        .tooltipOffset=${5}
        .active=${active}
      >
        <edgeless-toolbar-shape-draggable
          .edgeless=${this.edgeless}
          .toolbarContainer=${this.toolbarContainer}
          class="shapes"
          @click=${this._handleWrapperClick}
          .onShapeClick=${this._handleShapeClick}
        >
        </edgeless-toolbar-shape-draggable>
      </edgeless-toolbar-button>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessShapeToolButton = _classThis;
})();
export { EdgelessShapeToolButton };
//# sourceMappingURL=shape-tool-button.js.map