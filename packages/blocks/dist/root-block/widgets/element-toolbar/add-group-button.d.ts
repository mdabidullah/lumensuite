import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessAddGroupButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessAddGroupButton extends EdgelessAddGroupButton_base {
    static styles: import("lit").CSSResult;
    private _createGroup;
    protected render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-add-group-button': EdgelessAddGroupButton;
    }
}
export declare function renderAddGroupButton(edgeless: EdgelessRootBlockComponent, elements: LumenSuite.EdgelessModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=add-group-button.d.ts.map