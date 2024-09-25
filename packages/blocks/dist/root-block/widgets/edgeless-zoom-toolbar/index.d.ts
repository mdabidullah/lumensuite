import type { RootBlockModel } from '@lumensuite/affine-model';
import { WidgetComponent } from '@lumensuite/block-std';
import { nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import './zoom-bar-toggle-button.js';
import './zoom-toolbar.js';
export declare const AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET = "affine-edgeless-zoom-toolbar-widget";
export declare class AffineEdgelessZoomToolbarWidget extends WidgetComponent<RootBlockModel, EdgelessRootBlockComponent> {
    static styles: import("lit").CSSResult;
    get edgeless(): EdgelessRootBlockComponent;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    private accessor _hide;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET]: AffineEdgelessZoomToolbarWidget;
    }
}
//# sourceMappingURL=index.d.ts.map