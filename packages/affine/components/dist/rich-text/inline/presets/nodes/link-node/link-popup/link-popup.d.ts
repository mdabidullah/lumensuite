import type { BlockComponent } from '@blocksuite/block-std';
import type { InlineRange } from '@blocksuite/inline/types';
import { LitElement } from 'lit';
import type { EditorIconButton } from '../../../../../../toolbar/index.js';
import type { AffineInlineEditor } from '../../../affine-inline-specs.js';
declare const LinkPopup_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LinkPopup extends LinkPopup_base {
    static styles: import("lit").CSSResult;
    private _bodyOverflowStyle;
    private _createTemplate;
    private _delete;
    private _edit;
    private _editTemplate;
    private _embedOptions;
    private _openLink;
    private _removeLink;
    private _viewTemplate;
    private get _canConvertToEmbedView();
    private get _isBookmarkAllowed();
    get block(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null;
    get currentLink(): string | null | undefined;
    get currentText(): string;
    get host(): import("@blocksuite/block-std").EditorHost | undefined;
    get std(): import("@blocksuite/block-std").BlockStdScope | undefined;
    private _confirmBtnTemplate;
    private _convertToCardView;
    private _convertToEmbedView;
    private _copyUrl;
    private _moreActions;
    private _onConfirm;
    private _onKeydown;
    private _updateConfirmBtn;
    private _viewMenuButton;
    connectedCallback(): void;
    protected firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    updated(): void;
    accessor abortController: AbortController;
    accessor confirmButton: EditorIconButton | null;
    accessor inlineEditor: AffineInlineEditor;
    accessor linkInput: HTMLInputElement | null;
    accessor mockSelectionContainer: HTMLDivElement;
    accessor popupContainer: HTMLDivElement;
    accessor targetInlineRange: InlineRange;
    accessor textInput: HTMLInputElement | null;
    accessor type: 'create' | 'edit' | 'view';
}
declare global {
    interface HTMLElementTagNameMap {
        'link-popup': LinkPopup;
    }
}
export {};
//# sourceMappingURL=link-popup.d.ts.map