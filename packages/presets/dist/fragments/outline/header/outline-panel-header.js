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
import { WithDisposable } from '@blocksuite/block-std';
import { createButtonPopper } from '@blocksuite/blocks';
import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { SettingsIcon, SortingIcon } from '../../_common/icons.js';
import './outline-setting-menu.js';
const styles = css `
  :host {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px 16px;
  }

  .outline-panel-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-right: 6px;
  }

  .note-setting-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .outline-panel-header-label {
    width: 119px;
    height: 22px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: var(--affine-text-secondary-color, #8e8d91);
  }

  .note-sorting-button {
    justify-self: end;
  }

  .note-setting-button svg,
  .note-sorting-button svg {
    color: var(--affine-icon-secondary);
  }

  .note-setting-button:hover svg,
  .note-setting-button.active svg,
  .note-sorting-button:hover svg {
    color: var(--affine-icon-color);
  }

  .note-sorting-button.active svg {
    color: var(--affine-primary-color);
  }

  .note-preview-setting-container {
    display: none;
    justify-content: center;
    align-items: center;
    background: var(--affine-background-overlay-panel-color);
    box-shadow: var(--affine-shadow-2);
    border-radius: 8px;
  }

  .note-preview-setting-container[data-show] {
    display: flex;
  }
`;
export const AFFINE_OUTLINE_PANEL_HEADER = 'affine-outline-panel-header';
let OutlinePanelHeader = (() => {
    let _classDecorators = [customElement(AFFINE_OUTLINE_PANEL_HEADER)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __notePreviewSettingMenu_decorators;
    let __notePreviewSettingMenu_initializers = [];
    let __notePreviewSettingMenu_extraInitializers = [];
    let __noteSettingButton_decorators;
    let __noteSettingButton_initializers = [];
    let __noteSettingButton_extraInitializers = [];
    let __settingPopperShow_decorators;
    let __settingPopperShow_initializers = [];
    let __settingPopperShow_extraInitializers = [];
    let _enableNotesSorting_decorators;
    let _enableNotesSorting_initializers = [];
    let _enableNotesSorting_extraInitializers = [];
    let _showPreviewIcon_decorators;
    let _showPreviewIcon_initializers = [];
    let _showPreviewIcon_extraInitializers = [];
    let _toggleNotesSorting_decorators;
    let _toggleNotesSorting_initializers = [];
    let _toggleNotesSorting_extraInitializers = [];
    let _toggleShowPreviewIcon_decorators;
    let _toggleShowPreviewIcon_initializers = [];
    let _toggleShowPreviewIcon_extraInitializers = [];
    var OutlinePanelHeader = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __notePreviewSettingMenu_decorators = [query('.note-preview-setting-container')];
            __noteSettingButton_decorators = [query('.note-setting-button')];
            __settingPopperShow_decorators = [state()];
            _enableNotesSorting_decorators = [property({ attribute: false })];
            _showPreviewIcon_decorators = [property({ attribute: false })];
            _toggleNotesSorting_decorators = [property({ attribute: false })];
            _toggleShowPreviewIcon_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __notePreviewSettingMenu_decorators, { kind: "accessor", name: "_notePreviewSettingMenu", static: false, private: false, access: { has: obj => "_notePreviewSettingMenu" in obj, get: obj => obj._notePreviewSettingMenu, set: (obj, value) => { obj._notePreviewSettingMenu = value; } }, metadata: _metadata }, __notePreviewSettingMenu_initializers, __notePreviewSettingMenu_extraInitializers);
            __esDecorate(this, null, __noteSettingButton_decorators, { kind: "accessor", name: "_noteSettingButton", static: false, private: false, access: { has: obj => "_noteSettingButton" in obj, get: obj => obj._noteSettingButton, set: (obj, value) => { obj._noteSettingButton = value; } }, metadata: _metadata }, __noteSettingButton_initializers, __noteSettingButton_extraInitializers);
            __esDecorate(this, null, __settingPopperShow_decorators, { kind: "accessor", name: "_settingPopperShow", static: false, private: false, access: { has: obj => "_settingPopperShow" in obj, get: obj => obj._settingPopperShow, set: (obj, value) => { obj._settingPopperShow = value; } }, metadata: _metadata }, __settingPopperShow_initializers, __settingPopperShow_extraInitializers);
            __esDecorate(this, null, _enableNotesSorting_decorators, { kind: "accessor", name: "enableNotesSorting", static: false, private: false, access: { has: obj => "enableNotesSorting" in obj, get: obj => obj.enableNotesSorting, set: (obj, value) => { obj.enableNotesSorting = value; } }, metadata: _metadata }, _enableNotesSorting_initializers, _enableNotesSorting_extraInitializers);
            __esDecorate(this, null, _showPreviewIcon_decorators, { kind: "accessor", name: "showPreviewIcon", static: false, private: false, access: { has: obj => "showPreviewIcon" in obj, get: obj => obj.showPreviewIcon, set: (obj, value) => { obj.showPreviewIcon = value; } }, metadata: _metadata }, _showPreviewIcon_initializers, _showPreviewIcon_extraInitializers);
            __esDecorate(this, null, _toggleNotesSorting_decorators, { kind: "accessor", name: "toggleNotesSorting", static: false, private: false, access: { has: obj => "toggleNotesSorting" in obj, get: obj => obj.toggleNotesSorting, set: (obj, value) => { obj.toggleNotesSorting = value; } }, metadata: _metadata }, _toggleNotesSorting_initializers, _toggleNotesSorting_extraInitializers);
            __esDecorate(this, null, _toggleShowPreviewIcon_decorators, { kind: "accessor", name: "toggleShowPreviewIcon", static: false, private: false, access: { has: obj => "toggleShowPreviewIcon" in obj, get: obj => obj.toggleShowPreviewIcon, set: (obj, value) => { obj.toggleShowPreviewIcon = value; } }, metadata: _metadata }, _toggleShowPreviewIcon_initializers, _toggleShowPreviewIcon_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlinePanelHeader = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        firstUpdated() {
            const _disposables = this._disposables;
            this._notePreviewSettingMenuPopper = createButtonPopper(this._noteSettingButton, this._notePreviewSettingMenu, ({ display }) => {
                this._settingPopperShow = display === 'show';
            }, {
                mainAxis: 14,
                crossAxis: -30,
            });
            _disposables.add(this._notePreviewSettingMenuPopper);
        }
        render() {
            return html `<div class="outline-panel-header-container">
        <div class="note-setting-container">
          <span class="outline-panel-header-label">Table of Contents</span>
          <edgeless-tool-icon-button
            class="note-setting-button ${this._settingPopperShow
                ? 'active'
                : ''}"
            .tooltip=${this._settingPopperShow ? '' : 'Preview Settings'}
            .tipPosition=${'bottom'}
            .active=${this._settingPopperShow}
            .activeMode=${'background'}
            @click=${() => this._notePreviewSettingMenuPopper?.toggle()}
          >
            ${SettingsIcon}
          </edgeless-tool-icon-button>
        </div>
        <edgeless-tool-icon-button
          class="note-sorting-button ${this.enableNotesSorting ? 'active' : ''}"
          .tooltip=${'Note Sort Options'}
          .tipPosition=${'left'}
          .iconContainerPadding=${0}
          .active=${this.enableNotesSorting}
          .activeMode=${'color'}
          @click=${() => this.toggleNotesSorting()}
        >
          ${SortingIcon}
        </edgeless-tool-icon-button>
      </div>
      <div class="note-preview-setting-container">
        <affine-outline-note-preview-setting-menu
          .showPreviewIcon=${this.showPreviewIcon}
          .toggleShowPreviewIcon=${this.toggleShowPreviewIcon}
        ></affine-outline-note-preview-setting-menu>
      </div>`;
        }
        #_notePreviewSettingMenu_accessor_storage;
        get _notePreviewSettingMenu() { return this.#_notePreviewSettingMenu_accessor_storage; }
        set _notePreviewSettingMenu(value) { this.#_notePreviewSettingMenu_accessor_storage = value; }
        #_noteSettingButton_accessor_storage;
        get _noteSettingButton() { return this.#_noteSettingButton_accessor_storage; }
        set _noteSettingButton(value) { this.#_noteSettingButton_accessor_storage = value; }
        #_settingPopperShow_accessor_storage;
        get _settingPopperShow() { return this.#_settingPopperShow_accessor_storage; }
        set _settingPopperShow(value) { this.#_settingPopperShow_accessor_storage = value; }
        #enableNotesSorting_accessor_storage;
        get enableNotesSorting() { return this.#enableNotesSorting_accessor_storage; }
        set enableNotesSorting(value) { this.#enableNotesSorting_accessor_storage = value; }
        #showPreviewIcon_accessor_storage;
        get showPreviewIcon() { return this.#showPreviewIcon_accessor_storage; }
        set showPreviewIcon(value) { this.#showPreviewIcon_accessor_storage = value; }
        #toggleNotesSorting_accessor_storage;
        get toggleNotesSorting() { return this.#toggleNotesSorting_accessor_storage; }
        set toggleNotesSorting(value) { this.#toggleNotesSorting_accessor_storage = value; }
        #toggleShowPreviewIcon_accessor_storage;
        get toggleShowPreviewIcon() { return this.#toggleShowPreviewIcon_accessor_storage; }
        set toggleShowPreviewIcon(value) { this.#toggleShowPreviewIcon_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._notePreviewSettingMenuPopper = null;
            this.#_notePreviewSettingMenu_accessor_storage = __runInitializers(this, __notePreviewSettingMenu_initializers, void 0);
            this.#_noteSettingButton_accessor_storage = (__runInitializers(this, __notePreviewSettingMenu_extraInitializers), __runInitializers(this, __noteSettingButton_initializers, void 0));
            this.#_settingPopperShow_accessor_storage = (__runInitializers(this, __noteSettingButton_extraInitializers), __runInitializers(this, __settingPopperShow_initializers, false));
            this.#enableNotesSorting_accessor_storage = (__runInitializers(this, __settingPopperShow_extraInitializers), __runInitializers(this, _enableNotesSorting_initializers, void 0));
            this.#showPreviewIcon_accessor_storage = (__runInitializers(this, _enableNotesSorting_extraInitializers), __runInitializers(this, _showPreviewIcon_initializers, void 0));
            this.#toggleNotesSorting_accessor_storage = (__runInitializers(this, _showPreviewIcon_extraInitializers), __runInitializers(this, _toggleNotesSorting_initializers, void 0));
            this.#toggleShowPreviewIcon_accessor_storage = (__runInitializers(this, _toggleNotesSorting_extraInitializers), __runInitializers(this, _toggleShowPreviewIcon_initializers, void 0));
            __runInitializers(this, _toggleShowPreviewIcon_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlinePanelHeader = _classThis;
})();
export { OutlinePanelHeader };
//# sourceMappingURL=outline-panel-header.js.map