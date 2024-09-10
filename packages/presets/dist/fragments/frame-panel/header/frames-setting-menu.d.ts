import type { EditorHost } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '@blocksuite/blocks';
import { LitElement, type PropertyValues } from 'lit';
export declare const AFFINE_FRAMES_SETTING_MENU = "affine-frames-setting-menu";
declare const FramesSettingMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramesSettingMenu extends FramesSettingMenu_base {
    static styles: import("lit").CSSResult;
    private _onBlackBackgroundChange;
    private _onFillScreenChange;
    private _onHideToolBarChange;
    private get _rootService();
    private _tryRestoreSettings;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    accessor blackBackground: boolean;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor editorHost: EditorHost;
    accessor fillScreen: boolean;
    accessor hideToolbar: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAMES_SETTING_MENU]: FramesSettingMenu;
    }
}
export {};
//# sourceMappingURL=frames-setting-menu.d.ts.map