import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessDefaultToolButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessDefaultToolButton extends EdgelessDefaultToolButton_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'][];
    private _changeTool;
    private _fadeIn;
    private _fadeOut;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor currentIcon: HTMLInputElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-default-tool-button': EdgelessDefaultToolButton;
    }
}
export {};
//# sourceMappingURL=default-tool-button.d.ts.map