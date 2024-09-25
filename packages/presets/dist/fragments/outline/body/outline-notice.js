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
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SmallCloseIcon, SortingIcon } from '../../_common/icons.js';
const styles = css `
  :host {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 8px;
    padding: 0 8px;
  }
  .outline-notice-container {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    gap: 14px;
    padding: 10px;
    font-style: normal;
    font-size: 12px;
    flex-direction: column;
    border-radius: 8px;
    background-color: var(--affine-background-overlay-panel-color);
  }
  .outline-notice-header {
    display: flex;
    width: 100%;
    height: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .outline-notice-label {
    font-weight: 600;
    line-height: 20px;
    color: var(--affine-text-secondary-color);
  }
  .outline-notice-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: var(--affine-icon-color);
  }
  .outline-notice-body {
    display: flex;
    width: 100%;
    gap: 2px;
    flex-direction: column;
  }
  .outline-notice-item {
    display: flex;
    height: 20px;
    align-items: center;
    line-height: 20px;
    color: var(--affine-text-primary-color);
  }
  .outline-notice-item.notice {
    font-weight: 400;
  }
  .outline-notice-item.button {
    display: flex;
    gap: 2px;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
  .outline-notice-item.button span {
    display: flex;
    align-items: center;
    line-height: 20px;
  }
  .outline-notice-item.button svg {
    scale: 0.8;
  }
`;
export const AFFINE_OUTLINE_NOTICE = 'affine-outline-notice';
let OutlineNotice = (() => {
    let _classDecorators = [customElement(AFFINE_OUTLINE_NOTICE)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _noticeVisible_decorators;
    let _noticeVisible_initializers = [];
    let _noticeVisible_extraInitializers = [];
    let _setNoticeVisibility_decorators;
    let _setNoticeVisibility_initializers = [];
    let _setNoticeVisibility_extraInitializers = [];
    let _toggleNotesSorting_decorators;
    let _toggleNotesSorting_initializers = [];
    let _toggleNotesSorting_extraInitializers = [];
    var OutlineNotice = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _noticeVisible_decorators = [property({ attribute: false })];
            _setNoticeVisibility_decorators = [property({ attribute: false })];
            _toggleNotesSorting_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _noticeVisible_decorators, { kind: "accessor", name: "noticeVisible", static: false, private: false, access: { has: obj => "noticeVisible" in obj, get: obj => obj.noticeVisible, set: (obj, value) => { obj.noticeVisible = value; } }, metadata: _metadata }, _noticeVisible_initializers, _noticeVisible_extraInitializers);
            __esDecorate(this, null, _setNoticeVisibility_decorators, { kind: "accessor", name: "setNoticeVisibility", static: false, private: false, access: { has: obj => "setNoticeVisibility" in obj, get: obj => obj.setNoticeVisibility, set: (obj, value) => { obj.setNoticeVisibility = value; } }, metadata: _metadata }, _setNoticeVisibility_initializers, _setNoticeVisibility_extraInitializers);
            __esDecorate(this, null, _toggleNotesSorting_decorators, { kind: "accessor", name: "toggleNotesSorting", static: false, private: false, access: { has: obj => "toggleNotesSorting" in obj, get: obj => obj.toggleNotesSorting, set: (obj, value) => { obj.toggleNotesSorting = value; } }, metadata: _metadata }, _toggleNotesSorting_initializers, _toggleNotesSorting_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlineNotice = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _handleNoticeButtonClick() {
            this.toggleNotesSorting();
            this.setNoticeVisibility(false);
        }
        render() {
            if (!this.noticeVisible) {
                return nothing;
            }
            return html `<div class="outline-notice-container">
      <div class="outline-notice-header">
        <span class="outline-notice-label">SOME CONTENTS HIDDEN</span>
        <span
          class="outline-notice-close-button"
          @click=${() => this.setNoticeVisibility(false)}
          >${SmallCloseIcon}</span
        >
      </div>
      <div class="outline-notice-body">
        <div class="outline-notice-item notice">
          Some contents are not visible on edgeless.
        </div>
        <div
          class="outline-notice-item button"
          @click=${this._handleNoticeButtonClick}
        >
          <span>Click here or</span>
          <span>${SortingIcon}</span>
          <span>to organize content.</span>
        </div>
      </div>
    </div>`;
        }
        #noticeVisible_accessor_storage = __runInitializers(this, _noticeVisible_initializers, void 0);
        get noticeVisible() { return this.#noticeVisible_accessor_storage; }
        set noticeVisible(value) { this.#noticeVisible_accessor_storage = value; }
        #setNoticeVisibility_accessor_storage = (__runInitializers(this, _noticeVisible_extraInitializers), __runInitializers(this, _setNoticeVisibility_initializers, void 0));
        get setNoticeVisibility() { return this.#setNoticeVisibility_accessor_storage; }
        set setNoticeVisibility(value) { this.#setNoticeVisibility_accessor_storage = value; }
        #toggleNotesSorting_accessor_storage = (__runInitializers(this, _setNoticeVisibility_extraInitializers), __runInitializers(this, _toggleNotesSorting_initializers, void 0));
        get toggleNotesSorting() { return this.#toggleNotesSorting_accessor_storage; }
        set toggleNotesSorting(value) { this.#toggleNotesSorting_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _toggleNotesSorting_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlineNotice = _classThis;
})();
export { OutlineNotice };
//# sourceMappingURL=outline-notice.js.map