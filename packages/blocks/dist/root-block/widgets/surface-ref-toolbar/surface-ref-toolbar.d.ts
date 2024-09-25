import type { SurfaceRefBlockModel } from '@lumensuite/affine-model';
import { type MenuItemGroup } from '@lumensuite/affine-components/toolbar';
import { WidgetComponent } from '@lumensuite/block-std';
import type { SurfaceRefBlockComponent } from '../../../surface-ref-block/index.js';
import { SurfaceRefToolbarContext } from './context.js';
export declare const AFFINE_SURFACE_REF_TOOLBAR = "affine-surface-ref-toolbar";
export declare class AffineSurfaceRefToolbar extends WidgetComponent<SurfaceRefBlockModel, SurfaceRefBlockComponent> {
    private _hoverController;
    moreGroups: MenuItemGroup<SurfaceRefToolbarContext>[];
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_SURFACE_REF_TOOLBAR]: AffineSurfaceRefToolbar;
    }
}
//# sourceMappingURL=surface-ref-toolbar.d.ts.map