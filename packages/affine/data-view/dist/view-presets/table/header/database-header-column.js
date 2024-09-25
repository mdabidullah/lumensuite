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
import { popMenu, } from '@lumensuite/affine-components/context-menu';
import { insertPositionToIndex, } from '@lumensuite/affine-shared/utils';
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@lumensuite/block-std';
import { assertExists } from '@lumensuite/global/utils';
import { DeleteIcon, DuplicateIcon, InsertLeftIcon, InsertRightIcon, MoveLeftIcon, MoveRightIcon, } from '@blocksuite/icons/lit';
import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
import { numberFormats } from '../../../column-presets/number/utils/formats.js';
import { inputConfig, typeConfig } from '../../../core/common/column-menu.js';
import { renderUniLit } from '../../../core/index.js';
import { startDrag } from '../../../core/utils/drag.js';
import { autoScrollOnBoundary } from '../../../core/utils/frame-loop.js';
import { getResultInRange } from '../../../core/utils/utils.js';
import { DEFAULT_COLUMN_TITLE_HEIGHT } from '../consts.js';
import { getTableContainer } from '../types.js';
import { DataViewColumnPreview } from './column-renderer.js';
import './number-format-bar.js';
import { getTableGroupRects, getVerticalIndicator, startDragWidthAdjustmentBar, } from './vertical-indicator.js';
let DatabaseHeaderColumn = (() => {
    let _classDecorators = [customElement('affine-database-header-column')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _grabStatus_decorators;
    let _grabStatus_initializers = [];
    let _grabStatus_extraInitializers = [];
    let _tableViewManager_decorators;
    let _tableViewManager_initializers = [];
    let _tableViewManager_extraInitializers = [];
    var DatabaseHeaderColumn = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _column_decorators = [property({ attribute: false })];
            _grabStatus_decorators = [property({ attribute: false })];
            _tableViewManager_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _grabStatus_decorators, { kind: "accessor", name: "grabStatus", static: false, private: false, access: { has: obj => "grabStatus" in obj, get: obj => obj.grabStatus, set: (obj, value) => { obj.grabStatus = value; } }, metadata: _metadata }, _grabStatus_initializers, _grabStatus_extraInitializers);
            __esDecorate(this, null, _tableViewManager_decorators, { kind: "accessor", name: "tableViewManager", static: false, private: false, access: { has: obj => "tableViewManager" in obj, get: obj => obj.tableViewManager, set: (obj, value) => { obj.tableViewManager = value; } }, metadata: _metadata }, _tableViewManager_initializers, _tableViewManager_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseHeaderColumn = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-header-column {
      display: flex;
    }

    .affine-database-header-column-grabbing * {
      cursor: grabbing;
    }
  `; }
        get readonly() {
            return this.tableViewManager.readonly$.value;
        }
        popMenu(ele) {
            const enableNumberFormatting = this.tableViewManager.featureFlags$.value.enable_number_formatting;
            popMenu(ele ?? this, {
                options: {
                    input: inputConfig(this.column),
                    items: [
                        {
                            type: 'group',
                            name: 'Column Prop Group ',
                            children: () => [
                                typeConfig(this.column),
                                // Number format begin
                                ...(enableNumberFormatting
                                    ? [
                                        {
                                            type: 'sub-menu',
                                            name: 'Number Format',
                                            hide: () => !this.column.updateData ||
                                                this.column.type$.value !== 'number',
                                            options: {
                                                input: {
                                                    search: true,
                                                },
                                                items: [
                                                    numberFormatConfig(this.column),
                                                    ...numberFormats.map(format => {
                                                        const data = this.column.data$.value;
                                                        return {
                                                            type: 'action',
                                                            isSelected: data.format === format.type,
                                                            icon: html `<span
                                style="font-size: var(--affine-font-base); scale: 1.2;"
                                >${format.symbol}</span
                              >`,
                                                            name: format.label,
                                                            select: () => {
                                                                if (data.format === format.type)
                                                                    return;
                                                                this.column.updateData(() => ({
                                                                    format: format.type,
                                                                }));
                                                            },
                                                        };
                                                    }),
                                                ],
                                            },
                                        },
                                    ]
                                    : []),
                                // Number format end
                            ],
                        },
                        {
                            type: 'action',
                            name: 'Duplicate Column',
                            icon: DuplicateIcon(),
                            hide: () => !this.column.duplicate || this.column.type$.value === 'title',
                            select: () => {
                                this.column.duplicate?.();
                            },
                        },
                        {
                            type: 'action',
                            name: 'Insert Left Column',
                            icon: InsertLeftIcon(),
                            select: () => {
                                this.tableViewManager.columnAdd({
                                    id: this.column.id,
                                    before: true,
                                });
                                Promise.resolve()
                                    .then(() => {
                                    const pre = this.previousElementSibling;
                                    if (pre instanceof DatabaseHeaderColumn) {
                                        pre.editTitle();
                                        pre.scrollIntoView({ inline: 'nearest', block: 'nearest' });
                                    }
                                })
                                    .catch(console.error);
                            },
                        },
                        {
                            type: 'action',
                            name: 'Insert Right Column',
                            icon: InsertRightIcon(),
                            select: () => {
                                this.tableViewManager.columnAdd({
                                    id: this.column.id,
                                    before: false,
                                });
                                Promise.resolve()
                                    .then(() => {
                                    const next = this.nextElementSibling;
                                    if (next instanceof DatabaseHeaderColumn) {
                                        next.editTitle();
                                        next.scrollIntoView({
                                            inline: 'nearest',
                                            block: 'nearest',
                                        });
                                    }
                                })
                                    .catch(console.error);
                            },
                        },
                        {
                            type: 'action',
                            name: 'Move Left',
                            icon: MoveLeftIcon(),
                            hide: () => this.column.isFirst,
                            select: () => {
                                const preId = this.tableViewManager.columnGetPreColumn(this.column.id)?.id;
                                if (!preId) {
                                    return;
                                }
                                this.tableViewManager.columnMove(this.column.id, {
                                    id: preId,
                                    before: true,
                                });
                            },
                        },
                        {
                            type: 'action',
                            name: 'Move Right',
                            icon: MoveRightIcon(),
                            hide: () => this.column.isLast,
                            select: () => {
                                const nextId = this.tableViewManager.columnGetNextColumn(this.column.id)?.id;
                                if (!nextId) {
                                    return;
                                }
                                this.tableViewManager.columnMove(this.column.id, {
                                    id: nextId,
                                    before: false,
                                });
                            },
                        },
                        {
                            type: 'group',
                            name: 'operation',
                            children: () => [
                                {
                                    type: 'action',
                                    name: 'Delete Column',
                                    icon: DeleteIcon(),
                                    hide: () => !this.column.delete || this.column.type$.value === 'title',
                                    select: () => {
                                        this.column.delete?.();
                                    },
                                    class: 'delete-item',
                                },
                            ],
                        },
                    ],
                },
            });
        }
        widthDragStart(event) {
            startDragWidthAdjustmentBar(event, getTableContainer(this), this.getBoundingClientRect().width, this.column);
        }
        connectedCallback() {
            super.connectedCallback();
            const table = this.closest('affine-database-table');
            if (table) {
                this.disposables.add(table.handleEvent('dragStart', context => {
                    if (this.tableViewManager.readonly$.value) {
                        return;
                    }
                    const event = context.get('pointerState').raw;
                    const target = event.target;
                    if (target instanceof Element) {
                        if (this.widthDragBar.value?.contains(target)) {
                            event.preventDefault();
                            this.widthDragStart(event);
                            return true;
                        }
                        if (this.contains(target)) {
                            event.preventDefault();
                            this.moveColumn(event);
                            return true;
                        }
                    }
                    return false;
                }));
            }
        }
        render() {
            const column = this.column;
            const style = styleMap({
                height: DEFAULT_COLUMN_TITLE_HEIGHT + 'px',
            });
            const classes = classMap({
                'affine-database-column-move': true,
                [this.grabStatus]: true,
            });
            return html `
      <div
        style=${style}
        class="affine-database-column-content"
        @click="${this._clickColumn}"
        @contextmenu="${this._contextMenu}"
      >
        ${this.readonly
                ? null
                : html ` <button class="${classes}">
              <div class="hover-trigger"></div>
              <div class="control-h"></div>
              <div class="control-l"></div>
              <div class="control-r"></div>
            </button>`}
        <div class="affine-database-column-text ${column.type$.value}">
          <div
            class="affine-database-column-type-icon dv-hover"
            @click="${this._clickTypeIcon}"
          >
            <uni-lit .uni="${column.icon}"></uni-lit>
          </div>
          <div class="affine-database-column-text-content">
            <div class="affine-database-column-text-input">
              ${column.name$.value}
            </div>
          </div>
        </div>
      </div>
      <div
        ${ref(this.widthDragBar)}
        @mouseenter="${this._enterWidthDragBar}"
        @mouseleave="${this._leaveWidthDragBar}"
        style="width: 0;position: relative;height: 100%;z-index: 1;cursor: col-resize"
      >
        <div style="width: 8px;height: 100%;margin-left: -4px;"></div>
      </div>
    `;
        }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #grabStatus_accessor_storage;
        get grabStatus() { return this.#grabStatus_accessor_storage; }
        set grabStatus(value) { this.#grabStatus_accessor_storage = value; }
        #tableViewManager_accessor_storage;
        get tableViewManager() { return this.#tableViewManager_accessor_storage; }
        set tableViewManager(value) { this.#tableViewManager_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._clickColumn = () => {
                if (this.tableViewManager.readonly$.value) {
                    return;
                }
                this.popMenu();
            };
            this._clickTypeIcon = (event) => {
                if (this.tableViewManager.readonly$.value) {
                    return;
                }
                if (this.column.type$.value === 'title') {
                    return;
                }
                event.stopPropagation();
                popMenu(this, {
                    options: {
                        input: {
                            search: true,
                            placeholder: 'Search',
                        },
                        items: this.tableViewManager.allColumnMetas.map(config => {
                            return {
                                type: 'action',
                                name: config.config.name,
                                isSelected: config.type === this.column.type$.value,
                                icon: renderUniLit(this.tableViewManager.getIcon(config.type)),
                                select: () => {
                                    this.column.updateType?.(config.type);
                                },
                            };
                        }),
                    },
                });
            };
            this._columnsOffset = (header, _scale) => {
                const columns = header.querySelectorAll('affine-database-header-column');
                const left = [];
                const right = [];
                let curr = left;
                const offsetArr = [];
                const columnsArr = Array.from(columns);
                for (let i = 0; i < columnsArr.length; i++) {
                    const v = columnsArr[i];
                    if (v === this) {
                        curr = right;
                        offsetArr.push(-1);
                        continue;
                    }
                    curr.push({
                        x: v.offsetLeft + v.offsetWidth / 2,
                        ele: v,
                    });
                    offsetArr.push(v.getBoundingClientRect().left - header.getBoundingClientRect().left);
                    if (i === columnsArr.length - 1) {
                        offsetArr.push(v.getBoundingClientRect().right - header.getBoundingClientRect().left);
                    }
                }
                left.reverse();
                const getInsertPosition = (offset, width) => {
                    let result = undefined;
                    for (let i = 0; i < left.length; i++) {
                        const { x, ele } = left[i];
                        if (x < offset) {
                            if (result) {
                                return result;
                            }
                            break;
                        }
                        else {
                            result = {
                                before: true,
                                id: ele.column.id,
                            };
                        }
                    }
                    const offsetRight = offset + width;
                    for (const { x, ele } of right) {
                        if (x > offsetRight) {
                            if (result) {
                                return result;
                            }
                            break;
                        }
                        else {
                            result = {
                                before: false,
                                id: ele.column.id,
                            };
                        }
                    }
                    return result;
                };
                const fixedColumns = columnsArr.map(v => ({ id: v.column.id }));
                const getInsertOffset = (insertPosition) => {
                    return offsetArr[insertPositionToIndex(insertPosition, fixedColumns)];
                };
                return {
                    computeInsertInfo: (offset, width) => {
                        const insertPosition = getInsertPosition(offset, width);
                        return {
                            insertPosition: insertPosition,
                            insertOffset: insertPosition
                                ? getInsertOffset(insertPosition)
                                : undefined,
                        };
                    },
                };
            };
            this._contextMenu = (e) => {
                if (this.tableViewManager.readonly$.value) {
                    return;
                }
                e.preventDefault();
                this.popMenu(e.target);
            };
            this._enterWidthDragBar = () => {
                if (this.tableViewManager.readonly$.value) {
                    return;
                }
                if (this.drawWidthDragBarTask) {
                    cancelAnimationFrame(this.drawWidthDragBarTask);
                    this.drawWidthDragBarTask = 0;
                }
                this.drawWidthDragBar();
            };
            this._leaveWidthDragBar = () => {
                cancelAnimationFrame(this.drawWidthDragBarTask);
                this.drawWidthDragBarTask = 0;
                getVerticalIndicator().remove();
            };
            this.drawWidthDragBar = () => {
                const tableContainer = getTableContainer(this);
                const tableRect = tableContainer.getBoundingClientRect();
                const rectList = getTableGroupRects(tableContainer);
                getVerticalIndicator().display(0, tableRect.top, rectList, this.getBoundingClientRect().right);
                this.drawWidthDragBarTask = requestAnimationFrame(this.drawWidthDragBar);
            };
            this.drawWidthDragBarTask = 0;
            this.moveColumn = (evt) => {
                const tableContainer = getTableContainer(this);
                const headerContainer = this.closest('affine-database-column-header');
                const scrollContainer = tableContainer?.parentElement;
                assertExists(headerContainer);
                assertExists(tableContainer);
                assertExists(scrollContainer);
                const columnHeaderRect = this.getBoundingClientRect();
                const scale = columnHeaderRect.width / this.column.width$.value;
                const headerContainerRect = tableContainer.getBoundingClientRect();
                const rectOffsetLeft = evt.x - columnHeaderRect.left;
                const offsetRight = columnHeaderRect.right - evt.x;
                const startOffset = (columnHeaderRect.left - headerContainerRect.left) / scale;
                const max = (headerContainerRect.width - columnHeaderRect.width) / scale;
                const { computeInsertInfo } = this._columnsOffset(headerContainer, scale);
                const column = new DataViewColumnPreview();
                column.tableViewManager = this.tableViewManager;
                column.column = this.column;
                column.table = tableContainer;
                const dragPreview = createDragPreview(tableContainer, columnHeaderRect.width / scale, headerContainerRect.height / scale, startOffset, column);
                const rectList = getTableGroupRects(tableContainer);
                const dropPreview = getVerticalIndicator();
                const cancelScroll = autoScrollOnBoundary(scrollContainer, {
                    boundary: {
                        left: rectOffsetLeft,
                        right: offsetRight,
                    },
                    onScroll: () => {
                        drag.move({ x: drag.last.x });
                    },
                });
                const html = document.querySelector('html');
                html?.classList.toggle('affine-database-header-column-grabbing', true);
                const drag = startDrag(evt, {
                    onDrag: () => {
                        this.grabStatus = 'grabbing';
                        return {};
                    },
                    onMove: ({ x }) => {
                        this.grabStatus = 'grabbing';
                        const currentOffset = getResultInRange((x - tableContainer.getBoundingClientRect().left - rectOffsetLeft) /
                            scale, 0, max);
                        const insertInfo = computeInsertInfo(currentOffset, columnHeaderRect.width / scale);
                        if (insertInfo.insertOffset != null) {
                            dropPreview.display(0, headerContainerRect.top, rectList, tableContainer.getBoundingClientRect().left +
                                insertInfo.insertOffset, true);
                        }
                        else {
                            dropPreview.remove();
                        }
                        dragPreview.display(currentOffset);
                        return {
                            insertPosition: insertInfo.insertPosition,
                        };
                    },
                    onDrop: ({ insertPosition }) => {
                        this.grabStatus = 'grabEnd';
                        if (insertPosition) {
                            this.tableViewManager.columnMove(this.column.id, insertPosition);
                        }
                    },
                    onClear: () => {
                        cancelScroll();
                        html?.classList.toggle('affine-database-header-column-grabbing', false);
                        dropPreview.remove();
                        dragPreview.remove();
                    },
                });
            };
            this.widthDragBar = createRef();
            this.editTitle = () => {
                this._clickColumn();
            };
            this.#column_accessor_storage = __runInitializers(this, _column_initializers, void 0);
            this.#grabStatus_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _grabStatus_initializers, 'grabEnd'));
            this.#tableViewManager_accessor_storage = (__runInitializers(this, _grabStatus_extraInitializers), __runInitializers(this, _tableViewManager_initializers, void 0));
            __runInitializers(this, _tableViewManager_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseHeaderColumn = _classThis;
})();
export { DatabaseHeaderColumn };
const createDragPreview = (container, width, height, startLeft, content) => {
    const div = document.createElement('div');
    div.append(content);
    // div.style.pointerEvents='none';
    div.style.opacity = '0.8';
    div.style.position = 'absolute';
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.left = `${startLeft}px`;
    div.style.top = `0px`;
    div.style.zIndex = '9';
    container.append(div);
    return {
        display(offset) {
            div.style.left = `${Math.round(offset)}px`;
        },
        remove() {
            div.remove();
        },
    };
};
function numberFormatConfig(column) {
    return {
        type: 'custom',
        render: () => html ` <affine-database-number-format-bar
        .column="${column}"
      ></affine-database-number-format-bar>`,
    };
}
//# sourceMappingURL=database-header-column.js.map