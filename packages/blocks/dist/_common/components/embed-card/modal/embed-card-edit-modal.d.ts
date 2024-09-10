import type { BookmarkBlockModel, EmbedFigmaModel, EmbedGithubModel, EmbedLoomModel, EmbedYoutubeModel } from '@blocksuite/affine-model';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
type EmbedCardModel = BookmarkBlockModel | EmbedGithubModel | EmbedYoutubeModel | EmbedFigmaModel | EmbedLoomModel;
declare const EmbedCardEditModal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedCardEditModal extends EmbedCardEditModal_base {
    static styles: import("lit").CSSResult;
    private _handleInput;
    private _onDocumentKeydown;
    private _onSave;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _titleInputValue;
    accessor descInput: HTMLTextAreaElement;
    accessor host: EditorHost;
    accessor model: EmbedCardModel;
    accessor titleInput: HTMLInputElement;
}
export declare function toggleEmbedCardEditModal(host: EditorHost, embedCardModel: EmbedCardModel): void;
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-edit-modal': EmbedCardEditModal;
    }
}
export {};
//# sourceMappingURL=embed-card-edit-modal.d.ts.map