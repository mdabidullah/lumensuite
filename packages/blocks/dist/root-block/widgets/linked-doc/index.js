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
import { getInlineEditorByModel } from '@lumensuite/affine-components/rich-text';
import { getCurrentNativeRange, getViewportElement, matchFlavours, } from '@lumensuite/affine-shared/utils';
import { WidgetComponent } from '@lumensuite/block-std';
import { DisposableGroup, throttle } from '@lumensuite/global/utils';
import { InlineEditor } from '@lumensuite/inline';
import { customElement } from 'lit/decorators.js';
import { getPopperPosition } from '../../../root-block/utils/position.js';
import { getMenus } from './config.js';
import { LinkedDocPopover } from './linked-doc-popover.js';
export const AFFINE_LINKED_DOC_WIDGET = 'affine-linked-doc-widget';
let AffineLinkedDocWidget = (() => {
    let _classDecorators = [customElement(AFFINE_LINKED_DOC_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetComponent;
    var AffineLinkedDocWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._abortController = null;
            this._onCompositionEnd = (ctx) => {
                const event = ctx.get('defaultState').event;
                if (!this.config.triggerKeys.some(triggerKey => triggerKey.includes(event.data)))
                    return;
                const inlineEditor = this.getInlineEditor(event);
                if (!inlineEditor)
                    return;
                this._handleInput(inlineEditor, true);
            };
            this._onKeyDown = (ctx) => {
                const eventState = ctx.get('keyboardState');
                const event = eventState.raw;
                const key = event.key;
                if (key === undefined || // in mac os, the key may be undefined
                    key === 'Process' ||
                    event.isComposing)
                    return;
                const inlineEditor = this.getInlineEditor(event);
                if (!inlineEditor)
                    return;
                const inlineRange = inlineEditor.getInlineRange();
                if (!inlineRange)
                    return;
                if (inlineRange.length > 0) {
                    // When select text and press `[[` should not trigger transform,
                    // since it will break the bracket complete.
                    // Expected `[[selected text]]` instead of `@selected text]]`
                    return;
                }
                this._handleInput(inlineEditor, false);
            };
            this.getInlineEditor = (evt) => {
                if (evt.target instanceof HTMLElement) {
                    const editor = evt.target.closest('.can-link-doc > .inline-editor')?.inlineEditor;
                    if (editor instanceof InlineEditor) {
                        return editor;
                    }
                }
                const text = this.host.selection.value.find(selection => selection.is('text'));
                if (!text)
                    return;
                const model = this.host.doc.getBlockById(text.blockId);
                if (!model)
                    return;
                if (matchFlavours(model, this.config.ignoreBlockTypes)) {
                    return;
                }
                return getInlineEditorByModel(this.host, model);
            };
            this.showLinkedDocPopover = (inlineEditor, triggerKey) => {
                const curRange = getCurrentNativeRange();
                if (!curRange)
                    return;
                this._abortController?.abort();
                this._abortController = new AbortController();
                const disposables = new DisposableGroup();
                this._abortController.signal.addEventListener('abort', () => disposables.dispose());
                const linkedDoc = new LinkedDocPopover(triggerKey, this.config.getMenus, this.host, inlineEditor, this._abortController);
                // Mount
                document.body.append(linkedDoc);
                disposables.add(() => linkedDoc.remove());
                // Handle position
                const updatePosition = throttle(() => {
                    const linkedDocElement = linkedDoc.linkedDocElement;
                    if (!linkedDocElement)
                        return;
                    const position = getPopperPosition(linkedDocElement, curRange);
                    linkedDoc.updatePosition(position);
                }, 10);
                disposables.addFromEvent(window, 'resize', updatePosition);
                const scrollContainer = getViewportElement(this.host);
                if (scrollContainer) {
                    // Note: in edgeless mode, the scroll container is not exist!
                    disposables.addFromEvent(scrollContainer, 'scroll', updatePosition, {
                        passive: true,
                    });
                }
                // Wait for node to be mounted
                setTimeout(updatePosition);
                disposables.addFromEvent(window, 'mousedown', (e) => {
                    if (e.target === linkedDoc)
                        return;
                    this._abortController?.abort();
                });
                return linkedDoc;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineLinkedDocWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get config() {
            return {
                triggerKeys: ['@', '[[', '【【'],
                ignoreBlockTypes: ['affine:code'],
                convertTriggerKey: true,
                getMenus,
                ...this.std.getConfig('affine:page')?.linkedWidget,
            };
        }
        _handleInput(inlineEditor, isCompositionEnd) {
            const primaryTriggerKey = this.config.triggerKeys[0];
            const inlineRangeApplyCallback = (callback) => {
                // the inline ranged updated in compositionEnd event before this event callback
                if (isCompositionEnd)
                    callback();
                else
                    inlineEditor.slots.inlineRangeApply.once(callback);
            };
            inlineRangeApplyCallback(() => {
                const inlineRange = inlineEditor.getInlineRange();
                if (!inlineRange)
                    return;
                const textPoint = inlineEditor.getTextPoint(inlineRange.index);
                if (!textPoint)
                    return;
                const [leafStart, offsetStart] = textPoint;
                const text = leafStart.textContent
                    ? leafStart.textContent.slice(0, offsetStart)
                    : '';
                const matchedKey = this.config.triggerKeys.find(triggerKey => text.endsWith(triggerKey));
                if (!matchedKey)
                    return;
                if (this.config.convertTriggerKey && primaryTriggerKey !== matchedKey) {
                    const inlineRange = inlineEditor.getInlineRange();
                    if (!inlineRange)
                        return;
                    // Convert to the primary trigger key
                    // e.g. [[ -> @
                    const startIdxBeforeMatchKey = inlineRange.index - matchedKey.length;
                    inlineEditor.deleteText({
                        index: startIdxBeforeMatchKey,
                        length: matchedKey.length,
                    });
                    inlineEditor.insertText({ index: startIdxBeforeMatchKey, length: 0 }, primaryTriggerKey);
                    inlineEditor.setInlineRange({
                        index: startIdxBeforeMatchKey + primaryTriggerKey.length,
                        length: 0,
                    });
                    inlineRangeApplyCallback(() => {
                        this.showLinkedDocPopover(inlineEditor, primaryTriggerKey);
                    });
                    return;
                }
                this.showLinkedDocPopover(inlineEditor, matchedKey);
            });
        }
        connectedCallback() {
            super.connectedCallback();
            this.handleEvent('keyDown', this._onKeyDown);
            this.handleEvent('compositionEnd', this._onCompositionEnd);
        }
    };
    return AffineLinkedDocWidget = _classThis;
})();
export { AffineLinkedDocWidget };
//# sourceMappingURL=index.js.map