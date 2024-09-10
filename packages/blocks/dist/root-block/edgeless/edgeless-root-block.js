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
import { CommonUtils } from '@blocksuite/affine-block-surface';
import { focusTextModel } from '@blocksuite/affine-components/rich-text';
import { toast } from '@blocksuite/affine-components/toast';
import { NoteDisplayMode } from '@blocksuite/affine-model';
import { FontLoaderService, TelemetryProvider, } from '@blocksuite/affine-shared/services';
import { handleNativeRangeAtPoint, humanFileSize, isTouchPadPinchEvent, requestConnectedFrame, requestThrottledConnectedFrame, } from '@blocksuite/affine-shared/utils';
import { BlockComponent } from '@blocksuite/block-std';
import { GfxBlockElementModel, } from '@blocksuite/block-std/gfx';
import { IS_WINDOWS } from '@blocksuite/global/env';
import { assertExists, Bound, Point, serializeXYWH, throttle, Vec, } from '@blocksuite/global/utils';
import { css, html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../../_common/consts.js';
import { isSelectSingleMindMap } from '../../_common/edgeless/mindmap/index.js';
import { setAttachmentUploaded, setAttachmentUploading, } from '../../attachment-block/utils.js';
import { EdgelessClipboardController } from './clipboard/clipboard.js';
import './components/note-slicer/index.js';
import './components/presentation/edgeless-navigator-black-background.js';
import './components/rects/edgeless-dragging-area-rect.js';
import './components/rects/edgeless-selected-rect.js';
import { EdgelessToolbar } from './components/toolbar/edgeless-toolbar.js';
import { calcBoundByOrigin, readImageSize } from './components/utils.js';
import { EdgelessPageKeyboardManager } from './edgeless-keyboard.js';
import { BrushToolController, ConnectorToolController, CopilotSelectionController, DefaultToolController, EraserToolController, FrameToolController, LassoToolController, MindmapToolController, NoteToolController, PanToolController, PresentToolController, ShapeToolController, TemplateToolController, TextToolController, } from './tools/index.js';
import { edgelessElementsBound } from './utils/bound-utils.js';
import { DEFAULT_NOTE_HEIGHT, DEFAULT_NOTE_OFFSET_X, DEFAULT_NOTE_OFFSET_Y, DEFAULT_NOTE_WIDTH, } from './utils/consts.js';
import { getBackgroundGrid, isCanvasElement } from './utils/query.js';
import { mountShapeTextEditor } from './utils/text.js';
const { normalizeWheelDeltaY } = CommonUtils;
let EdgelessRootBlockComponent = (() => {
    let _classDecorators = [customElement('affine-edgeless-root')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __isResizing_decorators;
    let __isResizing_initializers = [];
    let __isResizing_extraInitializers = [];
    let _backgroundElm_decorators;
    let _backgroundElm_initializers = [];
    let _backgroundElm_extraInitializers = [];
    let _edgelessTool_decorators;
    let _edgelessTool_initializers = [];
    let _edgelessTool_extraInitializers = [];
    let _gfxViewportElm_decorators;
    let _gfxViewportElm_initializers = [];
    let _gfxViewportElm_extraInitializers = [];
    let _mountElm_decorators;
    let _mountElm_initializers = [];
    let _mountElm_extraInitializers = [];
    let _selectedRect_decorators;
    let _selectedRect_initializers = [];
    let _selectedRect_extraInitializers = [];
    let _surface_decorators;
    let _surface_initializers = [];
    let _surface_extraInitializers = [];
    var EdgelessRootBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isResizing_decorators = [state()];
            _backgroundElm_decorators = [query('.edgeless-background')];
            _edgelessTool_decorators = [state()];
            _gfxViewportElm_decorators = [query('gfx-viewport')];
            _mountElm_decorators = [query('.edgeless-mount-point')];
            _selectedRect_decorators = [query('edgeless-selected-rect')];
            _surface_decorators = [query('affine-surface')];
            __esDecorate(this, null, __isResizing_decorators, { kind: "accessor", name: "_isResizing", static: false, private: false, access: { has: obj => "_isResizing" in obj, get: obj => obj._isResizing, set: (obj, value) => { obj._isResizing = value; } }, metadata: _metadata }, __isResizing_initializers, __isResizing_extraInitializers);
            __esDecorate(this, null, _backgroundElm_decorators, { kind: "accessor", name: "backgroundElm", static: false, private: false, access: { has: obj => "backgroundElm" in obj, get: obj => obj.backgroundElm, set: (obj, value) => { obj.backgroundElm = value; } }, metadata: _metadata }, _backgroundElm_initializers, _backgroundElm_extraInitializers);
            __esDecorate(this, null, _edgelessTool_decorators, { kind: "accessor", name: "edgelessTool", static: false, private: false, access: { has: obj => "edgelessTool" in obj, get: obj => obj.edgelessTool, set: (obj, value) => { obj.edgelessTool = value; } }, metadata: _metadata }, _edgelessTool_initializers, _edgelessTool_extraInitializers);
            __esDecorate(this, null, _gfxViewportElm_decorators, { kind: "accessor", name: "gfxViewportElm", static: false, private: false, access: { has: obj => "gfxViewportElm" in obj, get: obj => obj.gfxViewportElm, set: (obj, value) => { obj.gfxViewportElm = value; } }, metadata: _metadata }, _gfxViewportElm_initializers, _gfxViewportElm_extraInitializers);
            __esDecorate(this, null, _mountElm_decorators, { kind: "accessor", name: "mountElm", static: false, private: false, access: { has: obj => "mountElm" in obj, get: obj => obj.mountElm, set: (obj, value) => { obj.mountElm = value; } }, metadata: _metadata }, _mountElm_initializers, _mountElm_extraInitializers);
            __esDecorate(this, null, _selectedRect_decorators, { kind: "accessor", name: "selectedRect", static: false, private: false, access: { has: obj => "selectedRect" in obj, get: obj => obj.selectedRect, set: (obj, value) => { obj.selectedRect = value; } }, metadata: _metadata }, _selectedRect_initializers, _selectedRect_extraInitializers);
            __esDecorate(this, null, _surface_decorators, { kind: "accessor", name: "surface", static: false, private: false, access: { has: obj => "surface" in obj, get: obj => obj.surface, set: (obj, value) => { obj.surface = value; } }, metadata: _metadata }, _surface_initializers, _surface_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessRootBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-edgeless-root {
      -webkit-user-select: none;
      user-select: none;
      display: block;
      height: 100%;
      touch-action: none;
    }

    .widgets-container {
      position: absolute;
      left: 0;
      top: 0;
      contain: size layout;
      z-index: 1;
      height: 100%;
    }

    .edgeless-background {
      height: 100%;
      background-color: var(--affine-background-primary-color);
      background-image: radial-gradient(
        var(--affine-edgeless-grid-color) 1px,
        var(--affine-background-primary-color) 1px
      );
    }

    @media print {
      .selected {
        background-color: transparent !important;
      }
    }
  `; }
        get dispatcher() {
            return this.service?.uiEventDispatcher;
        }
        get slots() {
            return this.service.slots;
        }
        get surfaceBlockModel() {
            return this.model.children.find(child => child.flavour === 'affine:surface');
        }
        get tools() {
            return this.service.tool;
        }
        get viewport() {
            const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight, } = this.viewportElement;
            const { top, left } = this.viewportElement.getBoundingClientRect();
            return {
                top,
                left,
                scrollLeft,
                scrollTop,
                scrollWidth,
                scrollHeight,
                clientWidth,
                clientHeight,
            };
        }
        get viewportElement() {
            if (this._viewportElement)
                return this._viewportElement;
            this._viewportElement = this.host.closest('.affine-edgeless-viewport');
            assertExists(this._viewportElement);
            return this._viewportElement;
        }
        _handleToolbarFlag() {
            const createToolbar = () => {
                const toolbar = new EdgelessToolbar(this);
                this.append(toolbar);
                this.components.toolbar = toolbar;
            };
            if (!this.components.toolbar) {
                createToolbar();
            }
        }
        _initFontLoader() {
            this.std
                .get(FontLoaderService)
                .ready.then(() => {
                this.surface.refresh();
            })
                .catch(console.error);
        }
        _initLayerUpdateEffect() {
            const updateLayers = requestThrottledConnectedFrame(() => {
                const blocks = Array.from(this.gfxViewportElm.children);
                blocks.forEach((block) => {
                    block.updateZIndex?.();
                });
            });
            this._disposables.add(this.service.layer.slots.layerUpdated.on(() => updateLayers()));
        }
        _initPanEvent() {
            this.disposables.add(this.dispatcher.add('pan', ctx => {
                const { viewport } = this.service;
                if (viewport.locked)
                    return;
                const multiPointersState = ctx.get('multiPointerState');
                const [p1, p2] = multiPointersState.pointers;
                const dx = (0.5 * (p1.delta.x + p2.delta.x)) / viewport.zoom / viewport.scale;
                const dy = (0.5 * (p1.delta.y + p2.delta.y)) / viewport.zoom / viewport.scale;
                // direction is opposite
                viewport.applyDeltaCenter(-dx, -dy);
            }));
        }
        _initPinchEvent() {
            this.disposables.add(this.dispatcher.add('pinch', ctx => {
                const { viewport } = this.service;
                if (viewport.locked)
                    return;
                const multiPointersState = ctx.get('multiPointerState');
                const [p1, p2] = multiPointersState.pointers;
                const currentCenter = new Point(0.5 * (p1.x + p2.x), 0.5 * (p1.y + p2.y));
                const lastDistance = Vec.dist([p1.x - p1.delta.x, p1.y - p1.delta.y], [p2.x - p2.delta.x, p2.y - p2.delta.y]);
                const currentDistance = Vec.dist([p1.x, p1.y], [p2.x, p2.y]);
                const zoom = (currentDistance / lastDistance) * viewport.zoom;
                const [baseX, baseY] = viewport.toModelCoord(currentCenter.x, currentCenter.y);
                viewport.setZoom(zoom, new Point(baseX, baseY));
                return false;
            }));
        }
        _initPixelRatioChangeEffect() {
            let media;
            const onPixelRatioChange = () => {
                if (media) {
                    this.service.viewport.onResize();
                    media.removeEventListener('change', onPixelRatioChange);
                }
                media = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
                media.addEventListener('change', onPixelRatioChange);
            };
            onPixelRatioChange();
            this._disposables.add(() => {
                media?.removeEventListener('change', onPixelRatioChange);
            });
        }
        _initRemoteCursor() {
            let rafId = null;
            const setRemoteCursor = (pos) => {
                if (rafId)
                    cancelAnimationFrame(rafId);
                rafId = requestConnectedFrame(() => {
                    if (!this.service?.viewport)
                        return;
                    const cursorPosition = this.service.viewport.toModelCoord(pos.x, pos.y);
                    this.service.selection.setCursor({
                        x: cursorPosition[0],
                        y: cursorPosition[1],
                    });
                    rafId = null;
                }, this);
            };
            this.handleEvent('pointerMove', e => {
                const pointerEvent = e.get('pointerState');
                setRemoteCursor(pointerEvent);
            });
        }
        _initResizeEffect() {
            const resizeObserver = new ResizeObserver((_) => {
                // FIXME: find a better way to get rid of empty check
                if (!this.service || !this.service.selection || !this.service.viewport) {
                    console.error('Service not ready');
                    return;
                }
                this.service.selection.set(this.service.selection.surfaceSelections);
                this.service.viewport.onResize();
            });
            resizeObserver.observe(this.viewportElement);
            this._resizeObserver = resizeObserver;
        }
        _initSlotEffects() {
            const { disposables, slots } = this;
            this.disposables.add(this.service.themeObserver.mode$.subscribe(() => this.surface.refresh()));
            disposables.add(this.service.selection);
            disposables.add(slots.edgelessToolUpdated.on(tool => {
                this.edgelessTool = tool;
            }));
            disposables.add(slots.cursorUpdated.on(throttle((cursor) => {
                this.style.cursor = cursor;
            }, 144)));
            let canCopyAsPng = true;
            disposables.add(slots.copyAsPng.on(({ blocks, shapes }) => {
                if (!canCopyAsPng)
                    return;
                canCopyAsPng = false;
                this.clipboardController
                    .copyAsPng(blocks, shapes)
                    .then(() => toast(this.host, 'Copied to clipboard'))
                    .catch(() => toast(this.host, 'Failed to copy as PNG'))
                    .finally(() => {
                    canCopyAsPng = true;
                });
            }));
        }
        _initTools() {
            const tools = [
                DefaultToolController,
                BrushToolController,
                EraserToolController,
                TextToolController,
                ShapeToolController,
                ConnectorToolController,
                NoteToolController,
                FrameToolController,
                PanToolController,
                PresentToolController,
                CopilotSelectionController,
                LassoToolController,
                TemplateToolController,
                MindmapToolController,
            ];
            tools.forEach(tool => {
                this.service.registerTool(tool);
            });
            this.service.tool.mount(this);
        }
        _initViewport() {
            const { service } = this;
            const run = () => {
                const viewport = service.editPropsStore.getStorage('viewport') ??
                    service.getFitToScreenData();
                if ('xywh' in viewport) {
                    const bound = Bound.deserialize(viewport.xywh);
                    service.viewport.setViewportByBound(bound, viewport.padding);
                }
                else {
                    const { zoom, centerX, centerY } = viewport;
                    service.viewport.setViewport(zoom, [centerX, centerY]);
                }
            };
            run();
            this._disposables.add(() => {
                service.editPropsStore.setStorage('viewport', {
                    centerX: service.viewport.centerX,
                    centerY: service.viewport.centerY,
                    zoom: service.viewport.zoom,
                });
            });
        }
        _initWheelEvent() {
            this._disposables.add(this.dispatcher.add('wheel', ctx => {
                const state = ctx.get('defaultState');
                const e = state.event;
                e.preventDefault();
                const { viewport, locked } = this.service;
                if (locked)
                    return;
                // zoom
                if (isTouchPadPinchEvent(e)) {
                    const rect = this.getBoundingClientRect();
                    // Perform zooming relative to the mouse position
                    const [baseX, baseY] = this.service.viewport.toModelCoord(e.clientX - rect.x, e.clientY - rect.y);
                    const zoom = normalizeWheelDeltaY(e.deltaY, viewport.zoom);
                    viewport.setZoom(zoom, new Point(baseX, baseY));
                    e.stopPropagation();
                }
                // pan
                else {
                    const simulateHorizontalScroll = IS_WINDOWS && e.shiftKey;
                    const dx = simulateHorizontalScroll
                        ? e.deltaY / viewport.zoom
                        : e.deltaX / viewport.zoom;
                    const dy = simulateHorizontalScroll ? 0 : e.deltaY / viewport.zoom;
                    viewport.applyDeltaCenter(dx, dy);
                    viewport.viewportMoved.emit([dx, dy]);
                    e.stopPropagation();
                }
            }));
        }
        async addAttachments(files, point) {
            if (!files.length)
                return [];
            const attachmentService = this.std.getService('affine:attachment');
            const maxFileSize = attachmentService.maxFileSize;
            const isSizeExceeded = files.some(file => file.size > maxFileSize);
            if (isSizeExceeded) {
                toast(this.host, `You can only upload files less than ${humanFileSize(maxFileSize, true, 0)}`);
                return [];
            }
            let { x, y } = this.service.viewport.center;
            if (point)
                [x, y] = this.service.viewport.toModelCoord(...point);
            const CARD_STACK_GAP = 32;
            const dropInfos = files.map((file, index) => {
                const point = new Point(x + index * CARD_STACK_GAP, y + index * CARD_STACK_GAP);
                const center = Vec.toVec(point);
                const bound = Bound.fromCenter(center, EMBED_CARD_WIDTH.cubeThick, EMBED_CARD_HEIGHT.cubeThick);
                const blockId = this.service.addBlock('affine:attachment', {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    style: 'cubeThick',
                    xywh: bound.serialize(),
                }, this.surface.model);
                return { blockId, file };
            });
            // upload file and update the attachment model
            const uploadPromises = dropInfos.map(async ({ blockId, file }) => {
                let sourceId;
                try {
                    setAttachmentUploading(blockId);
                    sourceId = await this.doc.blobSync.set(file);
                }
                catch (error) {
                    console.error(error);
                    if (error instanceof Error) {
                        toast(this.host, `Failed to upload attachment! ${error.message || error.toString()}`);
                    }
                }
                finally {
                    setAttachmentUploaded(blockId);
                    this.doc.withoutTransact(() => {
                        this.service.updateElement(blockId, {
                            sourceId,
                        });
                    });
                }
                return blockId;
            });
            const blockIds = await Promise.all(uploadPromises);
            this.service.selection.set({
                elements: blockIds,
                editing: false,
            });
            return blockIds;
        }
        async addImages(files, point, inTopLeft) {
            const imageFiles = [...files].filter(file => file.type.startsWith('image/'));
            if (!imageFiles.length)
                return [];
            const imageService = this.std.getService('affine:image');
            const maxFileSize = imageService.maxFileSize;
            const isSizeExceeded = imageFiles.some(file => file.size > maxFileSize);
            if (isSizeExceeded) {
                toast(this.host, `You can only upload files less than ${humanFileSize(maxFileSize, true, 0)}`);
                return [];
            }
            let { x, y } = this.service.viewport.center;
            if (point)
                [x, y] = this.service.viewport.toModelCoord(...point);
            const dropInfos = [];
            const IMAGE_STACK_GAP = 32;
            // create image cards without image data
            imageFiles.map((file, index) => {
                const point = new Point(x + index * IMAGE_STACK_GAP, y + index * IMAGE_STACK_GAP);
                const center = Vec.toVec(point);
                const bound = calcBoundByOrigin(center, inTopLeft);
                const blockId = this.service.addBlock('affine:image', {
                    size: file.size,
                    xywh: bound.serialize(),
                }, this.surface.model);
                dropInfos.push({ point, blockId });
            });
            // upload image data and update the image model
            const uploadPromises = imageFiles.map(async (file, index) => {
                const { point, blockId } = dropInfos[index];
                const sourceId = await this.doc.blobSync.set(file);
                const imageSize = await readImageSize(file);
                const center = Vec.toVec(point);
                const bound = calcBoundByOrigin(center, inTopLeft, imageSize.width, imageSize.height);
                this.doc.withoutTransact(() => {
                    this.service.updateElement(blockId, {
                        sourceId,
                        ...imageSize,
                        xywh: bound.serialize(),
                    });
                });
            });
            await Promise.all(uploadPromises);
            const blockIds = dropInfos.map(info => info.blockId);
            this.service.selection.set({
                elements: blockIds,
                editing: false,
            });
            return blockIds;
        }
        /**
         * Adds a new note with the given blocks and point.
         * @param blocks Array\<Partial\<BlockModel\>\>
         * @param point Point
         */
        addNewNote(blocks, point, options) {
            this.doc.captureSync();
            const { left, top } = this.service.viewport;
            point.x -= left;
            point.y -= top;
            const noteId = this.addNoteWithPoint(point, options);
            const ids = this.doc.addBlocks(blocks.map(({ flavour, ...blockProps }) => {
                assertExists(flavour);
                return {
                    flavour,
                    blockProps,
                };
            }), noteId);
            return {
                noteId,
                ids,
            };
        }
        /**
         * Adds a new note with the given point on the affine-editor-container.
         *
         * @param: point Point
         * @returns: The id of new note
         */
        addNoteWithPoint(point, options = {}) {
            const { width = DEFAULT_NOTE_WIDTH, height = DEFAULT_NOTE_HEIGHT, offsetX = DEFAULT_NOTE_OFFSET_X, offsetY = DEFAULT_NOTE_OFFSET_Y, parentId = this.doc.root?.id, noteIndex: noteIndex, scale = 1, } = options;
            const [x, y] = this.service.viewport.toModelCoord(point.x, point.y);
            const blockId = this.service.addBlock('affine:note', {
                xywh: serializeXYWH(x - offsetX * scale, y - offsetY * scale, width, height),
                displayMode: NoteDisplayMode.EdgelessOnly,
            }, parentId, noteIndex);
            this.std.getOptional(TelemetryProvider)?.track('CanvasElementAdded', {
                control: 'canvas:draw',
                page: 'whiteboard editor',
                module: 'toolbar',
                segment: 'toolbar',
                type: 'note',
            });
            return blockId;
        }
        bindHotKey(keymap, options) {
            const { service } = this;
            const selection = service.selection;
            Object.keys(keymap).forEach(key => {
                if (key.length === 1 && key >= 'A' && key <= 'z') {
                    const handler = keymap[key];
                    keymap[key] = ctx => {
                        const elements = selection.selectedElements;
                        if (isSelectSingleMindMap(elements) && !selection.editing) {
                            const target = service.getElementById(elements[0].id);
                            if (target.text) {
                                this.doc.transact(() => {
                                    target.text.delete(0, target.text.length);
                                    target.text.insert(0, key);
                                });
                            }
                            mountShapeTextEditor(target, this);
                        }
                        else {
                            handler(ctx);
                        }
                    };
                }
            });
            return super.bindHotKey(keymap, options);
        }
        connectedCallback() {
            super.connectedCallback();
            this.clipboardController.hostConnected();
            this.keyboardManager = new EdgelessPageKeyboardManager(this);
            this.handleEvent('selectionChange', () => {
                const surface = this.host.selection.value.find((sel) => sel.is('surface'));
                if (!surface)
                    return;
                const el = this.service.getElementById(surface.elements[0]);
                if (isCanvasElement(el)) {
                    return true;
                }
                return;
            });
            this.mouseRoot = this.parentElement;
            this._initTools();
            this._disposables.add(this.slots.elementResizeStart.on(() => {
                this._isResizing = true;
            }));
            this._disposables.add(this.slots.elementResizeEnd.on(() => {
                this._isResizing = false;
            }));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.clipboardController.hostDisconnected();
            if (this._resizeObserver) {
                this._resizeObserver.disconnect();
                this._resizeObserver = null;
            }
            this.keyboardManager = null;
            this.components.toolbar?.remove();
            this.components.toolbar = null;
        }
        firstUpdated() {
            this._initSlotEffects();
            this._initResizeEffect();
            this._initPixelRatioChangeEffect();
            this._initFontLoader();
            this._initRemoteCursor();
            this._initLayerUpdateEffect();
            this._initViewport();
            this._initWheelEvent();
            this._initPanEvent();
            this._initPinchEvent();
            if (this.doc.readonly) {
                this.tools.setEdgelessTool({ type: 'pan', panning: true });
            }
            if (this.disableComponents)
                return;
            requestConnectedFrame(() => {
                this._handleToolbarFlag();
                this.requestUpdate();
            }, this);
            this._disposables.add(this.service.viewport.viewportUpdated.on(() => {
                this._refreshLayerViewport();
            }));
            this._refreshLayerViewport();
        }
        getElementsBound() {
            const { service } = this;
            return edgelessElementsBound([...service.elements, ...service.blocks]);
        }
        renderBlock() {
            const widgets = repeat(Object.entries(this.widgets), ([id]) => id, ([_, widget]) => widget);
            return html `
      <div class="edgeless-background edgeless-container">
        <gfx-viewport
          .maxConcurrentRenders=${6}
          .viewport=${this.service.viewport}
          .getModelsInViewport=${() => {
                const blocks = this.service.gfx.grid.search(this.service.viewport.viewportBounds, undefined, {
                    useSet: true,
                    filter: model => model instanceof GfxBlockElementModel,
                });
                return blocks;
            }}
          .host=${this.host}
        >
          ${this.renderChildren(this.model)}${this.renderChildren(this.surfaceBlockModel)}
        </gfx-viewport>
      </div>

      <!--
        Used to mount component before widgets
        Eg., canvas text editor
      -->
      <div class="edgeless-mount-point"></div>

      <!-- need to be converted to widget -->
      <edgeless-dragging-area-rect
        .edgeless=${this}
      ></edgeless-dragging-area-rect>

      ${this._isResizing
                ? nothing
                : html `<note-slicer .edgeless=${this}></note-slicer>`}

      <edgeless-selected-rect .edgeless=${this}></edgeless-selected-rect>
      <edgeless-navigator-black-background
        .edgeless=${this}
      ></edgeless-navigator-black-background>
      <!-- end -->

      <div class="widgets-container">${widgets}</div>
    `;
        }
        /*
         * Set selection state by giving noteId & blockId.
         * Not supports surface elements.
         */
        setSelection(noteId, _active = true, blockId, point) {
            const noteBlock = this.service.blocks
                .filter(block => block.flavour === 'affine:note')
                .find(b => b.id === noteId);
            assertExists(noteBlock);
            requestAnimationFrame(() => {
                this.service.selection.set({
                    elements: [noteBlock.id],
                    editing: false,
                });
                // Waiting dom updated, `note mask` is removed
                this.updateComplete
                    .then(() => {
                    if (blockId) {
                        focusTextModel(this.std, blockId);
                    }
                    else if (point) {
                        // Cannot reuse `handleNativeRangeClick` directly here,
                        // since `retargetClick` will re-target to pervious editor
                        handleNativeRangeAtPoint(point.x, point.y);
                    }
                })
                    .catch(console.error);
            });
        }
        #_isResizing_accessor_storage;
        get _isResizing() { return this.#_isResizing_accessor_storage; }
        set _isResizing(value) { this.#_isResizing_accessor_storage = value; }
        #backgroundElm_accessor_storage;
        get backgroundElm() { return this.#backgroundElm_accessor_storage; }
        set backgroundElm(value) { this.#backgroundElm_accessor_storage = value; }
        #edgelessTool_accessor_storage;
        get edgelessTool() { return this.#edgelessTool_accessor_storage; }
        set edgelessTool(value) { this.#edgelessTool_accessor_storage = value; }
        #gfxViewportElm_accessor_storage;
        get gfxViewportElm() { return this.#gfxViewportElm_accessor_storage; }
        set gfxViewportElm(value) { this.#gfxViewportElm_accessor_storage = value; }
        #mountElm_accessor_storage;
        get mountElm() { return this.#mountElm_accessor_storage; }
        set mountElm(value) { this.#mountElm_accessor_storage = value; }
        #selectedRect_accessor_storage;
        get selectedRect() { return this.#selectedRect_accessor_storage; }
        set selectedRect(value) { this.#selectedRect_accessor_storage = value; }
        #surface_accessor_storage;
        get surface() { return this.#surface_accessor_storage; }
        set surface(value) { this.#surface_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._refreshLayerViewport = requestThrottledConnectedFrame(() => {
                const { zoom, translateX, translateY } = this.service.viewport;
                const { gap } = getBackgroundGrid(zoom, true);
                if (this.backgroundElm) {
                    this.backgroundElm.style.setProperty('background-position', `${translateX}px ${translateY}px`);
                    this.backgroundElm.style.setProperty('background-size', `${gap}px ${gap}px`);
                }
            }, this);
            this._resizeObserver = null;
            this._viewportElement = null;
            this.clipboardController = new EdgelessClipboardController(this);
            /**
             * Shared components
             */
            this.components = {
                toolbar: null,
            };
            /**
             * Disable components
             *
             * Toolbar is not allowed to display in `syncd doc block`.
             */
            this.disableComponents = false;
            this.keyboardManager = null;
            this.#_isResizing_accessor_storage = __runInitializers(this, __isResizing_initializers, false);
            this.#backgroundElm_accessor_storage = (__runInitializers(this, __isResizing_extraInitializers), __runInitializers(this, _backgroundElm_initializers, null));
            this.#edgelessTool_accessor_storage = (__runInitializers(this, _backgroundElm_extraInitializers), __runInitializers(this, _edgelessTool_initializers, {
                type: localStorage.defaultTool ?? 'default',
            }));
            this.#gfxViewportElm_accessor_storage = (__runInitializers(this, _edgelessTool_extraInitializers), __runInitializers(this, _gfxViewportElm_initializers, void 0));
            this.#mountElm_accessor_storage = (__runInitializers(this, _gfxViewportElm_extraInitializers), __runInitializers(this, _mountElm_initializers, null));
            this.#selectedRect_accessor_storage = (__runInitializers(this, _mountElm_extraInitializers), __runInitializers(this, _selectedRect_initializers, void 0));
            this.#surface_accessor_storage = (__runInitializers(this, _selectedRect_extraInitializers), __runInitializers(this, _surface_initializers, void 0));
            __runInitializers(this, _surface_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessRootBlockComponent = _classThis;
})();
export { EdgelessRootBlockComponent };
//# sourceMappingURL=edgeless-root-block.js.map