import { ShadowlessElement } from '@lumensuite/block-std';
import { type ReadonlySignal } from '@lit-labs/preact-signals';
import { type TableViewSelectionWithType } from '../types.js';
declare const RowSelectCheckbox_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class RowSelectCheckbox extends RowSelectCheckbox_base {
    static styles: import("lit").CSSResult;
    isSelected$: ReadonlySignal<boolean>;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor groupKey: string | undefined;
    accessor rowId: string;
    accessor selection: ReadonlySignal<TableViewSelectionWithType | undefined>;
}
export {};
//# sourceMappingURL=row-select-checkbox.d.ts.map