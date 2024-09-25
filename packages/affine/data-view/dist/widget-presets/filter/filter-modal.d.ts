import { ShadowlessElement } from '@lumensuite/block-std';
import type { FilterGroup, Variable } from '../../core/common/ast.js';
import './filter-group.js';
import './filter-root.js';
declare const AdvancedFilterModal_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class AdvancedFilterModal extends AdvancedFilterModal_base {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor data: FilterGroup;
    accessor isRoot: boolean;
    accessor onBack: () => void;
    accessor onDelete: () => void;
    accessor setData: (filter: FilterGroup) => void;
    accessor vars: Variable[];
}
declare global {
    interface HTMLElementTagNameMap {
        'advanced-filter-modal': AdvancedFilterModal;
    }
}
export declare const popFilterModal: (target: HTMLElement, props: {
    isRoot: boolean;
    vars: Variable[];
    value: FilterGroup;
    onChange: (value: FilterGroup) => void;
    onDelete: () => void;
    onBack: () => void;
}) => void;
export {};
//# sourceMappingURL=filter-modal.d.ts.map