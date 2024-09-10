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
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH, } from '@blocksuite/affine-shared/consts';
import { toGfxBlockComponent } from '@blocksuite/block-std';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BookmarkBlockComponent } from './bookmark-block.js';
let BookmarkEdgelessBlockComponent = (() => {
    let _classDecorators = [customElement('affine-edgeless-bookmark')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = toGfxBlockComponent(BookmarkBlockComponent);
    var BookmarkEdgelessBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BookmarkEdgelessBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        getRenderingRect() {
            const elementBound = this.model.elementBound;
            const style = this.model.style$.value;
            return {
                x: elementBound.x,
                y: elementBound.y,
                w: EMBED_CARD_WIDTH[style],
                h: EMBED_CARD_HEIGHT[style],
                zIndex: this.toZIndex(),
            };
        }
        renderGfxBlock() {
            const style = this.model.style$.value;
            const width = EMBED_CARD_WIDTH[style];
            const height = EMBED_CARD_HEIGHT[style];
            const bound = this.model.elementBound;
            const scaleX = bound.w / width;
            const scaleY = bound.h / height;
            this.containerStyleMap = styleMap({
                width: `100%`,
                height: `100%`,
                transform: `scale(${scaleX}, ${scaleY})`,
                transformOrigin: '0 0',
            });
            return this.renderPageContent();
        }
        #blockContainerStyles_accessor_storage = {};
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
    };
    return BookmarkEdgelessBlockComponent = _classThis;
})();
export { BookmarkEdgelessBlockComponent };
//# sourceMappingURL=bookmark-edgeless-block.js.map