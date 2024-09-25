import type { TemplateResult } from 'lit';
import { ShadowlessElement } from '@lumensuite/block-std';
import { type Filter, type FilterGroup, type Variable } from '../../core/common/ast.js';
declare const FilterGroupView_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class FilterGroupView extends FilterGroupView_base {
    static styles: import("lit").CSSResult;
    private _addNew;
    private _selectOp;
    private _setFilter;
    private opMap;
    private get isMaxDepth();
    private _clickConditionOps;
    render(): TemplateResult<1>;
    accessor containerClass: {
        index: number;
        class: string;
    } | undefined;
    accessor data: FilterGroup;
    accessor depth: number;
    accessor setData: (filter: FilterGroup) => void;
    accessor vars: Variable[];
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-group-view': FilterGroupView;
    }
}
export declare const getDepth: (filter: Filter) => number;
export {};
//# sourceMappingURL=filter-group.d.ts.map