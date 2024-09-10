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
import { ArrowUpIcon, ConnectorCWithArrowIcon, ConnectorLWithArrowIcon, ConnectorXWithArrowIcon, } from '@blocksuite/affine-components/icons';
import { ConnectorMode, getConnectorModeName } from '@blocksuite/affine-model';
import { SignalWatcher } from '@blocksuite/block-std';
import { computed } from '@lit-labs/preact-signals';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import '../../buttons/toolbar-button.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
import './connector-menu.js';
const IcomMap = {
    [ConnectorMode.Straight]: ConnectorLWithArrowIcon,
    [ConnectorMode.Orthogonal]: ConnectorXWithArrowIcon,
    [ConnectorMode.Curve]: ConnectorCWithArrowIcon,
};
let EdgelessConnectorToolButton = (() => {
    let _classDecorators = [customElement('edgeless-connector-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = QuickToolMixin(SignalWatcher(LitElement));
    var EdgelessConnectorToolButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._mode$ = computed(() => {
                return this.edgeless.service.editPropsStore.lastProps$.value.connector.mode;
            });
            this.type = 'connector';
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessConnectorToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
    }
    .edgeless-connector-button {
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
        _toggleMenu() {
            if (this.tryDisposePopper())
                return;
            const menu = this.createPopper('edgeless-connector-menu', this);
            menu.element.edgeless = this.edgeless;
            menu.element.onChange = (props) => {
                this.edgeless.service.editPropsStore.recordLastProps('connector', props);
                this.setEdgelessTool({
                    type: this.type,
                    mode: this._mode$.value,
                });
            };
        }
        render() {
            const { active } = this;
            const mode = this._mode$.value;
            const arrowColor = active ? 'currentColor' : 'var(--affine-icon-secondary)';
            return html `
      <edgeless-tool-icon-button
        .tooltip=${this.popper
                ? ''
                : getTooltipWithShortcut(getConnectorModeName(mode), 'C')}
        .tooltipOffset=${17}
        .active=${active}
        .iconContainerPadding=${6}
        class="edgeless-connector-button"
        @click=${() => {
                // don't update tool before toggling menu
                this._toggleMenu();
                this.edgeless.tools.setEdgelessTool({
                    type: 'connector',
                    mode: mode,
                });
            }}
      >
        ${IcomMap[mode]}
        <span class="arrow-up-icon" style=${styleMap({ color: arrowColor })}>
          ${ArrowUpIcon}
        </span>
      </edgeless-tool-icon-button>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessConnectorToolButton = _classThis;
})();
export { EdgelessConnectorToolButton };
//# sourceMappingURL=connector-tool-button.js.map