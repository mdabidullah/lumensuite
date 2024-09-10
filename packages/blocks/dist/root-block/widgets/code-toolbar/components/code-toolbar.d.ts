import type { MenuItemGroup } from '@blocksuite/affine-components/toolbar';
import { LitElement } from 'lit';
import type { CodeBlockToolbarContext } from '../context.js';
declare const AffineCodeToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineCodeToolbar extends AffineCodeToolbar_base {
    static styles: import("lit").CSSResult;
    private _currentOpenMenu;
    private _popMenuAbortController;
    closeCurrentMenu: () => void;
    private _toggleMoreMenu;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _moreButton;
    private accessor _moreMenuOpen;
    accessor context: CodeBlockToolbarContext;
    accessor moreGroups: MenuItemGroup<CodeBlockToolbarContext>[];
    accessor onActiveStatusChange: (active: boolean) => void;
    accessor primaryGroups: MenuItemGroup<CodeBlockToolbarContext>[];
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-code-toolbar': AffineCodeToolbar;
    }
}
export {};
//# sourceMappingURL=code-toolbar.d.ts.map