import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessDraggingAreaRect_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessDraggingAreaRect extends EdgelessDraggingAreaRect_base {
    static styles: import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-dragging-area-rect': EdgelessDraggingAreaRect;
    }
}
export {};
//# sourceMappingURL=edgeless-dragging-area-rect.d.ts.map