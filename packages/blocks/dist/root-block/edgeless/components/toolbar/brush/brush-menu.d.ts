import type { Color } from '@lumensuite/affine-model';
import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
import '../../buttons/tool-icon-button.js';
import '../../panel/one-row-color-panel.js';
import '../common/slide-menu.js';
declare const EdgelessBrushMenu_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessBrushMenu extends EdgelessBrushMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    render(): import("lit").TemplateResult<1>;
    accessor color: Color;
    accessor lineWidth: number;
    accessor onChange: (props: Record<string, unknown>) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-brush-menu': EdgelessBrushMenu;
    }
}
export {};
//# sourceMappingURL=brush-menu.d.ts.map