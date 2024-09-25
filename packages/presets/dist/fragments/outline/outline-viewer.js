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
import { PropTypes, requiredProperties, SignalWatcher, WithDisposable, } from '@lumensuite/block-std';
import { NoteDisplayMode, scrollbarStyle } from '@lumensuite/blocks';
import { signal } from '@lit-labs/preact-signals';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { TocIcon } from '../_common/icons.js';
import { getHeadingBlocksFromDoc } from './utils/query.js';
import { observeActiveHeadingDuringScroll, scrollToBlockWithHighlight, } from './utils/scroll.js';
export const AFFINE_OUTLINE_VIEWER = 'affine-outline-viewer';
let OutlineViewer = (() => {
    let _classDecorators = [requiredProperties({
            editor: PropTypes.object,
        }), customElement(AFFINE_OUTLINE_VIEWER)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(LitElement));
    let __activeItem_decorators;
    let __activeItem_initializers = [];
    let __activeItem_extraInitializers = [];
    let __showViewer_decorators;
    let __showViewer_initializers = [];
    let __showViewer_extraInitializers = [];
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    let _toggleOutlinePanel_decorators;
    let _toggleOutlinePanel_initializers = [];
    let _toggleOutlinePanel_extraInitializers = [];
    var OutlineViewer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __activeItem_decorators = [query('.outline-viewer-item.active')];
            __showViewer_decorators = [state()];
            _editor_decorators = [property({ attribute: false })];
            _toggleOutlinePanel_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __activeItem_decorators, { kind: "accessor", name: "_activeItem", static: false, private: false, access: { has: obj => "_activeItem" in obj, get: obj => obj._activeItem, set: (obj, value) => { obj._activeItem = value; } }, metadata: _metadata }, __activeItem_initializers, __activeItem_extraInitializers);
            __esDecorate(this, null, __showViewer_decorators, { kind: "accessor", name: "_showViewer", static: false, private: false, access: { has: obj => "_showViewer" in obj, get: obj => obj._showViewer, set: (obj, value) => { obj._showViewer = value; } }, metadata: _metadata }, __showViewer_initializers, __showViewer_extraInitializers);
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(this, null, _toggleOutlinePanel_decorators, { kind: "accessor", name: "toggleOutlinePanel", static: false, private: false, access: { has: obj => "toggleOutlinePanel" in obj, get: obj => obj.toggleOutlinePanel, set: (obj, value) => { obj.toggleOutlinePanel = value; } }, metadata: _metadata }, _toggleOutlinePanel_initializers, _toggleOutlinePanel_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlineViewer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
    }
    .outline-viewer-root {
      --duration: 120ms;
      --timing: cubic-bezier(0.42, 0, 0.58, 1);

      max-height: 100%;
      box-sizing: border-box;
      display: flex;
    }

    .outline-viewer-indicators-container {
      position: absolute;
      top: 0;
      right: 0;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      overflow-y: hidden;
    }

    .outline-viewer-indicator-wrapper {
      flex: 1 1 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .outline-viewer-indicator {
      width: 20px;
      height: 2px;
      border-radius: 1px;
      overflow: hidden;
      background: var(--affine-black-10, rgba(0, 0, 0, 0.1));
    }

    .outline-viewer-indicator.active {
      width: 24px;
      background: var(--affine-text-primary-color);
    }

    .outline-viewer-panel {
      position: relative;
      display: flex;
      width: 0px;
      max-height: 100%;
      box-sizing: border-box;
      flex-direction: column;
      align-items: flex-start;

      border-radius: 8px;
      border-width: 0px;
      border-style: solid;
      border-color: var(--affine-border-color);
      background: var(--affine-background-overlay-panel-color);
      box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.14);

      overflow-y: auto;

      opacity: 0;
      transform: translateX(0px);
      transition:
        width 0s var(--duration),
        padding 0s var(--duration),
        border-width 0s var(--duration),
        transform var(--duration) var(--timing),
        opacity var(--duration) var(--timing);
    }

    ${scrollbarStyle('.outline-viewer-panel')}

    .outline-viewer-header {
      display: flex;
      padding: 6px;
      align-items: center;
      gap: 4px;
      align-self: stretch;

      span {
        flex: 1;
        overflow: hidden;
        color: var(--affine-text-secondary-color);
        text-overflow: ellipsis;

        font-family: var(--affine-font-family);
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
      }
    }

    .outline-viewer-item {
      display: flex;
      align-items: center;
      align-self: stretch;
    }

    .outline-viewer-root:hover {
      .outline-viewer-indicators-container {
        visibility: hidden;
      }

      .outline-viewer-panel {
        width: 200px;
        border-width: 1px;
        padding: 8px 4px 8px 8px;
        opacity: 1;
        transform: translateX(-10px);
        transition:
          transform var(--duration) var(--timing),
          opacity var(--duration) var(--timing);
      }
    }
  `; }
        async _scrollToBlock(blockId) {
            this._lockActiveHeadingId = true;
            this._activeHeadingId$.value = blockId;
            this._highlightMaskDisposable = await scrollToBlockWithHighlight(this.editor, blockId);
            this._lockActiveHeadingId = false;
        }
        _toggleOutlinePanel() {
            if (this.toggleOutlinePanel) {
                this._showViewer = false;
                this.toggleOutlinePanel();
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(observeActiveHeadingDuringScroll(() => this.editor, newHeadingId => {
                if (this._lockActiveHeadingId)
                    return;
                this._activeHeadingId$.value = newHeadingId;
            }));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._highlightMaskDisposable();
        }
        render() {
            if (this.editor.doc.root === null || this.editor.mode === 'edgeless')
                return nothing;
            const headingBlocks = getHeadingBlocksFromDoc(this.editor.doc, [NoteDisplayMode.DocAndEdgeless, NoteDisplayMode.DocOnly], true);
            if (headingBlocks.length === 0)
                return nothing;
            const items = [
                ...(this.editor.doc.meta?.title !== '' ? [this.editor.doc.root] : []),
                ...headingBlocks,
            ];
            return html `
      <div class="outline-viewer-root" @mouseenter=${this._scrollPanel}>
        <div class="outline-viewer-indicators-container">
          ${repeat(items, block => block.id, block => html `<div class="outline-viewer-indicator-wrapper">
                <div
                  class=${classMap({
                'outline-viewer-indicator': true,
                active: this._activeHeadingId$.value === block.id,
            })}
                ></div>
              </div>`)}
        </div>
        <div class="outline-viewer-panel">
          <div class="outline-viewer-item outline-viewer-header">
            <span>Table of Contents</span>
            <edgeless-tool-icon-button
              .tooltip=${'Open in sidebar'}
              .tipPosition=${'top-end'}
              .activeMode=${'background'}
              @click=${this._toggleOutlinePanel}
            >
              ${TocIcon}
            </edgeless-tool-icon-button>
          </div>
          ${repeat(items, block => block.id, block => {
                return html `<div
                class=${classMap({
                    'outline-viewer-item': true,
                    active: this._activeHeadingId$.value === block.id,
                })}
              >
                <affine-outline-block-preview
                  class=${classMap({
                    active: this._activeHeadingId$.value === block.id,
                })}
                  .block=${block}
                  @click=${() => {
                    this._scrollToBlock(block.id).catch(console.error);
                }}
                >
                </affine-outline-block-preview>
              </div>`;
            })}
        </div>
      </div>
    `;
        }
        #_activeItem_accessor_storage;
        get _activeItem() { return this.#_activeItem_accessor_storage; }
        set _activeItem(value) { this.#_activeItem_accessor_storage = value; }
        #_showViewer_accessor_storage;
        get _showViewer() { return this.#_showViewer_accessor_storage; }
        set _showViewer(value) { this.#_showViewer_accessor_storage = value; }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        #toggleOutlinePanel_accessor_storage;
        get toggleOutlinePanel() { return this.#toggleOutlinePanel_accessor_storage; }
        set toggleOutlinePanel(value) { this.#toggleOutlinePanel_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._activeHeadingId$ = signal(null);
            this._highlightMaskDisposable = () => { };
            this._lockActiveHeadingId = false;
            this._scrollPanel = () => {
                this._activeItem?.scrollIntoView({
                    behavior: 'instant',
                    block: 'center',
                });
            };
            this.#_activeItem_accessor_storage = __runInitializers(this, __activeItem_initializers, null);
            this.#_showViewer_accessor_storage = (__runInitializers(this, __activeItem_extraInitializers), __runInitializers(this, __showViewer_initializers, false));
            this.#editor_accessor_storage = (__runInitializers(this, __showViewer_extraInitializers), __runInitializers(this, _editor_initializers, void 0));
            this.#toggleOutlinePanel_accessor_storage = (__runInitializers(this, _editor_extraInitializers), __runInitializers(this, _toggleOutlinePanel_initializers, null));
            __runInitializers(this, _toggleOutlinePanel_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlineViewer = _classThis;
})();
export { OutlineViewer };
//# sourceMappingURL=outline-viewer.js.map