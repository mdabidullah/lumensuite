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
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { CommentInput } from './comment-input.js';
import { CommentManager } from './comment-manager.js';
let CommentPanel = (() => {
    let _classDecorators = [customElement('comment-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __container_decorators;
    let __container_initializers = [];
    let __container_extraInitializers = [];
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    var CommentPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __container_decorators = [query('.comment-panel-container')];
            _editor_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __container_decorators, { kind: "accessor", name: "_container", static: false, private: false, access: { has: obj => "_container" in obj, get: obj => obj._container, set: (obj, value) => { obj._container = value; } }, metadata: _metadata }, __container_initializers, __container_extraInitializers);
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CommentPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    comment-panel {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      background-color: var(--affine-background-primary-color);
      height: 100vh;
      width: 320px;
      box-sizing: border-box;
      padding-top: 16px;
    }

    .comment-panel-container {
      width: 100%;
      height: 100%;
      padding: 16px;
    }

    .comment-panel-head {
      display: flex;
      gap: 8px;
    }

    .comment-panel-comments {
      margin-top: 16px;
    }

    .comment-panel-comment {
      margin-bottom: 16px;
    }

    .comment-panel-comment-quote {
      font-size: 10px;
      color: var(--affine-text-secondary-color);
      padding-left: 8px;
      border-left: 2px solid var(--affine-text-secondary-color);
      margin-bottom: 8px;
    }

    .comment-panel-comment-author {
      font-size: 12px;
    }

    .comment-panel-comment-text {
      margin-top: 8px;
    }
  `; }
        _addComment() {
            const textSelection = this.editor.host?.selection.find('text');
            if (!textSelection)
                return;
            const commentInput = new CommentInput();
            if (!this.commentManager)
                return;
            commentInput.manager = this.commentManager;
            commentInput.onSubmit = () => {
                this.requestUpdate();
            };
            this._container.append(commentInput);
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.editor.host)
                return;
            this.commentManager = new CommentManager(this.editor.host);
        }
        render() {
            if (!this.commentManager)
                return;
            const comments = this.commentManager.getComments();
            return html `<div class="comment-panel-container">
      <div class="comment-panel-head">
        <button @click=${this._addComment}>Add Comment</button>
      </div>
      <div class="comment-panel-comments">
        ${comments.map(comment => {
                return html `<div class="comment-panel-comment">
            <div class="comment-panel-comment-quote">${comment.quote}</div>
            <div class="comment-panel-comment-author">${comment.author}</div>
            <div class="comment-panel-comment-text">
              <rich-text .yText=${comment.text} .readonly=${true}></rich-text>
            </div>
          </div>`;
            })}
      </div>
    </div>`;
        }
        #_container_accessor_storage;
        get _container() { return this.#_container_accessor_storage; }
        set _container(value) { this.#_container_accessor_storage = value; }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.commentManager = null;
            this.#_container_accessor_storage = __runInitializers(this, __container_initializers, void 0);
            this.#editor_accessor_storage = (__runInitializers(this, __container_extraInitializers), __runInitializers(this, _editor_initializers, void 0));
            __runInitializers(this, _editor_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CommentPanel = _classThis;
})();
export { CommentPanel };
//# sourceMappingURL=comment-panel.js.map