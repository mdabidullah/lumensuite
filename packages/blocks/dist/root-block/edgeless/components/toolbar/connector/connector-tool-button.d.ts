import { LitElement } from 'lit';
import '../../buttons/toolbar-button.js';
import './connector-menu.js';
declare const EdgelessConnectorToolButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessConnectorToolButton extends EdgelessConnectorToolButton_base {
    static styles: import("lit").CSSResult;
    private _mode$;
    type: "connector";
    private _toggleMenu;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-tool-button': EdgelessConnectorToolButton;
    }
}
export {};
//# sourceMappingURL=connector-tool-button.d.ts.map