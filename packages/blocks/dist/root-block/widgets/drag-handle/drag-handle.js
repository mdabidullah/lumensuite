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
import { findNoteBlockModel, getBlockComponentsExcludeSubtrees, getCurrentNativeRange, getScrollContainer, isInsideEdgelessEditor, isInsidePageEditor, matchFlavours, } from '@lumensuite/affine-shared/utils';
import { BLOCK_ID_ATTR, BlockStdScope, WidgetComponent, } from '@lumensuite/block-std';
import { Bound, DisposableGroup, Point, Rect, throttle, } from '@lumensuite/global/utils';
import { BlockViewType } from '@lumensuite/store';
import { html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SpecProvider } from '../../../_specs/utils/spec-provider.js';
import { getSelectedRect, isTopLevelBlock, } from '../../../root-block/edgeless/utils/query.js';
import { PageRootBlockComponent } from '../../../root-block/page/page-root-block.js';
import { autoScroll } from '../../../root-block/text-selection/utils.js';
import { DragPreview } from './components/drag-preview.js';
import { DropIndicator } from './components/drop-indicator.js';
import { DRAG_HANDLE_CONTAINER_OFFSET_LEFT_TOP_LEVEL, DRAG_HANDLE_CONTAINER_PADDING, DRAG_HANDLE_CONTAINER_WIDTH, DRAG_HANDLE_CONTAINER_WIDTH_TOP_LEVEL, DRAG_HANDLE_GRABBER_BORDER_RADIUS, DRAG_HANDLE_GRABBER_HEIGHT, DRAG_HANDLE_GRABBER_WIDTH, DRAG_HANDLE_GRABBER_WIDTH_HOVERED, DRAG_HOVER_RECT_PADDING, DragHandleOptionsRunner, HOVER_AREA_RECT_PADDING_TOP_LEVEL, } from './config.js';
import { styles } from './styles.js';
import { calcDropTarget, captureEventTarget, containBlock, containChildBlock, getClosestBlockByPoint, getClosestNoteBlock, getDragHandleContainerHeight, getDragHandleLeftPadding, getDuplicateBlocks, includeTextSelection, insideDatabaseTable, isBlockIdEqual, isOutOfNoteBlock, updateDragHandleClassName, } from './utils.js';
export const AFFINE_DRAG_HANDLE_WIDGET = 'affine-drag-handle-widget';
let AffineDragHandleWidget = (() => {
    let _classDecorators = [customElement(AFFINE_DRAG_HANDLE_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetComponent;
    let __dragHandleContainer_decorators;
    let __dragHandleContainer_initializers = [];
    let __dragHandleContainer_extraInitializers = [];
    let __dragHandleGrabber_decorators;
    let __dragHandleGrabber_initializers = [];
    let __dragHandleGrabber_extraInitializers = [];
    let __dragHoverRect_decorators;
    let __dragHoverRect_initializers = [];
    let __dragHoverRect_extraInitializers = [];
    var AffineDragHandleWidget = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __dragHandleContainer_decorators = [query('.affine-drag-handle-container')];
            __dragHandleGrabber_decorators = [query('.affine-drag-handle-grabber')];
            __dragHoverRect_decorators = [state()];
            __esDecorate(this, null, __dragHandleContainer_decorators, { kind: "accessor", name: "_dragHandleContainer", static: false, private: false, access: { has: obj => "_dragHandleContainer" in obj, get: obj => obj._dragHandleContainer, set: (obj, value) => { obj._dragHandleContainer = value; } }, metadata: _metadata }, __dragHandleContainer_initializers, __dragHandleContainer_extraInitializers);
            __esDecorate(this, null, __dragHandleGrabber_decorators, { kind: "accessor", name: "_dragHandleGrabber", static: false, private: false, access: { has: obj => "_dragHandleGrabber" in obj, get: obj => obj._dragHandleGrabber, set: (obj, value) => { obj._dragHandleGrabber = value; } }, metadata: _metadata }, __dragHandleGrabber_initializers, __dragHandleGrabber_extraInitializers);
            __esDecorate(this, null, __dragHoverRect_decorators, { kind: "accessor", name: "_dragHoverRect", static: false, private: false, access: { has: obj => "_dragHoverRect" in obj, get: obj => obj._dragHoverRect, set: (obj, value) => { obj._dragHoverRect = value; } }, metadata: _metadata }, __dragHoverRect_initializers, __dragHoverRect_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineDragHandleWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.staticOptionRunner = new DragHandleOptionsRunner(); }
        static { this.styles = styles; }
        get _rangeManager() {
            return this.std.range;
        }
        get anchorBlockComponent() {
            if (!this._anchorBlockId)
                return null;
            return this._getBlockComponentFromViewStore(this._anchorBlockId);
        }
        get anchorEdgelessElement() {
            if (isInsidePageEditor(this.host) || !this._anchorBlockId)
                return null;
            const { service } = this.rootComponent;
            const edgelessElement = service.getElementById(this._anchorBlockId);
            return isTopLevelBlock(edgelessElement) ? edgelessElement : null;
        }
        get dragHandleContainerOffsetParent() {
            return this._dragHandleContainer.parentElement;
        }
        get optionRunner() {
            return AffineDragHandleWidget.staticOptionRunner;
        }
        get rootComponent() {
            return this.block;
        }
        get scrollContainer() {
            return getScrollContainer(this.rootComponent);
        }
        get selectedBlocks() {
            // eslint-disable-next-line unicorn/prefer-array-some
            return this.host.selection.find('text')
                ? this.host.selection.filter('text')
                : this.host.selection.filter('block');
        }
        static registerOption(option) {
            return AffineDragHandleWidget.staticOptionRunner.register(option);
        }
        _clearRaf() {
            if (this.rafID) {
                cancelAnimationFrame(this.rafID);
                this.rafID = 0;
            }
        }
        _getHoverAreaRectTopLevelBlock(edgelessElement) {
            if (isInsidePageEditor(this.host))
                return null;
            const edgelessRoot = this.rootComponent;
            const rect = getSelectedRect([edgelessElement]);
            let [left, top] = edgelessRoot.service.viewport.toViewCoord(rect.left, rect.top);
            const width = rect.width * this.scale;
            const height = rect.height * this.scale;
            let [right, bottom] = [left + width, top + height];
            const offsetLeft = DRAG_HANDLE_CONTAINER_OFFSET_LEFT_TOP_LEVEL * this.scale;
            const padding = HOVER_AREA_RECT_PADDING_TOP_LEVEL * this.scale;
            left -= DRAG_HANDLE_CONTAINER_WIDTH_TOP_LEVEL * this.scale + offsetLeft;
            top -= padding;
            right += padding;
            bottom += padding;
            return new Rect(left, top, right, bottom);
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.addFromEvent(this, 'pointerdown', e => {
                e.preventDefault();
            });
            this.handleEvent('pointerMove', this._throttledPointerMoveHandler);
            this.handleEvent('click', this._clickHandler);
            this.handleEvent('dragStart', this._dragStartHandler);
            this.handleEvent('dragMove', this._dragMoveHandler);
            this.handleEvent('dragEnd', this._dragEndHandler, { global: true });
            this.handleEvent('pointerOut', this._pointerOutHandler);
            this.handleEvent('beforeInput', () => this._hide());
            this.handleEvent('keyDown', this._keyboardHandler, { global: true });
            this.handleEvent('keyUp', this._keyboardHandler, { global: true });
        }
        disconnectedCallback() {
            this._hide(true);
            this._disposables.dispose();
            this._anchorModelDisposables?.dispose();
            super.disconnectedCallback();
        }
        firstUpdated() {
            this._hide(true);
            // When pointer enter drag handle grabber
            // Extend drag handle grabber to the height of the hovered block
            this._disposables.addFromEvent(this._dragHandleContainer, 'pointerenter', this._onDragHandlePointerEnter);
            this._disposables.addFromEvent(this._dragHandleContainer, 'pointerdown', this._onDragHandlePointerDown);
            this._disposables.addFromEvent(this._dragHandleContainer, 'pointerup', this._onDragHandlePointerUp);
            // When pointer leave drag handle grabber, should reset drag handle grabber style
            this._disposables.addFromEvent(this._dragHandleContainer, 'pointerleave', this._onDragHandlePointerLeave);
            this._disposables.addFromEvent(this.host, 'pointerleave', () => {
                this._hide();
            });
            if (isInsidePageEditor(this.host)) {
                this._disposables.add(this.doc.slots.blockUpdated.on(() => this._hide()));
                const pageRoot = this.rootComponent;
                this._disposables.add(pageRoot.slots.viewportUpdated.on(() => {
                    this._hide();
                    if (this.dropIndicator) {
                        this.dropIndicator.rect = null;
                    }
                }));
                this._disposables.addFromEvent(this.scrollContainer, 'scrollend', this._updateDropIndicatorOnScroll);
            }
            else if (isInsideEdgelessEditor(this.host)) {
                const edgelessRoot = this.rootComponent;
                this._disposables.add(edgelessRoot.slots.edgelessToolUpdated.on(this._handleEdgelessToolUpdated));
                this._disposables.add(edgelessRoot.service.viewport.viewportUpdated.on(this._handleEdgelessViewPortUpdated));
                this._disposables.add(edgelessRoot.service.selection.slots.updated.on(() => {
                    this._checkTopLevelBlockSelection();
                }));
                this._disposables.add(edgelessRoot.slots.readonlyUpdated.on(() => {
                    this._checkTopLevelBlockSelection();
                }));
                this._disposables.add(edgelessRoot.slots.draggingAreaUpdated.on(() => {
                    this._checkTopLevelBlockSelection();
                }));
                this._disposables.add(edgelessRoot.slots.elementResizeStart.on(() => {
                    this._hide();
                }));
                this._disposables.add(edgelessRoot.slots.elementResizeEnd.on(() => {
                    this._checkTopLevelBlockSelection();
                }));
            }
        }
        render() {
            const hoverRectStyle = styleMap(this._dragHoverRect
                ? {
                    width: `${this._dragHoverRect.width}px`,
                    height: `${this._dragHoverRect.height}px`,
                    top: `${this._dragHoverRect.top}px`,
                    left: `${this._dragHoverRect.left}px`,
                }
                : {
                    display: 'none',
                });
            return html `
      <div class="affine-drag-handle-widget">
        <div class="affine-drag-handle-container">
          <div class="affine-drag-handle-grabber"></div>
        </div>
        <div class="affine-drag-hover-rect" style=${hoverRectStyle}></div>
      </div>
    `;
        }
        #_dragHandleContainer_accessor_storage;
        get _dragHandleContainer() { return this.#_dragHandleContainer_accessor_storage; }
        set _dragHandleContainer(value) { this.#_dragHandleContainer_accessor_storage = value; }
        #_dragHandleGrabber_accessor_storage;
        get _dragHandleGrabber() { return this.#_dragHandleGrabber_accessor_storage; }
        set _dragHandleGrabber(value) { this.#_dragHandleGrabber_accessor_storage = value; }
        #_dragHoverRect_accessor_storage;
        get _dragHoverRect() { return this.#_dragHoverRect_accessor_storage; }
        set _dragHoverRect(value) { this.#_dragHoverRect_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._anchorBlockId = null;
            this._anchorModelDisposables = null;
            this._calculatePreviewOffset = (blocks, state) => {
                const { top, left } = blocks[0].getBoundingClientRect();
                const previewOffset = new Point(state.raw.x - left, state.raw.y - top);
                return previewOffset;
            };
            this._calculateQuery = (selectedIds) => {
                const ids = selectedIds.map(id => ({
                    id,
                    viewType: BlockViewType.Display,
                }));
                // The ancestors of the selected blocks should be rendered as Bypass
                selectedIds.map(block => {
                    let parent = block;
                    do {
                        if (!selectedIds.includes(parent)) {
                            ids.push({ viewType: BlockViewType.Bypass, id: parent });
                        }
                        parent = this.doc.blockCollection.crud.getParent(parent);
                    } while (parent && !ids.map(({ id }) => id).includes(parent));
                });
                // The children of the selected blocks should be rendered as Display
                const addChildren = (id) => {
                    const children = this.doc.getBlock(id)?.model.children ?? [];
                    children.forEach(child => {
                        ids.push({ viewType: BlockViewType.Display, id: child.id });
                        addChildren(child.id);
                    });
                };
                selectedIds.forEach(addChildren);
                return {
                    match: ids,
                    mode: 'strict',
                };
            };
            this._canEditing = (noteBlock) => {
                if (noteBlock.doc.id !== this.doc.id)
                    return false;
                if (isInsidePageEditor(this.host))
                    return true;
                const edgelessRoot = this.rootComponent;
                const noteBlockId = noteBlock.model.id;
                return (edgelessRoot.service.selection.editing &&
                    edgelessRoot.service.selection.selectedIds[0] === noteBlockId);
            };
            this._changeCursorToGrabbing = () => {
                document.documentElement.classList.add('affine-drag-preview-grabbing');
            };
            this._checkTopLevelBlockSelection = () => {
                if (!this.isConnected) {
                    return;
                }
                if (this.doc.readonly || isInsidePageEditor(this.host)) {
                    this._hide();
                    return;
                }
                const edgelessRoot = this.rootComponent;
                const editing = edgelessRoot.service.selection.editing;
                const selectedElements = edgelessRoot.service.selection.selectedElements;
                if (editing || selectedElements.length !== 1) {
                    this._hide();
                    return;
                }
                const selectedElement = selectedElements[0];
                if (!isTopLevelBlock(selectedElement)) {
                    this._hide();
                    return;
                }
                const flavour = selectedElement.flavour;
                const dragHandleOptions = this.optionRunner.getOption(flavour);
                if (!dragHandleOptions || !dragHandleOptions.edgeless) {
                    this._hide();
                    return;
                }
                this._anchorBlockId = selectedElement.id;
                this._showDragHandleOnTopLevelBlocks().catch(console.error);
            };
            /**
             * When click on drag handle
             * Should select the block and show slash menu if current block is not selected
             * Should clear selection if current block is the first selected block
             */
            this._clickHandler = ctx => {
                if (!this._isHoverDragHandleVisible)
                    return;
                const state = ctx.get('pointerState');
                const { target } = state.raw;
                const element = captureEventTarget(target);
                const insideDragHandle = !!element?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                if (!insideDragHandle)
                    return;
                if (!this._anchorBlockId)
                    return;
                const { selection } = this.host;
                const selectedBlocks = this.selectedBlocks;
                // Should clear selection if current block is the first selected block
                if (selectedBlocks.length > 0 &&
                    !includeTextSelection(selectedBlocks) &&
                    selectedBlocks[0].blockId === this._anchorBlockId) {
                    selection.clear(['block']);
                    this._dragHoverRect = null;
                    this._showDragHandleOnHoverBlock(this._anchorBlockId);
                    return;
                }
                // Should select the block if current block is not selected
                const blocks = this.anchorBlockComponent;
                if (!blocks)
                    return;
                if (selectedBlocks.length > 1) {
                    this._showDragHandleOnHoverBlock(this._anchorBlockId);
                }
                this._setSelectedBlocks([blocks]);
            };
            this._createDragPreview = (blocks, state, dragPreviewEl, dragPreviewOffset) => {
                let dragPreview;
                if (dragPreviewEl) {
                    dragPreview = new DragPreview(dragPreviewOffset);
                    dragPreview.append(dragPreviewEl);
                }
                else {
                    let width = 0;
                    blocks.forEach(element => {
                        width = Math.max(width, element.getBoundingClientRect().width);
                    });
                    const selectedIds = blocks.map(block => block.model.id);
                    const query = this._calculateQuery(selectedIds);
                    const doc = this.doc.blockCollection.getDoc({ query });
                    const previewSpec = SpecProvider.getInstance().getSpec('page:preview');
                    const previewStd = new BlockStdScope({
                        doc,
                        extensions: previewSpec.value,
                    });
                    const previewTemplate = previewStd.render();
                    const offset = this._calculatePreviewOffset(blocks, state);
                    const posX = state.raw.x - offset.x;
                    const posY = state.raw.y - offset.y;
                    const altKey = state.raw.altKey;
                    dragPreview = new DragPreview(offset);
                    dragPreview.template = previewTemplate;
                    dragPreview.onRemove = () => {
                        this.doc.blockCollection.clearQuery(query);
                    };
                    dragPreview.style.width = `${width / this.scale / this.noteScale / this.cumulativeParentScale}px`;
                    dragPreview.style.transform = `translate(${posX}px, ${posY}px) scale(${this.scale * this.noteScale})`;
                    dragPreview.style.opacity = altKey ? '1' : '0.5';
                }
                this.rootComponent.append(dragPreview);
                return dragPreview;
            };
            this._createDropIndicator = () => {
                if (!this.dropIndicator) {
                    this.dropIndicator = new DropIndicator();
                    this.rootComponent.append(this.dropIndicator);
                }
            };
            /**
             * When drag end, should move blocks to drop position
             * @returns
             */
            this._dragEndHandler = ctx => {
                this._clearRaf();
                if (!this.dragging || !this.dragPreview)
                    return false;
                if (this.draggingElements.length === 0 || this.doc.readonly) {
                    this._hide(true);
                    return false;
                }
                const state = ctx.get('pointerState');
                const { target } = state.raw;
                if (!this.host.contains(target)) {
                    this._hide(true);
                    return true;
                }
                for (const option of this.optionRunner.options) {
                    if (option.onDragEnd?.({
                        state,
                        draggingElements: this.draggingElements,
                        dropBlockId: this.dropBlockId,
                        dropType: this.dropType,
                        dragPreview: this.dragPreview,
                        noteScale: this.noteScale,
                        editorHost: this.host,
                    })) {
                        this._hide(true);
                        if (isInsideEdgelessEditor(this.host)) {
                            this._checkTopLevelBlockSelection();
                        }
                        return true;
                    }
                }
                // call default drag end handler if no option return true
                this._onDragEnd(state);
                if (isInsideEdgelessEditor(this.host)) {
                    this._checkTopLevelBlockSelection();
                }
                return true;
            };
            /**
             * When dragging, should:
             * Update drag preview position
             * Update indicator position
             * Update drop block id
             */
            this._dragMoveHandler = ctx => {
                if (this._isHoverDragHandleVisible || this._isTopLevelDragHandleVisible) {
                    this._hide();
                }
                if (!this.dragging || this.draggingElements.length === 0) {
                    return false;
                }
                ctx.get('defaultState').event.preventDefault();
                const state = ctx.get('pointerState');
                for (const option of this.optionRunner.options) {
                    if (option.onDragMove?.(state, this.draggingElements)) {
                        return true;
                    }
                }
                // call default drag move handler if no option return true
                return this._onDragMove(state);
            };
            /**
             * When start dragging, should set dragging elements and create drag preview
             */
            this._dragStartHandler = ctx => {
                const state = ctx.get('pointerState');
                // If not click left button to start dragging, should do nothing
                const { button } = state.raw;
                if (button !== 0) {
                    return false;
                }
                // call default drag start handler if no option return true
                for (const option of this.optionRunner.options) {
                    if (option.onDragStart?.({
                        state,
                        startDragging: this._startDragging,
                        anchorBlockId: this._anchorBlockId ?? '',
                        editorHost: this.host,
                    })) {
                        return true;
                    }
                }
                return this._onDragStart(state);
            };
            this._getBlockComponentFromViewStore = (blockId) => {
                return this.host.view.getBlock(blockId);
            };
            this._getDraggingAreaRect = (block) => {
                // When hover block is in selected blocks, should show hover rect on the selected blocks
                // Top: the top of the first selected block
                // Left: the left of the first selected block
                // Right: the largest right of the selected blocks
                // Bottom: the bottom of the last selected block
                let { left, top, right, bottom } = block.getBoundingClientRect();
                const blocks = this._getHoveredBlocks();
                blocks.forEach(block => {
                    left = Math.min(left, block.getBoundingClientRect().left);
                    top = Math.min(top, block.getBoundingClientRect().top);
                    right = Math.max(right, block.getBoundingClientRect().right);
                    bottom = Math.max(bottom, block.getBoundingClientRect().bottom);
                });
                const offsetLeft = getDragHandleLeftPadding(blocks);
                const offsetParentRect = this.dragHandleContainerOffsetParent.getBoundingClientRect();
                if (!offsetParentRect)
                    return new Rect(0, 0, 0, 0);
                left -= offsetParentRect.left;
                right -= offsetParentRect.left;
                top -= offsetParentRect.top;
                bottom -= offsetParentRect.top;
                left /= this.cumulativeParentScale;
                right /= this.cumulativeParentScale;
                top /= this.cumulativeParentScale;
                bottom /= this.cumulativeParentScale;
                // Add padding to hover rect
                left -=
                    (DRAG_HANDLE_CONTAINER_WIDTH + offsetLeft) * this.scale * this.noteScale;
                top -= DRAG_HOVER_RECT_PADDING * this.scale;
                right += DRAG_HOVER_RECT_PADDING * this.scale;
                bottom += DRAG_HOVER_RECT_PADDING * this.scale;
                return new Rect(left, top, right, bottom);
            };
            /**
             * When dragging, should update indicator position and target drop block id
             */
            this._getDropResult = (state) => {
                const point = new Point(state.raw.x, state.raw.y);
                const closestBlock = getClosestBlockByPoint(this.host, this.rootComponent, point);
                if (!closestBlock)
                    return null;
                const blockId = closestBlock.model.id;
                const model = closestBlock.model;
                const isDatabase = matchFlavours(model, ['affine:database']);
                if (isDatabase)
                    return null;
                // note block can only be dropped into another note block
                // prevent note block from being dropped into other blocks
                const isDraggedElementNote = this.draggingElements.length === 1 &&
                    matchFlavours(this.draggingElements[0].model, ['affine:note']);
                if (isDraggedElementNote) {
                    const parent = this.std.doc.getParent(closestBlock.model);
                    if (!parent)
                        return null;
                    const parentElement = this._getBlockComponentFromViewStore(parent.id);
                    if (!parentElement)
                        return null;
                    if (!matchFlavours(parentElement.model, ['affine:note']))
                        return null;
                }
                // Should make sure that target drop block is
                // neither within the dragging elements
                // nor a child-block of any dragging elements
                if (containBlock(this.draggingElements.map(block => block.model.id), blockId) ||
                    containChildBlock(this.draggingElements, model)) {
                    return null;
                }
                let rect = null;
                let dropType = 'before';
                const result = calcDropTarget(point, model, closestBlock, this.draggingElements, this.scale * this.cumulativeParentScale, isDraggedElementNote === false);
                if (result) {
                    rect = result.rect;
                    dropType = result.dropType;
                }
                if (isDraggedElementNote && dropType === 'in')
                    return null;
                const dropIndicator = {
                    rect,
                    dropBlockId: blockId,
                    dropType,
                };
                return dropIndicator;
            };
            this._getHoveredBlocks = () => {
                if (!this._isHoverDragHandleVisible || !this._anchorBlockId)
                    return [];
                const hoverBlock = this.anchorBlockComponent;
                if (!hoverBlock)
                    return [];
                const selections = this.selectedBlocks;
                let blocks = [];
                // When current selection is TextSelection, should cover all the blocks in native range
                if (selections.length > 0 && includeTextSelection(selections)) {
                    const range = getCurrentNativeRange();
                    if (!range)
                        return [];
                    if (!this._rangeManager)
                        return [];
                    blocks = this._rangeManager.getSelectedBlockComponentsByRange(range, {
                        match: el => el.model.role === 'content',
                        mode: 'highest',
                    });
                }
                else {
                    blocks = this.selectedBlocks
                        .map(block => this._getBlockComponentFromViewStore(block.blockId))
                        .filter((block) => !!block);
                }
                if (containBlock(blocks.map(block => block.blockId), this._anchorBlockId)) {
                    return blocks;
                }
                return [hoverBlock];
            };
            // Need to consider block padding and scale
            this._getTopWithBlockComponent = (block) => {
                const computedStyle = getComputedStyle(block);
                const { top } = block.getBoundingClientRect();
                const paddingTop = parseInt(computedStyle.paddingTop) * this.scale;
                return ((top +
                    paddingTop -
                    this.dragHandleContainerOffsetParent.getBoundingClientRect().top) /
                    this.cumulativeParentScale);
            };
            this._handleAnchorModelDisposables = (blockModel) => {
                if (this._anchorModelDisposables) {
                    this._anchorModelDisposables.dispose();
                    this._anchorModelDisposables = null;
                }
                this._anchorModelDisposables = new DisposableGroup();
                this._anchorModelDisposables.add(blockModel.propsUpdated.on(() => this._hide()));
                this._anchorModelDisposables.add(blockModel.deleted.on(() => this._hide()));
            };
            this._handleEdgelessToolUpdated = (newTool) => {
                if (newTool.type === 'default') {
                    this._checkTopLevelBlockSelection();
                }
                else {
                    this._hide();
                }
            };
            this._handleEdgelessViewPortUpdated = ({ zoom, center, }) => {
                if (this.scale !== zoom) {
                    this.scale = zoom;
                    this._updateDragPreviewOnViewportUpdate();
                }
                if (this.center[0] !== center[0] && this.center[1] !== center[1]) {
                    this.center = [...center];
                    this._updateDropIndicatorOnScroll();
                }
                if (this._isTopLevelDragHandleVisible) {
                    this._showDragHandleOnTopLevelBlocks().catch(console.error);
                    this._updateDragHoverRectTopLevelBlock();
                }
                else {
                    this._hide();
                }
            };
            this._hide = (force = false) => {
                updateDragHandleClassName();
                this._isHoverDragHandleVisible = false;
                this._isTopLevelDragHandleVisible = false;
                this._isDragHandleHovered = false;
                this._anchorBlockId = null;
                if (this._dragHandleContainer) {
                    this._dragHandleContainer.style.display = 'none';
                }
                if (force) {
                    this._reset();
                }
            };
            /** Check if given block component is selected */
            this._isBlockSelected = (block) => {
                if (!block)
                    return false;
                return this.selectedBlocks.some(selection => selection.blockId === block.model.id);
            };
            this._isDragHandleHovered = false;
            this._isHoverDragHandleVisible = false;
            this._isTopLevelDragHandleVisible = false;
            this._keyboardHandler = ctx => {
                if (!this.dragging || !this.dragPreview) {
                    return;
                }
                const state = ctx.get('defaultState');
                const event = state.event;
                event.preventDefault();
                event.stopPropagation();
                const altKey = event.key === 'Alt' && event.altKey;
                this.dragPreview.style.opacity = altKey ? '1' : '0.5';
            };
            this._lastHoveredBlockId = null;
            this._lastShowedBlock = null;
            this._onDragEnd = (state) => {
                const targetBlockId = this.dropBlockId;
                const dropType = this.dropType;
                const draggingElements = this.draggingElements;
                this._hide(true);
                // handle drop of blocks from note onto edgeless container
                if (!targetBlockId) {
                    const target = captureEventTarget(state.raw.target);
                    if (!target)
                        return false;
                    const isTargetEdgelessContainer = target.classList.contains('edgeless-container');
                    if (!isTargetEdgelessContainer)
                        return false;
                    const selectedBlocks = getBlockComponentsExcludeSubtrees(draggingElements)
                        .map(element => element.model)
                        .filter((x) => !!x);
                    if (selectedBlocks.length === 0)
                        return false;
                    const isSurfaceComponent = selectedBlocks.some(block => {
                        const parent = this.doc.getParent(block.id);
                        return matchFlavours(parent, ['affine:surface']);
                    });
                    if (isSurfaceComponent)
                        return true;
                    const edgelessRoot = this.rootComponent;
                    const { left: viewportLeft, top: viewportTop } = edgelessRoot.viewport;
                    const newNoteId = edgelessRoot.addNoteWithPoint(new Point(state.raw.x - viewportLeft, state.raw.y - viewportTop), {
                        scale: this.noteScale,
                    });
                    const newNoteBlock = this.doc.getBlockById(newNoteId);
                    if (!newNoteBlock)
                        return;
                    const bound = Bound.deserialize(newNoteBlock.xywh);
                    bound.h *= this.noteScale;
                    bound.w *= this.noteScale;
                    this.doc.updateBlock(newNoteBlock, {
                        xywh: bound.serialize(),
                        edgeless: {
                            ...newNoteBlock.edgeless,
                            scale: this.noteScale,
                        },
                    });
                    const altKey = state.raw.altKey;
                    if (altKey) {
                        const duplicateBlocks = getDuplicateBlocks(selectedBlocks);
                        this.doc.addBlocks(duplicateBlocks, newNoteBlock);
                    }
                    else {
                        this.doc.moveBlocks(selectedBlocks, newNoteBlock);
                    }
                    edgelessRoot.service.selection.set({
                        elements: [newNoteBlock.id],
                        editing: true,
                    });
                    return true;
                }
                // Should make sure drop block id is not in selected blocks
                if (containBlock(this.selectedBlocks.map(selection => selection.blockId), targetBlockId)) {
                    return false;
                }
                const selectedBlocks = getBlockComponentsExcludeSubtrees(draggingElements)
                    .map(element => element.model)
                    .filter((x) => !!x);
                if (!selectedBlocks.length) {
                    return false;
                }
                const targetBlock = this.doc.getBlockById(targetBlockId);
                if (!targetBlock)
                    return;
                const shouldInsertIn = dropType === 'in';
                const parent = shouldInsertIn
                    ? targetBlock
                    : this.doc.getParent(targetBlockId);
                if (!parent)
                    return;
                const altKey = state.raw.altKey;
                if (shouldInsertIn) {
                    if (altKey) {
                        const duplicateBlocks = getDuplicateBlocks(selectedBlocks);
                        this.doc.addBlocks(duplicateBlocks, targetBlock);
                    }
                    else {
                        this.doc.moveBlocks(selectedBlocks, targetBlock);
                    }
                }
                else {
                    if (altKey) {
                        const duplicateBlocks = getDuplicateBlocks(selectedBlocks);
                        const parentIndex = parent.children.indexOf(targetBlock) + (dropType === 'after' ? 1 : 0);
                        this.doc.addBlocks(duplicateBlocks, parent, parentIndex);
                    }
                    else {
                        this.doc.moveBlocks(selectedBlocks, parent, targetBlock, dropType === 'before');
                    }
                }
                // TODO: need a better way to update selection
                // Should update selection after moving blocks
                // In doc page mode, update selected blocks
                // In edgeless mode, focus on the first block
                setTimeout(() => {
                    if (!parent)
                        return;
                    // Need to update selection when moving blocks successfully
                    // Because the block path may be changed after moving
                    const parentElement = this._getBlockComponentFromViewStore(parent.id);
                    if (parentElement) {
                        const newSelectedBlocks = selectedBlocks.map(block => {
                            return this.std.view.getBlock(block.id);
                        });
                        if (!newSelectedBlocks)
                            return;
                        const note = findNoteBlockModel(parentElement.model);
                        if (!note)
                            return;
                        this._setSelectedBlocks(newSelectedBlocks, note.id);
                    }
                }, 0);
                return true;
            };
            this._onDragHandlePointerDown = () => {
                if (!this._isHoverDragHandleVisible || !this._anchorBlockId)
                    return;
                const block = this.anchorBlockComponent;
                if (!block)
                    return;
                this._dragHoverRect = this._getDraggingAreaRect(block) ?? null;
            };
            this._onDragHandlePointerEnter = () => {
                const container = this._dragHandleContainer;
                const grabber = this._dragHandleGrabber;
                if (!container || !grabber)
                    return;
                if (this._isHoverDragHandleVisible && this._anchorBlockId) {
                    const block = this.anchorBlockComponent;
                    if (!block)
                        return;
                    const padding = DRAG_HANDLE_CONTAINER_PADDING * this.scale;
                    container.style.paddingTop = `${padding}px`;
                    container.style.paddingBottom = `${padding}px`;
                    container.style.transition = `padding 0.25s ease`;
                    grabber.style.width = `${DRAG_HANDLE_GRABBER_WIDTH_HOVERED * this.scale * this.noteScale}px`;
                    grabber.style.borderRadius = `${DRAG_HANDLE_GRABBER_BORDER_RADIUS * this.scale * this.noteScale}px`;
                    this._isDragHandleHovered = true;
                }
                else if (this._isTopLevelDragHandleVisible) {
                    const edgelessElement = this.anchorEdgelessElement;
                    if (!edgelessElement)
                        return;
                    this._dragHoverRect =
                        this._getHoverAreaRectTopLevelBlock(edgelessElement);
                    this._isDragHandleHovered = true;
                }
            };
            this._onDragHandlePointerLeave = () => {
                this._isDragHandleHovered = false;
                this._dragHoverRect = null;
                if (this._isTopLevelDragHandleVisible)
                    return;
                if (this.dragging)
                    return;
                if (!this._anchorBlockId)
                    return;
                this._showDragHandleOnHoverBlock(this._anchorBlockId);
            };
            this._onDragHandlePointerUp = () => {
                if (!this._isHoverDragHandleVisible)
                    return;
                this._dragHoverRect = null;
            };
            this._onDragMove = (state) => {
                this._clearRaf();
                this.rafID = requestAnimationFrame(() => {
                    this._updateDragPreviewPosition(state);
                    this._updateDropIndicator(state, true);
                });
                return true;
            };
            this._onDragStart = (state) => {
                const event = state.raw;
                const { target } = event;
                const element = captureEventTarget(target);
                const insideDragHandle = !!element?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                // Should only start dragging when pointer down on drag handle
                // And current mouse button is left button
                if (!insideDragHandle) {
                    this._hide();
                    return false;
                }
                if (!this._isHoverDragHandleVisible || !this._anchorBlockId)
                    return;
                // Get current hover block element by path
                const hoverBlock = this.anchorBlockComponent;
                if (!hoverBlock)
                    return false;
                let selections = this.selectedBlocks;
                // When current selection is TextSelection
                // Should set BlockSelection for the blocks in native range
                if (selections.length > 0 && includeTextSelection(selections)) {
                    const nativeSelection = document.getSelection();
                    if (nativeSelection &&
                        nativeSelection.rangeCount > 0 &&
                        this._rangeManager) {
                        const range = nativeSelection.getRangeAt(0);
                        const blocks = this._rangeManager.getSelectedBlockComponentsByRange(range, {
                            match: el => el.model.role === 'content',
                            mode: 'highest',
                        });
                        this._setSelectedBlocks(blocks);
                        selections = this.selectedBlocks;
                    }
                }
                // When there is no selected blocks
                // Or selected blocks not including current hover block
                // Set current hover block as selected
                if (selections.length === 0 ||
                    !containBlock(selections.map(selection => selection.blockId), this._anchorBlockId)) {
                    const block = this.anchorBlockComponent;
                    if (block) {
                        this._setSelectedBlocks([block]);
                    }
                }
                const blocks = this.selectedBlocks
                    .map(selection => {
                    return this._getBlockComponentFromViewStore(selection.blockId);
                })
                    .filter((element) => !!element);
                // This could be skip if we can ensure that all selected blocks are on the same level
                // Which means not selecting parent block and child block at the same time
                const blocksExcludingChildren = getBlockComponentsExcludeSubtrees(blocks);
                if (blocksExcludingChildren.length === 0)
                    return false;
                this._startDragging(blocksExcludingChildren, state);
                this._hide();
                return true;
            };
            /**
             * When pointer move on block, should show drag handle
             * And update hover block id and path
             */
            this._pointerMoveOnBlock = (state) => {
                if (this._isTopLevelDragHandleVisible)
                    return;
                const point = new Point(state.raw.x, state.raw.y);
                const closestBlock = getClosestBlockByPoint(this.host, this.rootComponent, point);
                if (!closestBlock) {
                    this._anchorBlockId = null;
                    return;
                }
                const blockId = closestBlock.getAttribute(BLOCK_ID_ATTR);
                if (!blockId)
                    return;
                this._anchorBlockId = blockId;
                if (insideDatabaseTable(closestBlock) || this.doc.readonly) {
                    this._hide();
                    return;
                }
                // If current block is not the last hovered block, show drag handle beside the hovered block
                if ((!this._lastHoveredBlockId ||
                    !isBlockIdEqual(this._anchorBlockId, this._lastHoveredBlockId) ||
                    !this._isHoverDragHandleVisible) &&
                    !this._isDragHandleHovered) {
                    this._showDragHandleOnHoverBlock(this._anchorBlockId);
                    this._lastHoveredBlockId = this._anchorBlockId;
                }
            };
            this._pointerOutHandler = ctx => {
                const state = ctx.get('pointerState');
                state.raw.preventDefault();
                const { target } = state.raw;
                const element = captureEventTarget(target);
                if (!element)
                    return;
                const { relatedTarget } = state.raw;
                // TODO: when pointer out of page viewport, should hide drag handle
                // But the pointer out event is not as expected
                // Need to be optimized
                const relatedElement = captureEventTarget(relatedTarget);
                const outOfPageViewPort = element.classList.contains('affine-page-viewport');
                const inPage = !!relatedElement?.closest('.affine-page-viewport');
                const inDragHandle = !!relatedElement?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                if (outOfPageViewPort && !inDragHandle && !inPage) {
                    this._hide();
                }
            };
            this._removeDragPreview = () => {
                if (this.dragPreview) {
                    this.dragPreview.remove();
                    this.dragPreview = null;
                }
            };
            this._removeDropIndicator = () => {
                if (this.dropIndicator) {
                    this.dropIndicator.remove();
                    this.dropIndicator = null;
                }
            };
            this._reset = () => {
                this.draggingElements = [];
                this.dropBlockId = '';
                this.dropType = null;
                this.lastDragPointerState = null;
                this.rafID = 0;
                this.dragging = false;
                this._dragHoverRect = null;
                this._lastHoveredBlockId = null;
                this._lastShowedBlock = null;
                this._anchorBlockId = null;
                this._isHoverDragHandleVisible = false;
                this._isDragHandleHovered = false;
                this._isTopLevelDragHandleVisible = false;
                this._removeDragPreview();
                this._removeDropIndicator();
                this._resetCursor();
            };
            this._resetCursor = () => {
                document.documentElement.classList.remove('affine-drag-preview-grabbing');
            };
            this._resetDropResult = () => {
                this.dropBlockId = '';
                this.dropType = null;
                if (this.dropIndicator)
                    this.dropIndicator.rect = null;
            };
            this._setSelectedBlocks = (blocks, noteId) => {
                const { selection } = this.host;
                const selections = blocks.map(block => selection.create('block', {
                    blockId: block.blockId,
                }));
                // When current page is edgeless page
                // We need to remain surface selection and set editing as true
                if (isInsideEdgelessEditor(this.host)) {
                    const surfaceElementId = noteId
                        ? noteId
                        : findNoteBlockModel(blocks[0].model)?.id;
                    if (!surfaceElementId)
                        return;
                    const surfaceSelection = selection.create('surface', blocks[0].blockId, [surfaceElementId], true);
                    selections.push(surfaceSelection);
                }
                selection.set(selections);
            };
            // Multiple blocks: drag handle should show on the vertical middle of all blocks
            this._showDragHandleOnHoverBlock = (blockId) => {
                const block = this._getBlockComponentFromViewStore(blockId);
                if (!block)
                    return;
                const container = this._dragHandleContainer;
                const grabber = this._dragHandleGrabber;
                if (!container || !grabber)
                    return;
                this._isHoverDragHandleVisible = true;
                const draggingAreaRect = this._getDraggingAreaRect(block);
                // Some blocks have padding, should consider padding when calculating position
                const containerHeight = getDragHandleContainerHeight(block.model);
                // Ad-hoc solution for list with toggle icon
                updateDragHandleClassName([block]);
                // End of ad-hoc solution
                const posTop = this._getTopWithBlockComponent(block);
                const rowPaddingY = ((containerHeight - DRAG_HANDLE_GRABBER_HEIGHT) / 2) *
                    this.scale *
                    this.noteScale;
                // use padding to control grabber's height
                const paddingTop = rowPaddingY + posTop - draggingAreaRect.top;
                const paddingBottom = draggingAreaRect.height -
                    paddingTop -
                    DRAG_HANDLE_GRABBER_HEIGHT * this.scale * this.noteScale;
                const applyStyle = (transition) => {
                    container.style.transition = transition ? 'padding 0.25s ease' : 'none';
                    container.style.paddingTop = `${paddingTop}px`;
                    container.style.paddingBottom = `${paddingBottom}px`;
                    container.style.width = `${DRAG_HANDLE_CONTAINER_WIDTH * this.scale * this.noteScale}px`;
                    container.style.left = `${draggingAreaRect.left}px`;
                    container.style.top = `${draggingAreaRect.top}px`;
                    container.style.display = 'flex';
                    container.style.height = `${draggingAreaRect.height}px`;
                };
                if (isBlockIdEqual(block.blockId, this._lastShowedBlock?.id)) {
                    applyStyle(true);
                }
                else if (this.selectedBlocks.length) {
                    if (this._isBlockSelected(block))
                        applyStyle(this._isDragHandleHovered &&
                            this._isBlockSelected(this._lastShowedBlock?.el));
                    else
                        applyStyle(false);
                }
                else {
                    applyStyle(false);
                }
                grabber.style.width = `${DRAG_HANDLE_GRABBER_WIDTH * this.scale * this.noteScale}px`;
                grabber.style.borderRadius = `${DRAG_HANDLE_GRABBER_BORDER_RADIUS * this.scale * this.noteScale}px`;
                this._handleAnchorModelDisposables(block.model);
                if (!isBlockIdEqual(block.blockId, this._lastShowedBlock?.id)) {
                    this._lastShowedBlock = {
                        id: block.blockId,
                        el: block,
                    };
                }
            };
            this._showDragHandleOnTopLevelBlocks = async () => {
                if (isInsidePageEditor(this.host))
                    return;
                const edgelessRoot = this.rootComponent;
                await edgelessRoot.surface.updateComplete;
                if (!this._anchorBlockId)
                    return;
                const block = this.anchorBlockComponent;
                if (!block)
                    return;
                const edgelessElement = edgelessRoot.service.getElementById(block.model.id);
                if (!edgelessElement)
                    return;
                const container = this._dragHandleContainer;
                const grabber = this._dragHandleGrabber;
                if (!container || !grabber)
                    return;
                const rect = getSelectedRect([edgelessElement]);
                const [left, top] = edgelessRoot.service.viewport.toViewCoord(rect.left, rect.top);
                const height = rect.height * this.scale;
                const posLeft = left -
                    (DRAG_HANDLE_CONTAINER_WIDTH_TOP_LEVEL +
                        DRAG_HANDLE_CONTAINER_OFFSET_LEFT_TOP_LEVEL) *
                        this.scale;
                const posTop = top;
                container.style.transition = 'none';
                container.style.paddingTop = `0px`;
                container.style.paddingBottom = `0px`;
                container.style.width = `${DRAG_HANDLE_CONTAINER_WIDTH_TOP_LEVEL * this.scale}px`;
                container.style.left = `${posLeft}px`;
                container.style.top = `${posTop}px`;
                container.style.display = 'flex';
                container.style.height = `${height}px`;
                grabber.style.width = `${DRAG_HANDLE_GRABBER_WIDTH_HOVERED * this.scale}px`;
                grabber.style.borderRadius = `${DRAG_HANDLE_GRABBER_BORDER_RADIUS * this.scale}px`;
                this._handleAnchorModelDisposables(block.model);
                this._isTopLevelDragHandleVisible = true;
            };
            this._startDragging = (blocks, state, dragPreviewEl, dragPreviewOffset) => {
                if (!blocks.length) {
                    return;
                }
                this.draggingElements = blocks;
                if (this.dragPreview) {
                    this._removeDragPreview();
                }
                this.dragPreview = this._createDragPreview(blocks, state, dragPreviewEl, dragPreviewOffset);
                this.dragging = true;
                this._changeCursorToGrabbing();
                this._createDropIndicator();
                this._hide();
            };
            this._throttledPointerMoveHandler = throttle(ctx => {
                if (this.doc.readonly || this.dragging || !this.isConnected) {
                    this._hide();
                    return;
                }
                if (this._isTopLevelDragHandleVisible)
                    return;
                const state = ctx.get('pointerState');
                const { target } = state.raw;
                const element = captureEventTarget(target);
                // When pointer not on block or on dragging, should do nothing
                if (!element)
                    return;
                // When pointer on drag handle, should do nothing
                if (element.closest('.affine-drag-handle-container'))
                    return;
                // TODO: need to optimize
                // When pointer out of note block hover area or inside database, should hide drag handle
                const point = new Point(state.raw.x, state.raw.y);
                const closestNoteBlock = getClosestNoteBlock(this.host, this.rootComponent, point);
                this.noteScale = isInsidePageEditor(this.host)
                    ? 1
                    : (closestNoteBlock?.model.edgeless.scale ?? 1);
                if (closestNoteBlock &&
                    this._canEditing(closestNoteBlock) &&
                    !isOutOfNoteBlock(this.host, closestNoteBlock, point, this.scale * this.noteScale)) {
                    this._pointerMoveOnBlock(state);
                    return true;
                }
                this._hide();
                return false;
            }, 1000 / 60);
            this._updateDragHoverRectTopLevelBlock = () => {
                if (!this._dragHoverRect)
                    return;
                const edgelessElement = this.anchorEdgelessElement;
                if (edgelessElement) {
                    this._dragHoverRect =
                        this._getHoverAreaRectTopLevelBlock(edgelessElement);
                }
            };
            this._updateDragPreviewOnViewportUpdate = () => {
                if (this.dragPreview && this.lastDragPointerState) {
                    this._updateDragPreviewPosition(this.lastDragPointerState);
                }
            };
            this._updateDragPreviewPosition = (state) => {
                if (!this.dragPreview)
                    return;
                const offsetParentRect = this.dragHandleContainerOffsetParent.getBoundingClientRect();
                const dragPreviewOffset = this.dragPreview.offset;
                let posX = state.raw.x - dragPreviewOffset.x - offsetParentRect.left;
                posX /= this.cumulativeParentScale;
                let posY = state.raw.y - dragPreviewOffset.y - offsetParentRect.top;
                posY /= this.cumulativeParentScale;
                this.dragPreview.style.transform = `translate(${posX}px, ${posY}px) scale(${this.scale * this.noteScale})`;
                const altKey = state.raw.altKey;
                this.dragPreview.style.opacity = altKey ? '1' : '0.5';
            };
            this._updateDropIndicator = (state, shouldAutoScroll = false) => {
                const point = new Point(state.raw.x, state.raw.y);
                const closestNoteBlock = getClosestNoteBlock(this.host, this.rootComponent, point);
                if (!closestNoteBlock ||
                    isOutOfNoteBlock(this.host, closestNoteBlock, point, this.scale)) {
                    this._resetDropResult();
                }
                else {
                    const dropResult = this._getDropResult(state);
                    this._updateDropResult(dropResult);
                }
                this.lastDragPointerState = state;
                if (this.rootComponent instanceof PageRootBlockComponent) {
                    if (!shouldAutoScroll)
                        return;
                    const result = autoScroll(this.scrollContainer, state.raw.y);
                    if (!result) {
                        this._clearRaf();
                        return;
                    }
                    this.rafID = requestAnimationFrame(() => this._updateDropIndicator(state, true));
                }
                else {
                    this._clearRaf();
                }
            };
            this._updateDropIndicatorOnScroll = () => {
                if (!this.dragging ||
                    this.draggingElements.length === 0 ||
                    !this.lastDragPointerState)
                    return;
                const state = this.lastDragPointerState;
                this.rafID = requestAnimationFrame(() => this._updateDropIndicator(state, false));
            };
            this._updateDropResult = (dropResult) => {
                if (!this.dropIndicator)
                    return;
                this.dropBlockId = dropResult?.dropBlockId ?? '';
                this.dropType = dropResult?.dropType ?? null;
                if (dropResult?.rect) {
                    const offsetParentRect = this.dragHandleContainerOffsetParent.getBoundingClientRect();
                    let { left, top } = dropResult.rect;
                    left -= offsetParentRect.left;
                    top -= offsetParentRect.top;
                    left /= this.cumulativeParentScale;
                    top /= this.cumulativeParentScale;
                    let { width, height } = dropResult.rect;
                    width /= this.cumulativeParentScale;
                    height /= this.cumulativeParentScale;
                    const rect = Rect.fromLWTH(left, width, top, height);
                    this.dropIndicator.rect = rect;
                }
                else {
                    this.dropIndicator.rect = dropResult?.rect ?? null;
                }
            };
            // Single block: drag handle should show on the vertical middle of the first line of element
            this.center = [0, 0];
            this.cumulativeParentScale = 1;
            this.dragging = false;
            this.draggingElements = [];
            this.dragPreview = null;
            this.dropBlockId = '';
            this.dropIndicator = null;
            this.dropType = null;
            this.lastDragPointerState = null;
            this.noteScale = 1;
            this.rafID = 0;
            this.scale = 1;
            this.#_dragHandleContainer_accessor_storage = __runInitializers(this, __dragHandleContainer_initializers, void 0);
            this.#_dragHandleGrabber_accessor_storage = (__runInitializers(this, __dragHandleContainer_extraInitializers), __runInitializers(this, __dragHandleGrabber_initializers, void 0));
            this.#_dragHoverRect_accessor_storage = (__runInitializers(this, __dragHandleGrabber_extraInitializers), __runInitializers(this, __dragHoverRect_initializers, null));
            __runInitializers(this, __dragHoverRect_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineDragHandleWidget = _classThis;
})();
export { AffineDragHandleWidget };
//# sourceMappingURL=drag-handle.js.map