import type { BlockModel } from '@lumensuite/store';
import { LitElement } from 'lit';
export declare class Loader extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor hostModel: BlockModel | null;
    accessor radius: string | number;
    accessor width: string | number;
}
declare global {
    interface HTMLElementTagNameMap {
        'loader-element': Loader;
    }
}
//# sourceMappingURL=loader.d.ts.map