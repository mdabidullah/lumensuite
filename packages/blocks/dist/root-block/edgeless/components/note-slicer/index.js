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
import { SmallScissorsIcon } from '@lumensuite/affine-components/icons';
import { TelemetryProvider } from '@lumensuite/affine-shared/services';
import { WithDisposable } from '@lumensuite/block-std';
import { deserializeXYWH, DisposableGroup, Point, serializeXYWH, } from '@lumensuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { getRectByBlockComponent } from '../../../../_common/utils/index.js';
import { DEFAULT_NOTE_HEIGHT } from '../../utils/consts.js';
import { isNoteBlock } from '../../utils/query.js';
const DIVIDING_LINE_OFFSET = 4;
const NEW_NOTE_GAP = 40;
const styles = css `
  :host {
    display: flex;
  }

  .note-slicer-container {
    display: flex;
  }

  .note-slicer-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    box-sizing: border-box;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    color: var(--affine-icon-color);
    border: 1px solid var(--affine-border-color);
    background-color: var(--affine-background-overlay-panel-color);
    box-shadow: var(--affine-menu-shadow);
    cursor: pointer;
    width: 24px;
    height: 24px;
    transform-origin: left top;
    z-index: var(--affine-z-index-popover);
    opacity: 0;
    transition: opacity 150ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .note-slicer-dividing-line-container {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    cursor: pointer;
  }

  .note-slicer-dividing-line {
    display: block;
    height: 1px;
    width: 100%;
    z-index: var(--affine-z-index-popover);
    background-image: linear-gradient(
      to right,
      var(--affine-black-10) 50%,
      transparent 50%
    );
    background-size: 4px 100%;
  }
  .note-slicer-dividing-line-container.active .note-slicer-dividing-line {
    background-image: linear-gradient(
      to right,
      var(--affine-black-60) 50%,
      transparent 50%
    );
    animation: slide 0.3s linear infinite;
  }
  @keyframes slide {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -4px 0;
    }
  }
`;
let NoteSlicer = (() => {
    let _classDecorators = [customElement('note-slicer')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __activeSlicerIndex_decorators;
    let __activeSlicerIndex_initializers = [];
    let __activeSlicerIndex_extraInitializers = [];
    let __anchorNote_decorators;
    let __anchorNote_initializers = [];
    let __anchorNote_extraInitializers = [];
    let __enableNoteSlicer_decorators;
    let __enableNoteSlicer_initializers = [];
    let __enableNoteSlicer_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var NoteSlicer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __activeSlicerIndex_decorators = [state()];
            __anchorNote_decorators = [state()];
            __enableNoteSlicer_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __activeSlicerIndex_decorators, { kind: "accessor", name: "_activeSlicerIndex", static: false, private: false, access: { has: obj => "_activeSlicerIndex" in obj, get: obj => obj._activeSlicerIndex, set: (obj, value) => { obj._activeSlicerIndex = value; } }, metadata: _metadata }, __activeSlicerIndex_initializers, __activeSlicerIndex_extraInitializers);
            __esDecorate(this, null, __anchorNote_decorators, { kind: "accessor", name: "_anchorNote", static: false, private: false, access: { has: obj => "_anchorNote" in obj, get: obj => obj._anchorNote, set: (obj, value) => { obj._anchorNote = value; } }, metadata: _metadata }, __anchorNote_initializers, __anchorNote_extraInitializers);
            __esDecorate(this, null, __enableNoteSlicer_decorators, { kind: "accessor", name: "_enableNoteSlicer", static: false, private: false, access: { has: obj => "_enableNoteSlicer" in obj, get: obj => obj._enableNoteSlicer, set: (obj, value) => { obj._enableNoteSlicer = value; } }, metadata: _metadata }, __enableNoteSlicer_initializers, __enableNoteSlicer_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            NoteSlicer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get _editorHost() {
            return this.edgeless.host;
        }
        get _noteBlock() {
            if (!this._editorHost)
                return null;
            const noteBlock = this._editorHost.view.getBlock(this._anchorNote?.id ?? '');
            return noteBlock ? noteBlock : null;
        }
        get _selection() {
            return this.edgeless.service.selection;
        }
        get _viewportOffset() {
            const { viewport } = this.edgeless;
            return {
                left: viewport.left ?? 0,
                top: viewport.top ?? 0,
            };
        }
        get _zoom() {
            if (!this.edgeless.service?.viewport) {
                console.error('Viewport is not found, something went wrong.');
                return 1;
            }
            return this.edgeless.service.viewport.zoom;
        }
        get selectedRectEle() {
            return this.edgeless.querySelector('edgeless-selected-rect');
        }
        _sliceNote() {
            if (!this._anchorNote || !this._noteBlockIds.length)
                return;
            const doc = this.edgeless.doc;
            const { index: originIndex, xywh, background, children, displayMode, } = this._anchorNote;
            const { collapse: _, collapsedHeight: __, ...restOfEdgeless } = this._anchorNote.edgeless;
            const anchorBlockId = this._noteBlockIds[this._activeSlicerIndex];
            if (!anchorBlockId)
                return;
            const sliceIndex = children.findIndex(block => block.id === anchorBlockId);
            const resetBlocks = children.slice(sliceIndex + 1);
            const [x, , width] = deserializeXYWH(xywh);
            const sliceVerticalPos = this._divingLinePositions[this._activeSlicerIndex].y;
            const newY = this.edgeless.service.viewport.toModelCoord(x, sliceVerticalPos)[1];
            const newNoteId = this.edgeless.service.addBlock('affine:note', {
                background,
                displayMode,
                xywh: serializeXYWH(x, newY + NEW_NOTE_GAP, width, DEFAULT_NOTE_HEIGHT),
                index: originIndex + 1,
                edgeless: restOfEdgeless,
            }, doc.root?.id);
            doc.moveBlocks(resetBlocks, doc.getBlockById(newNoteId));
            this._activeSlicerIndex = 0;
            this._selection.set({
                elements: [newNoteId],
                editing: false,
            });
            this.edgeless.std.getOptional(TelemetryProvider)?.track('SplitNote', {
                control: 'NoteSlicer',
            });
        }
        _updateActiveSlicerIndex(pos) {
            const { _divingLinePositions } = this;
            const curY = pos.y + DIVIDING_LINE_OFFSET * this._zoom;
            let index = -1;
            for (let i = 0; i < _divingLinePositions.length; i++) {
                const currentY = _divingLinePositions[i].y;
                const previousY = i > 0 ? _divingLinePositions[i - 1].y : 0;
                const midY = (currentY + previousY) / 2;
                if (curY < midY) {
                    break;
                }
                index++;
            }
            if (index < 0)
                index = 0;
            this._activeSlicerIndex = index;
        }
        _updateDivingLineAndBlockIds() {
            if (!this._anchorNote || !this._noteBlock) {
                this._divingLinePositions = [];
                this._noteBlockIds = [];
                return;
            }
            const divingLinePositions = [];
            const noteBlockIds = [];
            const noteRect = this._noteBlock.getBoundingClientRect();
            const noteTop = noteRect.top;
            const noteBottom = noteRect.bottom;
            for (let i = 0; i < this._anchorNote.children.length - 1; i++) {
                const child = this._anchorNote.children[i];
                const rect = this.edgeless.host.view
                    .getBlock(child.id)
                    ?.getBoundingClientRect();
                if (rect && rect.bottom > noteTop && rect.bottom < noteBottom) {
                    const x = rect.x - this._viewportOffset.left;
                    const y = rect.bottom +
                        DIVIDING_LINE_OFFSET * this._zoom -
                        this._viewportOffset.top;
                    divingLinePositions.push(new Point(x, y));
                    noteBlockIds.push(child.id);
                }
            }
            this._divingLinePositions = divingLinePositions;
            this._noteBlockIds = noteBlockIds;
        }
        _updateSlicedNote() {
            const { edgeless } = this;
            const { selectedElements } = edgeless.service.selection;
            if (!edgeless.service.selection.editing &&
                selectedElements.length === 1 &&
                isNoteBlock(selectedElements[0])) {
                this._anchorNote = selectedElements[0];
            }
            else {
                this._anchorNote = null;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            const { disposables, edgeless } = this;
            if (!edgeless.service)
                return;
            this._updateDivingLineAndBlockIds();
            disposables.add(edgeless.service.uiEventDispatcher.add('pointerMove', ctx => {
                if (this._hidden)
                    this._hidden = false;
                const state = ctx.get('pointerState');
                const pos = new Point(state.x, state.y);
                this._updateActiveSlicerIndex(pos);
            }));
            disposables.add(edgeless.service.viewport.viewportUpdated.on(() => {
                this._hidden = true;
                this.requestUpdate();
            }));
            disposables.add(edgeless.service.selection.slots.updated.on(() => {
                this._enableNoteSlicer = false;
                this._updateSlicedNote();
                if (this.selectedRectEle) {
                    this.selectedRectEle.autoCompleteOff = false;
                }
            }));
            disposables.add(edgeless.slots.toggleNoteSlicer.on(() => {
                this._enableNoteSlicer = !this._enableNoteSlicer;
                if (this.selectedRectEle && this._enableNoteSlicer) {
                    this.selectedRectEle.autoCompleteOff = true;
                }
            }));
            const { surface } = edgeless;
            requestAnimationFrame(() => {
                if (surface.isConnected && edgeless.dispatcher) {
                    disposables.add(edgeless.dispatcher.add('click', ctx => {
                        const event = ctx.get('pointerState');
                        const { raw } = event;
                        const target = raw.target;
                        if (!target)
                            return false;
                        if (target.closest('note-slicer')) {
                            this._sliceNote();
                            return true;
                        }
                        return false;
                    }));
                }
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.disposables.dispose();
            this._noteDisposables?.dispose();
            this._noteDisposables = null;
        }
        firstUpdated() {
            if (!this.edgeless.service)
                return;
            this.disposables.add(this.edgeless.service.uiEventDispatcher.add('wheel', () => {
                this._hidden = true;
                this.requestUpdate();
            }));
        }
        render() {
            if (this.edgeless.doc.readonly ||
                this._hidden ||
                !this._anchorNote ||
                !this._enableNoteSlicer) {
                return nothing;
            }
            this._updateDivingLineAndBlockIds();
            const noteBlock = this._noteBlock;
            if (!noteBlock || !this._divingLinePositions.length)
                return nothing;
            const rect = getRectByBlockComponent(noteBlock);
            const width = rect.width;
            const buttonPosition = this._divingLinePositions[this._activeSlicerIndex];
            return html `<div class="note-slicer-container">
      <div
        class="note-slicer-button"
        style=${styleMap({
                left: `${buttonPosition.x - 66 * this._zoom}px`,
                top: `${buttonPosition.y}px`,
                opacity: 1,
                scale: `${this._zoom}`,
                transform: 'translateY(-50%)',
            })}
      >
        ${SmallScissorsIcon}
      </div>
      ${this._divingLinePositions.map((pos, idx) => {
                const dividingLineClasses = classMap({
                    'note-slicer-dividing-line-container': true,
                    active: idx === this._activeSlicerIndex,
                });
                return html `<div
          class=${dividingLineClasses}
          style=${styleMap({
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    width: `${width}px`,
                })}
        >
          <span class="note-slicer-dividing-line"></span>
        </div>`;
            })}
    </div> `;
        }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            if (_changedProperties.has('anchorNote')) {
                this._noteDisposables?.dispose();
                this._noteDisposables = null;
                if (this._anchorNote) {
                    this._noteDisposables = new DisposableGroup();
                    this._noteDisposables.add(this._anchorNote.propsUpdated.on(({ key }) => {
                        if (key === 'children' || key === 'xywh') {
                            this.requestUpdate();
                        }
                    }));
                }
            }
        }
        #_activeSlicerIndex_accessor_storage;
        get _activeSlicerIndex() { return this.#_activeSlicerIndex_accessor_storage; }
        set _activeSlicerIndex(value) { this.#_activeSlicerIndex_accessor_storage = value; }
        #_anchorNote_accessor_storage;
        get _anchorNote() { return this.#_anchorNote_accessor_storage; }
        set _anchorNote(value) { this.#_anchorNote_accessor_storage = value; }
        #_enableNoteSlicer_accessor_storage;
        get _enableNoteSlicer() { return this.#_enableNoteSlicer_accessor_storage; }
        set _enableNoteSlicer(value) { this.#_enableNoteSlicer_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._divingLinePositions = [];
            this._hidden = false;
            this._noteBlockIds = [];
            this._noteDisposables = null;
            this.#_activeSlicerIndex_accessor_storage = __runInitializers(this, __activeSlicerIndex_initializers, 0);
            this.#_anchorNote_accessor_storage = (__runInitializers(this, __activeSlicerIndex_extraInitializers), __runInitializers(this, __anchorNote_initializers, null));
            this.#_enableNoteSlicer_accessor_storage = (__runInitializers(this, __anchorNote_extraInitializers), __runInitializers(this, __enableNoteSlicer_initializers, false));
            this.#edgeless_accessor_storage = (__runInitializers(this, __enableNoteSlicer_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            __runInitializers(this, _edgeless_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return NoteSlicer = _classThis;
})();
export { NoteSlicer };
//# sourceMappingURL=index.js.map