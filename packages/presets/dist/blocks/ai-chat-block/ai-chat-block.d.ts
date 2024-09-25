import { BlockComponent } from '@lumensuite/block-std';
import type { AIChatBlockModel } from './ai-chat-model.js';
import './components/ai-chat-messages.js';
export declare class AIChatBlockComponent extends BlockComponent<AIChatBlockModel> {
    static styles: import("lit").CSSResult;
    private _deserializeChatMessages;
    get _peekViewService(): import("@lumensuite/blocks").PeekViewService | null;
    get _rootService(): import("@lumensuite/blocks").RootService;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-ai-chat': AIChatBlockComponent;
    }
}
//# sourceMappingURL=ai-chat-block.d.ts.map