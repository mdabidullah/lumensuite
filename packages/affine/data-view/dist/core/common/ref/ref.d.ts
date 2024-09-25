import { ShadowlessElement } from '@lumensuite/block-std';
import type { Filter, Variable, VariableOrProperty } from '../ast.js';
declare const VariableRefView_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class VariableRefView extends VariableRefView_base {
    static styles: import("lit").CSSResult;
    get field(): string | undefined;
    get fieldData(): Variable | undefined;
    get property(): string | undefined;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor data: VariableOrProperty | undefined;
    accessor setData: (filter: VariableOrProperty) => void;
    accessor vars: Variable[];
}
declare global {
    interface HTMLElementTagNameMap {
        'variable-ref-view': VariableRefView;
    }
}
export declare const popCreateFilter: (target: HTMLElement, props: {
    vars: Variable[];
    onSelect: (filter: Filter) => void;
    onClose?: () => void;
}) => void;
export {};
//# sourceMappingURL=ref.d.ts.map