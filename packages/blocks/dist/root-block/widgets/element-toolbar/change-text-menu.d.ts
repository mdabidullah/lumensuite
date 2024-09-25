import { LitElement, type TemplateResult } from 'lit';
import type { EdgelessColorPickerButton, PickColorEvent } from '../../edgeless/components/color-picker/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import '../../edgeless/components/color-picker/index.js';
import '../../edgeless/components/panel/align-panel.js';
import '../../edgeless/components/panel/font-family-panel.js';
import '../../edgeless/components/panel/font-weight-and-style-panel.js';
import '../../edgeless/components/panel/size-panel.js';
declare const EdgelessChangeTextMenu_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeTextMenu extends EdgelessChangeTextMenu_base {
    static styles: import("lit").CSSResult;
    private _setFontFamily;
    private _setFontSize;
    private _setFontWeightAndStyle;
    private _setTextAlign;
    private _setTextColor;
    private _updateElementBound;
    pickColor: (event: PickColorEvent) => void;
    get service(): import("../../index.js").EdgelessRootService;
    render(): Iterable<symbol | TemplateResult<1>>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor elements: LumenSuite.EdgelessTextModelType[];
    accessor elementType: LumenSuite.EdgelessTextModelKeyType;
    accessor textColorButton: EdgelessColorPickerButton;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-text-menu': EdgelessChangeTextMenu;
    }
}
export {};
//# sourceMappingURL=change-text-menu.d.ts.map