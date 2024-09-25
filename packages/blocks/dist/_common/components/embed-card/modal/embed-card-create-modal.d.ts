import type { EditorHost } from '@lumensuite/block-std';
import type { BlockModel } from '@lumensuite/store';
import { ShadowlessElement } from '@lumensuite/block-std';
declare const EmbedCardCreateModal_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EmbedCardCreateModal extends EmbedCardCreateModal_base {
    static styles: import("lit").CSSResult;
    private _onCancel;
    private _onConfirm;
    private _onDocumentKeydown;
    private _handleInput;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _linkInputValue;
    accessor createOptions: {
        mode: 'page';
        parentModel: BlockModel | string;
        index?: number;
    } | {
        mode: 'edgeless';
    };
    accessor descriptionText: string;
    accessor host: EditorHost;
    accessor input: HTMLInputElement;
    accessor onConfirm: () => void;
    accessor titleText: string;
}
export declare function toggleEmbedCardCreateModal(host: EditorHost, titleText: string, descriptionText: string, createOptions: {
    mode: 'page';
    parentModel: BlockModel | string;
    index?: number;
} | {
    mode: 'edgeless';
}): Promise<void>;
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-create-modal': EmbedCardCreateModal;
    }
}
export {};
//# sourceMappingURL=embed-card-create-modal.d.ts.map