import type { BookmarkBlockModel, EmbedFigmaModel, EmbedGithubModel, EmbedHtmlModel, EmbedLinkedDocModel, EmbedLoomModel, EmbedSyncedDocModel, EmbedYoutubeModel } from '@blocksuite/affine-model';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import '../../edgeless/components/panel/card-style-panel.js';
declare const EdgelessChangeEmbedCardButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeEmbedCardButton extends EdgelessChangeEmbedCardButton_base {
    static styles: import("lit").CSSResult;
    private _convertToCardView;
    private _convertToEmbedView;
    private _copyUrl;
    private _embedOptions;
    private _getScale;
    private _open;
    private _peek;
    private get _blockComponent();
    private get _canConvertToEmbedView();
    private get _canShowCardStylePanel();
    private get _canShowFullScreenButton();
    private get _canShowUrlOptions();
    private get _doc();
    private get _embedViewButtonDisabled();
    private get _getCardStyleOptions();
    private get _isCardView();
    private get _isEmbedView();
    get _openButtonDisabled(): boolean;
    private get _viewType();
    private get std();
    private _openMenuButton;
    private _setCardStyle;
    private _setEmbedScale;
    private _showCaption;
    private _viewMenuButton;
    connectedCallback(): void;
    render(): Iterable<symbol | TemplateResult<1>>;
    private accessor _embedScale;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor model: BookmarkBlockModel | EmbedGithubModel | EmbedYoutubeModel | EmbedFigmaModel | EmbedLinkedDocModel | EmbedSyncedDocModel | EmbedHtmlModel | EmbedLoomModel;
    accessor quickConnectButton: TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-embed-card-button': EdgelessChangeEmbedCardButton;
    }
}
export declare function renderEmbedButton(edgeless: EdgelessRootBlockComponent, models?: EdgelessChangeEmbedCardButton['model'][], quickConnectButton?: TemplateResult<1>[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-embed-card-button.d.ts.map