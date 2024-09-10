import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
import '../../panel/one-row-color-panel.js';
import '../common/slide-menu.js';
declare const EdgelessConnectorMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessConnectorMenu extends EdgelessConnectorMenu_base {
    static styles: import("lit").CSSResult;
    private _props$;
    type: EdgelessTool['type'];
    render(): import("lit").TemplateResult<1>;
    accessor onChange: (props: Record<string, unknown>) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-menu': EdgelessConnectorMenu;
    }
}
export {};
//# sourceMappingURL=connector-menu.d.ts.map