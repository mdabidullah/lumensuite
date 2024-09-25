import type { Middleware, Placement, VirtualElement } from '@floating-ui/dom';
import type { TemplateResult } from 'lit';
import { ShadowlessElement } from '@lumensuite/block-std';
type MenuCommon = {
    hide?: () => boolean;
};
export type GroupMenu = MenuCommon & {
    type: 'group';
    name: string;
    children: () => Menu[];
};
type MenuClass = (string & {}) | 'delete-item';
export type NormalMenu = MenuCommon & ({
    type: 'action';
    name: string;
    isSelected?: boolean;
    label?: () => TemplateResult;
    icon?: TemplateResult;
    postfix?: TemplateResult;
    select: () => void;
    onHover?: (hover: boolean) => void;
    class?: MenuClass;
} | {
    type: 'checkbox';
    name: string;
    checked: boolean;
    postfix?: TemplateResult;
    label?: () => TemplateResult;
    select: (checked: boolean) => boolean;
    class?: string;
} | {
    type: 'toggle-switch';
    name: string;
    on: boolean;
    postfix?: TemplateResult;
    label?: () => TemplateResult;
    onChange: (on: boolean) => void;
    class?: string;
} | {
    type: 'sub-menu';
    name: string;
    label?: () => TemplateResult;
    postfix?: TemplateResult;
    icon?: TemplateResult;
    options: MenuOptions;
    select?: () => void;
    isSelected?: boolean;
} | {
    type: 'custom';
    render: () => TemplateResult;
});
export type Menu = GroupMenu | NormalMenu;
export type MenuOptions = {
    onComplete?: () => void;
    onClose?: () => void;
    style?: string;
    input?: {
        icon?: TemplateResult;
        divider?: boolean;
        search?: boolean;
        placeholder?: string;
        initValue?: string;
        onComplete?: (text: string) => void;
        left?: TemplateResult;
        right?: TemplateResult;
    };
    items: Menu[];
};
declare const MenuComponent_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class MenuComponent<_T> extends MenuComponent_base {
    static styles: import("lit").CSSResult;
    private _checked;
    private _clickContainer;
    private _complete;
    private _inputText;
    private _mouseEnter;
    private allItems;
    private initTime;
    private inputRef;
    private processMap;
    private selectableItems;
    private subMenu?;
    mouseEnterHeader: () => void;
    private get isSearchMode();
    private get minIndex();
    private get selectedIndex();
    private set selectedIndex(value);
    private get selectedItem();
    private get text();
    private set text(value);
    private _isConsciousChoice;
    private clearSubMenu;
    private close;
    private focusInput;
    private getChecked;
    private process;
    private setChecked;
    private show;
    private showHeader;
    disconnectedCallback(): void;
    firstUpdated(): void;
    processItems(): void;
    render(): TemplateResult<1>;
    private accessor _selectedIndex;
    private accessor _text;
    accessor options: MenuOptions;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-menu': MenuComponent<unknown>;
    }
}
export declare const getDefaultModalRoot: (ele: HTMLElement) => HTMLElement;
export declare const createModal: (container?: HTMLElement) => HTMLDivElement;
export declare const positionToVRect: (x: number, y: number) => VirtualElement;
export declare const createPopup: (target: HTMLElement, content: HTMLElement, options?: {
    onClose?: () => void;
    middleware?: Array<Middleware | null | undefined | false>;
    placement?: Placement;
    container?: HTMLElement;
}) => () => void;
export type MenuHandler = {
    close: () => void;
};
export declare const popMenu: <T>(target: HTMLElement, props: {
    options: MenuOptions;
    placement?: Placement;
    middleware?: Array<Middleware | null | undefined | false>;
    container?: HTMLElement;
}) => MenuHandler;
export declare const popFilterableSimpleMenu: (target: HTMLElement, options: Menu[], onClose?: () => void) => void;
export {};
//# sourceMappingURL=menu.d.ts.map