import { ShadowlessElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { Comment, CommentManager } from './comment-manager.js';
declare const CommentInput_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CommentInput extends CommentInput_base {
    static styles: import("lit").CSSResult;
    private _cancel;
    private _submit;
    get host(): import("@blocksuite/block-std").EditorHost;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    private accessor _editor;
    accessor manager: CommentManager;
    accessor onSubmit: undefined | ((comment: Comment) => void);
}
declare global {
    interface HTMLElementTagNameMap {
        'comment-input': CommentInput;
    }
}
export {};
//# sourceMappingURL=comment-input.d.ts.map