import { ShadowlessElement } from '@blocksuite/block-std';
export type SelectTag = {
    id: string;
    color: string;
    value: string;
    parentId?: string;
};
declare const MultiTagSelect_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class MultiTagSelect extends MultiTagSelect_base {
    static styles: import("lit").CSSResult;
    private _clickItemOption;
    private _createOption;
    private _currentColor;
    private _onDeleteSelected;
    private _onInput;
    private _onInputKeydown;
    private _onSelect;
    private filteredOptions;
    changeTag: (tag: SelectTag) => void;
    deleteTag: (id: string) => void;
    newTags: (tags: SelectTag[]) => void;
    private get color();
    get isSingleMode(): boolean;
    private get selectedTag();
    private _filterOptions;
    private clearColor;
    private getGroupInfoByFullName;
    private getTagFullName;
    private getTagGroup;
    private optionsIdMap;
    private setSelectedOption;
    protected firstUpdated(): void;
    render(): import("lit").TemplateResult;
    private accessor _selectInput;
    accessor editComplete: () => void;
    accessor mode: 'multi' | 'single';
    accessor onChange: (value: string[]) => void;
    accessor onOptionsChange: (options: SelectTag[]) => void;
    accessor options: SelectTag[];
    private accessor selectedIndex;
    private accessor text;
    accessor value: string[];
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-multi-tag-select': MultiTagSelect;
    }
}
export declare const popTagSelect: (target: HTMLElement, ops: {
    mode?: "single" | "multi";
    value: string[];
    onChange: (value: string[]) => void;
    options: SelectTag[];
    onOptionsChange: (options: SelectTag[]) => void;
    onComplete?: () => void;
    minWidth?: number;
    container?: HTMLElement;
}) => () => void;
export {};
//# sourceMappingURL=multi-tag-select.d.ts.map