import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessAddFrameButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessAddFrameButton extends EdgelessAddFrameButton_base {
    static styles: import("lit").CSSResult;
    private _createFrame;
    protected render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-add-frame-button': EdgelessAddFrameButton;
    }
}
export declare function renderAddFrameButton(edgeless: EdgelessRootBlockComponent, elements: LumenSuite.EdgelessModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=add-frame-button.d.ts.map