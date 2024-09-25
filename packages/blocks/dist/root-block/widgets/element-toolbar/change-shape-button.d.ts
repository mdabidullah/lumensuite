import type { ShapeElementModel } from '@lumensuite/affine-model';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { EdgelessColorPickerButton } from '../../edgeless/components/color-picker/button.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import '../../edgeless/components/color-picker/index.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/shape-panel.js';
import '../../edgeless/components/panel/shape-style-panel.js';
import '../../edgeless/components/panel/stroke-style-panel.js';
import './change-text-menu.js';
declare const EdgelessChangeShapeButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeShapeButton extends EdgelessChangeShapeButton_base {
    #private;
    static styles: import("lit").CSSResult[][];
    get service(): import("../../index.js").EdgelessRootService;
    private _addText;
    private _getTextColor;
    private _setShapeFillColor;
    private _setShapeStrokeColor;
    private _setShapeStrokeStyle;
    private _setShapeStrokeWidth;
    private _setShapeStyle;
    private _setShapeStyles;
    private _showAddButtonOrTextMenu;
    firstUpdated(): void;
    render(): Iterable<symbol | TemplateResult<1> | undefined>;
    private accessor _shapePanel;
    accessor borderStyleButton: EdgelessColorPickerButton;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor elements: ShapeElementModel[];
    accessor fillColorButton: EdgelessColorPickerButton;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-shape-button': EdgelessChangeShapeButton;
    }
}
export declare function renderChangeShapeButton(edgeless: EdgelessRootBlockComponent, elements?: ShapeElementModel[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-shape-button.d.ts.map