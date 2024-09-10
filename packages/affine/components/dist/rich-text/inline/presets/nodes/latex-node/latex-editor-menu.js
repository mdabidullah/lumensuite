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
import { ColorScheme } from '@blocksuite/affine-model';
import { ThemeObserver } from '@blocksuite/affine-shared/theme';
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@blocksuite/block-std';
import { noop } from '@blocksuite/global/utils';
import { DoneIcon } from '@blocksuite/icons/lit';
import { DocCollection } from '@blocksuite/store';
import { effect, signal } from '@lit-labs/preact-signals';
import { cssVar } from '@toeverything/theme';
import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { codeToTokensBase } from 'shiki';
import { InlineManagerExtension } from '../../../../extension/index.js';
import { LatexEditorUnitSpecExtension } from '../../affine-inline-specs.js';
export const LatexEditorInlineManagerExtension = InlineManagerExtension({
    id: 'latex-inline-editor',
    enableMarkdown: false,
    specs: [LatexEditorUnitSpecExtension.identifier],
});
let LatexEditorMenu = (() => {
    let _classDecorators = [customElement('latex-editor-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _latexSignal_decorators;
    let _latexSignal_initializers = [];
    let _latexSignal_extraInitializers = [];
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    var LatexEditorMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _abortController_decorators = [property({ attribute: false })];
            _latexSignal_decorators = [property({ attribute: false })];
            _std_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _latexSignal_decorators, { kind: "accessor", name: "latexSignal", static: false, private: false, access: { has: obj => "latexSignal" in obj, get: obj => obj.latexSignal, set: (obj, value) => { obj.latexSignal = value; } }, metadata: _metadata }, _latexSignal_initializers, _latexSignal_extraInitializers);
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LatexEditorMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .latex-editor-container {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto;
      grid-template-areas:
        'editor-box confirm-box'
        'hint-box hint-box';

      padding: 8px;
      border-radius: 8px;
      border: 0.5px solid ${unsafeCSS(cssVar('borderColor'))};
      background: ${unsafeCSS(cssVar('backgroundOverlayPanelColor'))};

      /* light/toolbarShadow */
      box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.14);
    }

    .latex-editor {
      grid-area: editor-box;
      width: 280px;
      padding: 4px 10px;

      border-radius: 4px;
      background: ${unsafeCSS(cssVar('white10'))};

      /* light/activeShadow */
      box-shadow: 0px 0px 0px 2px rgba(30, 150, 235, 0.3);

      font-family: ${unsafeCSS(cssVar('fontCodeFamily'))};
    }
    .latex-editor:focus-within {
      border: 1px solid ${unsafeCSS(cssVar('blue700'))};
    }

    .latex-editor-confirm {
      grid-area: confirm-box;
      display: flex;
      align-items: flex-end;
      padding-left: 10px;
    }

    .latex-editor-hint {
      grid-area: hint-box;
      padding-top: 6px;

      color: ${unsafeCSS(cssVar('placeholderColor'))};

      /* MobileTypeface/caption */
      font-family: 'SF Pro Text';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
      letter-spacing: -0.24px;
    }
  `; }
        get inlineManager() {
            return this.std.get(LatexEditorInlineManagerExtension.identifier);
        }
        get richText() {
            return this.querySelector('rich-text');
        }
        _updateHighlightTokens(text) {
            const theme = ThemeObserver.instance.mode$.value === ColorScheme.Dark
                ? 'dark-plus'
                : 'light-plus';
            codeToTokensBase(text, {
                lang: 'latex',
                theme,
            })
                .then(token => {
                this.highlightTokens$.value = token;
            })
                .catch(console.error);
        }
        connectedCallback() {
            super.connectedCallback();
            const doc = new DocCollection.Y.Doc();
            this.yText = doc.getText('latex');
            this.yText.insert(0, this.latexSignal.value);
            const yTextObserver = () => {
                const text = this.yText.toString();
                this.latexSignal.value = text;
                this._updateHighlightTokens(text);
            };
            this.yText.observe(yTextObserver);
            this.disposables.add(() => {
                this.yText.unobserve(yTextObserver);
            });
            this.disposables.add(effect(() => {
                noop(this.highlightTokens$.value);
                this.richText?.inlineEditor?.requestUpdate();
            }));
            this.disposables.add(ThemeObserver.subscribe(() => {
                this._updateHighlightTokens(this.yText.toString());
            }));
            this.disposables.addFromEvent(this, 'keydown', e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.abortController.abort();
                }
            });
            this.updateComplete
                .then(async () => {
                await this.richText?.updateComplete;
                this.richText?.inlineEditorContainer.focus();
                this.richText?.inlineEditor?.focusEnd();
            })
                .catch(console.error);
        }
        render() {
            return html `<div class="latex-editor-container">
      <div class="latex-editor">
        <rich-text
          .yText=${this.yText}
          .attributesSchema=${this.inlineManager.getSchema()}
          .attributeRenderer=${this.inlineManager.getRenderer()}
        ></rich-text>
      </div>
      <div class="latex-editor-confirm">
        ${DoneIcon({
                width: '24',
                height: '24',
            })}
      </div>
      <div class="latex-editor-hint">Shift Enter to line break</div>
    </div>`;
        }
        #abortController_accessor_storage;
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #latexSignal_accessor_storage;
        get latexSignal() { return this.#latexSignal_accessor_storage; }
        set latexSignal(value) { this.#latexSignal_accessor_storage = value; }
        #std_accessor_storage;
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.highlightTokens$ = signal([]);
            this.#abortController_accessor_storage = __runInitializers(this, _abortController_initializers, void 0);
            this.#latexSignal_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _latexSignal_initializers, void 0));
            this.#std_accessor_storage = (__runInitializers(this, _latexSignal_extraInitializers), __runInitializers(this, _std_initializers, void 0));
            __runInitializers(this, _std_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LatexEditorMenu = _classThis;
})();
export { LatexEditorMenu };
//# sourceMappingURL=latex-editor-menu.js.map