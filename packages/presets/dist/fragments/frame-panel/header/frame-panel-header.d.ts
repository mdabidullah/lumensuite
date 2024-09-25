import type { EditorHost } from '@lumensuite/block-std';
import { type EdgelessRootBlockComponent } from '@lumensuite/blocks';
import { LitElement, type PropertyValues } from 'lit';
import './frames-setting-menu.js';
export declare const AFFINE_FRAME_PANEL_HEADER = "affine-frame-panel-header";
declare const FramePanelHeader_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class FramePanelHeader extends FramePanelHeader_base {
    static styles: import("lit").CSSResult;
    private _clearEdgelessDisposables;
    private _edgelessDisposables;
    private _enterPresentationMode;
    private _framesSettingMenuPopper;
    private _navigatorMode;
    private _setEdgelessDisposables;
    get rootService(): import("@lumensuite/blocks").RootService;
    private _tryLoadNavigatorStateLocalRecord;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    private accessor _frameSettingButton;
    private accessor _frameSettingMenu;
    private accessor _settingPopperShow;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor editorHost: EditorHost;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAME_PANEL_HEADER]: FramePanelHeader;
    }
}
export {};
//# sourceMappingURL=frame-panel-header.d.ts.map