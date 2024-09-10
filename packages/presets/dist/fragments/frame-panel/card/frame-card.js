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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { on, once, } from '@blocksuite/blocks';
import { DisposableGroup } from '@blocksuite/global/utils';
import { css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import './frame-card-title.js';
const styles = css `
  :host {
    display: block;
  }

  .frame-card-container {
    display: flex;
    flex-direction: column;
    width: 284px;
    height: 198px;
    gap: 8px;

    position: relative;
  }

  .frame-card-body {
    display: flex;
    width: 100%;
    height: 170px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--affine-border-color);
    background: var(--affine-background-primary-color);
    box-shadow: 0px 0px 12px 0px rgba(66, 65, 73, 0.18);
    cursor: pointer;
    position: relative;
  }

  .frame-card-container.selected .frame-card-body {
    border: 2px solid var(--light-brand-color, #1e96eb);
  }

  .frame-card-container.dragging {
    pointer-events: none;
    transform-origin: 16px 8px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: calc(var(--affine-z-index-popover, 0) + 3);
  }

  .frame-card-container.dragging frame-card-title {
    display: none;
  }

  .frame-card-container.dragging .dragging-card-number {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-30%, 30%);

    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--affine-black);
    color: var(--affine-white);
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    font-weight: 400;
  }

  .frame-card-container.placeholder {
    opacity: 0.5;
  }
`;
export const AFFINE_FRAME_CARD = 'affine-frame-card';
let FrameCard = (() => {
    let _classDecorators = [customElement(AFFINE_FRAME_CARD)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _cardIndex_decorators;
    let _cardIndex_initializers = [];
    let _cardIndex_extraInitializers = [];
    let _containerElement_decorators;
    let _containerElement_initializers = [];
    let _containerElement_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _draggingCardNumber_decorators;
    let _draggingCardNumber_initializers = [];
    let _draggingCardNumber_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _frame_decorators;
    let _frame_initializers = [];
    let _frame_extraInitializers = [];
    let _frameIndex_decorators;
    let _frameIndex_initializers = [];
    let _frameIndex_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _pos_decorators;
    let _pos_initializers = [];
    let _pos_extraInitializers = [];
    let _stackOrder_decorators;
    let _stackOrder_initializers = [];
    let _stackOrder_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _width_decorators;
    let _width_initializers = [];
    let _width_extraInitializers = [];
    var FrameCard = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _cardIndex_decorators = [property({ attribute: false })];
            _containerElement_decorators = [query('.frame-card-container')];
            _doc_decorators = [property({ attribute: false })];
            _draggingCardNumber_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _frame_decorators = [property({ attribute: false })];
            _frameIndex_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _pos_decorators = [property({ attribute: false })];
            _stackOrder_decorators = [property({ attribute: false })];
            _status_decorators = [property({ attribute: false })];
            _width_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _cardIndex_decorators, { kind: "accessor", name: "cardIndex", static: false, private: false, access: { has: obj => "cardIndex" in obj, get: obj => obj.cardIndex, set: (obj, value) => { obj.cardIndex = value; } }, metadata: _metadata }, _cardIndex_initializers, _cardIndex_extraInitializers);
            __esDecorate(this, null, _containerElement_decorators, { kind: "accessor", name: "containerElement", static: false, private: false, access: { has: obj => "containerElement" in obj, get: obj => obj.containerElement, set: (obj, value) => { obj.containerElement = value; } }, metadata: _metadata }, _containerElement_initializers, _containerElement_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _draggingCardNumber_decorators, { kind: "accessor", name: "draggingCardNumber", static: false, private: false, access: { has: obj => "draggingCardNumber" in obj, get: obj => obj.draggingCardNumber, set: (obj, value) => { obj.draggingCardNumber = value; } }, metadata: _metadata }, _draggingCardNumber_initializers, _draggingCardNumber_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _frame_decorators, { kind: "accessor", name: "frame", static: false, private: false, access: { has: obj => "frame" in obj, get: obj => obj.frame, set: (obj, value) => { obj.frame = value; } }, metadata: _metadata }, _frame_initializers, _frame_extraInitializers);
            __esDecorate(this, null, _frameIndex_decorators, { kind: "accessor", name: "frameIndex", static: false, private: false, access: { has: obj => "frameIndex" in obj, get: obj => obj.frameIndex, set: (obj, value) => { obj.frameIndex = value; } }, metadata: _metadata }, _frameIndex_initializers, _frameIndex_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _pos_decorators, { kind: "accessor", name: "pos", static: false, private: false, access: { has: obj => "pos" in obj, get: obj => obj.pos, set: (obj, value) => { obj.pos = value; } }, metadata: _metadata }, _pos_initializers, _pos_extraInitializers);
            __esDecorate(this, null, _stackOrder_decorators, { kind: "accessor", name: "stackOrder", static: false, private: false, access: { has: obj => "stackOrder" in obj, get: obj => obj.stackOrder, set: (obj, value) => { obj.stackOrder = value; } }, metadata: _metadata }, _stackOrder_initializers, _stackOrder_extraInitializers);
            __esDecorate(this, null, _status_decorators, { kind: "accessor", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(this, null, _width_decorators, { kind: "accessor", name: "width", static: false, private: false, access: { has: obj => "width" in obj, get: obj => obj.width, set: (obj, value) => { obj.width = value; } }, metadata: _metadata }, _width_initializers, _width_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FrameCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _dispatchDragEvent(e) {
            e.preventDefault();
            if (e.button !== 0)
                return;
            const { clientX: startX, clientY: startY } = e;
            const disposeDragStart = on(this.ownerDocument, 'mousemove', e => {
                if (Math.abs(startX - e.clientX) < 5 &&
                    Math.abs(startY - e.clientY) < 5) {
                    return;
                }
                if (this.status !== 'selected') {
                    this._dispatchSelectEvent(e);
                }
                const event = new CustomEvent('drag', {
                    detail: {
                        clientX: e.clientX,
                        clientY: e.clientY,
                        pageX: e.pageX,
                        pageY: e.pageY,
                    },
                });
                this.dispatchEvent(event);
                disposeDragStart();
            });
            once(this.ownerDocument, 'mouseup', () => {
                disposeDragStart();
            });
        }
        _dispatchFitViewEvent(e) {
            e.stopPropagation();
            const event = new CustomEvent('fitview', {
                detail: {
                    block: this.frame,
                },
            });
            this.dispatchEvent(event);
        }
        _dispatchSelectEvent(e) {
            e.stopPropagation();
            const event = new CustomEvent('select', {
                detail: {
                    id: this.frame.id,
                    selected: this.status !== 'selected',
                    index: this.cardIndex,
                    multiselect: e.shiftKey,
                },
            });
            this.dispatchEvent(event);
        }
        _DraggingCardNumber() {
            if (this.draggingCardNumber === undefined)
                return nothing;
            return html `<div class="dragging-card-number">
      ${this.draggingCardNumber}
    </div>`;
        }
        _setFrameDisposables(frame) {
            this._clearFrameDisposables();
            this._frameDisposables = new DisposableGroup();
            this._frameDisposables.add(frame.propsUpdated.on(this._updateElement));
        }
        connectedCallback() {
            super.connectedCallback();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearFrameDisposables();
        }
        render() {
            const { pos, stackOrder, width } = this;
            const containerStyle = this.status === 'dragging'
                ? styleMap({
                    transform: `${stackOrder === 0
                        ? `translate(${pos.x - 16}px, ${pos.y - 8}px)`
                        : `translate(${pos.x - 10}px, ${pos.y - 16}px) scale(0.96)`}`,
                    width: width ? `${width}px` : undefined,
                })
                : {};
            return html `<div
      class="frame-card-container ${this.status ?? ''}"
      style=${containerStyle}
    >
      ${this.status === 'dragging'
                ? nothing
                : html `<affine-frame-card-title
            .cardIndex=${this.cardIndex}
            .frame=${this.frame}
          ></affine-frame-card-title>`}
      <div
        class="frame-card-body"
        @click=${this._dispatchSelectEvent}
        @dblclick=${this._dispatchFitViewEvent}
        @mousedown=${this._dispatchDragEvent}
      >
        ${this.status === 'dragging' && stackOrder !== 0
                ? nothing
                : html `<frame-preview
              .edgeless=${this.edgeless}
              .doc=${this.doc}
              .host=${this.host}
              .frame=${this.frame}
            ></frame-preview>`}
        ${this._DraggingCardNumber()}
      </div>
    </div>`;
        }
        updated(_changedProperties) {
            if (_changedProperties.has('frame')) {
                this._setFrameDisposables(this.frame);
            }
        }
        #cardIndex_accessor_storage;
        get cardIndex() { return this.#cardIndex_accessor_storage; }
        set cardIndex(value) { this.#cardIndex_accessor_storage = value; }
        #containerElement_accessor_storage;
        get containerElement() { return this.#containerElement_accessor_storage; }
        set containerElement(value) { this.#containerElement_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #draggingCardNumber_accessor_storage;
        get draggingCardNumber() { return this.#draggingCardNumber_accessor_storage; }
        set draggingCardNumber(value) { this.#draggingCardNumber_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #frame_accessor_storage;
        get frame() { return this.#frame_accessor_storage; }
        set frame(value) { this.#frame_accessor_storage = value; }
        #frameIndex_accessor_storage;
        get frameIndex() { return this.#frameIndex_accessor_storage; }
        set frameIndex(value) { this.#frameIndex_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #pos_accessor_storage;
        get pos() { return this.#pos_accessor_storage; }
        set pos(value) { this.#pos_accessor_storage = value; }
        #stackOrder_accessor_storage;
        get stackOrder() { return this.#stackOrder_accessor_storage; }
        set stackOrder(value) { this.#stackOrder_accessor_storage = value; }
        #status_accessor_storage;
        get status() { return this.#status_accessor_storage; }
        set status(value) { this.#status_accessor_storage = value; }
        #width_accessor_storage;
        get width() { return this.#width_accessor_storage; }
        set width(value) { this.#width_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._clearFrameDisposables = () => {
                this._frameDisposables?.dispose();
                this._frameDisposables = null;
            };
            this._frameDisposables = null;
            this._updateElement = () => {
                this.requestUpdate();
            };
            this.#cardIndex_accessor_storage = __runInitializers(this, _cardIndex_initializers, void 0);
            this.#containerElement_accessor_storage = (__runInitializers(this, _cardIndex_extraInitializers), __runInitializers(this, _containerElement_initializers, void 0));
            this.#doc_accessor_storage = (__runInitializers(this, _containerElement_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#draggingCardNumber_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _draggingCardNumber_initializers, undefined));
            this.#edgeless_accessor_storage = (__runInitializers(this, _draggingCardNumber_extraInitializers), __runInitializers(this, _edgeless_initializers, null));
            this.#frame_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _frame_initializers, void 0));
            this.#frameIndex_accessor_storage = (__runInitializers(this, _frame_extraInitializers), __runInitializers(this, _frameIndex_initializers, void 0));
            this.#host_accessor_storage = (__runInitializers(this, _frameIndex_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.#pos_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _pos_initializers, void 0));
            this.#stackOrder_accessor_storage = (__runInitializers(this, _pos_extraInitializers), __runInitializers(this, _stackOrder_initializers, void 0));
            this.#status_accessor_storage = (__runInitializers(this, _stackOrder_extraInitializers), __runInitializers(this, _status_initializers, 'none'));
            this.#width_accessor_storage = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _width_initializers, undefined));
            __runInitializers(this, _width_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FrameCard = _classThis;
})();
export { FrameCard };
//# sourceMappingURL=frame-card.js.map