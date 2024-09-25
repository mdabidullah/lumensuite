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
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { BlockStdScope } from '@lumensuite/block-std';
import { assertExists, Bound } from '@lumensuite/global/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { classMap } from 'lit/directives/class-map.js';
import { guard } from 'lit/directives/guard.js';
import { styleMap } from 'lit/directives/style-map.js';
import { toEdgelessEmbedBlock } from '../_common/embed-block-helper/embed-block-element.js';
import { EmbedSyncedDocBlockComponent } from './embed-synced-doc-block.js';
let EmbedEdgelessSyncedDocBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-edgeless-synced-doc-block')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = toEdgelessEmbedBlock(EmbedSyncedDocBlockComponent);
    var EmbedEdgelessSyncedDocBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._renderSyncedView = () => {
                const syncedDoc = this.syncedDoc;
                const editorMode = this.syncedDocMode;
                assertExists(syncedDoc, 'Doc should exist');
                let containerStyleMap = styleMap({
                    position: 'relative',
                    width: '100%',
                });
                const modelScale = this.model.scale ?? 1;
                const bound = Bound.deserialize(this.model.xywh);
                const width = bound.w / modelScale;
                const height = bound.h / modelScale;
                containerStyleMap = styleMap({
                    width: `${width}px`,
                    height: `${height}px`,
                    minHeight: `${height}px`,
                    transform: `scale(${modelScale})`,
                    transformOrigin: '0 0',
                });
                const theme = ThemeObserver.mode;
                const isSelected = !!this.selected?.is('block');
                const scale = this.model.scale ?? 1;
                this.dataset.nestedEditor = '';
                const renderEditor = () => {
                    return choose(editorMode, [
                        [
                            'page',
                            () => html `
            <div class="affine-page-viewport">
              ${new BlockStdScope({
                                doc: syncedDoc,
                                extensions: this._buildPreviewSpec('page:preview'),
                            }).render()}
            </div>
          `,
                        ],
                        [
                            'edgeless',
                            () => html `
            <div class="affine-edgeless-viewport">
              ${new BlockStdScope({
                                doc: syncedDoc,
                                extensions: this._buildPreviewSpec('edgeless:preview'),
                            }).render()}
            </div>
          `,
                        ],
                    ]);
                };
                return this.renderEmbed(() => html `
        <div
          class=${classMap({
                    'affine-embed-synced-doc-container': true,
                    [editorMode]: true,
                    [theme]: true,
                    selected: isSelected,
                    surface: true,
                })}
          @click=${this._handleClick}
          style=${containerStyleMap}
          ?data-scale=${scale}
        >
          <div class="affine-embed-synced-doc-editor">
            ${this.isPageMode && this._isEmptySyncedDoc
                    ? html `
                  <div class="affine-embed-synced-doc-editor-empty">
                    <span>
                      This is a linked doc, you can add content here.
                    </span>
                  </div>
                `
                    : guard([editorMode, syncedDoc], renderEditor)}
          </div>
          <div class="affine-embed-synced-doc-editor-overlay"></div>
        </div>
      `);
            };
            this.convertToCard = () => {
                const { id, doc, pageId, caption, xywh } = this.model;
                const edgelessService = this.rootService;
                const style = 'vertical';
                const bound = Bound.deserialize(xywh);
                bound.w = EMBED_CARD_WIDTH[style];
                bound.h = EMBED_CARD_HEIGHT[style];
                if (!edgelessService) {
                    return;
                }
                const newId = edgelessService.addBlock('affine:embed-linked-doc', { pageId, xywh: bound.serialize(), style, caption }, edgelessService.surface);
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
            this.#useCaptionEditor_accessor_storage = true;
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedEdgelessSyncedDocBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get rootService() {
            return this.std.getService('affine:page');
        }
        renderGfxBlock() {
            const { style, xywh } = this.model;
            const bound = Bound.deserialize(xywh);
            this._width = bound.w;
            this._height = bound.h;
            const width = this._width;
            const height = this._height;
            this.embedContainerStyle.transform = `scale(${bound.w / width}, ${bound.h / height})`;
            this.cardStyleMap = {
                display: 'block',
                width: `${EMBED_CARD_WIDTH[style]}px`,
                height: `${EMBED_CARD_WIDTH[style]}px`,
                transform: `scale(${bound.w / EMBED_CARD_WIDTH[style]}, ${bound.h / EMBED_CARD_HEIGHT[style]})`,
                transformOrigin: '0 0',
            };
            return this.renderPageContent();
        }
        #useCaptionEditor_accessor_storage;
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
    };
    return EmbedEdgelessSyncedDocBlockComponent = _classThis;
})();
export { EmbedEdgelessSyncedDocBlockComponent };
//# sourceMappingURL=embed-edgeless-synced-doc-block.js.map