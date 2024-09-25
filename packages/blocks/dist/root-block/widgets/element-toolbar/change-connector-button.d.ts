import { type ConnectorElementModel } from '@lumensuite/affine-model';
import { StrokeStyle } from '@lumensuite/affine-model';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { EdgelessColorPickerButton } from '../../edgeless/components/color-picker/button.js';
import type { PickColorEvent } from '../../edgeless/components/color-picker/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/stroke-style-panel.js';
import './change-text-menu.js';
export declare function getMostCommonLineStyle(elements: ConnectorElementModel[]): StrokeStyle | null;
declare const EdgelessChangeConnectorButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeConnectorButton extends EdgelessChangeConnectorButton_base {
    pickColor: (event: PickColorEvent) => void;
    get doc(): import("@lumensuite/store").Doc;
    get service(): import("../../index.js").EdgelessRootService;
    private _addLabel;
    private _flipEndpointStyle;
    private _getEndpointIcon;
    private _setConnectorColor;
    private _setConnectorMode;
    private _setConnectorPointStyle;
    private _setConnectorProp;
    private _setConnectorRough;
    private _setConnectorStroke;
    private _setConnectorStrokeStyle;
    private _setConnectorStrokeWidth;
    private _showAddButtonOrTextMenu;
    render(): Iterable<symbol | TemplateResult<1> | undefined>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor elements: ConnectorElementModel[];
    accessor strokeColorButton: EdgelessColorPickerButton;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-connector-button': EdgelessChangeConnectorButton;
    }
}
export declare function renderConnectorButton(edgeless: EdgelessRootBlockComponent, elements?: ConnectorElementModel[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-connector-button.d.ts.map