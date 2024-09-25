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
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH, } from '@lumensuite/affine-shared/consts';
import { Bound } from '@lumensuite/global/utils';
import { customElement } from 'lit/decorators.js';
import { toEdgelessEmbedBlock } from '../_common/embed-block-helper/embed-block-element.js';
import { EmbedLinkedDocBlockComponent } from './embed-linked-doc-block.js';
let EmbedEdgelessLinkedDocBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-edgeless-linked-doc-block')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = toEdgelessEmbedBlock(EmbedLinkedDocBlockComponent);
    var EmbedEdgelessLinkedDocBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.convertToEmbed = () => {
                const { id, doc, pageId, caption, xywh } = this.model;
                // synced doc entry controlled by awareness flag
                const isSyncedDocEnabled = doc.awarenessStore.getFlag('enable_synced_doc_block');
                if (!isSyncedDocEnabled) {
                    return;
                }
                const style = 'syncedDoc';
                const bound = Bound.deserialize(xywh);
                bound.w = EMBED_CARD_WIDTH[style];
                bound.h = EMBED_CARD_HEIGHT[style];
                const edgelessService = this.rootService;
                if (!edgelessService) {
                    return;
                }
                const newId = edgelessService.addBlock('affine:embed-synced-doc', { pageId, xywh: bound.serialize(), caption }, edgelessService.surface);
                this.std.command.exec('reassociateConnectors', {
                    oldId: id,
                    newId,
                });
                edgelessService.selection.set({
                    editing: false,
                    elements: [newId],
                });
                doc.deleteBlock(this.model);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedEdgelessLinkedDocBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get rootService() {
            return this.std.getService('affine:page');
        }
        _handleClick(evt) {
            if (this.config.handleClick) {
                this.config.handleClick(evt, this.host);
                return;
            }
        }
    };
    return EmbedEdgelessLinkedDocBlockComponent = _classThis;
})();
export { EmbedEdgelessLinkedDocBlockComponent };
//# sourceMappingURL=embed-edgeless-linked-doc-block.js.map