import type { SurfaceBlockComponent, SurfaceBlockModel } from '@lumensuite/affine-block-surface';
import type { RootBlockModel } from '@lumensuite/affine-model';
import type { IBound } from '@lumensuite/global/utils';
import '@lumensuite/affine-block-surface';
import { BlockComponent } from '@lumensuite/block-std';
import type { EdgelessRootBlockWidgetName } from '../types.js';
import type { EdgelessRootService } from './edgeless-root-service.js';
import './components/note-slicer/index.js';
import './components/presentation/edgeless-navigator-black-background.js';
import './components/rects/edgeless-dragging-area-rect.js';
import './components/rects/edgeless-selected-rect.js';
import './components/toolbar/edgeless-toolbar.js';
export declare class EdgelessRootPreviewBlockComponent extends BlockComponent<RootBlockModel, EdgelessRootService, EdgelessRootBlockWidgetName> {
    static styles: import("lit").CSSResult;
    private _refreshLayerViewport;
    private _resizeObserver;
    private _viewportElement;
    mouseRoot: HTMLElement;
    get dispatcher(): import("@lumensuite/block-std").UIEventDispatcher;
    get surfaceBlockModel(): SurfaceBlockModel;
    get viewportElement(): HTMLElement;
    private _getLayerViewport;
    private _initFontLoader;
    private _initPixelRatioChangeEffect;
    private _initResizeEffect;
    private _initSlotEffects;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    getElementsBound(): IBound | null;
    renderBlock(): import("lit").TemplateResult<1>;
    willUpdate(_changedProperties: Map<PropertyKey, unknown>): void;
    accessor background: HTMLDivElement;
    accessor editorViewportSelector: string;
    accessor layer: HTMLDivElement;
    accessor surface: SurfaceBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-root-preview': EdgelessRootPreviewBlockComponent;
    }
}
//# sourceMappingURL=edgeless-root-preview-block.d.ts.map