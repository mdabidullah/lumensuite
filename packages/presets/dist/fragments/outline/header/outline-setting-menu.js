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
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const styles = css `
  :host {
    display: block;
    box-sizing: border-box;
    padding: 8px;
    width: 220px;
  }

  .note-preview-setting-menu-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
  }

  .note-preview-setting-menu-item {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    padding: 4px 12px;
    align-items: center;
  }

  .note-preview-setting-menu-item .setting-label {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: var(--affine-text-secondary-color);
    padding: 0 4px;
  }

  .note-preview-setting-menu-item.action {
    gap: 4px;
  }

  .note-preview-setting-menu-item .action-label {
    width: 138px;
    height: 20px;
    padding: 0 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: var(--affine-text-primary-color);
  }

  .note-preview-setting-menu-item .toggle-button {
    display: flex;
  }
`;
export const AFFINE_OUTLINE_NOTE_PREVIEW_SETTING_MENU = 'affine-outline-note-preview-setting-menu';
let OutlineNotePreviewSettingMenu = (() => {
    let _classDecorators = [customElement(AFFINE_OUTLINE_NOTE_PREVIEW_SETTING_MENU)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _showPreviewIcon_decorators;
    let _showPreviewIcon_initializers = [];
    let _showPreviewIcon_extraInitializers = [];
    let _toggleShowPreviewIcon_decorators;
    let _toggleShowPreviewIcon_initializers = [];
    let _toggleShowPreviewIcon_extraInitializers = [];
    var OutlineNotePreviewSettingMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _showPreviewIcon_decorators = [property({ attribute: false })];
            _toggleShowPreviewIcon_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _showPreviewIcon_decorators, { kind: "accessor", name: "showPreviewIcon", static: false, private: false, access: { has: obj => "showPreviewIcon" in obj, get: obj => obj.showPreviewIcon, set: (obj, value) => { obj.showPreviewIcon = value; } }, metadata: _metadata }, _showPreviewIcon_initializers, _showPreviewIcon_extraInitializers);
            __esDecorate(this, null, _toggleShowPreviewIcon_decorators, { kind: "accessor", name: "toggleShowPreviewIcon", static: false, private: false, access: { has: obj => "toggleShowPreviewIcon" in obj, get: obj => obj.toggleShowPreviewIcon, set: (obj, value) => { obj.toggleShowPreviewIcon = value; } }, metadata: _metadata }, _toggleShowPreviewIcon_initializers, _toggleShowPreviewIcon_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlineNotePreviewSettingMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        render() {
            return html `<div
      class="note-preview-setting-menu-container"
      @click=${(e) => e.stopPropagation()}
    >
      <div class="note-preview-setting-menu-item">
        <div class="setting-label">Settings</div>
      </div>
      <div class="note-preview-setting-menu-item action">
        <div class="action-label">Show type icon</div>
        <div class="toggle-button">
          <toggle-switch
            .on=${this.showPreviewIcon}
            .onChange=${this.toggleShowPreviewIcon}
          ></toggle-switch>
        </div>
      </div>
    </div>`;
        }
        #showPreviewIcon_accessor_storage = __runInitializers(this, _showPreviewIcon_initializers, void 0);
        get showPreviewIcon() { return this.#showPreviewIcon_accessor_storage; }
        set showPreviewIcon(value) { this.#showPreviewIcon_accessor_storage = value; }
        #toggleShowPreviewIcon_accessor_storage = (__runInitializers(this, _showPreviewIcon_extraInitializers), __runInitializers(this, _toggleShowPreviewIcon_initializers, void 0));
        get toggleShowPreviewIcon() { return this.#toggleShowPreviewIcon_accessor_storage; }
        set toggleShowPreviewIcon(value) { this.#toggleShowPreviewIcon_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _toggleShowPreviewIcon_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlineNotePreviewSettingMenu = _classThis;
})();
export { OutlineNotePreviewSettingMenu };
//# sourceMappingURL=outline-setting-menu.js.map