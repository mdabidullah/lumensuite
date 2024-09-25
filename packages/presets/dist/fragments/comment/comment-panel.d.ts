import { ShadowlessElement } from '@lumensuite/block-std';
import type { AffineEditorContainer } from '../../editors/editor-container.js';
import { CommentManager } from './comment-manager.js';
declare const CommentPanel_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class CommentPanel extends CommentPanel_base {
    static styles: import("lit").CSSResult;
    commentManager: CommentManager | null;
    private _addComment;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | undefined;
    private accessor _container;
    accessor editor: AffineEditorContainer;
}
declare global {
    interface HTMLElementTagNameMap {
        'comment-panel': CommentPanel;
    }
}
export {};
//# sourceMappingURL=comment-panel.d.ts.map