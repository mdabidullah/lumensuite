import { ShadowlessElement } from '@lumensuite/block-std';
import { type PropertyValues, type TemplateResult } from 'lit';
declare const Overflow_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class Overflow extends Overflow_base {
    static styles: import("lit").CSSResult;
    adjustStyle(): void;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    protected updated(_changedProperties: PropertyValues): void;
    accessor items: HTMLDivElement[] & NodeList;
    accessor more: HTMLDivElement;
    accessor renderCount: number;
    accessor renderItem: Array<() => TemplateResult>;
    accessor renderMore: (count: number) => TemplateResult;
}
export {};
//# sourceMappingURL=overflow.d.ts.map