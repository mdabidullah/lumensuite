import type { EditorHost, SurfaceSelection } from '@lumensuite/block-std';
import type { Slot } from '@lumensuite/global/utils';
import { BlockComponent } from '@lumensuite/block-std';
import { type Viewport } from '@lumensuite/block-std/gfx';
import { Bound } from '@lumensuite/global/utils';
import type { Overlay } from './renderer/canvas-renderer.js';
import type { ElementRenderer } from './renderer/elements/index.js';
import type { SurfaceBlockModel } from './surface-model.js';
import type { SurfaceBlockService } from './surface-service.js';
import { ConnectorElementModel } from './element-model/index.js';
import { CanvasRenderer } from './renderer/canvas-renderer.js';
export interface SurfaceContext {
    viewport: Viewport;
    host: EditorHost;
    overlays: Record<string, Overlay>;
    elementRenderers: Record<string, ElementRenderer>;
    selection: {
        selectedIds: string[];
        slots: {
            updated: Slot<SurfaceSelection[]>;
        };
    };
}
export declare class SurfaceBlockComponent extends BlockComponent<SurfaceBlockModel, SurfaceBlockService> {
    static isConnector: (element: unknown) => element is ConnectorElementModel;
    static styles: import("lit").CSSResult;
    private _cachedViewport;
    private _initCanvasTransform;
    private _initThemeObserver;
    private _lastTime;
    private _renderer;
    fitToViewport: (bound: Bound) => void;
    refresh: () => void;
    private get _edgelessService();
    private get _gfx();
    get renderer(): CanvasRenderer;
    private _getReversedTransform;
    private _initOverlays;
    private _initRenderer;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _surfaceContainer;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-surface': SurfaceBlockComponent;
    }
}
//# sourceMappingURL=surface-block.d.ts.map