import { type ShapeName } from '@lumensuite/affine-model';
import { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
import '../../buttons/tool-icon-button.js';
import '../../panel/one-row-color-panel.js';
declare const EdgelessShapeMenu_base: typeof LitElement;
export declare class EdgelessShapeMenu extends EdgelessShapeMenu_base {
    static styles: import("lit").CSSResult;
    private _props$;
    private _setFillColor;
    private _setShapeStyle;
    private _shapeName$;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor onChange: (name: ShapeName) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-menu': EdgelessShapeMenu;
    }
}
export {};
//# sourceMappingURL=shape-menu.d.ts.map