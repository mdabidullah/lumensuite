import { LitElement } from 'lit';
export declare const AFFINE_OUTLINE_NOTE_PREVIEW_SETTING_MENU = "affine-outline-note-preview-setting-menu";
declare const OutlineNotePreviewSettingMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineNotePreviewSettingMenu extends OutlineNotePreviewSettingMenu_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor showPreviewIcon: boolean;
    accessor toggleShowPreviewIcon: (on: boolean) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_NOTE_PREVIEW_SETTING_MENU]: OutlineNotePreviewSettingMenu;
    }
}
export {};
//# sourceMappingURL=outline-setting-menu.d.ts.map