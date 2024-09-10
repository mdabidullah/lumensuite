import { type MenuItemGroup } from '@blocksuite/affine-components/toolbar';
import { type RootBlockModel } from '@blocksuite/affine-model';
import { WidgetComponent } from '@blocksuite/block-std';
import { nothing, type TemplateResult } from 'lit';
import type { RootBlockComponent } from '../../types.js';
import '../../../_common/components/button.js';
import { type EmbedToolbarBlockComponent, type EmbedToolbarModel } from '../../../_common/components/embed-card/type.js';
import { EmbedCardToolbarContext } from './context.js';
export declare const AFFINE_EMBED_CARD_TOOLBAR_WIDGET = "affine-embed-card-toolbar";
export declare class EmbedCardToolbar extends WidgetComponent<RootBlockModel, RootBlockComponent> {
    static styles: import("lit").CSSResult;
    private _abortController;
    private _embedOptions;
    private _resetAbortController;
    moreGroups: MenuItemGroup<EmbedCardToolbarContext>[];
    private get _canConvertToEmbedView();
    private get _canShowUrlOptions();
    private get _embedViewButtonDisabled();
    private get _isCardView();
    private get _isEmbedView();
    get _openButtonDisabled(): boolean | undefined;
    private get _selection();
    private get _viewType();
    get focusModel(): EmbedToolbarModel | undefined;
    private _canShowCardStylePanel;
    private _cardStyleMenuButton;
    private _convertToCardView;
    private _convertToEmbedView;
    private _copyUrl;
    private _hide;
    private _moreActions;
    private _openMenuButton;
    private _setEmbedCardStyle;
    private _show;
    private _showCaption;
    private _turnIntoInlineView;
    private _viewMenuButton;
    connectedCallback(): void;
    render(): TemplateResult<1> | typeof nothing;
    accessor cardStyleButton: HTMLElement | null;
    accessor embedCardToolbarElement: HTMLElement;
    accessor focusBlock: EmbedToolbarBlockComponent | null;
    accessor hide: boolean;
    accessor moreButton: HTMLElement | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_EMBED_CARD_TOOLBAR_WIDGET]: EmbedCardToolbar;
    }
}
//# sourceMappingURL=embed-card-toolbar.d.ts.map