import { Bound, DisposableGroup, last, } from '@blocksuite/global/utils';
import { LifeCycleWatcher } from '../extension/lifecycle-watcher.js';
import { LifeCycleWatcherIdentifier } from '../identifier.js';
import { onSurfaceAdded } from '../utils/gfx.js';
import { GfxBlockElementModel } from './gfx-block-model.js';
import { GridManager } from './grid.js';
import { LayerManager } from './layer.js';
import { GfxPrimitiveElementModel, } from './surface/element-model.js';
import { Viewport } from './viewport.js';
export class GfxController extends LifeCycleWatcher {
    static { this.key = 'gfxController'; }
    get doc() {
        return this.std.doc;
    }
    get surface() {
        return this._surface;
    }
    constructor(std) {
        super(std);
        this._disposables = new DisposableGroup();
        this._surface = null;
        this.viewport = new Viewport();
        this.grid = new GridManager();
        this.layer = new LayerManager(this.doc, null);
        this._disposables.add(onSurfaceAdded(this.doc, surface => {
            this._surface = surface;
            if (surface) {
                this._disposables.add(this.grid.watch({ surface }));
                this.layer.watch({ surface });
            }
        }));
        this._disposables.add(this.grid.watch({ doc: this.doc }));
        this._disposables.add(this.layer);
        this._disposables.add(this.viewport);
    }
    /**
     * Get a block or element by its id.
     * Note that non-gfx block can also be queried in this method.
     * @param id
     * @returns
     */
    getElementById(id) {
        // @ts-ignore
        return (this.surface?.getElementById(id) ?? this.doc.getBlock(id)?.model ?? null);
    }
    getElementByPoint(x, y, options = { all: false, hitThreshold: 10 }) {
        options.zoom = this.viewport.zoom;
        options.hitThreshold ??= 10;
        const hitThreshold = options.hitThreshold;
        const responsePadding = options.responsePadding ?? [
            hitThreshold / 2,
            hitThreshold / 2,
        ];
        const all = options.all ?? false;
        const hitTestBound = {
            x: x - responsePadding[1],
            y: y - responsePadding[0],
            w: responsePadding[1] * 2,
            h: responsePadding[0] * 2,
        };
        const candidates = this.grid.search(hitTestBound);
        const picked = candidates.filter(elm => elm.includesPoint(x, y, options, this.std.host) ||
            elm.externalBound?.isPointInBound([x, y]));
        picked.sort(this.layer.compare);
        if (all) {
            return picked;
        }
        return last(picked) ?? null;
    }
    getElementsByBound(bound, options = {
        type: 'all',
    }) {
        bound = bound instanceof Bound ? bound : Bound.from(bound);
        let candidates = this.grid.search(bound);
        if (options.type !== 'all') {
            const filter = options.type === 'block'
                ? (elm) => elm instanceof GfxBlockElementModel
                : (elm) => elm instanceof GfxPrimitiveElementModel;
            candidates = candidates.filter(filter);
        }
        candidates.sort(this.layer.compare);
        return candidates;
    }
    getElementsByType(type) {
        return (this.surface?.getElementsByType(type) ??
            this.doc.getBlocksByFlavour(type).map(b => b.model));
    }
    mounted() {
        this.viewport.setViewportElm(this.std.host);
    }
    unmounted() {
        this._disposables.dispose();
    }
}
export const GfxControllerIdentifier = LifeCycleWatcherIdentifier(GfxController.key);
//# sourceMappingURL=controller.js.map