import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { assertExists, DisposableGroup, Slot } from '@lumensuite/global/utils';
import { nothing, render } from 'lit';
import * as Y from 'yjs';
import { INLINE_ROOT_ATTR } from './consts.js';
import { InlineHookService } from './services/hook.js';
import { AttributeService, DeltaService, EventService, RangeService, } from './services/index.js';
import { InlineTextService } from './services/text.js';
import { nativePointToTextPoint, textPointToDomPoint, } from './utils/index.js';
import { getTextNodesFromElement } from './utils/text.js';
export class InlineEditor {
    static { this.getTextNodesFromElement = getTextNodesFromElement; }
    static { this.nativePointToTextPoint = nativePointToTextPoint; }
    static { this.textPointToDomPoint = textPointToDomPoint; }
    get attributeService() {
        return this._attributeService;
    }
    get deltaService() {
        return this._deltaService;
    }
    get disposables() {
        return this._disposables;
    }
    get eventService() {
        return this._eventService;
    }
    get eventSource() {
        return this._eventSource;
    }
    // Expose hook service API
    get hooks() {
        return this._hooksService.hooks;
    }
    // Expose event service API
    get isComposing() {
        return this._eventService.isComposing;
    }
    get isReadonly() {
        return this._isReadonly;
    }
    // Expose attribute service API
    get marks() {
        return this._attributeService.marks;
    }
    get mounted() {
        return this._mounted;
    }
    get rangeService() {
        return this._rangeService;
    }
    get rootElement() {
        assertExists(this._rootElement);
        return this._rootElement;
    }
    get yText() {
        return this._yText;
    }
    get yTextDeltas() {
        return this.yText.toDelta();
    }
    get yTextLength() {
        return this.yText.length;
    }
    get yTextString() {
        return this.yText.toString();
    }
    constructor(yText, ops = {}) {
        this._attributeService = new AttributeService(this);
        this._deltaService = new DeltaService(this);
        this._disposables = new DisposableGroup();
        this._eventService = new EventService(this);
        this._eventSource = null;
        this._isReadonly = false;
        this._mounted = false;
        this._onYTextChange = (_, transaction) => {
            if (this.yText.toString().includes('\r')) {
                throw new LumenSuiteError(ErrorCode.InlineEditorError, 'yText must not contain "\\r" because it will break the range synchronization');
            }
            this.slots.textChange.emit();
            Promise.resolve()
                .then(() => {
                this.deltaService.render().catch(console.error);
                const inlineRange = this.rangeService.getInlineRange();
                if (!inlineRange || transaction.local)
                    return;
                const lastStartRelativePosition = this.rangeService.lastStartRelativePosition;
                const lastEndRelativePosition = this.rangeService.lastEndRelativePosition;
                if (!lastStartRelativePosition || !lastEndRelativePosition)
                    return;
                const doc = this.yText.doc;
                assertExists(doc);
                const absoluteStart = Y.createAbsolutePositionFromRelativePosition(lastStartRelativePosition, doc);
                const absoluteEnd = Y.createAbsolutePositionFromRelativePosition(lastEndRelativePosition, doc);
                const startIndex = absoluteStart?.index;
                const endIndex = absoluteEnd?.index;
                if (!startIndex || !endIndex)
                    return;
                const newInlineRange = {
                    index: startIndex,
                    length: endIndex - startIndex,
                };
                if (!this.isValidInlineRange(newInlineRange))
                    return;
                this.setInlineRange(newInlineRange);
            })
                .catch(console.error);
        };
        this._rangeService = new RangeService(this);
        this._rootElement = null;
        this._textService = new InlineTextService(this);
        // Expose text service API
        this.deleteText = this._textService.deleteText;
        this.focusEnd = this.rangeService.focusEnd;
        this.focusIndex = this.rangeService.focusIndex;
        this.focusStart = this.rangeService.focusStart;
        this.formatText = this._textService.formatText;
        this.getDeltaByRangeIndex = this.deltaService.getDeltaByRangeIndex;
        // Expose delta service API
        this.getDeltasByInlineRange = this.deltaService.getDeltasByInlineRange;
        this.getFormat = this._attributeService.getFormat;
        this.getInlineRange = this.rangeService.getInlineRange;
        this.getInlineRangeFromElement = this.rangeService.getInlineRangeFromElement;
        this.getLine = this.rangeService.getLine;
        this.getNativeSelection = this.rangeService.getNativeSelection;
        this.getTextPoint = this.rangeService.getTextPoint;
        this.insertLineBreak = this._textService.insertLineBreak;
        this.insertText = this._textService.insertText;
        this.isFirstLine = this.rangeService.isFirstLine;
        this.isLastLine = this.rangeService.isLastLine;
        this.isValidInlineRange = this.rangeService.isValidInlineRange;
        this.mapDeltasInInlineRange = this.deltaService.mapDeltasInInlineRange;
        this.resetMarks = this._attributeService.resetMarks;
        this.resetText = this._textService.resetText;
        this.selectAll = this.rangeService.selectAll;
        this.setAttributeRenderer = this._attributeService.setAttributeRenderer;
        this.setAttributeSchema = this._attributeService.setAttributeSchema;
        this.setInlineRange = this.rangeService.setInlineRange;
        this.setMarks = this._attributeService.setMarks;
        this.setText = this._textService.setText;
        this.slots = {
            mounted: new Slot(),
            unmounted: new Slot(),
            textChange: new Slot(),
            render: new Slot(),
            renderComplete: new Slot(),
            inlineRangeUpdate: new Slot(),
            inlineRangeApply: new Slot(),
            /**
             * Corresponding to the `compositionUpdate` and `beforeInput` events, and triggered only when the `inlineRange` is not null.
             */
            inputting: new Slot(),
            /**
             * Triggered only when the `inlineRange` is not null.
             */
            keydown: new Slot(),
        };
        this.syncInlineRange = this.rangeService.syncInlineRange;
        // Expose range service API
        this.toDomRange = this.rangeService.toDomRange;
        this.toInlineRange = this.rangeService.toInlineRange;
        if (!yText.doc) {
            throw new LumenSuiteError(ErrorCode.InlineEditorError, 'yText must be attached to a Y.Doc');
        }
        if (yText.toString().includes('\r')) {
            throw new LumenSuiteError(ErrorCode.InlineEditorError, 'yText must not contain "\\r" because it will break the range synchronization');
        }
        const { isEmbed = () => false, hooks = {}, inlineRangeProvider = null, vLineRenderer = null, } = ops;
        this._yText = yText;
        this.isEmbed = isEmbed;
        this.vLineRenderer = vLineRenderer;
        this._hooksService = new InlineHookService(this, hooks);
        this.inlineRangeProvider = inlineRangeProvider;
        if (inlineRangeProvider) {
            inlineRangeProvider.inlineRangeUpdated.on(prop => {
                this.slots.inlineRangeUpdate.emit(prop);
            });
        }
        this.slots.inlineRangeUpdate.on(this.rangeService.onInlineRangeUpdated);
    }
    _bindYTextObserver() {
        this.yText.observe(this._onYTextChange);
        this.disposables.add({
            dispose: () => {
                this.yText.unobserve(this._onYTextChange);
            },
        });
    }
    mount(rootElement, eventSource = rootElement, isReadonly = false) {
        const inlineRoot = rootElement;
        inlineRoot.inlineEditor = this;
        this._rootElement = inlineRoot;
        this._eventSource = eventSource;
        this._eventSource.style.outline = 'none';
        this._rootElement.dataset.vRoot = 'true';
        this.setReadonly(isReadonly);
        render(nothing, this._rootElement);
        this._bindYTextObserver();
        this._eventService.mount();
        this._mounted = true;
        this.slots.mounted.emit();
        this._deltaService.render().catch(console.error);
    }
    requestUpdate(syncInlineRange = true) {
        this._deltaService.render(syncInlineRange).catch(console.error);
    }
    rerenderWholeEditor() {
        if (!this.rootElement.isConnected)
            return;
        render(nothing, this.rootElement);
        this._deltaService.render().catch(console.error);
    }
    setReadonly(isReadonly) {
        const value = isReadonly ? 'false' : 'true';
        if (this.rootElement.contentEditable !== value) {
            this.rootElement.contentEditable = value;
        }
        if (this.eventSource && this.eventSource.contentEditable !== value) {
            this.eventSource.contentEditable = value;
        }
        this._isReadonly = isReadonly;
    }
    transact(fn) {
        const doc = this.yText.doc;
        if (!doc) {
            throw new LumenSuiteError(ErrorCode.InlineEditorError, 'yText is not attached to a doc');
        }
        doc.transact(fn, doc.clientID);
    }
    unmount() {
        if (this.rootElement.isConnected) {
            render(nothing, this.rootElement);
        }
        this.rootElement.removeAttribute(INLINE_ROOT_ATTR);
        this._rootElement = null;
        this._mounted = false;
        this.disposables.dispose();
        this.slots.unmounted.emit();
    }
    async waitForUpdate() {
        const vLines = Array.from(this.rootElement.querySelectorAll('v-line'));
        await Promise.all(vLines.map(line => line.updateComplete));
    }
}
//# sourceMappingURL=inline-editor.js.map