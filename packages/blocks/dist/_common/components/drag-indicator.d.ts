import type { Rect } from '@lumensuite/global/utils';
import { LitElement } from 'lit';
export declare class DragIndicator extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1> | null;
    accessor rect: Rect | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-drag-indicator': DragIndicator;
    }
}
//# sourceMappingURL=drag-indicator.d.ts.map