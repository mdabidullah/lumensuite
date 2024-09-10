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
import { SignalWatcher, WithDisposable } from '@blocksuite/block-std';
import { createButtonPopper, NoteDisplayMode, on, once, ThemeObserver, } from '@blocksuite/blocks';
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { HiddenIcon, SmallArrowDownIcon } from '../../_common/icons.js';
import './outline-preview.js';
const styles = css `
  :host {
    display: block;
    position: relative;
  }

  .card-container {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .card-preview {
    position: relative;

    width: 100%;

    border-radius: 4px;

    cursor: default;
    user-select: none;
  }

  .card-preview.edgeless:hover {
    background: var(--affine-hover-color);
  }

  .card-header-container {
    padding: 0 8px;
    width: 100%;
    min-height: 28px;
    display: none;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
  }

  .card-header-container.enable-sorting {
    display: flex;
  }

  .card-header-container .card-number {
    text-align: center;
    font-size: var(--affine-font-sm);
    font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    color: var(--affine-brand-color, #1e96eb);
    font-weight: 500;
    line-height: 14px;
    line-height: 20px;
  }

  .card-header-container .card-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-header-container .card-divider {
    height: 1px;
    flex: 1;
    border-top: 1px dashed var(--affine-border-color);
    transform: translateY(50%);
  }

  .display-mode-button-group {
    display: none;
    align-items: center;
    gap: 4px;
    padding: 2px;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    position: relative;
  }

  .card-preview:hover .display-mode-button-group {
    display: flex;
  }

  .display-mode-button-label {
    color: var(--affine-text-primary-color);
  }

  .display-mode-button {
    display: flex;
    border-radius: 4px;
    background-color: var(--affine-hover-color);
    align-items: center;
  }

  .current-mode-label {
    display: flex;
    padding: 2px 0px 2px 4px;
    align-items: center;
  }

  note-display-mode-panel {
    position: absolute;
    display: none;
    background: var(--affine-background-overlay-panel-color);
    border-radius: 8px;
    box-shadow: var(--affine-shadow-2);
    box-sizing: border-box;
    padding: 8px;
    font-size: var(--affine-font-sm);
    color: var(--affine-text-primary-color);
    line-height: 22px;
    font-weight: 400;
    font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
  }

  note-display-mode-panel[data-show] {
    display: flex;
  }

  .card-content {
    font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    user-select: none;
    color: var(--affine-text-primary-color);
  }

  .card-preview.edgeless .card-content:hover {
    cursor: pointer;
  }

  .card-preview.edgeless .card-header-container:hover {
    cursor: grab;
  }

  .card-container.placeholder {
    pointer-events: none;
    opacity: 0.5;
  }

  .card-container.selected .card-preview.edgeless {
    background: var(--affine-hover-color);
  }

  .card-container.placeholder .card-preview.edgeless {
    background: var(--affine-hover-color);
    opacity: 0.9;
  }

  .card-container[data-sortable='true'] {
    padding: 2px 0;
  }

  .card-container[data-invisible='true'] .card-header-container .card-number,
  .card-container[data-invisible='true']
    .card-header-container
    .card-header-icon,
  .card-container[data-invisible='true'] .card-preview .card-content {
    color: var(--affine-text-disable-color);
    pointer-events: none;
  }

  .card-preview.page outline-block-preview:hover {
    color: var(--affine-brand-color);
  }
`;
export const AFFINE_OUTLINE_NOTE_CARD = 'affine-outline-note-card';
let OutlineNoteCard = (() => {
    let _classDecorators = [customElement(AFFINE_OUTLINE_NOTE_CARD)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(LitElement));
    let __displayModeButtonGroup_decorators;
    let __displayModeButtonGroup_initializers = [];
    let __displayModeButtonGroup_extraInitializers = [];
    let __displayModePanel_decorators;
    let __displayModePanel_initializers = [];
    let __displayModePanel_extraInitializers = [];
    let __showPopper_decorators;
    let __showPopper_initializers = [];
    let __showPopper_extraInitializers = [];
    let _activeHeadingId_decorators;
    let _activeHeadingId_initializers = [];
    let _activeHeadingId_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _editorMode_decorators;
    let _editorMode_initializers = [];
    let _editorMode_extraInitializers = [];
    let _enableNotesSorting_decorators;
    let _enableNotesSorting_initializers = [];
    let _enableNotesSorting_extraInitializers = [];
    let _index_decorators;
    let _index_initializers = [];
    let _index_extraInitializers = [];
    let _invisible_decorators;
    let _invisible_initializers = [];
    let _invisible_extraInitializers = [];
    let _note_decorators;
    let _note_initializers = [];
    let _note_extraInitializers = [];
    let _number_decorators;
    let _number_initializers = [];
    let _number_extraInitializers = [];
    let _showPreviewIcon_decorators;
    let _showPreviewIcon_initializers = [];
    let _showPreviewIcon_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    var OutlineNoteCard = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __displayModeButtonGroup_decorators = [query('.display-mode-button-group')];
            __displayModePanel_decorators = [query('note-display-mode-panel')];
            __showPopper_decorators = [state()];
            _activeHeadingId_decorators = [property({ attribute: false })];
            _doc_decorators = [property({ attribute: false })];
            _editorMode_decorators = [property({ attribute: false })];
            _enableNotesSorting_decorators = [property({ attribute: false })];
            _index_decorators = [property({ attribute: false })];
            _invisible_decorators = [property({ attribute: false })];
            _note_decorators = [property({ attribute: false })];
            _number_decorators = [property({ attribute: false })];
            _showPreviewIcon_decorators = [property({ attribute: false })];
            _status_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __displayModeButtonGroup_decorators, { kind: "accessor", name: "_displayModeButtonGroup", static: false, private: false, access: { has: obj => "_displayModeButtonGroup" in obj, get: obj => obj._displayModeButtonGroup, set: (obj, value) => { obj._displayModeButtonGroup = value; } }, metadata: _metadata }, __displayModeButtonGroup_initializers, __displayModeButtonGroup_extraInitializers);
            __esDecorate(this, null, __displayModePanel_decorators, { kind: "accessor", name: "_displayModePanel", static: false, private: false, access: { has: obj => "_displayModePanel" in obj, get: obj => obj._displayModePanel, set: (obj, value) => { obj._displayModePanel = value; } }, metadata: _metadata }, __displayModePanel_initializers, __displayModePanel_extraInitializers);
            __esDecorate(this, null, __showPopper_decorators, { kind: "accessor", name: "_showPopper", static: false, private: false, access: { has: obj => "_showPopper" in obj, get: obj => obj._showPopper, set: (obj, value) => { obj._showPopper = value; } }, metadata: _metadata }, __showPopper_initializers, __showPopper_extraInitializers);
            __esDecorate(this, null, _activeHeadingId_decorators, { kind: "accessor", name: "activeHeadingId", static: false, private: false, access: { has: obj => "activeHeadingId" in obj, get: obj => obj.activeHeadingId, set: (obj, value) => { obj.activeHeadingId = value; } }, metadata: _metadata }, _activeHeadingId_initializers, _activeHeadingId_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _editorMode_decorators, { kind: "accessor", name: "editorMode", static: false, private: false, access: { has: obj => "editorMode" in obj, get: obj => obj.editorMode, set: (obj, value) => { obj.editorMode = value; } }, metadata: _metadata }, _editorMode_initializers, _editorMode_extraInitializers);
            __esDecorate(this, null, _enableNotesSorting_decorators, { kind: "accessor", name: "enableNotesSorting", static: false, private: false, access: { has: obj => "enableNotesSorting" in obj, get: obj => obj.enableNotesSorting, set: (obj, value) => { obj.enableNotesSorting = value; } }, metadata: _metadata }, _enableNotesSorting_initializers, _enableNotesSorting_extraInitializers);
            __esDecorate(this, null, _index_decorators, { kind: "accessor", name: "index", static: false, private: false, access: { has: obj => "index" in obj, get: obj => obj.index, set: (obj, value) => { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
            __esDecorate(this, null, _invisible_decorators, { kind: "accessor", name: "invisible", static: false, private: false, access: { has: obj => "invisible" in obj, get: obj => obj.invisible, set: (obj, value) => { obj.invisible = value; } }, metadata: _metadata }, _invisible_initializers, _invisible_extraInitializers);
            __esDecorate(this, null, _note_decorators, { kind: "accessor", name: "note", static: false, private: false, access: { has: obj => "note" in obj, get: obj => obj.note, set: (obj, value) => { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
            __esDecorate(this, null, _number_decorators, { kind: "accessor", name: "number", static: false, private: false, access: { has: obj => "number" in obj, get: obj => obj.number, set: (obj, value) => { obj.number = value; } }, metadata: _metadata }, _number_initializers, _number_extraInitializers);
            __esDecorate(this, null, _showPreviewIcon_decorators, { kind: "accessor", name: "showPreviewIcon", static: false, private: false, access: { has: obj => "showPreviewIcon" in obj, get: obj => obj.showPreviewIcon, set: (obj, value) => { obj.showPreviewIcon = value; } }, metadata: _metadata }, _showPreviewIcon_initializers, _showPreviewIcon_extraInitializers);
            __esDecorate(this, null, _status_decorators, { kind: "accessor", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlineNoteCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _dispatchClickBlockEvent(block) {
            const event = new CustomEvent('clickblock', {
                detail: {
                    blockId: block.id,
                },
            });
            this.dispatchEvent(event);
        }
        _dispatchDisplayModeChangeEvent(note, newMode) {
            const event = new CustomEvent('displaymodechange', {
                detail: {
                    note,
                    newMode,
                },
            });
            this.dispatchEvent(event);
        }
        _dispatchDragEvent(e) {
            e.preventDefault();
            if (e.button !== 0 ||
                this.editorMode === 'page' ||
                !this.enableNotesSorting)
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
                const event = new CustomEvent('drag');
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
                    block: this.note,
                },
            });
            this.dispatchEvent(event);
        }
        _dispatchSelectEvent(e) {
            e.stopPropagation();
            const event = new CustomEvent('select', {
                detail: {
                    id: this.note.id,
                    selected: this.status !== 'selected',
                    number: this.number,
                    multiselect: e.shiftKey,
                },
            });
            this.dispatchEvent(event);
        }
        _getCurrentModeLabel(mode) {
            switch (mode) {
                case NoteDisplayMode.DocAndEdgeless:
                    return 'Both';
                case NoteDisplayMode.EdgelessOnly:
                    return 'Edgeless';
                case NoteDisplayMode.DocOnly:
                    return 'Page';
                default:
                    return 'Both';
            }
        }
        firstUpdated() {
            this._displayModePopper = createButtonPopper(this._displayModeButtonGroup, this._displayModePanel, ({ display }) => {
                this._showPopper = display === 'show';
            }, {
                mainAxis: 8,
                crossAxis: -60,
            });
            this.disposables.add(this._displayModePopper);
        }
        render() {
            if (this.note.isEmpty.peek())
                return nothing;
            const mode = ThemeObserver.mode;
            const { children, displayMode } = this.note;
            const currentMode = this._getCurrentModeLabel(displayMode);
            const cardHeaderClasses = classMap({
                'card-header-container': true,
                'enable-sorting': this.enableNotesSorting,
            });
            return html `
      <div
        data-invisible="${this.invisible ? 'true' : 'false'}"
        data-sortable="${this.enableNotesSorting ? 'true' : 'false'}"
        class="card-container ${this.status ?? ''} ${mode}"
      >
        <div
          class="card-preview ${this.editorMode}"
          @mousedown=${this._dispatchDragEvent}
          @click=${this._dispatchSelectEvent}
          @dblclick=${this._dispatchFitViewEvent}
        >
        ${html `<div class=${cardHeaderClasses}>
          ${this.invisible
                ? html `<span class="card-header-icon">${HiddenIcon}</span>`
                : html `<span class="card-number">${this.number}</span>`}
          <span class="card-divider"></span>
          <div class="display-mode-button-group">
            <span class="display-mode-button-label">Show in</span>
            <edgeless-tool-icon-button
              .tooltip=${this._showPopper ? '' : 'Display Mode'}
              .tipPosition=${'left-start'}
              .iconContainerPadding=${0}
              @click=${(e) => {
                e.stopPropagation();
                this._displayModePopper?.toggle();
            }}
              @dblclick=${(e) => e.stopPropagation()}
            >
              <div class="display-mode-button">
                <span class="current-mode-label">${currentMode}</span>
                ${SmallArrowDownIcon}
              </div>
            </edgeless-tool-icon-button>
          </div>
          <note-display-mode-panel
            .displayMode=${displayMode}
            .panelWidth=${220}
            .onSelect=${(newMode) => {
                this._dispatchDisplayModeChangeEvent(this.note, newMode);
                this._displayModePopper?.hide();
            }}
          >
          </note-display-mode-panel>
        </div>`}
          <div class="card-content">
            ${children.map(block => {
                return html `<affine-outline-block-preview
                .block=${block}
                .className=${this.activeHeadingId === block.id ? 'active' : ''}
                .showPreviewIcon=${this.showPreviewIcon}
                .disabledIcon=${this.invisible}
                .cardNumber=${this.number}
                .enableNotesSorting=${this.enableNotesSorting}
                @click=${() => {
                    if (this.editorMode === 'edgeless' || this.invisible)
                        return;
                    this._dispatchClickBlockEvent(block);
                }}
              ></affine-outline-block-preview>`;
            })}
            </div>
          </div>
        </div>
      </div>
    `;
        }
        #_displayModeButtonGroup_accessor_storage;
        get _displayModeButtonGroup() { return this.#_displayModeButtonGroup_accessor_storage; }
        set _displayModeButtonGroup(value) { this.#_displayModeButtonGroup_accessor_storage = value; }
        #_displayModePanel_accessor_storage;
        get _displayModePanel() { return this.#_displayModePanel_accessor_storage; }
        set _displayModePanel(value) { this.#_displayModePanel_accessor_storage = value; }
        #_showPopper_accessor_storage;
        get _showPopper() { return this.#_showPopper_accessor_storage; }
        set _showPopper(value) { this.#_showPopper_accessor_storage = value; }
        #activeHeadingId_accessor_storage;
        get activeHeadingId() { return this.#activeHeadingId_accessor_storage; }
        set activeHeadingId(value) { this.#activeHeadingId_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #editorMode_accessor_storage;
        get editorMode() { return this.#editorMode_accessor_storage; }
        set editorMode(value) { this.#editorMode_accessor_storage = value; }
        #enableNotesSorting_accessor_storage;
        get enableNotesSorting() { return this.#enableNotesSorting_accessor_storage; }
        set enableNotesSorting(value) { this.#enableNotesSorting_accessor_storage = value; }
        #index_accessor_storage;
        get index() { return this.#index_accessor_storage; }
        set index(value) { this.#index_accessor_storage = value; }
        #invisible_accessor_storage;
        get invisible() { return this.#invisible_accessor_storage; }
        set invisible(value) { this.#invisible_accessor_storage = value; }
        #note_accessor_storage;
        get note() { return this.#note_accessor_storage; }
        set note(value) { this.#note_accessor_storage = value; }
        #number_accessor_storage;
        get number() { return this.#number_accessor_storage; }
        set number(value) { this.#number_accessor_storage = value; }
        #showPreviewIcon_accessor_storage;
        get showPreviewIcon() { return this.#showPreviewIcon_accessor_storage; }
        set showPreviewIcon(value) { this.#showPreviewIcon_accessor_storage = value; }
        #status_accessor_storage;
        get status() { return this.#status_accessor_storage; }
        set status(value) { this.#status_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._displayModePopper = null;
            this.#_displayModeButtonGroup_accessor_storage = __runInitializers(this, __displayModeButtonGroup_initializers, void 0);
            this.#_displayModePanel_accessor_storage = (__runInitializers(this, __displayModeButtonGroup_extraInitializers), __runInitializers(this, __displayModePanel_initializers, void 0));
            this.#_showPopper_accessor_storage = (__runInitializers(this, __displayModePanel_extraInitializers), __runInitializers(this, __showPopper_initializers, false));
            this.#activeHeadingId_accessor_storage = (__runInitializers(this, __showPopper_extraInitializers), __runInitializers(this, _activeHeadingId_initializers, null));
            this.#doc_accessor_storage = (__runInitializers(this, _activeHeadingId_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#editorMode_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _editorMode_initializers, 'page'));
            this.#enableNotesSorting_accessor_storage = (__runInitializers(this, _editorMode_extraInitializers), __runInitializers(this, _enableNotesSorting_initializers, void 0));
            this.#index_accessor_storage = (__runInitializers(this, _enableNotesSorting_extraInitializers), __runInitializers(this, _index_initializers, void 0));
            this.#invisible_accessor_storage = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _invisible_initializers, false));
            this.#note_accessor_storage = (__runInitializers(this, _invisible_extraInitializers), __runInitializers(this, _note_initializers, void 0));
            this.#number_accessor_storage = (__runInitializers(this, _note_extraInitializers), __runInitializers(this, _number_initializers, void 0));
            this.#showPreviewIcon_accessor_storage = (__runInitializers(this, _number_extraInitializers), __runInitializers(this, _showPreviewIcon_initializers, void 0));
            this.#status_accessor_storage = (__runInitializers(this, _showPreviewIcon_extraInitializers), __runInitializers(this, _status_initializers, undefined));
            __runInitializers(this, _status_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlineNoteCard = _classThis;
})();
export { OutlineNoteCard };
//# sourceMappingURL=outline-card.js.map