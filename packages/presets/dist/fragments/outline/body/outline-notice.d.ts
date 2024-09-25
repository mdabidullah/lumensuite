import { LitElement, nothing } from 'lit';
export declare const AFFINE_OUTLINE_NOTICE = "affine-outline-notice";
declare const OutlineNotice_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class OutlineNotice extends OutlineNotice_base {
    static styles: import("lit").CSSResult;
    private _handleNoticeButtonClick;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    accessor noticeVisible: boolean;
    accessor setNoticeVisibility: (visibility: boolean) => void;
    accessor toggleNotesSorting: () => void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_NOTICE]: OutlineNotice;
    }
}
export {};
//# sourceMappingURL=outline-notice.d.ts.map