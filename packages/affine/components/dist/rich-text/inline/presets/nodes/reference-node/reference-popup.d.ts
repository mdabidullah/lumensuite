import type { ReferenceInfo } from '@blocksuite/affine-model';
import type { InlineRange } from '@blocksuite/inline';
import { type BlockComponent } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AffineInlineEditor } from '../../affine-inline-specs.js';
declare const ReferencePopup_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ReferencePopup extends ReferencePopup_base {
    static styles: import("lit").CSSResult;
    get _embedViewButtonDisabled(): boolean;
    get _openButtonDisabled(): boolean;
    get block(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string>;
    get doc(): import("@blocksuite/store").Doc;
    get referenceDocId(): string;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    private _convertToCardView;
    private _convertToEmbedView;
    private _delete;
    private _moreActions;
    private _openDoc;
    private _openMenuButton;
    private _viewMenuButton;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updated(): void;
    accessor abortController: AbortController;
    accessor docTitle: string;
    accessor inlineEditor: AffineInlineEditor;
    accessor isLinkedNode: boolean;
    accessor popupContainer: HTMLDivElement;
    accessor referenceInfo: ReferenceInfo;
    accessor target: LitElement;
    accessor targetInlineRange: InlineRange;
}
declare global {
    interface HTMLElementTagNameMap {
        'reference-popup': ReferencePopup;
    }
}
export declare function toggleReferencePopup(target: LitElement, isLinkedNode: boolean, referenceInfo: ReferenceInfo, inlineEditor: AffineInlineEditor, targetInlineRange: InlineRange, docTitle: string, abortController: AbortController): ReferencePopup;
export {};
//# sourceMappingURL=reference-popup.d.ts.map