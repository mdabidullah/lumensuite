import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessTool } from '../../types.js';
import type { MenuPopper } from './common/create-popper.js';
import '../../../../_common/components/smooth-corner.js';
import '../buttons/tool-icon-button.js';
import '../buttons/toolbar-button.js';
import { type EdgelessToolbarSlots } from './context.js';
import './present/frame-order-button.js';
import './presentation-toolbar.js';
declare const EdgelessToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessToolbar extends EdgelessToolbar_base {
    static styles: import("lit").CSSResult;
    private _moreQuickToolsMenu;
    private _moreQuickToolsMenuRef;
    private _onContainerResize;
    private _resizeObserver;
    private _slotsProvider;
    private _themeProvider;
    private _toolbarProvider;
    activePopper: MenuPopper<HTMLElement> | null;
    edgeless: EdgelessRootBlockComponent;
    setEdgelessTool: (edgelessTool: EdgelessTool) => void;
    private get _availableWidth();
    private get _cachedPresentHideToolbar();
    private get _denseQuickTools();
    private get _denseSeniorTools();
    /**
     * When enabled, the toolbar will auto-hide when the mouse is not over it.
     */
    private get _enableAutoHide();
    private get _hiddenQuickTools();
    private get _quickTools();
    private get _quickToolsWidthTotal();
    private get _seniorNextTooltip();
    private get _seniorPrevTooltip();
    private get _seniorScrollNextDisabled();
    private get _seniorScrollPrevDisabled();
    private get _seniorToolNavWidth();
    private get _seniorTools();
    private get _seniorToolsWidthTotal();
    private get _spaceWidthTotal();
    private get _visibleQuickToolSize();
    get host(): import("@blocksuite/block-std").EditorHost;
    get isPresentMode(): boolean;
    get scrollSeniorToolSize(): number;
    get slots(): EdgelessToolbarSlots;
    constructor(edgeless: EdgelessRootBlockComponent);
    private _onSeniorNavNext;
    private _onSeniorNavPrev;
    private _openMoreQuickToolsMenu;
    private _renderContent;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor containerWidth: number;
    accessor edgelessTool: EdgelessTool;
    accessor presentFrameMenuShow: boolean;
    accessor presentSettingMenuShow: boolean;
    accessor scrollSeniorToolIndex: number;
    accessor toolbarContainer: HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-toolbar': EdgelessToolbar;
    }
}
export {};
//# sourceMappingURL=edgeless-toolbar.d.ts.map