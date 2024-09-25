import { ShapeStyle } from '@lumensuite/affine-model';
import { Slot } from '@lumensuite/global/utils';
import { LitElement } from 'lit';
import type { ShapeTool } from '../../tools/shape-tool.js';
import '../buttons/tool-icon-button.js';
export declare class EdgelessShapePanel extends LitElement {
    static styles: import("lit").CSSResult;
    slots: {
        select: Slot<import("@lumensuite/affine-model").ShapeName>;
    };
    private _onSelect;
    disconnectedCallback(): void;
    render(): unknown;
    accessor selectedShape: ShapeTool['shapeName'] | null | undefined;
    accessor shapeStyle: ShapeStyle;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-panel': EdgelessShapePanel;
    }
}
//# sourceMappingURL=shape-panel.d.ts.map