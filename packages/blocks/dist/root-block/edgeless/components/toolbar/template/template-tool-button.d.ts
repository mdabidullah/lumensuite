import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
import './template-panel.js';
declare const EdgelessTemplateButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessTemplateButton extends EdgelessTemplateButton_base {
    static styles: import("lit").CSSResult;
    private _cleanup;
    private _prevTool;
    enableActiveBackground: boolean;
    type: EdgelessTool['type'];
    get cards(): import("lit").TemplateResult<2>[];
    private _closePanel;
    private _togglePanel;
    render(): import("lit").TemplateResult<1>;
    private accessor _openedPanel;
}
export {};
//# sourceMappingURL=template-tool-button.d.ts.map