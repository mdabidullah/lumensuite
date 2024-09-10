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
import { field, GfxGroupLikeElementModel, local, observe, } from '@blocksuite/block-std/gfx';
import { Bound, keys, linePolygonIntersects, } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
let GroupElementModel = (() => {
    let _classSuper = GfxGroupLikeElementModel;
    let _children_decorators;
    let _children_initializers = [];
    let _children_extraInitializers = [];
    let _showTitle_decorators;
    let _showTitle_initializers = [];
    let _showTitle_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    return class GroupElementModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _children_decorators = [observe(
                // use `GroupElementModel` type in decorator will cause playwright error
                (_, instance, transaction) => {
                    instance.setChildIds(Array.from(instance.children.keys()), transaction?.local ?? false);
                }), field()];
            _showTitle_decorators = [local()];
            _title_decorators = [field()];
            __esDecorate(this, null, _children_decorators, { kind: "accessor", name: "children", static: false, private: false, access: { has: obj => "children" in obj, get: obj => obj.children, set: (obj, value) => { obj.children = value; } }, metadata: _metadata }, _children_initializers, _children_extraInitializers);
            __esDecorate(this, null, _showTitle_decorators, { kind: "accessor", name: "showTitle", static: false, private: false, access: { has: obj => "showTitle" in obj, get: obj => obj.showTitle, set: (obj, value) => { obj.showTitle = value; } }, metadata: _metadata }, _showTitle_initializers, _showTitle_extraInitializers);
            __esDecorate(this, null, _title_decorators, { kind: "accessor", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get rotate() {
            return 0;
        }
        set rotate(_) { }
        get type() {
            return 'group';
        }
        static propsToY(props) {
            if ('title' in props && !(props.title instanceof DocCollection.Y.Text)) {
                props.title = new DocCollection.Y.Text(props.title);
            }
            if (props.children && !(props.children instanceof DocCollection.Y.Map)) {
                const children = new DocCollection.Y.Map();
                keys(props.children).forEach(key => {
                    children.set(key, true);
                });
                props.children = children;
            }
            return props;
        }
        addChild(element) {
            const id = typeof element === 'string' ? element : element.id;
            if (!this.children) {
                return;
            }
            this.surface.doc.transact(() => {
                this.children.set(id, true);
            });
        }
        containsBound(bound) {
            return bound.contains(Bound.deserialize(this.xywh));
        }
        getLineIntersections(start, end) {
            const bound = Bound.deserialize(this.xywh);
            return linePolygonIntersects(start, end, bound.points);
        }
        removeChild(element) {
            const id = typeof element === 'string' ? element : element.id;
            if (!this.children) {
                return;
            }
            this.surface.doc.transact(() => {
                this.children.delete(id);
            });
        }
        serialize() {
            const result = super.serialize();
            return result;
        }
        #children_accessor_storage = __runInitializers(this, _children_initializers, new DocCollection.Y.Map());
        get children() { return this.#children_accessor_storage; }
        set children(value) { this.#children_accessor_storage = value; }
        #showTitle_accessor_storage = (__runInitializers(this, _children_extraInitializers), __runInitializers(this, _showTitle_initializers, true));
        get showTitle() { return this.#showTitle_accessor_storage; }
        set showTitle(value) { this.#showTitle_accessor_storage = value; }
        #title_accessor_storage = (__runInitializers(this, _showTitle_extraInitializers), __runInitializers(this, _title_initializers, new DocCollection.Y.Text()));
        get title() { return this.#title_accessor_storage; }
        set title(value) { this.#title_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _title_extraInitializers);
        }
    };
})();
export { GroupElementModel };
//# sourceMappingURL=group.js.map