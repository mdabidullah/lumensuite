import type { FrameBlockModel } from '@blocksuite/affine-model';
import { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
import '../../../../../_common/components/toggle-switch.js';
import '../../buttons/tool-icon-button.js';
import './frame-order-menu.js';
declare const EdgelessNavigatorSettingButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessNavigatorSettingButton extends EdgelessNavigatorSettingButton_base {
    static styles: import("lit").CSSResult;
    private _navigatorSettingPopper?;
    private _onBlackBackgroundChange;
    private _tryRestoreSettings;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _navigatorSettingButton;
    private accessor _navigatorSettingMenu;
    accessor blackBackground: boolean;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frames: FrameBlockModel[];
    accessor hideToolbar: boolean;
    accessor includeFrameOrder: boolean;
    accessor onHideToolbarChange: undefined | ((hideToolbar: boolean) => void);
    accessor popperShow: boolean;
    accessor setPopperShow: (show: boolean) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-navigator-setting-button': EdgelessNavigatorSettingButton;
    }
}
export {};
//# sourceMappingURL=navigator-setting-button.d.ts.map