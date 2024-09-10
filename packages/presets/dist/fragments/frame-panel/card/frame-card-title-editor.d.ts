import type { FrameBlockModel, RichText } from '@blocksuite/blocks';
import { ShadowlessElement } from '@blocksuite/block-std';
export declare const AFFINE_FRAME_TITLE_EDITOR = "affine-frame-card-title-editor";
declare const FrameCardTitleEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FrameCardTitleEditor extends FrameCardTitleEditor_base {
    static styles: import("lit").CSSResult;
    private _isComposing;
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor | null;
    private _unmount;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
    accessor frameModel: FrameBlockModel;
    accessor left: number;
    accessor maxWidth: number;
    accessor richText: RichText;
    accessor titleContentElement: HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAME_TITLE_EDITOR]: FrameCardTitleEditor;
    }
}
export {};
//# sourceMappingURL=frame-card-title-editor.d.ts.map