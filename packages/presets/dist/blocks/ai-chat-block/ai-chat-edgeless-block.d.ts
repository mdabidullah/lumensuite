import { AIChatBlockComponent } from './ai-chat-block.js';
declare const EdgelessAIChatBlockComponent_base: typeof AIChatBlockComponent & (new (...args: any[]) => import("@lumensuite/block-std").GfxBlockComponent);
export declare class EdgelessAIChatBlockComponent extends EdgelessAIChatBlockComponent_base {
    renderGfxBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-ai-chat': EdgelessAIChatBlockComponent;
    }
}
export {};
//# sourceMappingURL=ai-chat-edgeless-block.d.ts.map