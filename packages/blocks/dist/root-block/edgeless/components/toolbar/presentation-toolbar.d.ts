import { LitElement, type PropertyValues } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessTool } from '../../types.js';
import './present/navigator-setting-button.js';
declare const PresentationToolbar_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("./mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class PresentationToolbar extends PresentationToolbar_base {
    static styles: import("lit").CSSResult;
    private _cachedIndex;
    private _timer?;
    type: EdgelessTool['type'];
    private get _cachedPresentHideToolbar();
    private set _cachedPresentHideToolbar(value);
    private get _frames();
    get dense(): boolean;
    get host(): import("@lumensuite/block-std").EditorHost;
    constructor(edgeless: EdgelessRootBlockComponent);
    private _bindHotKey;
    private _exitPresentation;
    private _moveToCurrentFrame;
    private _nextFrame;
    private _previousFrame;
    /**
     * Toggle fullscreen, but keep edgeless tool to frameNavigator
     * If already fullscreen, exit fullscreen
     * If not fullscreen, enter fullscreen
     */
    private _toggleFullScreen;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    protected updated(changedProperties: PropertyValues): void;
    private accessor _currentFrameIndex;
    private accessor _fullScreenMode;
    private accessor _navigatorMode;
    accessor containerWidth: number;
    accessor frameMenuShow: boolean;
    accessor setFrameMenuShow: (show: boolean) => void;
    accessor setSettingMenuShow: (show: boolean) => void;
    accessor settingMenuShow: boolean;
    accessor visible: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'presentation-toolbar': PresentationToolbar;
    }
}
export {};
//# sourceMappingURL=presentation-toolbar.d.ts.map