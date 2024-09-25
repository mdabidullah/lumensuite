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
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import { popMenu } from '@lumensuite/affine-components/context-menu';
import { toast } from '@lumensuite/affine-components/toast';
import { DatabaseBlockSchema } from '@lumensuite/affine-model';
import { NOTE_SELECTOR } from '@lumensuite/affine-shared/consts';
import { RANGE_SYNC_EXCLUDE_ATTR } from '@lumensuite/block-std';
import { DatabaseSelection, DataView, dataViewCommonStyle, defineUniComponent, renderUniLit, } from '@lumensuite/data-view';
import { widgetPresets } from '@lumensuite/data-view/widget-presets';
import { Rect } from '@lumensuite/global/utils';
import { CopyIcon, DeleteIcon, MoreHorizontalIcon, } from '@blocksuite/icons/lit';
import { Slice } from '@lumensuite/store';
import { computed } from '@lit-labs/preact-signals';
import { css, html, nothing, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DragIndicator } from '../_common/components/index.js';
import { AffineDragHandleWidget, EdgelessRootBlockComponent, } from '../root-block/index.js';
import { captureEventTarget, getDropResult, } from '../root-block/widgets/drag-handle/utils.js';
import { AFFINE_INNER_MODAL_WIDGET } from '../root-block/widgets/inner-modal/inner-modal.js';
import './components/title/index.js';
import { DatabaseBlockDataSource } from './data-source.js';
let DatabaseBlockComponent = (() => {
    let _classDecorators = [customElement('affine-database')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = CaptionedBlockComponent;
    var DatabaseBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._clickDatabaseOps = (e) => {
                const options = this.optionsConfig.configure(this.model, {
                    input: {
                        initValue: this.model.title.toString(),
                        placeholder: 'Untitled',
                        onComplete: text => {
                            this.model.title.replace(0, this.model.title.length, text);
                        },
                    },
                    items: [
                        {
                            type: 'action',
                            icon: CopyIcon(),
                            name: 'Copy',
                            select: () => {
                                const slice = Slice.fromModels(this.doc, [this.model]);
                                this.std.clipboard
                                    .copySlice(slice)
                                    .then(() => {
                                    toast(this.host, 'Copied to clipboard');
                                })
                                    .catch(console.error);
                            },
                        },
                        {
                            type: 'group',
                            name: '',
                            children: () => [
                                {
                                    type: 'action',
                                    icon: DeleteIcon(),
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
                });
                popMenu(e.currentTarget, { options });
            };
            this.dataView = new DataView();
            this.renderTitle = (dataViewMethod) => {
                const addRow = () => dataViewMethod.addRow?.('start');
                return html ` <affine-database-title
      style="overflow: hidden"
      .titleText="${this.model.title}"
      .readonly="${this.doc.readonly}"
      .onPressEnterKey="${addRow}"
    ></affine-database-title>`;
            };
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
            ${this.renderTitle(props.viewMethods)} ${this.renderDatabaseOps()}
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
            this.indicator = new DragIndicator();
            this.onDrag = (evt, id) => {
                const result = getDropResult(evt);
                if (result && result.rect) {
                    document.body.append(this.indicator);
                    this.indicator.rect = Rect.fromLWTH(result.rect.left, result.rect.width, result.rect.top, result.rect.height);
                    return () => {
                        this.indicator.remove();
                        const model = this.doc.getBlock(id)?.model;
                        const target = this.doc.getBlock(result.dropBlockId)?.model ?? null;
                        let parent = this.doc.getParent(result.dropBlockId);
                        const shouldInsertIn = result.dropType === 'in';
                        if (shouldInsertIn) {
                            parent = target;
                        }
                        if (model && target && parent) {
                            if (shouldInsertIn) {
                                this.doc.moveBlocks([model], parent);
                            }
                            else {
                                this.doc.moveBlocks([model], parent, target, result.dropType === 'before');
                            }
                        }
                    };
                }
                this.indicator.remove();
                return () => { };
            };
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
            this.viewSelection$ = computed(() => {
                const databaseSelection = this.selection.value.find((selection) => {
                    if (selection.blockId !== this.blockId) {
                        return false;
                    }
                    return selection instanceof DatabaseSelection;
                });
                return databaseSelection?.viewSelection;
            });
            this.#useZeroWidth_accessor_storage = true;
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseBlockComponent = _classThis = _classDescriptor.value;
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
                this._dataSource = new DatabaseBlockDataSource(this.host, {
                    pageId: this.host.doc.id,
                    blockId: this.model.id,
                });
            }
            return this._dataSource;
        }
        get innerModalWidget() {
            return this.rootComponent.widgetComponents[AFFINE_INNER_MODAL_WIDGET];
        }
        get optionsConfig() {
            return {
                configure: (_model, options) => options,
                ...this.std.getConfig('affine:page')?.databaseOptions,
            };
        }
        get topContenteditableElement() {
            if (this.rootComponent instanceof EdgelessRootBlockComponent) {
                const note = this.closest(NOTE_SELECTOR);
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
      ${MoreHorizontalIcon()}
    </div>`;
        }
        connectedCallback() {
            super.connectedCallback();
            this.setAttribute(RANGE_SYNC_EXCLUDE_ATTR, 'true');
            let canDrop = false;
            this.disposables.add(AffineDragHandleWidget.registerOption({
                flavour: DatabaseBlockSchema.model.flavour,
                onDragMove: state => {
                    const target = captureEventTarget(state.raw.target);
                    const view = this.view;
                    if (view && target instanceof HTMLElement && this.contains(target)) {
                        canDrop = view.showIndicator?.(state.raw) ?? false;
                        return false;
                    }
                    if (canDrop) {
                        view?.hideIndicator?.();
                        canDrop = false;
                    }
                    return false;
                },
                onDragEnd: ({ state, draggingElements }) => {
                    const target = state.raw.target;
                    const view = this.view;
                    if (canDrop &&
                        view &&
                        view.moveTo &&
                        target instanceof HTMLElement &&
                        this.parentElement?.contains(target)) {
                        const blocks = draggingElements.map(v => v.model);
                        this.doc.moveBlocks(blocks, this.model);
                        blocks.forEach(model => {
                            view.moveTo?.(model.id, state.raw);
                        });
                        view.hideIndicator?.();
                        return false;
                    }
                    if (canDrop) {
                        view?.hideIndicator?.();
                        canDrop = false;
                    }
                    return false;
                },
            }));
        }
        renderBlock() {
            const peekViewService = this.getRootService().peekViewService;
            return html `
      <div
        contenteditable="false"
        style="position: relative;background-color: var(--affine-background-primary-color);border-radius: 4px"
      >
        ${this.dataView.render({
                bindHotkey: this._bindHotkey,
                handleEvent: this._handleEvent,
                selection$: this.viewSelection$,
                setSelection: this.setSelection,
                dataSource: this.dataSource,
                headerWidget: this.headerWidget,
                onDrag: this.onDrag,
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
        #useZeroWidth_accessor_storage;
        get useZeroWidth() { return this.#useZeroWidth_accessor_storage; }
        set useZeroWidth(value) { this.#useZeroWidth_accessor_storage = value; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseBlockComponent = _classThis;
})();
export { DatabaseBlockComponent };
//# sourceMappingURL=database-block.js.map