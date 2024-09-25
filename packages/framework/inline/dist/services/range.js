import { REQUEST_IDLE_CALLBACK_ENABLED } from '@lumensuite/global/env';
import { assertExists } from '@lumensuite/global/utils';
import * as Y from 'yjs';
import { isMaybeInlineRangeEqual } from '../utils/inline-range.js';
import { domRangeToInlineRange, inlineRangeToDomRange, } from '../utils/range-conversion.js';
import { calculateTextLength, getTextNodesFromElement } from '../utils/text.js';
export class RangeService {
    get inlineRangeProvider() {
        return this.editor.inlineRangeProvider;
    }
    get lastEndRelativePosition() {
        return this._lastEndRelativePosition;
    }
    get lastStartRelativePosition() {
        return this._lastStartRelativePosition;
    }
    get rootElement() {
        return this.editor.rootElement;
    }
    get yText() {
        return this.editor.yText;
    }
    constructor(editor) {
        this.editor = editor;
        this._applyInlineRange = (inlineRange) => {
            const selection = document.getSelection();
            if (!selection) {
                return;
            }
            try {
                const newRange = this.toDomRange(inlineRange);
                if (!newRange) {
                    return;
                }
                selection.removeAllRanges();
                selection.addRange(newRange);
                this.editor.slots.inlineRangeApply.emit(newRange);
            }
            catch (error) {
                console.error('failed to apply inline range');
                console.error(error);
            }
        };
        this._inlineRange = null;
        this._lastEndRelativePosition = null;
        this._lastStartRelativePosition = null;
        this.focusEnd = () => {
            this.setInlineRange({
                index: this.editor.yTextLength,
                length: 0,
            });
        };
        this.focusIndex = (index) => {
            this.setInlineRange({
                index,
                length: 0,
            });
        };
        this.focusStart = () => {
            this.setInlineRange({
                index: 0,
                length: 0,
            });
        };
        this.getInlineRange = () => {
            if (this.inlineRangeProvider) {
                return this.inlineRangeProvider.getInlineRange();
            }
            return this._inlineRange;
        };
        this.getInlineRangeFromElement = (element) => {
            const range = document.createRange();
            const text = element.querySelector('[data-v-text]');
            if (!text) {
                return null;
            }
            const textNode = text.childNodes[1];
            assertExists(textNode instanceof Text);
            range.setStart(textNode, 0);
            range.setEnd(textNode, textNode.textContent?.length ?? 0);
            const inlineRange = this.toInlineRange(range);
            return inlineRange;
        };
        /**
         * There are two cases to have the second line:
         * 1. long text auto wrap in span element
         * 2. soft break
         */
        this.isFirstLine = (inlineRange) => {
            if (!inlineRange || inlineRange.length > 0)
                return false;
            const range = this.toDomRange(inlineRange);
            if (!range) {
                console.error('failed to convert inline range to domRange');
                return false;
            }
            // check case 1:
            const beforeText = this.editor.yTextString.slice(0, inlineRange.index);
            if (beforeText.includes('\n')) {
                return false;
            }
            // check case 2:
            // If there is a wrapped text, there are two possible positions for
            // cursor: (in first line and in second line)
            // aaaaaaaa| or aaaaaaaa
            // bb           |bb
            // We have no way to distinguish them and we just assume that the cursor
            // can not in the first line because if we apply the inline ranage manually the
            // cursor will jump to the second line.
            const container = range.commonAncestorContainer.parentElement;
            assertExists(container);
            const containerRect = container.getBoundingClientRect();
            // There will be two rects if the cursor is at the edge of the line:
            // aaaaaaaa| or aaaaaaaa
            // bb           |bb
            const rangeRects = range.getClientRects();
            // We use last rect here to make sure we get the second rect.
            // (Based on the assumption that the cursor can not in the first line)
            const rangeRect = rangeRects[rangeRects.length - 1];
            const tolerance = 1;
            return Math.abs(rangeRect.top - containerRect.top) < tolerance;
        };
        /**
         * There are two cases to have the second line:
         * 1. long text auto wrap in span element
         * 2. soft break
         */
        this.isLastLine = (inlineRange) => {
            if (!inlineRange || inlineRange.length > 0)
                return false;
            // check case 1:
            const afterText = this.editor.yTextString.slice(inlineRange.index);
            if (afterText.includes('\n')) {
                return false;
            }
            const range = this.toDomRange(inlineRange);
            if (!range) {
                console.error('failed to convert inline range to domRange');
                return false;
            }
            // check case 2:
            // If there is a wrapped text, there are two possible positions for
            // cursor: (in first line and in second line)
            // aaaaaaaa| or aaaaaaaa
            // bb           |bb
            // We have no way to distinguish them and we just assume that the cursor
            // can not in the first line because if we apply the inline range manually the
            // cursor will jump to the second line.
            const container = range.commonAncestorContainer.parentElement;
            assertExists(container);
            const containerRect = container.getBoundingClientRect();
            // There will be two rects if the cursor is at the edge of the line:
            // aaaaaaaa| or aaaaaaaa
            // bb           |bb
            const rangeRects = range.getClientRects();
            // We use last rect here to make sure we get the second rect.
            // (Based on the assumption that the cursor can not be in the first line)
            const rangeRect = rangeRects[rangeRects.length - 1];
            const tolerance = 1;
            return Math.abs(rangeRect.bottom - containerRect.bottom) < tolerance;
        };
        this.isValidInlineRange = (inlineRange) => {
            return !(inlineRange &&
                (inlineRange.index < 0 ||
                    inlineRange.index + inlineRange.length > this.editor.yText.length));
        };
        this.onInlineRangeUpdated = async ([newInlineRange, sync,]) => {
            const eq = isMaybeInlineRangeEqual(this._inlineRange, newInlineRange);
            if (eq) {
                return;
            }
            this._inlineRange = newInlineRange;
            if (newInlineRange) {
                this._lastStartRelativePosition = Y.createRelativePositionFromTypeIndex(this.yText, newInlineRange.index);
                this._lastEndRelativePosition = Y.createRelativePositionFromTypeIndex(this.yText, newInlineRange.index + newInlineRange.length);
            }
            else {
                this._lastStartRelativePosition = null;
                this._lastEndRelativePosition = null;
            }
            // try to trigger update because the `selected` state of inline editor element may change
            if (this.editor.mounted) {
                // range change may happen before the editor is prepared
                await this.editor.waitForUpdate();
                // improve performance
                if (REQUEST_IDLE_CALLBACK_ENABLED) {
                    requestIdleCallback(() => {
                        this.editor.requestUpdate(false);
                    });
                }
                else {
                    Promise.resolve()
                        .then(() => {
                        this.editor.requestUpdate(false);
                    })
                        .catch(console.error);
                }
            }
            if (!sync) {
                return;
            }
            if (this._inlineRange === null) {
                const selection = document.getSelection();
                if (selection && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    if (range.intersectsNode(this.editor.rootElement)) {
                        selection.removeAllRanges();
                    }
                }
                return;
            }
            const fn = () => {
                // There may be multiple range update events in one frame,
                // so we need to obtain the latest inline ranage.
                // see https://github.com/toeverything/lumensuite/issues/2982
                // when using input method inline ranage will return to the starting point,
                // so we need to re-sync
                this.syncInlineRange();
            };
            // updates in lit are performed asynchronously
            requestAnimationFrame(fn);
        };
        this.selectAll = () => {
            this.setInlineRange({
                index: 0,
                length: this.editor.yTextLength,
            });
        };
        /**
         * the inline range is synced to the native selection asynchronously
         * if sync is true, the native selection will be synced immediately
         */
        this.setInlineRange = (inlineRange, sync = true) => {
            if (!this.isValidInlineRange(inlineRange)) {
                console.error('invalid inline range');
                return;
            }
            if (this.inlineRangeProvider) {
                this.inlineRangeProvider.setInlineRange(inlineRange, sync);
                return;
            }
            this.editor.slots.inlineRangeUpdate.emit([inlineRange, sync]);
        };
        /**
         * sync the dom selection from inline ranage for **this Editor**
         */
        this.syncInlineRange = () => {
            const inlineRange = this.getInlineRange();
            if (inlineRange && this.editor.mounted) {
                this._applyInlineRange(inlineRange);
            }
        };
        /**
         * calculate the dom selection from inline ranage for **this Editor**
         */
        this.toDomRange = (inlineRange) => {
            const rootElement = this.editor.rootElement;
            return inlineRangeToDomRange(rootElement, inlineRange);
        };
        /**
         * calculate the inline ranage from dom selection for **this Editor**
         * there are three cases when the inline ranage of this Editor is not null:
         * (In the following, "|" mean anchor and focus, each line is a separate Editor)
         * 1. anchor and focus are in this Editor
         *    ```
         *    aaaaaa
         *    b|bbbb|b
         *    cccccc
         *    ```
         *    the inline ranage of second Editor is `{index: 1, length: 4}`, the others are null
         * 2. anchor and focus one in this Editor, one in another Editor
         *    ```
         *    aaa|aaa    aaaaaa
         *    bbbbb|b or bbbbb|b
         *    cccccc     cc|cccc
         *    ```
         *    2.1
         *        the inline ranage of first Editor is `{index: 3, length: 3}`, the second is `{index: 0, length: 5}`,
         *        the third is null
         *    2.2
         *        the inline ranage of first Editor is null, the second is `{index: 5, length: 1}`,
         *        the third is `{index: 0, length: 2}`
         * 3. anchor and focus are in another Editor
         *    ```
         *    aa|aaaa
         *    bbbbbb
         *    cccc|cc
         *    ```
         *    the inline range of first Editor is `{index: 2, length: 4}`,
         *    the second is `{index: 0, length: 6}`, the third is `{index: 0, length: 4}`
         */
        this.toInlineRange = (range) => {
            const { rootElement, yText } = this.editor;
            return domRangeToInlineRange(range, rootElement, yText);
        };
    }
    // the number is related to the VLine's textLength
    getLine(rangeIndex) {
        const lineElements = Array.from(this.rootElement.querySelectorAll('v-line'));
        let beforeIndex = 0;
        for (const [lineIndex, lineElement] of lineElements.entries()) {
            if (rangeIndex >= beforeIndex &&
                rangeIndex < beforeIndex + lineElement.vTextLength + 1) {
                return {
                    line: lineElement,
                    lineIndex,
                    rangeIndexRelatedToLine: rangeIndex - beforeIndex,
                };
            }
            beforeIndex += lineElement.vTextLength + 1;
        }
        console.error('failed to find line');
        return null;
    }
    getNativeRange() {
        const selection = this.getNativeSelection();
        if (!selection)
            return null;
        return selection.getRangeAt(0);
    }
    getNativeSelection() {
        const selection = document.getSelection();
        if (!selection)
            return null;
        if (selection.rangeCount === 0)
            return null;
        return selection;
    }
    getTextPoint(rangeIndex) {
        const vLines = Array.from(this.rootElement.querySelectorAll('v-line'));
        let index = 0;
        for (const vLine of vLines) {
            const texts = getTextNodesFromElement(vLine);
            if (texts.length === 0) {
                return null;
            }
            for (const text of texts) {
                if (!text.textContent) {
                    return null;
                }
                if (index + text.textContent.length >= rangeIndex) {
                    return [text, rangeIndex - index];
                }
                index += calculateTextLength(text);
            }
            index += 1;
        }
        return null;
    }
}
//# sourceMappingURL=range.js.map