import type { GridManager, LayerManager, Viewport } from '@blocksuite/block-std/gfx';
import type { IBound } from '@blocksuite/global/utils';
import { type Color, ColorScheme } from '@blocksuite/affine-model';
import { Slot } from '@blocksuite/global/utils';
import type { ElementRenderer } from './elements/index.js';
import { SurfaceElementModel } from '../element-model/base.js';
import { RoughCanvas } from '../utils/rough/canvas.js';
/**
 * An overlay is a layer covered on top of elements,
 * can be used for rendering non-CRDT state indicators.
 */
export declare abstract class Overlay {
    protected _renderer: CanvasRenderer | null;
    constructor();
    clear(): void;
    abstract render(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
    setRenderer(renderer: CanvasRenderer | null): void;
}
type EnvProvider = {
    generateColorProperty: (color: Color, fallback: string) => string;
    getColorScheme: () => ColorScheme;
    getColorValue: (color: Color, fallback?: string, real?: boolean) => string;
    getPropertyValue: (property: string) => string;
    selectedElements?: () => string[];
};
type RendererOptions = {
    viewport: Viewport;
    layerManager: LayerManager;
    provider?: Partial<EnvProvider>;
    enableStackingCanvas?: boolean;
    onStackingCanvasCreated?: (canvas: HTMLCanvasElement) => void;
    elementRenderers: Record<string, ElementRenderer>;
    gridManager: GridManager;
};
export declare class CanvasRenderer {
    private _container;
    private _disposables;
    private _overlays;
    private _refreshRafId;
    private _stackingCanvas;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    elementRenderers: Record<string, ElementRenderer>;
    grid: GridManager;
    layerManager: LayerManager;
    provider: Partial<EnvProvider>;
    stackingCanvasUpdated: Slot<{
        canvases: HTMLCanvasElement[];
        added: HTMLCanvasElement[];
        removed: HTMLCanvasElement[];
    }>;
    viewport: Viewport;
    get stackingCanvas(): HTMLCanvasElement[];
    constructor(options: RendererOptions);
    /**
     * Specifying the actual size gives better results and more consistent behavior across browsers.
     *
     * Make sure the main canvas and the offscreen canvas or layer canvas are the same size.
     *
     * It is not recommended to set width and height to 100%.
     */
    private _canvasSizeUpdater;
    private _initStackingCanvas;
    private _initViewport;
    private _render;
    private _renderByBound;
    private _resetSize;
    addOverlay(overlay: Overlay): void;
    /**
     * Used to attach main canvas, main canvas will always exist
     * @param container
     */
    attach(container: HTMLElement): void;
    dispose(): void;
    generateColorProperty(color: Color, fallback: string): string;
    getCanvasByBound(bound?: IBound, surfaceElements?: SurfaceElementModel[], canvas?: HTMLCanvasElement, clearBeforeDrawing?: boolean, withZoom?: boolean): HTMLCanvasElement;
    getColorScheme(): ColorScheme;
    getColorValue(color: Color, fallback?: string, real?: boolean): string;
    getPropertyValue(property: string): string;
    refresh(): void;
    removeOverlay(overlay: Overlay): void;
}
export {};
//# sourceMappingURL=canvas-renderer.d.ts.map