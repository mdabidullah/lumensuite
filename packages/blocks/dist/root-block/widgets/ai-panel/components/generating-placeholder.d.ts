import { LitElement, type PropertyValues } from 'lit';
declare const GeneratingPlaceholder_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
declare class GeneratingPlaceholder extends GeneratingPlaceholder_base {
    static styles: import("lit").CSSResult;
    protected render(): import("lit").TemplateResult<1>;
    willUpdate(changed: PropertyValues): void;
    accessor height: number;
    accessor loadingProgress: number;
    accessor showHeader: boolean;
    accessor stages: string[];
}
declare global {
    interface HTMLElementTagNameMap {
        'generating-placeholder': GeneratingPlaceholder;
    }
}
export {};
//# sourceMappingURL=generating-placeholder.d.ts.map