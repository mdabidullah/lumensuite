import type { CSSResultGroup, CSSResultOrNative } from 'lit';
import { LitElement } from 'lit';
export declare class ShadowlessElement extends LitElement {
    static disableShadowRoot: boolean;
    protected static finalizeStyles(styles?: CSSResultGroup): CSSResultOrNative[];
    createRenderRoot(): HTMLElement | DocumentFragment;
}
//# sourceMappingURL=shadowless-element.d.ts.map