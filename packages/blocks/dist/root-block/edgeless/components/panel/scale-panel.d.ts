import { LitElement } from 'lit';
import '../buttons/tool-icon-button.js';
export declare class EdgelessScalePanel extends LitElement {
    static styles: import("lit").CSSResult;
    private _onKeydown;
    private _onPopperClose;
    private _onSelect;
    render(): import("lit").TemplateResult<1>;
    accessor maxScale: number;
    accessor minScale: number;
    accessor onPopperCose: (() => void) | undefined;
    accessor onSelect: ((size: number) => void) | undefined;
    accessor scale: number;
    accessor scaleList: readonly number[];
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-scale-panel': EdgelessScalePanel;
    }
}
//# sourceMappingURL=scale-panel.d.ts.map