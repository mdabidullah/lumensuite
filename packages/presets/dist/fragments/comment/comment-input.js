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
import { ShadowlessElement, WithDisposable } from '@lumensuite/block-std';
import { DocCollection } from '@lumensuite/store';
import { css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
let CommentInput = (() => {
    let _classDecorators = [customElement('comment-input')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __editor_decorators;
    let __editor_initializers = [];
    let __editor_extraInitializers = [];
    let _manager_decorators;
    let _manager_initializers = [];
    let _manager_extraInitializers = [];
    let _onSubmit_decorators;
    let _onSubmit_initializers = [];
    let _onSubmit_extraInitializers = [];
    var CommentInput = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __editor_decorators = [query('rich-text')];
            _manager_decorators = [property({ attribute: false })];
            _onSubmit_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __editor_decorators, { kind: "accessor", name: "_editor", static: false, private: false, access: { has: obj => "_editor" in obj, get: obj => obj._editor, set: (obj, value) => { obj._editor = value; } }, metadata: _metadata }, __editor_initializers, __editor_extraInitializers);
            __esDecorate(this, null, _manager_decorators, { kind: "accessor", name: "manager", static: false, private: false, access: { has: obj => "manager" in obj, get: obj => obj.manager, set: (obj, value) => { obj.manager = value; } }, metadata: _metadata }, _manager_initializers, _manager_extraInitializers);
            __esDecorate(this, null, _onSubmit_decorators, { kind: "accessor", name: "onSubmit", static: false, private: false, access: { has: obj => "onSubmit" in obj, get: obj => obj.onSubmit, set: (obj, value) => { obj.onSubmit = value; } }, metadata: _metadata }, _onSubmit_initializers, _onSubmit_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CommentInput = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .comment-input-container {
      padding: 16px;
    }

    .comment-quote {
      font-size: 10px;
      color: var(--affine-text-secondary-color);
      padding-left: 8px;
      border-left: 2px solid var(--affine-text-secondary-color);
      margin-bottom: 8px;
    }

    .comment-author {
      font-size: 12px;
    }

    .comment-editor {
      white-space: pre-wrap;
      overflow-wrap: break-word;
      min-height: 24px;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    .comment-control {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
  `; }
        get host() {
            return this.manager.host;
        }
        render() {
            const textSelection = this.host.selection.find('text');
            if (!textSelection) {
                this.remove();
                return nothing;
            }
            const parseResult = this.manager.parseTextSelection(textSelection);
            if (!parseResult) {
                this.remove();
                return nothing;
            }
            const { quote } = parseResult;
            const tmpYDoc = new DocCollection.Y.Doc();
            const tmpYText = tmpYDoc.getText('comment');
            return html `<div class="comment-input-container">
      <div class="comment-state">
        <div class="comment-quote">${quote}</div>
        <div class="comment-author">Anonymous</div>
      </div>
      <rich-text
        @blur=${() => this._submit(textSelection)}
        .yText=${tmpYText}
        class="comment-editor"
      ></rich-text>
      <div class="comment-control">
        <button
          @click=${() => this._submit(textSelection)}
          class="comment-submit"
        >
          Submit
        </button>
        <button @click=${this._cancel} class="comment-cancel">Cancel</button>
      </div>
    </div>`;
        }
        #_editor_accessor_storage;
        get _editor() { return this.#_editor_accessor_storage; }
        set _editor(value) { this.#_editor_accessor_storage = value; }
        #manager_accessor_storage;
        get manager() { return this.#manager_accessor_storage; }
        set manager(value) { this.#manager_accessor_storage = value; }
        #onSubmit_accessor_storage;
        get onSubmit() { return this.#onSubmit_accessor_storage; }
        set onSubmit(value) { this.#onSubmit_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._cancel = () => {
                this.remove();
            };
            this._submit = (textSelection) => {
                const deltas = this._editor.inlineEditor?.yTextDeltas;
                if (!deltas) {
                    this.remove();
                    return;
                }
                const yText = new DocCollection.Y.Text();
                yText.applyDelta(deltas);
                const comment = this.manager.addComment(textSelection, {
                    author: 'Anonymous',
                    text: yText,
                });
                this.onSubmit?.(comment);
                this.remove();
            };
            this.#_editor_accessor_storage = __runInitializers(this, __editor_initializers, void 0);
            this.#manager_accessor_storage = (__runInitializers(this, __editor_extraInitializers), __runInitializers(this, _manager_initializers, void 0));
            this.#onSubmit_accessor_storage = (__runInitializers(this, _manager_extraInitializers), __runInitializers(this, _onSubmit_initializers, undefined));
            __runInitializers(this, _onSubmit_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CommentInput = _classThis;
})();
export { CommentInput };
//# sourceMappingURL=comment-input.js.map