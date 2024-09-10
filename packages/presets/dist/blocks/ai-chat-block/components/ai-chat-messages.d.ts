import type { EditorHost } from '@blocksuite/block-std';
import type { AffineAIPanelState } from '@blocksuite/blocks';
import { LitElement } from 'lit';
import type { ChatMessage, MessageRole, MessageUserInfo } from '../types.js';
import type { TextRendererOptions } from './text-renderer.js';
import './chat-images.js';
import './text-renderer.js';
export declare class AIChatMessage extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor attachments: string[] | undefined;
    accessor content: string;
    accessor host: EditorHost;
    accessor messageRole: MessageRole | undefined;
    accessor state: AffineAIPanelState;
    accessor textRendererOptions: TextRendererOptions;
    accessor userInfo: MessageUserInfo;
}
export declare class AIChatMessages extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor host: EditorHost;
    accessor messages: ChatMessage[];
    accessor textRendererOptions: TextRendererOptions;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-chat-message': AIChatMessage;
        'ai-chat-messages': AIChatMessages;
    }
}
//# sourceMappingURL=ai-chat-messages.d.ts.map