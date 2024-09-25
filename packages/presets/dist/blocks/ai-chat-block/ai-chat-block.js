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
import { BlockComponent } from '@lumensuite/block-std';
import { Peekable } from '@lumensuite/blocks';
import { computed } from '@lit-labs/preact-signals';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ChatWithAIIcon } from '../_common/icon.js';
import './components/ai-chat-messages.js';
import { AIChatBlockStyles } from './styles.js';
import { ChatMessagesSchema } from './types.js';
let AIChatBlockComponent = (() => {
    let _classDecorators = [customElement('affine-ai-chat'), Peekable({
            enableOn: ({ doc }) => !doc.readonly,
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    var AIChatBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            // Deserialize messages from JSON string and verify the type using zod
            this._deserializeChatMessages = computed(() => {
                const messages = this.model.messages$.value;
                try {
                    const result = ChatMessagesSchema.safeParse(JSON.parse(messages));
                    if (result.success) {
                        return result.data;
                    }
                    else {
                        return [];
                    }
                }
                catch {
                    return [];
                }
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AIChatBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = AIChatBlockStyles; }
        get _peekViewService() {
            return this._rootService.peekViewService;
        }
        get _rootService() {
            return this.host.std.getService('affine:page');
        }
        renderBlock() {
            const messages = this._deserializeChatMessages.value.slice(-2);
            const textRendererOptions = {
                customHeading: true,
            };
            return html `<div class="affine-ai-chat-block-container">
      <div class="ai-chat-messages-container">
        <ai-chat-messages
          .host=${this.host}
          .messages=${messages}
          .textRendererOptions=${textRendererOptions}
          .withMask=${true}
        ></ai-chat-messages>
      </div>
      <div class="ai-chat-block-button">
        ${ChatWithAIIcon} <span>AI chat block</span>
      </div>
    </div> `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AIChatBlockComponent = _classThis;
})();
export { AIChatBlockComponent };
//# sourceMappingURL=ai-chat-block.js.map