import { ShadowlessElement } from '@lumensuite/block-std';
import { type TemplateResult } from 'lit';
import type { FilterGroup, Variable } from '../../core/common/ast.js';
declare const FilterBar_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class FilterBar extends FilterBar_base {
    static styles: import("lit").CSSResult;
    private _setFilter;
    private addFilter;
    private expandGroup;
    renderAddFilter: () => TemplateResult<1>;
    renderMore: (count: number) => TemplateResult<1>;
    renderMoreFilter: (count: number) => TemplateResult;
    showMoreFilter: (e: MouseEvent, count: number) => void;
    updateMoreFilterPanel?: () => void;
    private deleteFilter;
    render(): TemplateResult<1>;
    renderCondition(i: number): TemplateResult<1>;
    renderFilters(): (() => TemplateResult<1>)[];
    updated(): void;
    accessor data: FilterGroup;
    accessor setData: (filter: FilterGroup) => void;
    accessor vars: Variable[];
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-bar': FilterBar;
    }
}
export {};
//# sourceMappingURL=filter-bar.d.ts.map