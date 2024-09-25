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
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import { DocModeProvider } from '@lumensuite/affine-shared/services';
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { blockComponentSymbol, GfxElementSymbol, isGfxBlockComponent, toGfxBlockComponent, } from '@lumensuite/block-std';
import { Bound, Point } from '@lumensuite/global/utils';
import { html, render } from 'lit';
import { query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BOOKMARK_MIN_WIDTH } from '../../root-block/edgeless/utils/consts.js';
import { AFFINE_DRAG_HANDLE_WIDGET, AffineDragHandleWidget, } from '../../root-block/widgets/drag-handle/drag-handle.js';
import { captureEventTarget, convertDragPreviewDocToEdgeless, convertDragPreviewEdgelessToDoc, } from '../../root-block/widgets/drag-handle/utils.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../consts.js';
import { matchFlavours } from '../utils/index.js';
import { styles } from './styles.js';
let EmbedBlockComponent = (() => {
    let _classSuper = CaptionedBlockComponent;
    let _embedBlock_decorators;
    let _embedBlock_initializers = [];
    let _embedBlock_extraInitializers = [];
    return class EmbedBlockComponent extends _classSuper {
        constructor() {
            super(...arguments);
            this._dragHandleOption = {
                flavour: /affine:embed-*/,
                edgeless: true,
                onDragStart: ({ state, startDragging, anchorBlockId, editorHost }) => {
                    if (!anchorBlockId)
                        return false;
                    const anchorComponent = editorHost.std.view.getBlock(anchorBlockId);
                    if (!anchorComponent ||
                        !matchFlavours(anchorComponent.model, [
                            this.flavour,
                        ]))
                        return false;
                    const blockComponent = anchorComponent;
                    const element = captureEventTarget(state.raw.target);
                    const isDraggingByDragHandle = !!element?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                    const isDraggingByComponent = blockComponent.contains(element);
                    const isInSurface = isGfxBlockComponent(blockComponent);
                    if (!isInSurface && (isDraggingByDragHandle || isDraggingByComponent)) {
                        editorHost.selection.setGroup('note', [
                            editorHost.selection.create('block', {
                                blockId: blockComponent.blockId,
                            }),
                        ]);
                        startDragging([blockComponent], state);
                        return true;
                    }
                    else if (isInSurface && isDraggingByDragHandle) {
                        const edgelessService = editorHost.std.getService('affine:page');
                        const zoom = edgelessService?.viewport.zoom ?? 1;
                        const dragPreviewEl = document.createElement('div');
                        const bound = Bound.deserialize(blockComponent.model.xywh);
                        const offset = new Point(bound.x * zoom, bound.y * zoom);
                        render(blockComponent.host.dangerouslyRenderModel(blockComponent.model), dragPreviewEl);
                        startDragging([blockComponent], state, dragPreviewEl, offset);
                        return true;
                    }
                    return false;
                },
                onDragEnd: props => {
                    const { state, draggingElements } = props;
                    if (draggingElements.length !== 1 ||
                        !matchFlavours(draggingElements[0].model, [
                            this.flavour,
                        ]))
                        return false;
                    const blockComponent = draggingElements[0];
                    const isInSurface = isGfxBlockComponent(blockComponent);
                    const target = captureEventTarget(state.raw.target);
                    const isTargetEdgelessContainer = target?.classList.contains('edgeless-container');
                    if (isInSurface) {
                        const style = blockComponent._cardStyle;
                        const targetStyle = style === 'vertical' || style === 'cube' ? 'horizontal' : style;
                        return convertDragPreviewEdgelessToDoc({
                            blockComponent,
                            style: targetStyle,
                            ...props,
                        });
                    }
                    else if (isTargetEdgelessContainer) {
                        const style = blockComponent._cardStyle;
                        return convertDragPreviewDocToEdgeless({
                            blockComponent,
                            cssSelector: '.embed-block-container',
                            width: EMBED_CARD_WIDTH[style],
                            height: EMBED_CARD_HEIGHT[style],
                            ...props,
                        });
                    }
                    return false;
                },
            };
            this._fetchAbortController = new AbortController();
            this._cardStyle = 'horizontal';
            this._height = EMBED_CARD_HEIGHT.horizontal;
            this._width = EMBED_CARD_WIDTH.horizontal;
            this.embedContainerStyle = {
                position: 'relative',
                width: '100%',
            };
            this.renderEmbed = (content) => {
                const theme = ThemeObserver.mode;
                const isSelected = !!this.selected?.is('block');
                if (this._cardStyle === 'horizontal' ||
                    this._cardStyle === 'horizontalThin' ||
                    this._cardStyle === 'list') {
                    this.style.display = 'block';
                    const mode = this.std.get(DocModeProvider).getEditorMode();
                    if (mode === 'edgeless') {
                        this.style.minWidth = `${BOOKMARK_MIN_WIDTH}px`;
                    }
                }
                return html `
      <div
        class=${classMap({
                    'embed-block-container': true,
                    [theme]: true,
                    selected: isSelected,
                })}
        style=${styleMap(this.embedContainerStyle)}
      >
        ${content()}
      </div>
    `;
            };
            this.#blockContainerStyles_accessor_storage = {
                margin: '18px 0',
            };
            this.#embedBlock_accessor_storage = __runInitializers(this, _embedBlock_initializers, void 0);
            this.#showBlockSelection_accessor_storage = (__runInitializers(this, _embedBlock_extraInitializers), false);
            this.#useCaptionEditor_accessor_storage = true;
            this.#useZeroWidth_accessor_storage = true;
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _embedBlock_decorators = [query('.embed-block-container')];
            __esDecorate(this, null, _embedBlock_decorators, { kind: "accessor", name: "embedBlock", static: false, private: false, access: { has: obj => "embedBlock" in obj, get: obj => obj.embedBlock, set: (obj, value) => { obj.embedBlock = value; } }, metadata: _metadata }, _embedBlock_initializers, _embedBlock_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get fetchAbortController() {
            return this._fetchAbortController;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this._fetchAbortController.signal.aborted)
                this._fetchAbortController = new AbortController();
            this.contentEditable = 'false';
            this.disposables.add(AffineDragHandleWidget.registerOption(this._dragHandleOption));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._fetchAbortController.abort();
        }
        #blockContainerStyles_accessor_storage;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
        #embedBlock_accessor_storage;
        get embedBlock() { return this.#embedBlock_accessor_storage; }
        set embedBlock(value) { this.#embedBlock_accessor_storage = value; }
        #showBlockSelection_accessor_storage;
        get showBlockSelection() { return this.#showBlockSelection_accessor_storage; }
        set showBlockSelection(value) { this.#showBlockSelection_accessor_storage = value; }
        #useCaptionEditor_accessor_storage;
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
        #useZeroWidth_accessor_storage;
        get useZeroWidth() { return this.#useZeroWidth_accessor_storage; }
        set useZeroWidth(value) { this.#useZeroWidth_accessor_storage = value; }
    };
})();
export { EmbedBlockComponent };
// @ts-ignore
export function toEdgelessEmbedBlock(block) {
    var _a, _b;
    // @ts-ignore
    return class extends toGfxBlockComponent(block) {
        constructor() {
            super(...arguments);
            this._isDragging = false;
            this._isResizing = false;
            this._isSelected = false;
            this._showOverlay = false;
            this[_a] = true;
            this.embedContainerStyle = {
                position: 'relative',
                width: '100%',
                height: '100%',
                transformOrigin: '0 0',
            };
            this[_b] = true;
            this.#blockContainerStyles_accessor_storage = undefined;
        }
        static { _a = blockComponentSymbol, _b = GfxElementSymbol; }
        get bound() {
            return Bound.deserialize(this.model.xywh);
        }
        get rootService() {
            return this.std.getService('affine:page');
        }
        _handleClick(_) {
            return;
        }
        connectedCallback() {
            super.connectedCallback();
            const rootService = this.rootService;
            this._disposables.add(rootService.slots.elementResizeStart.on(() => {
                this._isResizing = true;
                this._showOverlay = true;
            }));
            this._disposables.add(rootService.slots.elementResizeEnd.on(() => {
                this._isResizing = false;
                this._showOverlay =
                    this._isResizing || this._isDragging || !this._isSelected;
            }));
        }
        renderGfxBlock() {
            const width = this._width;
            const height = this._height;
            const bound = Bound.deserialize(this.model.xywh);
            const scaleX = bound.w / width;
            const scaleY = bound.h / height;
            this.embedContainerStyle.transform = `scale(${scaleX}, ${scaleY})`;
            return this.renderPageContent();
        }
        #blockContainerStyles_accessor_storage;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
    };
}
//# sourceMappingURL=embed-block-element.js.map