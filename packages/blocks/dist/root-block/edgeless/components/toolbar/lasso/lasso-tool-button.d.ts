import { LitElement } from 'lit';
import { LassoMode } from '../../../../../_common/types.js';
declare const EdgelessDefaultToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass> & import("@blocksuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessDefaultToolButton extends EdgelessDefaultToolButton_base {
    static styles: import("lit").CSSResult;
    private _changeTool;
    type: "lasso";
    private _fadeIn;
    private _fadeOut;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor curMode: LassoMode;
    accessor currentIcon: HTMLInputElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-lasso-tool-button': EdgelessDefaultToolButton;
    }
}
export {};
//# sourceMappingURL=lasso-tool-button.d.ts.map