import { LitElement, nothing, type TemplateResult } from 'lit';
import type { AttachmentBlockModel, EdgelessRootBlockComponent } from '../../../index.js';
import '../../edgeless/components/panel/card-style-panel.js';
declare const EdgelessChangeAttachmentButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeAttachmentButton extends EdgelessChangeAttachmentButton_base {
    private _download;
    private _setCardStyle;
    private _showCaption;
    private get _block();
    private get _doc();
    private get _getCardStyleOptions();
    get std(): import("@lumensuite/block-std").BlockStdScope;
    render(): TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor model: AttachmentBlockModel;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-attachment-button': EdgelessChangeAttachmentButton;
    }
}
export declare function renderAttachmentButton(edgeless: EdgelessRootBlockComponent, attachments?: AttachmentBlockModel[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-attachment-button.d.ts.map