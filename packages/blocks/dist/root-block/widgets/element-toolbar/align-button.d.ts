import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessAlignButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessAlignButton extends EdgelessAlignButton_base {
    private get elements();
    private _align;
    private _alignBottom;
    private _alignDistributeHorizontally;
    private _alignDistributeVertically;
    private _alignHorizontally;
    private _alignLeft;
    private _alignRight;
    private _alignTop;
    private _alignVertically;
    private _updateXYWH;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-align-button': EdgelessAlignButton;
    }
}
export declare function renderAlignButton(edgeless: EdgelessRootBlockComponent, elements: LumenSuite.EdgelessModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=align-button.d.ts.map