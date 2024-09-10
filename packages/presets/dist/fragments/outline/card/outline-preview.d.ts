import { LitElement, nothing } from 'lit';
type ValuesOf<T, K extends keyof T = keyof T> = T[K];
export declare const AFFINE_OUTLINE_BLOCK_PREVIEW = "affine-outline-block-preview";
declare const OutlineBlockPreview_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineBlockPreview extends OutlineBlockPreview_base {
    static styles: import("lit").CSSResult;
    private _TextBlockPreview;
    render(): import("lit").TemplateResult<1>;
    renderBlockByFlavour(): typeof nothing | import("lit").TemplateResult<1>;
    accessor block: ValuesOf<BlockSuite.BlockModels>;
    accessor cardNumber: number;
    accessor disabledIcon: boolean;
    accessor enableNotesSorting: boolean;
    accessor showPreviewIcon: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_BLOCK_PREVIEW]: OutlineBlockPreview;
    }
}
export {};
//# sourceMappingURL=outline-preview.d.ts.map