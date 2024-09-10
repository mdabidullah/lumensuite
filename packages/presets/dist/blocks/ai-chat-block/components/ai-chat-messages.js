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
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import './chat-images.js';
import './text-renderer.js';
import { UserInfoTemplate } from './user-info.js';
let AIChatMessage = (() => {
    let _classDecorators = [customElement('ai-chat-message')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _attachments_decorators;
    let _attachments_initializers = [];
    let _attachments_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _messageRole_decorators;
    let _messageRole_initializers = [];
    let _messageRole_extraInitializers = [];
    let _state_decorators;
    let _state_initializers = [];
    let _state_extraInitializers = [];
    let _textRendererOptions_decorators;
    let _textRendererOptions_initializers = [];
    let _textRendererOptions_extraInitializers = [];
    let _userInfo_decorators;
    let _userInfo_initializers = [];
    let _userInfo_extraInitializers = [];
    var AIChatMessage = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _attachments_decorators = [property({ attribute: false })];
            _content_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _messageRole_decorators = [property({ attribute: false })];
            _state_decorators = [property({ attribute: false })];
            _textRendererOptions_decorators = [property({ attribute: false })];
            _userInfo_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _attachments_decorators, { kind: "accessor", name: "attachments", static: false, private: false, access: { has: obj => "attachments" in obj, get: obj => obj.attachments, set: (obj, value) => { obj.attachments = value; } }, metadata: _metadata }, _attachments_initializers, _attachments_extraInitializers);
            __esDecorate(this, null, _content_decorators, { kind: "accessor", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _messageRole_decorators, { kind: "accessor", name: "messageRole", static: false, private: false, access: { has: obj => "messageRole" in obj, get: obj => obj.messageRole, set: (obj, value) => { obj.messageRole = value; } }, metadata: _metadata }, _messageRole_initializers, _messageRole_extraInitializers);
            __esDecorate(this, null, _state_decorators, { kind: "accessor", name: "state", static: false, private: false, access: { has: obj => "state" in obj, get: obj => obj.state, set: (obj, value) => { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
            __esDecorate(this, null, _textRendererOptions_decorators, { kind: "accessor", name: "textRendererOptions", static: false, private: false, access: { has: obj => "textRendererOptions" in obj, get: obj => obj.textRendererOptions, set: (obj, value) => { obj.textRendererOptions = value; } }, metadata: _metadata }, _textRendererOptions_initializers, _textRendererOptions_extraInitializers);
            __esDecorate(this, null, _userInfo_decorators, { kind: "accessor", name: "userInfo", static: false, private: false, access: { has: obj => "userInfo" in obj, get: obj => obj.userInfo, set: (obj, value) => { obj.userInfo = value; } }, metadata: _metadata }, _userInfo_initializers, _userInfo_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AIChatMessage = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .ai-chat-message {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 4px;
      box-sizing: border-box;
    }

    .ai-chat-content {
      display: block;
      width: calc(100% - 34px);
      padding-left: 34px;
      font-weight: 400;
    }

    .with-attachments {
      margin-top: 8px;
    }
  `; }
        render() {
            const { host, textRendererOptions, state, content, attachments, messageRole, userInfo, } = this;
            const withAttachments = !!attachments && attachments.length > 0;
            const messageClasses = classMap({
                'with-attachments': withAttachments,
            });
            return html `
      <div class="ai-chat-message">
        ${UserInfoTemplate(userInfo, messageRole)}
        <div class="ai-chat-content">
          <chat-images .attachments=${attachments}></chat-images>
          <div class=${messageClasses}>
            <text-renderer
              .host=${host}
              .answer=${content}
              .options=${textRendererOptions}
              .state=${state}
            ></text-renderer>
          </div>
        </div>
      </div>
    `;
        }
        #attachments_accessor_storage = __runInitializers(this, _attachments_initializers, undefined);
        get attachments() { return this.#attachments_accessor_storage; }
        set attachments(value) { this.#attachments_accessor_storage = value; }
        #content_accessor_storage = (__runInitializers(this, _attachments_extraInitializers), __runInitializers(this, _content_initializers, ''));
        get content() { return this.#content_accessor_storage; }
        set content(value) { this.#content_accessor_storage = value; }
        #host_accessor_storage = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _host_initializers, void 0));
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #messageRole_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _messageRole_initializers, undefined));
        get messageRole() { return this.#messageRole_accessor_storage; }
        set messageRole(value) { this.#messageRole_accessor_storage = value; }
        #state_accessor_storage = (__runInitializers(this, _messageRole_extraInitializers), __runInitializers(this, _state_initializers, 'finished'));
        get state() { return this.#state_accessor_storage; }
        set state(value) { this.#state_accessor_storage = value; }
        #textRendererOptions_accessor_storage = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _textRendererOptions_initializers, {}));
        get textRendererOptions() { return this.#textRendererOptions_accessor_storage; }
        set textRendererOptions(value) { this.#textRendererOptions_accessor_storage = value; }
        #userInfo_accessor_storage = (__runInitializers(this, _textRendererOptions_extraInitializers), __runInitializers(this, _userInfo_initializers, {}));
        get userInfo() { return this.#userInfo_accessor_storage; }
        set userInfo(value) { this.#userInfo_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _userInfo_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AIChatMessage = _classThis;
})();
export { AIChatMessage };
let AIChatMessages = (() => {
    let _classDecorators = [customElement('ai-chat-messages')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _messages_decorators;
    let _messages_initializers = [];
    let _messages_extraInitializers = [];
    let _textRendererOptions_decorators;
    let _textRendererOptions_initializers = [];
    let _textRendererOptions_extraInitializers = [];
    var AIChatMessages = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            _messages_decorators = [property({ attribute: false })];
            _textRendererOptions_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _messages_decorators, { kind: "accessor", name: "messages", static: false, private: false, access: { has: obj => "messages" in obj, get: obj => obj.messages, set: (obj, value) => { obj.messages = value; } }, metadata: _metadata }, _messages_initializers, _messages_extraInitializers);
            __esDecorate(this, null, _textRendererOptions_decorators, { kind: "accessor", name: "textRendererOptions", static: false, private: false, access: { has: obj => "textRendererOptions" in obj, get: obj => obj.textRendererOptions, set: (obj, value) => { obj.textRendererOptions = value; } }, metadata: _metadata }, _textRendererOptions_initializers, _textRendererOptions_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AIChatMessages = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      width: 100%;
      box-sizing: border-box;
    }

    .ai-chat-messages {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      flex-direction: column;
      gap: 24px;
    }
  `; }
        render() {
            return html `<div class="ai-chat-messages">
      ${repeat(this.messages, message => message.id, message => {
                const { attachments, role, content } = message;
                const userInfo = {
                    userId: message.userId,
                    userName: message.userName,
                    avatarUrl: message.avatarUrl,
                };
                return html `
            <ai-chat-message
              .host=${this.host}
              .textRendererOptions=${this.textRendererOptions}
              .content=${content}
              .attachments=${attachments}
              .messageRole=${role}
              .userInfo=${userInfo}
            ></ai-chat-message>
          `;
            })}
    </div>`;
        }
        #host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #messages_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _messages_initializers, []));
        get messages() { return this.#messages_accessor_storage; }
        set messages(value) { this.#messages_accessor_storage = value; }
        #textRendererOptions_accessor_storage = (__runInitializers(this, _messages_extraInitializers), __runInitializers(this, _textRendererOptions_initializers, {}));
        get textRendererOptions() { return this.#textRendererOptions_accessor_storage; }
        set textRendererOptions(value) { this.#textRendererOptions_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _textRendererOptions_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AIChatMessages = _classThis;
})();
export { AIChatMessages };
//# sourceMappingURL=ai-chat-messages.js.map