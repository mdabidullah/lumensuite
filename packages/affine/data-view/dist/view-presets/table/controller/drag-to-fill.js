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
import { assertEquals } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { tRichText } from '../../../core/logical/data-type.js';
let DragToFillElement = (() => {
    let _classDecorators = [customElement('data-view-drag-to-fill')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _dragging_decorators;
    let _dragging_initializers = [];
    let _dragging_extraInitializers = [];
    var DragToFillElement = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _dragging_decorators = [state()];
            __esDecorate(this, null, _dragging_decorators, { kind: "accessor", name: "dragging", static: false, private: false, access: { has: obj => "dragging" in obj, get: obj => obj.dragging, set: (obj, value) => { obj.dragging = value; } }, metadata: _metadata }, _dragging_initializers, _dragging_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DragToFillElement = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .drag-to-fill {
      border-radius: 50%;
      box-sizing: border-box;
      background-color: var(--affine-background-primary-color);
      border: 2px solid var(--affine-primary-color);
      display: none;
      position: absolute;
      cursor: ns-resize;
      width: 10px;
      height: 10px;
      transform: translate(-50%, -50%);
      pointer-events: auto;
      user-select: none;
      transition: scale 0.2s ease;
      z-index: 2;
    }
    .drag-to-fill.dragging {
      scale: 1.1;
    }
  `; }
        render() {
            // TODO add tooltip
            return html `<div
      ${ref(this.dragToFillRef)}
      data-drag-to-fill="true"
      class="drag-to-fill ${this.dragging ? 'dragging' : ''}"
    ></div>`;
        }
        #dragging_accessor_storage;
        get dragging() { return this.#dragging_accessor_storage; }
        set dragging(value) { this.#dragging_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.dragToFillRef = createRef();
            this.#dragging_accessor_storage = __runInitializers(this, _dragging_initializers, false);
            __runInitializers(this, _dragging_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DragToFillElement = _classThis;
})();
export { DragToFillElement };
export function fillSelectionWithFocusCellData(host, selection) {
    const { groupKey, rowsSelection, columnsSelection, focus } = selection;
    const focusCell = host.selectionController.getCellContainer(groupKey, focus.rowIndex, focus.columnIndex);
    if (!focusCell)
        return;
    if (rowsSelection && columnsSelection) {
        assertEquals(columnsSelection.start, columnsSelection.end, 'expected selections on a single column');
        const curCol = focusCell.column; // we are sure that we are always in the same column while iterating through rows
        const cell = focusCell.cell$.value;
        const focusData = cell.value$.value;
        const draggingColIdx = columnsSelection.start;
        const { start, end } = rowsSelection;
        for (let i = start; i <= end; i++) {
            if (i === focus.rowIndex)
                continue;
            const cellContainer = host.selectionController.getCellContainer(groupKey, i, draggingColIdx);
            if (!cellContainer)
                continue;
            const curCell = cellContainer.cell$.value;
            if (tRichText.is(curCol.dataType$.value)) {
                const focusCellText = focusData;
                const delta = focusCellText?.toDelta() ?? [{ insert: '' }];
                const curCellText = curCell.value$.value;
                if (curCellText) {
                    curCellText.clear();
                    curCellText.applyDelta(delta);
                }
                else {
                    const newText = new DocCollection.Y.Text();
                    newText.applyDelta(delta);
                    curCell.setValue(newText);
                }
            }
            else {
                curCell.setValue(focusData);
            }
        }
    }
}
//# sourceMappingURL=drag-to-fill.js.map