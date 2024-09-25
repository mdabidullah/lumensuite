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
import { HoverController } from '@lumensuite/affine-components/hover';
import { CaptionIcon, CenterPeekIcon, EdgelessModeIcon, MoreVerticalIcon, OpenIcon, SmallArrowDownIcon, } from '@lumensuite/affine-components/icons';
import { isPeekable, peek } from '@lumensuite/affine-components/peek';
import { cloneGroups, renderGroups, renderToolbarSeparator, } from '@lumensuite/affine-components/toolbar';
import { WidgetComponent } from '@lumensuite/block-std';
import { offset, shift } from '@floating-ui/dom';
import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';
import { PAGE_HEADER_HEIGHT } from '../../../_common/consts.js';
import { getMoreMenuConfig } from '../../configs/toolbar.js';
import { BUILT_IN_GROUPS } from './config.js';
import { SurfaceRefToolbarContext } from './context.js';
export const AFFINE_SURFACE_REF_TOOLBAR = 'affine-surface-ref-toolbar';
let AffineSurfaceRefToolbar = (() => {
    let _classDecorators = [customElement(AFFINE_SURFACE_REF_TOOLBAR)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetComponent;
    var AffineSurfaceRefToolbar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._hoverController = new HoverController(this, ({ abortController }) => {
                const surfaceRefBlock = this.block;
                const selection = this.host.selection;
                const textSelection = selection.find('text');
                if (!!textSelection &&
                    (!!textSelection.to || !!textSelection.from.length)) {
                    return null;
                }
                const blockSelections = selection.filter('block');
                if (blockSelections.length > 1 ||
                    (blockSelections.length === 1 &&
                        blockSelections[0].blockId !== surfaceRefBlock.blockId)) {
                    return null;
                }
                return {
                    template: SurfaceRefToolbarOptions({
                        context: new SurfaceRefToolbarContext(this.block, abortController),
                        groups: this.moreGroups,
                    }),
                    computePosition: {
                        referenceElement: this.block,
                        placement: 'top-start',
                        middleware: [
                            offset({
                                mainAxis: 12,
                                crossAxis: 10,
                            }),
                            shift({
                                crossAxis: true,
                                padding: {
                                    top: PAGE_HEADER_HEIGHT + 12,
                                    bottom: 12,
                                    right: 12,
                                },
                            }),
                        ],
                        autoUpdate: true,
                    },
                };
            });
            /*
             * Caches the more menu items.
             * Currently only supports configuring more menu.
             */
            this.moreGroups = cloneGroups(BUILT_IN_GROUPS);
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineSurfaceRefToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        connectedCallback() {
            super.connectedCallback();
            this.moreGroups = getMoreMenuConfig(this.std).configure(this.moreGroups);
            this._hoverController.setReference(this.block);
        }
    };
    return AffineSurfaceRefToolbar = _classThis;
})();
export { AffineSurfaceRefToolbar };
function SurfaceRefToolbarOptions({ context, groups, }) {
    const { blockComponent, abortController } = context;
    const readonly = blockComponent.model.doc.readonly;
    const hasValidReference = !!blockComponent.referenceModel;
    const openMenuActions = [];
    if (hasValidReference) {
        openMenuActions.push({
            type: 'open-in-edgeless',
            label: 'Open in edgeless',
            icon: EdgelessModeIcon,
            action: () => blockComponent.viewInEdgeless(),
            disabled: readonly,
        });
        if (isPeekable(blockComponent)) {
            openMenuActions.push({
                type: 'open-in-center-peek',
                label: 'Open in center peek',
                icon: CenterPeekIcon,
                action: () => peek(blockComponent),
            });
        }
    }
    const moreMenuActions = renderGroups(groups, context);
    const buttons = [
        openMenuActions.length
            ? html `
          <editor-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <editor-icon-button
                aria-label="Open doc"
                .justify=${'space-between'}
                .labelHeight=${'20px'}
              >
                ${OpenIcon}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <div data-size="large" data-orientation="vertical">
              ${repeat(openMenuActions, button => button.label, ({ label, icon, action, disabled }) => html `
                  <editor-menu-action
                    aria-label=${ifDefined(label)}
                    ?disabled=${disabled}
                    @click=${action}
                  >
                    ${icon}<span class="label">${label}</span>
                  </editor-menu-action>
                `)}
            </div>
          </editor-menu-button>
        `
            : nothing,
        readonly
            ? nothing
            : html `
          <editor-icon-button
            aria-label="Caption"
            @click=${() => {
                abortController.abort();
                blockComponent.captionElement.show();
            }}
          >
            ${CaptionIcon}
          </editor-icon-button>
        `,
        html `
      <editor-menu-button
        .contentPadding=${'8px'}
        .button=${html `
          <editor-icon-button aria-label="More" .tooltip=${'More'}>
            ${MoreVerticalIcon}
          </editor-icon-button>
        `}
      >
        <div data-size="large" data-orientation="vertical">
          ${moreMenuActions}
        </div>
      </editor-menu-button>
    `,
    ];
    return html `
    <editor-toolbar class="surface-ref-toolbar-container">
      ${join(buttons.filter(button => button !== nothing), renderToolbarSeparator)}
    </editor-toolbar>
  `;
}
//# sourceMappingURL=surface-ref-toolbar.js.map