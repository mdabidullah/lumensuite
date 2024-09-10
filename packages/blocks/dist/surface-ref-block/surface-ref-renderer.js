import { CanvasRenderer, elementRenderers, } from '@blocksuite/affine-block-surface';
import { ThemeObserver } from '@blocksuite/affine-shared/theme';
import { GfxControllerIdentifier, Viewport } from '@blocksuite/block-std/gfx';
import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { getSurfaceBlock } from './utils.js';
export class SurfaceRefRenderer {
    get surfaceModel() {
        return this._surfaceModel;
    }
    get surfaceRenderer() {
        return this._surfaceRenderer;
    }
    get surfaceService() {
        return this.std.getService('affine:surface');
    }
    get viewport() {
        return this._viewport;
    }
    constructor(id, doc, std, options = {
        enableStackingCanvas: false,
    }) {
        this.id = id;
        this.doc = doc;
        this.std = std;
        this._surfaceModel = null;
        this._disposables = new DisposableGroup();
        this.slots = {
            surfaceRendererInit: new Slot(),
            surfaceRendererRefresh: new Slot(),
            surfaceModelChanged: new Slot(),
            mounted: new Slot(),
            unmounted: new Slot(),
        };
        const viewport = new Viewport();
        const renderer = new CanvasRenderer({
            viewport,
            layerManager: std.get(GfxControllerIdentifier).layer,
            gridManager: std.get(GfxControllerIdentifier).grid,
            enableStackingCanvas: options.enableStackingCanvas,
            provider: {
                generateColorProperty: (color, fallback) => ThemeObserver.generateColorProperty(color, fallback),
                getColorScheme: () => ThemeObserver.mode,
                getColorValue: (color, fallback, real) => ThemeObserver.getColorValue(color, fallback, real),
                getPropertyValue: (property) => ThemeObserver.getPropertyValue(property),
            },
            elementRenderers,
        });
        this._surfaceRenderer = renderer;
        this._viewport = viewport;
    }
    _initSurfaceModel() {
        const init = () => {
            const model = getSurfaceBlock(this.doc);
            this._surfaceModel = model;
            if (!model)
                return;
            this.slots.surfaceModelChanged.emit(model);
        };
        init();
        if (!this._surfaceModel) {
            this._disposables.add(this.doc.slots.blockUpdated.on(({ type }) => {
                if (type === 'add' &&
                    !this._surfaceModel &&
                    getSurfaceBlock(this.doc)) {
                    init();
                }
            }));
        }
    }
    _initSurfaceRenderer() {
        this.slots.surfaceRendererInit.emit();
    }
    getModel(id) {
        return (this.doc.getBlockById(id) ??
            this._surfaceModel?.getElementById(id) ??
            null);
    }
    mount() {
        if (this._disposables.disposed) {
            this._disposables = new DisposableGroup();
        }
        this._initSurfaceModel();
        this._initSurfaceRenderer();
        this.slots.mounted.emit();
    }
    unmount() {
        this._disposables.dispose();
        this.slots.unmounted.emit();
    }
}
//# sourceMappingURL=surface-ref-renderer.js.map