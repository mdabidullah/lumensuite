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
import { ShadowlessElement, WithDisposable } from '@lumensuite/block-std';
import { assertExists } from '@lumensuite/global/utils';
import { createInlineKeyDownHandler, InlineEditor, } from '@lumensuite/inline';
import { DocCollection, Text } from '@lumensuite/store';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { z } from 'zod';
import { onVBeforeinput, onVCompositionEnd } from './hooks.js';
let RichText = (() => {
    let _classDecorators = [customElement('rich-text')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __inlineEditorContainer_decorators;
    let __inlineEditorContainer_initializers = [];
    let __inlineEditorContainer_extraInitializers = [];
    let _attributeRenderer_decorators;
    let _attributeRenderer_initializers = [];
    let _attributeRenderer_extraInitializers = [];
    let _attributesSchema_decorators;
    let _attributesSchema_initializers = [];
    let _attributesSchema_extraInitializers = [];
    let _embedChecker_decorators;
    let _embedChecker_initializers = [];
    let _embedChecker_extraInitializers = [];
    let _enableAutoScrollHorizontally_decorators;
    let _enableAutoScrollHorizontally_initializers = [];
    let _enableAutoScrollHorizontally_extraInitializers = [];
    let _enableClipboard_decorators;
    let _enableClipboard_initializers = [];
    let _enableClipboard_extraInitializers = [];
    let _enableFormat_decorators;
    let _enableFormat_initializers = [];
    let _enableFormat_extraInitializers = [];
    let _enableUndoRedo_decorators;
    let _enableUndoRedo_initializers = [];
    let _enableUndoRedo_extraInitializers = [];
    let _inlineEventSource_decorators;
    let _inlineEventSource_initializers = [];
    let _inlineEventSource_extraInitializers = [];
    let _inlineRangeProvider_decorators;
    let _inlineRangeProvider_initializers = [];
    let _inlineRangeProvider_extraInitializers = [];
    let _markdownShortcutHandler_decorators;
    let _markdownShortcutHandler_initializers = [];
    let _markdownShortcutHandler_extraInitializers = [];
    let _readonly_decorators;
    let _readonly_initializers = [];
    let _readonly_extraInitializers = [];
    let _undoManager_decorators;
    let _undoManager_initializers = [];
    let _undoManager_extraInitializers = [];
    let _verticalScrollContainerGetter_decorators;
    let _verticalScrollContainerGetter_initializers = [];
    let _verticalScrollContainerGetter_extraInitializers = [];
    let _vLineRenderer_decorators;
    let _vLineRenderer_initializers = [];
    let _vLineRenderer_extraInitializers = [];
    let _wrapText_decorators;
    let _wrapText_initializers = [];
    let _wrapText_extraInitializers = [];
    let _yText_decorators;
    let _yText_initializers = [];
    let _yText_extraInitializers = [];
    var RichText = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __inlineEditorContainer_decorators = [query('.inline-editor')];
            _attributeRenderer_decorators = [property({ attribute: false })];
            _attributesSchema_decorators = [property({ attribute: false })];
            _embedChecker_decorators = [property({ attribute: false })];
            _enableAutoScrollHorizontally_decorators = [property({ attribute: false })];
            _enableClipboard_decorators = [property({ attribute: false })];
            _enableFormat_decorators = [property({ attribute: false })];
            _enableUndoRedo_decorators = [property({ attribute: false })];
            _inlineEventSource_decorators = [property({ attribute: false })];
            _inlineRangeProvider_decorators = [property({ attribute: false })];
            _markdownShortcutHandler_decorators = [property({ attribute: false })];
            _readonly_decorators = [property({ attribute: false })];
            _undoManager_decorators = [property({ attribute: false })];
            _verticalScrollContainerGetter_decorators = [property({ attribute: false })];
            _vLineRenderer_decorators = [property({ attribute: false })];
            _wrapText_decorators = [property({ attribute: false })];
            _yText_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __inlineEditorContainer_decorators, { kind: "accessor", name: "_inlineEditorContainer", static: false, private: false, access: { has: obj => "_inlineEditorContainer" in obj, get: obj => obj._inlineEditorContainer, set: (obj, value) => { obj._inlineEditorContainer = value; } }, metadata: _metadata }, __inlineEditorContainer_initializers, __inlineEditorContainer_extraInitializers);
            __esDecorate(this, null, _attributeRenderer_decorators, { kind: "accessor", name: "attributeRenderer", static: false, private: false, access: { has: obj => "attributeRenderer" in obj, get: obj => obj.attributeRenderer, set: (obj, value) => { obj.attributeRenderer = value; } }, metadata: _metadata }, _attributeRenderer_initializers, _attributeRenderer_extraInitializers);
            __esDecorate(this, null, _attributesSchema_decorators, { kind: "accessor", name: "attributesSchema", static: false, private: false, access: { has: obj => "attributesSchema" in obj, get: obj => obj.attributesSchema, set: (obj, value) => { obj.attributesSchema = value; } }, metadata: _metadata }, _attributesSchema_initializers, _attributesSchema_extraInitializers);
            __esDecorate(this, null, _embedChecker_decorators, { kind: "accessor", name: "embedChecker", static: false, private: false, access: { has: obj => "embedChecker" in obj, get: obj => obj.embedChecker, set: (obj, value) => { obj.embedChecker = value; } }, metadata: _metadata }, _embedChecker_initializers, _embedChecker_extraInitializers);
            __esDecorate(this, null, _enableAutoScrollHorizontally_decorators, { kind: "accessor", name: "enableAutoScrollHorizontally", static: false, private: false, access: { has: obj => "enableAutoScrollHorizontally" in obj, get: obj => obj.enableAutoScrollHorizontally, set: (obj, value) => { obj.enableAutoScrollHorizontally = value; } }, metadata: _metadata }, _enableAutoScrollHorizontally_initializers, _enableAutoScrollHorizontally_extraInitializers);
            __esDecorate(this, null, _enableClipboard_decorators, { kind: "accessor", name: "enableClipboard", static: false, private: false, access: { has: obj => "enableClipboard" in obj, get: obj => obj.enableClipboard, set: (obj, value) => { obj.enableClipboard = value; } }, metadata: _metadata }, _enableClipboard_initializers, _enableClipboard_extraInitializers);
            __esDecorate(this, null, _enableFormat_decorators, { kind: "accessor", name: "enableFormat", static: false, private: false, access: { has: obj => "enableFormat" in obj, get: obj => obj.enableFormat, set: (obj, value) => { obj.enableFormat = value; } }, metadata: _metadata }, _enableFormat_initializers, _enableFormat_extraInitializers);
            __esDecorate(this, null, _enableUndoRedo_decorators, { kind: "accessor", name: "enableUndoRedo", static: false, private: false, access: { has: obj => "enableUndoRedo" in obj, get: obj => obj.enableUndoRedo, set: (obj, value) => { obj.enableUndoRedo = value; } }, metadata: _metadata }, _enableUndoRedo_initializers, _enableUndoRedo_extraInitializers);
            __esDecorate(this, null, _inlineEventSource_decorators, { kind: "accessor", name: "inlineEventSource", static: false, private: false, access: { has: obj => "inlineEventSource" in obj, get: obj => obj.inlineEventSource, set: (obj, value) => { obj.inlineEventSource = value; } }, metadata: _metadata }, _inlineEventSource_initializers, _inlineEventSource_extraInitializers);
            __esDecorate(this, null, _inlineRangeProvider_decorators, { kind: "accessor", name: "inlineRangeProvider", static: false, private: false, access: { has: obj => "inlineRangeProvider" in obj, get: obj => obj.inlineRangeProvider, set: (obj, value) => { obj.inlineRangeProvider = value; } }, metadata: _metadata }, _inlineRangeProvider_initializers, _inlineRangeProvider_extraInitializers);
            __esDecorate(this, null, _markdownShortcutHandler_decorators, { kind: "accessor", name: "markdownShortcutHandler", static: false, private: false, access: { has: obj => "markdownShortcutHandler" in obj, get: obj => obj.markdownShortcutHandler, set: (obj, value) => { obj.markdownShortcutHandler = value; } }, metadata: _metadata }, _markdownShortcutHandler_initializers, _markdownShortcutHandler_extraInitializers);
            __esDecorate(this, null, _readonly_decorators, { kind: "accessor", name: "readonly", static: false, private: false, access: { has: obj => "readonly" in obj, get: obj => obj.readonly, set: (obj, value) => { obj.readonly = value; } }, metadata: _metadata }, _readonly_initializers, _readonly_extraInitializers);
            __esDecorate(this, null, _undoManager_decorators, { kind: "accessor", name: "undoManager", static: false, private: false, access: { has: obj => "undoManager" in obj, get: obj => obj.undoManager, set: (obj, value) => { obj.undoManager = value; } }, metadata: _metadata }, _undoManager_initializers, _undoManager_extraInitializers);
            __esDecorate(this, null, _verticalScrollContainerGetter_decorators, { kind: "accessor", name: "verticalScrollContainerGetter", static: false, private: false, access: { has: obj => "verticalScrollContainerGetter" in obj, get: obj => obj.verticalScrollContainerGetter, set: (obj, value) => { obj.verticalScrollContainerGetter = value; } }, metadata: _metadata }, _verticalScrollContainerGetter_initializers, _verticalScrollContainerGetter_extraInitializers);
            __esDecorate(this, null, _vLineRenderer_decorators, { kind: "accessor", name: "vLineRenderer", static: false, private: false, access: { has: obj => "vLineRenderer" in obj, get: obj => obj.vLineRenderer, set: (obj, value) => { obj.vLineRenderer = value; } }, metadata: _metadata }, _vLineRenderer_initializers, _vLineRenderer_extraInitializers);
            __esDecorate(this, null, _wrapText_decorators, { kind: "accessor", name: "wrapText", static: false, private: false, access: { has: obj => "wrapText" in obj, get: obj => obj.wrapText, set: (obj, value) => { obj.wrapText = value; } }, metadata: _metadata }, _wrapText_initializers, _wrapText_extraInitializers);
            __esDecorate(this, null, _yText_decorators, { kind: "accessor", name: "yText", static: false, private: false, access: { has: obj => "yText" in obj, get: obj => obj.yText, set: (obj, value) => { obj.yText = value; } }, metadata: _metadata }, _yText_initializers, _yText_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            RichText = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    rich-text {
      display: block;
      height: 100%;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;

      scroll-margin-top: 50px;
      scroll-margin-bottom: 30px;
    }

    .inline-editor {
      height: 100%;
      width: 100%;
      outline: none;
      cursor: text;
    }

    .inline-editor.readonly {
      cursor: default;
    }

    rich-text .nowrap-lines v-text span,
    rich-text .nowrap-lines v-element span {
      white-space: pre !important;
    }
  `; }
        #verticalScrollContainer;
        get _yText() {
            return this.yText instanceof Text ? this.yText.yText : this.yText;
        }
        // It will listen ctrl+z/ctrl+shift+z and call undoManager.undo/redo, keydown event will not
        get inlineEditor() {
            return this._inlineEditor;
        }
        get inlineEditorContainer() {
            assertExists(this._inlineEditorContainer);
            return this._inlineEditorContainer;
        }
        _init() {
            if (this._inlineEditor) {
                console.error('Inline editor already exists.');
                return;
            }
            if (!this.enableFormat) {
                this.attributesSchema = z.object({});
            }
            // init inline editor
            this._inlineEditor = new InlineEditor(this._yText, {
                isEmbed: delta => this.embedChecker(delta),
                hooks: {
                    beforeinput: onVBeforeinput,
                    compositionEnd: onVCompositionEnd,
                },
                inlineRangeProvider: this.inlineRangeProvider,
                vLineRenderer: this.vLineRenderer,
            });
            if (this.attributesSchema) {
                this._inlineEditor.setAttributeSchema(this.attributesSchema);
            }
            if (this.attributeRenderer) {
                this._inlineEditor.setAttributeRenderer(this.attributeRenderer);
            }
            const inlineEditor = this._inlineEditor;
            const markdownShortcutHandler = this.markdownShortcutHandler;
            if (markdownShortcutHandler) {
                const keyDownHandler = createInlineKeyDownHandler(inlineEditor, {
                    inputRule: {
                        key: [' ', 'Enter'],
                        handler: context => markdownShortcutHandler(context, this.undoManager),
                    },
                });
                inlineEditor.disposables.addFromEvent(this.inlineEventSource ?? this.inlineEditorContainer, 'keydown', keyDownHandler);
            }
            // init auto scroll
            inlineEditor.disposables.add(inlineEditor.slots.inlineRangeUpdate.on(([inlineRange]) => {
                if (!inlineRange)
                    return;
                // lazy
                const verticalScrollContainer = this.#verticalScrollContainer ||
                    (this.#verticalScrollContainer =
                        this.verticalScrollContainerGetter?.() || null);
                inlineEditor
                    .waitForUpdate()
                    .then(() => {
                    if (!inlineEditor.mounted)
                        return;
                    const range = inlineEditor.toDomRange(inlineRange);
                    if (!range)
                        return;
                    if (verticalScrollContainer) {
                        const containerRect = verticalScrollContainer.getBoundingClientRect();
                        const rangeRect = range.getBoundingClientRect();
                        if (rangeRect.top < containerRect.top) {
                            this.scrollIntoView({ block: 'start' });
                        }
                        else if (rangeRect.bottom > containerRect.bottom) {
                            this.scrollIntoView({ block: 'end' });
                        }
                    }
                    // scroll container is this
                    if (this.enableAutoScrollHorizontally) {
                        const containerRect = this.getBoundingClientRect();
                        const rangeRect = range.getBoundingClientRect();
                        let scrollLeft = this.scrollLeft;
                        if (rangeRect.left + rangeRect.width >
                            containerRect.left + containerRect.width) {
                            scrollLeft +=
                                rangeRect.left +
                                    rangeRect.width -
                                    (containerRect.left + containerRect.width) +
                                    2;
                        }
                        this.scrollLeft = scrollLeft;
                    }
                })
                    .catch(console.error);
            }));
            inlineEditor.mount(this.inlineEditorContainer, this.inlineEventSource, this.readonly);
        }
        _unmount() {
            if (this.inlineEditor?.mounted) {
                this.inlineEditor.unmount();
            }
            this._inlineEditor = null;
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this._yText) {
                console.error('rich-text need yText to init.');
                return;
            }
            if (!this._yText.doc) {
                console.error('yText should be bind to yDoc.');
                return;
            }
            if (!this.undoManager) {
                this.undoManager = new DocCollection.Y.UndoManager(this._yText, {
                    trackedOrigins: new Set([this._yText.doc.clientID]),
                });
            }
            if (this.enableUndoRedo) {
                this.disposables.addFromEvent(this, 'keydown', (e) => {
                    if (e.ctrlKey || e.metaKey) {
                        if (e.key === 'z' || e.key === 'Z') {
                            if (e.shiftKey) {
                                this.undoManager.redo();
                            }
                            else {
                                this.undoManager.undo();
                            }
                            e.stopPropagation();
                        }
                    }
                });
                this.undoManager.on('stack-item-added', this._onStackItemAdded);
                this.undoManager.on('stack-item-popped', this._onStackItemPopped);
                this.disposables.add({
                    dispose: () => {
                        this.undoManager.off('stack-item-added', this._onStackItemAdded);
                        this.undoManager.off('stack-item-popped', this._onStackItemPopped);
                    },
                });
            }
            if (this.enableClipboard) {
                this.disposables.addFromEvent(this, 'copy', this._onCopy);
                this.disposables.addFromEvent(this, 'cut', this._onCut);
                this.disposables.addFromEvent(this, 'paste', this._onPaste);
            }
            this.updateComplete
                .then(() => {
                this._unmount();
                this._init();
                this.disposables.add({
                    dispose: () => {
                        this._unmount();
                    },
                });
            })
                .catch(console.error);
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.inlineEditor?.waitForUpdate();
            return result;
        }
        // If it is true rich-text will handle undo/redo by itself. (including v-range restore)
        render() {
            const classes = classMap({
                'inline-editor': true,
                'nowrap-lines': !this.wrapText,
                readonly: this.readonly,
            });
            return html `<div
      contenteditable=${this.readonly ? 'false' : 'true'}
      class=${classes}
    ></div>`;
        }
        updated(changedProperties) {
            if (this._inlineEditor && changedProperties.has('readonly')) {
                this._inlineEditor.setReadonly(this.readonly);
            }
        }
        #_inlineEditorContainer_accessor_storage;
        get _inlineEditorContainer() { return this.#_inlineEditorContainer_accessor_storage; }
        set _inlineEditorContainer(value) { this.#_inlineEditorContainer_accessor_storage = value; }
        #attributeRenderer_accessor_storage;
        get attributeRenderer() { return this.#attributeRenderer_accessor_storage; }
        set attributeRenderer(value) { this.#attributeRenderer_accessor_storage = value; }
        #attributesSchema_accessor_storage;
        get attributesSchema() { return this.#attributesSchema_accessor_storage; }
        set attributesSchema(value) { this.#attributesSchema_accessor_storage = value; }
        #embedChecker_accessor_storage;
        get embedChecker() { return this.#embedChecker_accessor_storage; }
        set embedChecker(value) { this.#embedChecker_accessor_storage = value; }
        #enableAutoScrollHorizontally_accessor_storage;
        get enableAutoScrollHorizontally() { return this.#enableAutoScrollHorizontally_accessor_storage; }
        set enableAutoScrollHorizontally(value) { this.#enableAutoScrollHorizontally_accessor_storage = value; }
        #enableClipboard_accessor_storage;
        // If it is true rich-text will prevent events related to clipboard bubbling up and handle them by itself.
        get enableClipboard() { return this.#enableClipboard_accessor_storage; }
        set enableClipboard(value) { this.#enableClipboard_accessor_storage = value; }
        #enableFormat_accessor_storage;
        // `attributesSchema` will be overwritten to `z.object({})` if `enableFormat` is false.
        get enableFormat() { return this.#enableFormat_accessor_storage; }
        set enableFormat(value) { this.#enableFormat_accessor_storage = value; }
        #enableUndoRedo_accessor_storage;
        // bubble up if pressed ctrl+z/ctrl+shift+z.
        get enableUndoRedo() { return this.#enableUndoRedo_accessor_storage; }
        set enableUndoRedo(value) { this.#enableUndoRedo_accessor_storage = value; }
        #inlineEventSource_accessor_storage;
        get inlineEventSource() { return this.#inlineEventSource_accessor_storage; }
        set inlineEventSource(value) { this.#inlineEventSource_accessor_storage = value; }
        #inlineRangeProvider_accessor_storage;
        get inlineRangeProvider() { return this.#inlineRangeProvider_accessor_storage; }
        set inlineRangeProvider(value) { this.#inlineRangeProvider_accessor_storage = value; }
        #markdownShortcutHandler_accessor_storage;
        get markdownShortcutHandler() { return this.#markdownShortcutHandler_accessor_storage; }
        set markdownShortcutHandler(value) { this.#markdownShortcutHandler_accessor_storage = value; }
        #readonly_accessor_storage;
        get readonly() { return this.#readonly_accessor_storage; }
        set readonly(value) { this.#readonly_accessor_storage = value; }
        #undoManager_accessor_storage;
        // rich-text will create a undoManager if it is not provided.
        get undoManager() { return this.#undoManager_accessor_storage; }
        set undoManager(value) { this.#undoManager_accessor_storage = value; }
        #verticalScrollContainerGetter_accessor_storage;
        get verticalScrollContainerGetter() { return this.#verticalScrollContainerGetter_accessor_storage; }
        set verticalScrollContainerGetter(value) { this.#verticalScrollContainerGetter_accessor_storage = value; }
        #vLineRenderer_accessor_storage;
        get vLineRenderer() { return this.#vLineRenderer_accessor_storage; }
        set vLineRenderer(value) { this.#vLineRenderer_accessor_storage = value; }
        #wrapText_accessor_storage;
        get wrapText() { return this.#wrapText_accessor_storage; }
        set wrapText(value) { this.#wrapText_accessor_storage = value; }
        #yText_accessor_storage;
        get yText() { return this.#yText_accessor_storage; }
        set yText(value) { this.#yText_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.#verticalScrollContainer = null;
            this._inlineEditor = null;
            this._onCopy = (e) => {
                const inlineEditor = this.inlineEditor;
                if (!inlineEditor)
                    return;
                const inlineRange = inlineEditor.getInlineRange();
                if (!inlineRange)
                    return;
                const text = inlineEditor.yTextString.slice(inlineRange.index, inlineRange.index + inlineRange.length);
                e.clipboardData?.setData('text/plain', text);
                e.preventDefault();
                e.stopPropagation();
            };
            this._onCut = (e) => {
                const inlineEditor = this.inlineEditor;
                if (!inlineEditor)
                    return;
                const inlineRange = inlineEditor.getInlineRange();
                if (!inlineRange)
                    return;
                const text = inlineEditor.yTextString.slice(inlineRange.index, inlineRange.index + inlineRange.length);
                inlineEditor.deleteText(inlineRange);
                inlineEditor.setInlineRange({
                    index: inlineRange.index,
                    length: 0,
                });
                e.clipboardData?.setData('text/plain', text);
                e.preventDefault();
                e.stopPropagation();
            };
            this._onPaste = (e) => {
                const inlineEditor = this.inlineEditor;
                if (!inlineEditor)
                    return;
                const inlineRange = inlineEditor.getInlineRange();
                if (!inlineRange)
                    return;
                const text = e.clipboardData
                    ?.getData('text/plain')
                    ?.replace(/\r?\n|\r/g, '\n');
                if (!text)
                    return;
                inlineEditor.insertText(inlineRange, text);
                inlineEditor.setInlineRange({
                    index: inlineRange.index + text.length,
                    length: 0,
                });
                e.preventDefault();
                e.stopPropagation();
            };
            this._onStackItemAdded = (event) => {
                const inlineRange = this.inlineEditor?.getInlineRange();
                if (inlineRange) {
                    event.stackItem.meta.set('richtext-v-range', inlineRange);
                }
            };
            this._onStackItemPopped = (event) => {
                const inlineRange = event.stackItem.meta.get('richtext-v-range');
                if (inlineRange && this.inlineEditor?.isValidInlineRange(inlineRange)) {
                    this.inlineEditor?.setInlineRange(inlineRange);
                }
            };
            this.#_inlineEditorContainer_accessor_storage = __runInitializers(this, __inlineEditorContainer_initializers, void 0);
            this.#attributeRenderer_accessor_storage = (__runInitializers(this, __inlineEditorContainer_extraInitializers), __runInitializers(this, _attributeRenderer_initializers, undefined));
            this.#attributesSchema_accessor_storage = (__runInitializers(this, _attributeRenderer_extraInitializers), __runInitializers(this, _attributesSchema_initializers, undefined));
            this.#embedChecker_accessor_storage = (__runInitializers(this, _attributesSchema_extraInitializers), __runInitializers(this, _embedChecker_initializers, () => false));
            this.#enableAutoScrollHorizontally_accessor_storage = (__runInitializers(this, _embedChecker_extraInitializers), __runInitializers(this, _enableAutoScrollHorizontally_initializers, true));
            this.#enableClipboard_accessor_storage = (__runInitializers(this, _enableAutoScrollHorizontally_extraInitializers), __runInitializers(this, _enableClipboard_initializers, true));
            this.#enableFormat_accessor_storage = (__runInitializers(this, _enableClipboard_extraInitializers), __runInitializers(this, _enableFormat_initializers, true));
            this.#enableUndoRedo_accessor_storage = (__runInitializers(this, _enableFormat_extraInitializers), __runInitializers(this, _enableUndoRedo_initializers, true));
            this.#inlineEventSource_accessor_storage = (__runInitializers(this, _enableUndoRedo_extraInitializers), __runInitializers(this, _inlineEventSource_initializers, undefined));
            this.#inlineRangeProvider_accessor_storage = (__runInitializers(this, _inlineEventSource_extraInitializers), __runInitializers(this, _inlineRangeProvider_initializers, undefined));
            this.#markdownShortcutHandler_accessor_storage = (__runInitializers(this, _inlineRangeProvider_extraInitializers), __runInitializers(this, _markdownShortcutHandler_initializers, undefined));
            this.#readonly_accessor_storage = (__runInitializers(this, _markdownShortcutHandler_extraInitializers), __runInitializers(this, _readonly_initializers, false));
            this.#undoManager_accessor_storage = (__runInitializers(this, _readonly_extraInitializers), __runInitializers(this, _undoManager_initializers, void 0));
            this.#verticalScrollContainerGetter_accessor_storage = (__runInitializers(this, _undoManager_extraInitializers), __runInitializers(this, _verticalScrollContainerGetter_initializers, undefined));
            this.#vLineRenderer_accessor_storage = (__runInitializers(this, _verticalScrollContainerGetter_extraInitializers), __runInitializers(this, _vLineRenderer_initializers, void 0));
            this.#wrapText_accessor_storage = (__runInitializers(this, _vLineRenderer_extraInitializers), __runInitializers(this, _wrapText_initializers, true));
            this.#yText_accessor_storage = (__runInitializers(this, _wrapText_extraInitializers), __runInitializers(this, _yText_initializers, void 0));
            __runInitializers(this, _yText_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return RichText = _classThis;
})();
export { RichText };
//# sourceMappingURL=rich-text.js.map