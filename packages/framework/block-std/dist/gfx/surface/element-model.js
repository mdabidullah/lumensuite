var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var _a;
import { Bound, deserializeXYWH, DisposableGroup, getBoundsWithRotation, getPointsFromBoundsWithRotation, linePolygonIntersects, PointLocation, polygonGetPointTangent, polygonNearestPoint, randomSeed, rotatePoints, } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { createMutex } from 'lib0/mutex';
import { convertProps, field, getDerivedProps, getFieldPropsSet, local, updateDerivedProps, watch, } from './decorators/index.js';
export const gfxContainerSymbol = Symbol('GfxContainerElement');
export const isGfxContainerElm = (elm) => {
    return elm[gfxContainerSymbol] === true;
};
let GfxPrimitiveElementModel = (() => {
    let _display_decorators;
    let _display_initializers = [];
    let _display_extraInitializers = [];
    let _externalXYWH_decorators;
    let _externalXYWH_initializers = [];
    let _externalXYWH_extraInitializers = [];
    let _index_decorators;
    let _index_initializers = [];
    let _index_extraInitializers = [];
    let _opacity_decorators;
    let _opacity_initializers = [];
    let _opacity_extraInitializers = [];
    let _seed_decorators;
    let _seed_initializers = [];
    let _seed_extraInitializers = [];
    return class GfxPrimitiveElementModel {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _display_decorators = [local()];
            _externalXYWH_decorators = [watch((_, instance) => {
                    instance['_local'].delete('externalBound');
                }), local()];
            _index_decorators = [field()];
            _opacity_decorators = [local()];
            _seed_decorators = [field()];
            __esDecorate(this, null, _display_decorators, { kind: "accessor", name: "display", static: false, private: false, access: { has: obj => "display" in obj, get: obj => obj.display, set: (obj, value) => { obj.display = value; } }, metadata: _metadata }, _display_initializers, _display_extraInitializers);
            __esDecorate(this, null, _externalXYWH_decorators, { kind: "accessor", name: "externalXYWH", static: false, private: false, access: { has: obj => "externalXYWH" in obj, get: obj => obj.externalXYWH, set: (obj, value) => { obj.externalXYWH = value; } }, metadata: _metadata }, _externalXYWH_initializers, _externalXYWH_extraInitializers);
            __esDecorate(this, null, _index_decorators, { kind: "accessor", name: "index", static: false, private: false, access: { has: obj => "index" in obj, get: obj => obj.index, set: (obj, value) => { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
            __esDecorate(this, null, _opacity_decorators, { kind: "accessor", name: "opacity", static: false, private: false, access: { has: obj => "opacity" in obj, get: obj => obj.opacity, set: (obj, value) => { obj.opacity = value; } }, metadata: _metadata }, _opacity_initializers, _opacity_extraInitializers);
            __esDecorate(this, null, _seed_decorators, { kind: "accessor", name: "seed", static: false, private: false, access: { has: obj => "seed" in obj, get: obj => obj.seed, set: (obj, value) => { obj.seed = value; } }, metadata: _metadata }, _seed_initializers, _seed_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get connectable() {
            return true;
        }
        get deserializedXYWH() {
            if (!this._lastXYWH || this.xywh !== this._lastXYWH) {
                const xywh = this.xywh;
                this._local.set('deserializedXYWH', deserializeXYWH(xywh));
                this._lastXYWH = xywh;
            }
            return this._local.get('deserializedXYWH') ?? [0, 0, 0, 0];
        }
        /**
         * The bound of the element after rotation.
         * The bound without rotation should be created by `Bound.deserialize(this.xywh)`.
         */
        get elementBound() {
            if (this.rotate) {
                return Bound.from(getBoundsWithRotation(this));
            }
            return Bound.deserialize(this.xywh);
        }
        get externalBound() {
            if (!this._local.has('externalBound')) {
                const bound = this.externalXYWH
                    ? Bound.deserialize(this.externalXYWH)
                    : null;
                this._local.set('externalBound', bound);
            }
            return this._local.get('externalBound');
        }
        get group() {
            return this.surface.getGroup(this.id);
        }
        get groups() {
            return this.surface.getGroups(this.id);
        }
        get h() {
            return this.deserializedXYWH[3];
        }
        get id() {
            return this._id;
        }
        get isConnected() {
            return this.surface.hasElementById(this.id);
        }
        get w() {
            return this.deserializedXYWH[2];
        }
        get x() {
            return this.deserializedXYWH[0];
        }
        get y() {
            return this.deserializedXYWH[1];
        }
        constructor(options) {
            this._disposable = new DisposableGroup();
            this._local = new Map();
            /**
             * Used to store a copy of data in the yMap.
             */
            this._preserved = new Map();
            this.#display_accessor_storage = __runInitializers(this, _display_initializers, true);
            this.#externalXYWH_accessor_storage = (__runInitializers(this, _display_extraInitializers), __runInitializers(this, _externalXYWH_initializers, undefined));
            this.#index_accessor_storage = (__runInitializers(this, _externalXYWH_extraInitializers), __runInitializers(this, _index_initializers, void 0));
            this.#opacity_accessor_storage = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _opacity_initializers, 1));
            this.#seed_accessor_storage = (__runInitializers(this, _opacity_extraInitializers), __runInitializers(this, _seed_initializers, void 0));
            __runInitializers(this, _seed_extraInitializers);
            const { id, yMap, model, stashedStore, onChange } = options;
            this._id = id;
            this.yMap = yMap;
            this.surface = model;
            this._stashed = stashedStore;
            this._onChange = onChange;
            this.index = 'a0';
            this.seed = randomSeed();
        }
        static propsToY(props) {
            return props;
        }
        containsBound(bounds) {
            return getPointsFromBoundsWithRotation(this).some(point => bounds.containsPoint(point));
        }
        getLineIntersections(start, end) {
            const points = getPointsFromBoundsWithRotation(this);
            return linePolygonIntersects(start, end, points);
        }
        getNearestPoint(point) {
            const points = getPointsFromBoundsWithRotation(this);
            return polygonNearestPoint(points, point);
        }
        getRelativePointLocation(relativePoint) {
            const bound = Bound.deserialize(this.xywh);
            const point = bound.getRelativePoint(relativePoint);
            const rotatePoint = rotatePoints([point], bound.center, this.rotate)[0];
            const points = rotatePoints(bound.points, bound.center, this.rotate);
            const tangent = polygonGetPointTangent(points, rotatePoint);
            return new PointLocation(rotatePoint, tangent);
        }
        includesPoint(x, y, _, __) {
            return this.elementBound.isPointInBound([x, y]);
        }
        intersectsBound(bound) {
            return (this.containsBound(bound) ||
                bound.points.some((point, i, points) => this.getLineIntersections(point, points[(i + 1) % points.length])));
        }
        onCreated() { }
        pop(prop) {
            if (!this._stashed.has(prop)) {
                return;
            }
            const value = this._stashed.get(prop);
            this._stashed.delete(prop);
            // @ts-ignore
            delete this[prop];
            if (getFieldPropsSet(this).has(prop)) {
                this.surface.doc.transact(() => {
                    this.yMap.set(prop, value);
                });
            }
            else {
                console.warn('pop a prop that is not field or local:', prop);
            }
        }
        serialize() {
            const result = this.yMap.toJSON();
            result.xywh = this.xywh;
            return result;
        }
        stash(prop) {
            if (this._stashed.has(prop)) {
                return;
            }
            if (!getFieldPropsSet(this).has(prop)) {
                return;
            }
            const curVal = this[prop];
            this._stashed.set(prop, curVal);
            Object.defineProperty(this, prop, {
                configurable: true,
                enumerable: true,
                get: () => this._stashed.get(prop),
                set: (original) => {
                    const value = convertProps(prop, original, this);
                    const oldValue = this._stashed.get(prop);
                    const derivedProps = getDerivedProps(prop, original, this);
                    this._stashed.set(prop, value);
                    this._onChange({
                        props: {
                            [prop]: value,
                        },
                        oldValues: {
                            [prop]: oldValue,
                        },
                        local: true,
                    });
                    this.surface['hooks'].update.emit({
                        id: this.id,
                        props: {
                            [prop]: value,
                        },
                        oldValues: {
                            [prop]: oldValue,
                        },
                    });
                    updateDerivedProps(derivedProps, this);
                },
            });
        }
        #display_accessor_storage;
        get display() { return this.#display_accessor_storage; }
        set display(value) { this.#display_accessor_storage = value; }
        #externalXYWH_accessor_storage;
        get externalXYWH() { return this.#externalXYWH_accessor_storage; }
        set externalXYWH(value) { this.#externalXYWH_accessor_storage = value; }
        #index_accessor_storage;
        get index() { return this.#index_accessor_storage; }
        set index(value) { this.#index_accessor_storage = value; }
        #opacity_accessor_storage;
        get opacity() { return this.#opacity_accessor_storage; }
        set opacity(value) { this.#opacity_accessor_storage = value; }
        #seed_accessor_storage;
        get seed() { return this.#seed_accessor_storage; }
        set seed(value) { this.#seed_accessor_storage = value; }
    };
})();
export { GfxPrimitiveElementModel };
export class GfxGroupLikeElementModel extends GfxPrimitiveElementModel {
    constructor() {
        super(...arguments);
        this._childBoundCacheKey = '';
        this._childIds = [];
        this._mutex = createMutex();
        this[_a] = true;
    }
    static { _a = gfxContainerSymbol; }
    get childElements() {
        const elements = [];
        for (const key of this.childIds) {
            const element = this.surface.getElementById(key) ||
                this.surface.doc.getBlockById(key);
            element && elements.push(element);
        }
        return elements;
    }
    /**
     * The ids of the children. Its role is to provide a unique way to access the children.
     * You should update this field through `setChildIds` when the children are added or removed.
     */
    get childIds() {
        return this._childIds;
    }
    get xywh() {
        if (!this._local.has('xywh') ||
            this.childElements.reduce((pre, model) => pre + (model.xywh ?? ''), '') !== this._childBoundCacheKey) {
            this._mutex(() => {
                this._updateXYWH();
            });
        }
        return this._local.get('xywh') ?? '[0,0,0,0]';
    }
    set xywh(_) { }
    _updateXYWH() {
        let bound;
        let cacheKey = '';
        const oldValue = this._local.get('xywh') ?? '[0,0,0,0]';
        this.childElements.forEach(child => {
            cacheKey += child.xywh ?? '';
            bound = bound ? bound.unite(child.elementBound) : child.elementBound;
        });
        if (bound) {
            this._local.set('xywh', bound.serialize());
            this._childBoundCacheKey = cacheKey;
        }
        else {
            this._local.delete('xywh');
            this._childBoundCacheKey = '';
        }
        this._onChange({
            props: {
                xywh: bound?.serialize(),
            },
            oldValues: {
                xywh: oldValue,
            },
            local: true,
        });
    }
    /**
     * @deprecated Use `getAllDescendantElements` instead.
     * Get all descendants of this group
     * @param withoutGroup if true, will not include group element
     */
    descendants(withoutGroup = true) {
        return this.childElements.reduce((prev, child) => {
            if (child instanceof GfxGroupLikeElementModel) {
                prev = prev.concat(child.descendants());
                !withoutGroup && prev.push(child);
            }
            else {
                prev.push(child);
            }
            return prev;
        }, []);
    }
    /**
     * The actual field that stores the children of the group.
     * It should be a ymap decorated with `@field`.
     */
    hasChild(element) {
        return ((typeof element === 'string'
            ? this.children?.has(element)
            : this.children?.has(element.id)) ?? false);
    }
    /**
     * Check if the group has the given descendant.
     */
    hasDescendant(element) {
        const groups = this.surface.getGroups(typeof element === 'string' ? element : element.id);
        return groups.some(group => group.id === this.id);
    }
    /**
     * Set the new value of the childIds
     * @param value the new value of the childIds
     * @param fromLocal if true, the change is happened in the local
     */
    setChildIds(value, fromLocal) {
        const oldChildIds = this.childIds;
        this._childIds = value;
        this._onChange({
            props: {
                childIds: value,
            },
            oldValues: {
                childIds: oldChildIds,
            },
            local: fromLocal,
        });
        this.surface['hooks'].update.emit({
            id: this.id,
            props: {
                childIds: value,
            },
            oldValues: {
                childIds: oldChildIds,
            },
        });
    }
}
export class GfxLocalElementModel {
    constructor() {
        this._lastXYWH = '[0,0,-1,-1]';
        this._local = new Map();
        this.opacity = 1;
    }
    get deserializedXYWH() {
        if (this.xywh !== this._lastXYWH) {
            const xywh = this.xywh;
            this._local.set('deserializedXYWH', deserializeXYWH(xywh));
            this._lastXYWH = xywh;
        }
        return this._local.get('deserializedXYWH');
    }
    get h() {
        return this.deserializedXYWH[3];
    }
    get w() {
        return this.deserializedXYWH[2];
    }
    get x() {
        return this.deserializedXYWH[0];
    }
    get y() {
        return this.deserializedXYWH[1];
    }
}
export function syncElementFromY(model, callback) {
    const disposables = {};
    const observer = (event, transaction) => {
        const props = {};
        const oldValues = {};
        event.keysChanged.forEach(key => {
            const type = event.changes.keys.get(key);
            const oldValue = event.changes.keys.get(key)?.oldValue;
            if (!type) {
                return;
            }
            if (type.action === 'update' || type.action === 'add') {
                const value = model.yMap.get(key);
                if (value instanceof DocCollection.Y.Text) {
                    disposables[key]?.();
                    disposables[key] = watchText(key, value, callback);
                }
                model['_preserved'].set(key, value);
                props[key] = value;
                oldValues[key] = oldValue;
            }
        });
        callback({
            props,
            oldValues,
            local: transaction.local,
        });
    };
    Array.from(model.yMap.entries()).forEach(([key, value]) => {
        if (value instanceof DocCollection.Y.Text) {
            disposables[key] = watchText(key, value, callback);
        }
        model['_preserved'].set(key, value);
    });
    model.yMap.observe(observer);
    disposables['ymap'] = () => {
        model.yMap.unobserve(observer);
    };
    return () => {
        Object.values(disposables).forEach(fn => fn());
    };
}
function watchText(key, value, callback) {
    const fn = (_, transaction) => {
        callback({
            props: {
                [key]: value,
            },
            oldValues: {},
            local: transaction.local,
        });
    };
    value.observe(fn);
    return () => {
        value.unobserve(fn);
    };
}
//# sourceMappingURL=element-model.js.map