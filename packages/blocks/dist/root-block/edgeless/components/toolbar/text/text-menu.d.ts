import { LitElement, nothing } from 'lit';
import type { EdgelessTool } from '../../../types.js';
import '../../buttons/tool-icon-button.js';
import '../../panel/one-row-color-panel.js';
import '../common/slide-menu.js';
declare const EdgelessTextMenu_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessTextMenu extends EdgelessTextMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor color: string;
    accessor onChange: (props: Record<string, unknown>) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-text-menu': EdgelessTextMenu;
    }
}
export {};
//# sourceMappingURL=text-menu.d.ts.map