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
import { LinkIcon } from '@lumensuite/affine-components/icons';
import { TelemetryProvider } from '@lumensuite/affine-shared/services';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
let EdgelessLinkToolButton = (() => {
    let _classDecorators = [customElement('edgeless-link-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = QuickToolMixin(LitElement);
    var EdgelessLinkToolButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.type = 'default';
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessLinkToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .link-icon,
    .link-icon > svg {
      width: 24px;
      height: 24px;
    }
  `; }
        _onClick() {
            const { insertedLinkType } = this.edgeless.std.command.exec('insertLinkByQuickSearch');
            insertedLinkType
                ?.then(type => {
                if (!type)
                    return;
                this.edgeless.std
                    .getOptional(TelemetryProvider)
                    ?.track('CanvasElementAdded', {
                    control: 'toolbar:general',
                    page: 'whiteboard editor',
                    module: 'toolbar',
                    segment: 'toolbar',
                    type: type.flavour?.split(':')[1],
                });
                if (type.isNewDoc) {
                    this.edgeless.std
                        .getOptional(TelemetryProvider)
                        ?.track('DocCreated', {
                        control: 'toolbar:general',
                        page: 'whiteboard editor',
                        module: 'edgeless toolbar',
                        segment: 'whiteboard',
                        type: type.flavour?.split(':')[1],
                    });
                    this.edgeless.std
                        .getOptional(TelemetryProvider)
                        ?.track('LinkedDocCreated', {
                        control: 'links',
                        page: 'whiteboard editor',
                        module: 'edgeless toolbar',
                        segment: 'whiteboard',
                        type: type.flavour?.split(':')[1],
                        other: 'new doc',
                    });
                }
                else {
                    this.edgeless.std
                        .getOptional(TelemetryProvider)
                        ?.track('LinkedDocCreated', {
                        control: 'links',
                        page: 'whiteboard editor',
                        module: 'edgeless toolbar',
                        segment: 'whiteboard',
                        type: type.flavour?.split(':')[1],
                        other: 'existing doc',
                    });
                }
            })
                .catch(console.error);
        }
        render() {
            return html `<edgeless-tool-icon-button
      .iconContainerPadding="${6}"
      .tooltip="${getTooltipWithShortcut('Link', '@')}"
      .tooltipOffset=${17}
      class="edgeless-link-tool-button"
      @click=${this._onClick}
    >
      <span class="link-icon">${LinkIcon}</span>
    </edgeless-tool-icon-button>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessLinkToolButton = _classThis;
})();
export { EdgelessLinkToolButton };
//# sourceMappingURL=link-tool-button.js.map