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
import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import { popMenu } from '@blocksuite/affine-components/context-menu';
import { CopyIcon, DeleteIcon, MoreHorizontalIcon, } from '@blocksuite/affine-components/icons';
import { RANGE_SYNC_EXCLUDE_ATTR } from '@blocksuite/block-std';
import { DatabaseSelection, DataView, dataViewCommonStyle, defineUniComponent, renderUniLit, } from '@blocksuite/data-view';
import { widgetPresets } from '@blocksuite/data-view/widget-presets';
import { Slice } from '@blocksuite/store';
import { computed } from '@lit-labs/preact-signals';
import { css, nothing, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { EdgelessRootBlockComponent, } from '../root-block/index.js';
import { AFFINE_INNER_MODAL_WIDGET } from '../root-block/widgets/inner-modal/inner-modal.js';
import { BlockQueryDataSource } from './data-source.js';
let DataViewBlockComponent = (() => {
    let _classDecorators = [customElement('affine-data-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = CaptionedBlockComponent;
    var DataViewBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._clickDatabaseOps = (e) => {
                popMenu(e.currentTarget, {
                    options: {
                        input: {
                            initValue: this.model.title,
                            placeholder: 'Untitled',
                            onComplete: text => {
                                this.model.title = text;
                            },
                        },
                        items: [
                            {
                                type: 'action',
                                icon: CopyIcon,
                                name: 'Copy',
                                select: () => {
                                    const slice = Slice.fromModels(this.doc, [this.model]);
                                    this.std.clipboard.copySlice(slice).catch(console.error);
                                },
                            },
                            // {
                            //   type: 'action',
                            //   icon: DuplicateIcon,
                            //   name: 'Duplicate',
                            //   select: () => {
                            //   },
                            // },
                            {
                                type: 'group',
                                name: '',
                                children: () => [
                                    {
                                        type: 'action',
                                        icon: DeleteIcon,
                                        class: 'delete-item',
                                        name: 'Delete Database',
                                        select: () => {
                                            this.model.children.slice().forEach(block => {
                                                this.doc.deleteBlock(block);
                                            });
                                            this.doc.deleteBlock(this.model);
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                });
            };
            this.dataView = new DataView();
            this._bindHotkey = hotkeys => {
                return {
                    dispose: this.host.event.bindHotkey(hotkeys, {
                        blockId: this.topContenteditableElement?.blockId ?? this.blockId,
                    }),
                };
            };
            this._handleEvent = (name, handler) => {
                return {
                    dispose: this.host.event.add(name, handler, {
                        blockId: this.blockId,
                    }),
                };
            };
            this.getRootService = () => {
                return this.std.getService('affine:page');
            };
            this.headerWidget = defineUniComponent((props) => {
                return html `
        <div style="margin-bottom: 16px;display:flex;flex-direction: column">
          <div style="display:flex;gap:8px;padding: 0 6px;margin-bottom: 8px;">
            <div>${this.model.title}</div>
            ${this.renderDatabaseOps()}
          </div>
          <div
            style="display:flex;align-items:center;justify-content: space-between;gap: 12px"
            class="database-header-bar"
          >
            <div style="flex:1">
              ${renderUniLit(widgetPresets.viewBar, props)}
            </div>
            ${renderUniLit(this.toolsWidget, props)}
          </div>
          ${renderUniLit(widgetPresets.filterBar, props)}
        </div>
      `;
            });
            this.selection$ = computed(() => {
                const databaseSelection = this.selection.value.find((selection) => {
                    if (selection.blockId !== this.blockId) {
                        return false;
                    }
                    return selection instanceof DatabaseSelection;
                });
                return databaseSelection?.viewSelection;
            });
            this.setSelection = (selection) => {
                this.selection.setGroup('note', selection
                    ? [
                        new DatabaseSelection({
                            blockId: this.blockId,
                            viewSelection: selection,
                        }),
                    ]
                    : []);
            };
            this.toolsWidget = widgetPresets.createTools({
                table: [
                    widgetPresets.tools.filter,
                    widgetPresets.tools.search,
                    widgetPresets.tools.viewOptions,
                    widgetPresets.tools.tableAddRow,
                ],
                kanban: [
                    widgetPresets.tools.filter,
                    widgetPresets.tools.search,
                    widgetPresets.tools.viewOptions,
                ],
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    ${unsafeCSS(dataViewCommonStyle('affine-database'))}
    affine-database {
      display: block;
      border-radius: 8px;
      background-color: var(--affine-background-primary-color);
      padding: 8px;
      margin: 8px -8px -8px;
    }

    .database-block-selected {
      background-color: var(--affine-hover-color);
      border-radius: 4px;
    }

    .database-ops {
      margin-top: 4px;
      padding: 2px;
      border-radius: 4px;
      display: flex;
      cursor: pointer;
    }

    .database-ops svg {
      width: 16px;
      height: 16px;
      color: var(--affine-icon-color);
    }

    .database-ops:hover {
      background-color: var(--affine-hover-color);
    }

    @media print {
      .database-ops {
        display: none;
      }

      .database-header-bar {
        display: none !important;
      }
    }
  `; }
        get dataSource() {
            if (!this._dataSource) {
                this._dataSource = new BlockQueryDataSource(this.host, this.model, {
                    type: 'todo',
                });
            }
            return this._dataSource;
        }
        get innerModalWidget() {
            return this.rootComponent?.widgetComponents[AFFINE_INNER_MODAL_WIDGET];
        }
        get topContenteditableElement() {
            if (this.rootComponent instanceof EdgelessRootBlockComponent) {
                const note = this.closest('affine-note');
                return note;
            }
            return this.rootComponent;
        }
        get view() {
            return this.dataView.expose;
        }
        renderDatabaseOps() {
            if (this.doc.readonly) {
                return nothing;
            }
            return html ` <div class="database-ops" @click="${this._clickDatabaseOps}">
      ${MoreHorizontalIcon}
    </div>`;
        }
        connectedCallback() {
            super.connectedCallback();
            this.setAttribute(RANGE_SYNC_EXCLUDE_ATTR, 'true');
        }
        renderBlock() {
            const peekViewService = this.getRootService().peekViewService;
            return html `
      <div contenteditable="false" style="position: relative">
        ${this.dataView.render({
                bindHotkey: this._bindHotkey,
                handleEvent: this._handleEvent,
                selection$: this.selection$,
                setSelection: this.setSelection,
                dataSource: this.dataSource,
                headerWidget: this.headerWidget,
                std: this.std,
                detailPanelConfig: {
                    openDetailPanel: peekViewService
                        ? (target, template) => peekViewService.peek(target, template)
                        : undefined,
                    target: () => this.innerModalWidget.target,
                },
            })}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewBlockComponent = _classThis;
})();
export { DataViewBlockComponent };
//# sourceMappingURL=data-view-block.js.map