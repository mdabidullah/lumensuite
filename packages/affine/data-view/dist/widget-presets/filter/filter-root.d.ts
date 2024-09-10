import { ShadowlessElement } from '@blocksuite/block-std';
import type { FilterGroup, Variable } from '../../core/common/ast.js';
import type { FilterGroupView } from './filter-group.js';
declare const FilterRootView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterRootView extends FilterRootView_base {
    static styles: import("lit").CSSResult;
    private _addNew;
    private _setFilter;
    private _clickConditionOps;
    render(): import("lit").TemplateResult<1>;
    accessor containerClass: {
        index: number;
        class: string;
    } | undefined;
    accessor data: FilterGroup;
    accessor onBack: () => void;
    accessor setData: (filter: FilterGroup) => void;
    accessor vars: Variable[];
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-root-view': FilterGroupView;
    }
}
export {};
//# sourceMappingURL=filter-root.d.ts.map