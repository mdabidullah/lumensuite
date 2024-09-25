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
import { WithDisposable } from '@lumensuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
const styles = css `
  :host {
    display: block;
    box-sizing: border-box;
    padding: 8px;
    width: 220px;
  }

  .frames-setting-menu-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
  }

  .frames-setting-menu-item {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    padding: 4px 12px;
    align-items: center;
  }

  .frames-setting-menu-item .setting-label {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: var(--affine-text-secondary-color);
    padding: 0 4px;
  }

  .frames-setting-menu-divider {
    width: 100%;
    height: 1px;
    box-sizing: border-box;
    background: var(--affine-border-color);
    margin: 8px 0;
  }

  .frames-setting-menu-item.action {
    gap: 4px;
  }

  .frames-setting-menu-item .action-label {
    width: 138px;
    height: 20px;
    padding: 0 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: var(--affine-text-primary-color);
  }

  .frames-setting-menu-item .toggle-button {
    display: flex;
  }

  menu-divider {
    height: 16px;
  }
`;
export const AFFINE_FRAMES_SETTING_MENU = 'affine-frames-setting-menu';
let FramesSettingMenu = (() => {
    let _classDecorators = [customElement(AFFINE_FRAMES_SETTING_MENU)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _blackBackground_decorators;
    let _blackBackground_initializers = [];
    let _blackBackground_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _editorHost_decorators;
    let _editorHost_initializers = [];
    let _editorHost_extraInitializers = [];
    let _fillScreen_decorators;
    let _fillScreen_initializers = [];
    let _fillScreen_extraInitializers = [];
    let _hideToolbar_decorators;
    let _hideToolbar_initializers = [];
    let _hideToolbar_extraInitializers = [];
    var FramesSettingMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _blackBackground_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            _editorHost_decorators = [property({ attribute: false })];
            _fillScreen_decorators = [state()];
            _hideToolbar_decorators = [state()];
            __esDecorate(this, null, _blackBackground_decorators, { kind: "accessor", name: "blackBackground", static: false, private: false, access: { has: obj => "blackBackground" in obj, get: obj => obj.blackBackground, set: (obj, value) => { obj.blackBackground = value; } }, metadata: _metadata }, _blackBackground_initializers, _blackBackground_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _editorHost_decorators, { kind: "accessor", name: "editorHost", static: false, private: false, access: { has: obj => "editorHost" in obj, get: obj => obj.editorHost, set: (obj, value) => { obj.editorHost = value; } }, metadata: _metadata }, _editorHost_initializers, _editorHost_extraInitializers);
            __esDecorate(this, null, _fillScreen_decorators, { kind: "accessor", name: "fillScreen", static: false, private: false, access: { has: obj => "fillScreen" in obj, get: obj => obj.fillScreen, set: (obj, value) => { obj.fillScreen = value; } }, metadata: _metadata }, _fillScreen_initializers, _fillScreen_extraInitializers);
            __esDecorate(this, null, _hideToolbar_decorators, { kind: "accessor", name: "hideToolbar", static: false, private: false, access: { has: obj => "hideToolbar" in obj, get: obj => obj.hideToolbar, set: (obj, value) => { obj.hideToolbar = value; } }, metadata: _metadata }, _hideToolbar_initializers, _hideToolbar_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FramesSettingMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get _rootService() {
            return this.editorHost.std.getService('affine:page');
        }
        _tryRestoreSettings() {
            const { editPropsStore } = this._rootService;
            const blackBackground = editPropsStore.getStorage('presentBlackBackground');
            this.blackBackground = blackBackground ?? true;
            this.fillScreen = editPropsStore.getStorage('presentFillScreen') ?? false;
            this.hideToolbar = editPropsStore.getStorage('presentHideToolbar') ?? false;
        }
        connectedCallback() {
            super.connectedCallback();
            this._tryRestoreSettings();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
        }
        render() {
            return html `<div
      class="frames-setting-menu-container"
      @click=${(e) => {
                e.stopPropagation();
            }}
    >
      <div class="frames-setting-menu-item">
        <div class="setting-label">Preview Settings</div>
      </div>
      <div class="frames-setting-menu-item action">
        <div class="action-label">Fill Screen</div>
        <div class="toggle-button">
          <toggle-switch
            .on=${this.fillScreen}
            .onChange=${this._onFillScreenChange}
          ></toggle-switch>
        </div>
      </div>

      <menu-divider></menu-divider>

      <div class="frames-setting-menu-item">
        <div class="setting-label">Playback Settings</div>
      </div>
      <div class="frames-setting-menu-item action">
        <div class="action-label">Dark background</div>
        <div class="toggle-button">
          <toggle-switch
            .on=${this.blackBackground}
            .onChange=${this._onBlackBackgroundChange}
          ></toggle-switch>
        </div>
      </div>
      <div class="frames-setting-menu-item action">
        <div class="action-label">Hide toolbar</div>
        <div class="toggle-button">
          <toggle-switch
            .on=${this.hideToolbar}
            .onChange=${this._onHideToolBarChange}
          ></toggle-switch>
        </div>
      </div>
    </div>`;
        }
        updated(_changedProperties) {
            if (_changedProperties.has('edgeless')) {
                if (this.edgeless) {
                    this.disposables.add(this.edgeless.slots.navigatorSettingUpdated.on(({ blackBackground, hideToolbar }) => {
                        if (blackBackground !== undefined &&
                            blackBackground !== this.blackBackground) {
                            this.blackBackground = blackBackground;
                        }
                        if (hideToolbar !== undefined &&
                            hideToolbar !== this.hideToolbar) {
                            this.hideToolbar = hideToolbar;
                        }
                    }));
                }
                else {
                    this.disposables.dispose();
                }
            }
        }
        #blackBackground_accessor_storage;
        get blackBackground() { return this.#blackBackground_accessor_storage; }
        set blackBackground(value) { this.#blackBackground_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #editorHost_accessor_storage;
        get editorHost() { return this.#editorHost_accessor_storage; }
        set editorHost(value) { this.#editorHost_accessor_storage = value; }
        #fillScreen_accessor_storage;
        get fillScreen() { return this.#fillScreen_accessor_storage; }
        set fillScreen(value) { this.#fillScreen_accessor_storage = value; }
        #hideToolbar_accessor_storage;
        get hideToolbar() { return this.#hideToolbar_accessor_storage; }
        set hideToolbar(value) { this.#hideToolbar_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._onBlackBackgroundChange = (checked) => {
                this.blackBackground = checked;
                this.edgeless?.slots.navigatorSettingUpdated.emit({
                    blackBackground: this.blackBackground,
                });
            };
            this._onFillScreenChange = (checked) => {
                this.fillScreen = checked;
                this.edgeless?.slots.navigatorSettingUpdated.emit({
                    fillScreen: this.fillScreen,
                });
                this._rootService.editPropsStore.setStorage('presentFillScreen', this.fillScreen);
            };
            this._onHideToolBarChange = (checked) => {
                this.hideToolbar = checked;
                this.edgeless?.slots.navigatorSettingUpdated.emit({
                    hideToolbar: this.hideToolbar,
                });
                this._rootService.editPropsStore.setStorage('presentHideToolbar', this.hideToolbar);
            };
            this.#blackBackground_accessor_storage = __runInitializers(this, _blackBackground_initializers, false);
            this.#edgeless_accessor_storage = (__runInitializers(this, _blackBackground_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#editorHost_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _editorHost_initializers, void 0));
            this.#fillScreen_accessor_storage = (__runInitializers(this, _editorHost_extraInitializers), __runInitializers(this, _fillScreen_initializers, false));
            this.#hideToolbar_accessor_storage = (__runInitializers(this, _fillScreen_extraInitializers), __runInitializers(this, _hideToolbar_initializers, false));
            __runInitializers(this, _hideToolbar_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FramesSettingMenu = _classThis;
})();
export { FramesSettingMenu };
//# sourceMappingURL=frames-setting-menu.js.map