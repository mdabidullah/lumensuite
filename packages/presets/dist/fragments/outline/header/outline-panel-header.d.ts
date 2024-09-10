import { LitElement } from 'lit';
import './outline-setting-menu.js';
export declare const AFFINE_OUTLINE_PANEL_HEADER = "affine-outline-panel-header";
declare const OutlinePanelHeader_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlinePanelHeader extends OutlinePanelHeader_base {
    static styles: import("lit").CSSResult;
    private _notePreviewSettingMenuPopper;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _notePreviewSettingMenu;
    private accessor _noteSettingButton;
    private accessor _settingPopperShow;
    accessor enableNotesSorting: boolean;
    accessor showPreviewIcon: boolean;
    accessor toggleNotesSorting: () => void;
    accessor toggleShowPreviewIcon: (on: boolean) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_PANEL_HEADER]: OutlinePanelHeader;
    }
}
export {};
//# sourceMappingURL=outline-panel-header.d.ts.map