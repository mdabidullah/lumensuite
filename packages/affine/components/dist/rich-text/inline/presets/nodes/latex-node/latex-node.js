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
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@lumensuite/block-std';
import { ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_SPACE, } from '@lumensuite/inline';
import { effect, signal } from '@lit-labs/preact-signals';
import { cssVar } from '@toeverything/theme';
import { cssVarV2 } from '@toeverything/theme/v2';
import katex from 'katex';
import { css, html, render, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createLitPortal } from '../../../../../portal/helper.js';
import './latex-editor-menu.js';
import './latex-editor-unit.js';
let AffineLatexNode = (() => {
    let _classDecorators = [customElement('affine-latex-node')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    let _endOffset_decorators;
    let _endOffset_initializers = [];
    let _endOffset_extraInitializers = [];
    let _selected_decorators;
    let _selected_initializers = [];
    let _selected_extraInitializers = [];
    let _startOffset_decorators;
    let _startOffset_initializers = [];
    let _startOffset_extraInitializers = [];
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    var AffineLatexNode = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ attribute: false })];
            _editor_decorators = [property({ attribute: false })];
            _endOffset_decorators = [property({ attribute: false })];
            _selected_decorators = [property({ attribute: false })];
            _startOffset_decorators = [property({ attribute: false })];
            _std_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(this, null, _endOffset_decorators, { kind: "accessor", name: "endOffset", static: false, private: false, access: { has: obj => "endOffset" in obj, get: obj => obj.endOffset, set: (obj, value) => { obj.endOffset = value; } }, metadata: _metadata }, _endOffset_initializers, _endOffset_extraInitializers);
            __esDecorate(this, null, _selected_decorators, { kind: "accessor", name: "selected", static: false, private: false, access: { has: obj => "selected" in obj, get: obj => obj.selected, set: (obj, value) => { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _selected_extraInitializers);
            __esDecorate(this, null, _startOffset_decorators, { kind: "accessor", name: "startOffset", static: false, private: false, access: { has: obj => "startOffset" in obj, get: obj => obj.startOffset, set: (obj, value) => { obj.startOffset = value; } }, metadata: _metadata }, _startOffset_initializers, _startOffset_extraInitializers);
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineLatexNode = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-latex-node {
      display: inline-block;
    }

    affine-latex-node .affine-latex {
      white-space: nowrap;
      word-break: break-word;
      color: ${unsafeCSS(cssVar('textPrimaryColor'))};
      fill: var(--affine-icon-color);
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      padding: 1px 2px 1px 0;
      display: grid;
      grid-template-columns: auto 0;
      place-items: center;
      padding: 0 4px;
      margin: 0 2px;
    }
    affine-latex-node .affine-latex:hover {
      background: ${unsafeCSS(cssVar('hoverColor'))};
    }
    affine-latex-node .affine-latex[data-selected='true'] {
      background: ${unsafeCSS(cssVar('hoverColor'))};
    }

    affine-latex-node .error-placeholder {
      display: flex;
      padding: 2px 4px;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;

      border-radius: 4px;
      background: ${unsafeCSS(cssVarV2('label/red'))};

      color: ${unsafeCSS(cssVarV2('text/highlight/fg/red'))};
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }

    affine-latex-node .placeholder {
      display: flex;
      padding: 2px 4px;
      justify-content: center;
      align-items: flex-start;

      border-radius: 4px;
      background: ${unsafeCSS(cssVarV2('layer/background/secondary'))};

      color: ${unsafeCSS(cssVarV2('text/secondary'))};
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }
  `; }
        get deltaLatex() {
            return this.delta.attributes?.latex;
        }
        get latexContainer() {
            return this.querySelector('.latex-container');
        }
        connectedCallback() {
            const result = super.connectedCallback();
            this.latex$.value = this.deltaLatex;
            this.disposables.add(effect(() => {
                const latex = this.latex$.value;
                if (latex !== this.deltaLatex) {
                    this.editor.formatText({
                        index: this.startOffset,
                        length: this.endOffset - this.startOffset,
                    }, {
                        latex,
                    });
                }
                this.updateComplete
                    .then(() => {
                    const latexContainer = this.latexContainer;
                    if (!latexContainer)
                        return;
                    latexContainer.replaceChildren();
                    // @ts-ignore
                    delete latexContainer['_$litPart$'];
                    if (latex.length === 0) {
                        render(html `<span class="placeholder">Equation</span>`, latexContainer);
                    }
                    else {
                        try {
                            katex.render(latex, latexContainer, {
                                displayMode: true,
                                output: 'mathml',
                            });
                        }
                        catch {
                            latexContainer.replaceChildren();
                            // @ts-ignore
                            delete latexContainer['_$litPart$'];
                            render(html `<span class="error-placeholder">Error equation</span>`, latexContainer);
                        }
                    }
                })
                    .catch(console.error);
            }));
            this._editorAbortController?.abort();
            this._editorAbortController = new AbortController();
            this.disposables.add(() => {
                this._editorAbortController?.abort();
            });
            this.disposables.addFromEvent(this, 'click', e => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleEditor();
            });
            return result;
        }
        render() {
            return html `<span class="affine-latex" data-selected=${this.selected}
      ><div class="latex-container"></div>
      <v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text
    ></span>`;
        }
        toggleEditor() {
            const blockComponent = this.closest('[data-block-id]');
            if (!blockComponent)
                return;
            this._editorAbortController?.abort();
            this._editorAbortController = new AbortController();
            const portal = createLitPortal({
                template: html `<latex-editor-menu
        .std=${this.std}
        .latexSignal=${this.latex$}
        .abortController=${this._editorAbortController}
      ></latex-editor-menu>`,
                container: blockComponent.host,
                computePosition: {
                    referenceElement: this,
                    placement: 'bottom-start',
                    autoUpdate: {
                        animationFrame: true,
                    },
                },
                closeOnClickAway: true,
                abortController: this._editorAbortController,
                shadowDom: false,
                portalStyles: {
                    zIndex: 'var(--affine-z-index-popover)',
                },
            });
            this._editorAbortController.signal.addEventListener('abort', () => {
                portal.remove();
            }, { once: true });
        }
        #delta_accessor_storage;
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        #endOffset_accessor_storage;
        get endOffset() { return this.#endOffset_accessor_storage; }
        set endOffset(value) { this.#endOffset_accessor_storage = value; }
        #selected_accessor_storage;
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        #startOffset_accessor_storage;
        get startOffset() { return this.#startOffset_accessor_storage; }
        set startOffset(value) { this.#startOffset_accessor_storage = value; }
        #std_accessor_storage;
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._editorAbortController = null;
            this.latex$ = signal('');
            this.#delta_accessor_storage = __runInitializers(this, _delta_initializers, {
                insert: ZERO_WIDTH_SPACE,
            });
            this.#editor_accessor_storage = (__runInitializers(this, _delta_extraInitializers), __runInitializers(this, _editor_initializers, void 0));
            this.#endOffset_accessor_storage = (__runInitializers(this, _editor_extraInitializers), __runInitializers(this, _endOffset_initializers, void 0));
            this.#selected_accessor_storage = (__runInitializers(this, _endOffset_extraInitializers), __runInitializers(this, _selected_initializers, false));
            this.#startOffset_accessor_storage = (__runInitializers(this, _selected_extraInitializers), __runInitializers(this, _startOffset_initializers, void 0));
            this.#std_accessor_storage = (__runInitializers(this, _startOffset_extraInitializers), __runInitializers(this, _std_initializers, void 0));
            __runInitializers(this, _std_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineLatexNode = _classThis;
})();
export { AffineLatexNode };
//# sourceMappingURL=latex-node.js.map