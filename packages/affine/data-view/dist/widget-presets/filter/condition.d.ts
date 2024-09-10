import { ShadowlessElement } from '@blocksuite/block-std';
import { type FilterGroup, type SingleFilter, type Variable } from '../../core/common/ast.js';
import '../../core/common/literal/define.js';
import '../../core/common/ref/ref.js';
declare const FilterConditionView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterConditionView extends FilterConditionView_base {
    static styles: import("lit").CSSResult;
    private _setRef;
    private _args;
    private _filterLabel;
    private _filterList;
    private _selectFilter;
    render(): import("lit").TemplateResult<1>;
    accessor data: SingleFilter;
    accessor onDelete: (() => void) | undefined;
    accessor setData: (filter: SingleFilter) => void;
    accessor vars: Variable[];
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-condition-view': FilterConditionView;
    }
}
export declare const popAddNewFilter: (target: HTMLElement, props: {
    value: FilterGroup;
    onChange: (value: FilterGroup) => void;
    vars: Variable[];
}) => void;
export {};
//# sourceMappingURL=condition.d.ts.map