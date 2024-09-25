import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { Slot } from '@lumensuite/global/utils';
import { INLINE_ROOT_ATTR, } from '@lumensuite/inline';
import { BLOCK_ID_ATTR } from '../view/index.js';
export const getInlineRangeProvider = element => {
    const editorHost = element.host;
    const selectionManager = editorHost.selection;
    const rangeManager = editorHost.range;
    const inlineRangeUpdatedSlot = new Slot();
    if (!selectionManager || !rangeManager) {
        return null;
    }
    const isElementSelected = (range) => {
        // Most cases, the range is collapsed, so we no need to use `intersectsNode`
        // because its performance is not good enough.
        if (range.collapsed) {
            const startElement = range.startContainer instanceof Element
                ? range.startContainer
                : range.startContainer.parentElement;
            const inlineRoot = startElement?.closest(`[${INLINE_ROOT_ATTR}]`);
            if (!inlineRoot)
                return false;
            const block = startElement?.closest(`[${BLOCK_ID_ATTR}]`);
            if (!block || block !== element)
                return false;
        }
        else {
            if (!range.intersectsNode(element))
                return false;
        }
        return true;
    };
    const calculateInlineRange = (range, textSelection) => {
        if (!isElementSelected(range)) {
            return null;
        }
        const { from, to } = textSelection;
        if (from.blockId === element.blockId) {
            return {
                index: from.index,
                length: from.length,
            };
        }
        if (to && to.blockId === element.blockId) {
            return {
                index: to.index,
                length: to.length,
            };
        }
        if (!element.model.text) {
            throw new LumenSuiteError(ErrorCode.SelectionError, 'element to set text selection has no text');
        }
        return {
            index: 0,
            length: element.model.text.length,
        };
    };
    const setInlineRange = (inlineRange, sync = true) => {
        // skip `setInlineRange` from `inlineEditor` when composing happens across blocks,
        // selection will be updated in `range-binding`
        if (rangeManager.binding?.isComposing)
            return;
        if (!inlineRange) {
            selectionManager.clear(['text']);
        }
        else {
            const textSelection = selectionManager.create('text', {
                from: {
                    blockId: element.blockId,
                    index: inlineRange.index,
                    length: inlineRange.length,
                },
                to: null,
            });
            selectionManager.setGroup('note', [textSelection]);
        }
        inlineRangeUpdatedSlot.emit([inlineRange, sync]);
    };
    const getInlineRange = () => {
        const sl = document.getSelection();
        if (!sl || sl.rangeCount === 0) {
            return null;
        }
        const range = sl.getRangeAt(0);
        if (!range) {
            return null;
        }
        const textSelection = selectionManager.find('text');
        if (!textSelection) {
            return null;
        }
        return calculateInlineRange(range, textSelection);
    };
    let lastInlineRange = null;
    selectionManager.slots.changed.on(() => {
        const textSelection = selectionManager.find('text');
        if (!textSelection)
            return;
        const range = rangeManager.value;
        if (!range || !isElementSelected(range))
            return;
        // wait for lit updated
        requestAnimationFrame(() => {
            const inlineRange = calculateInlineRange(range, textSelection);
            if (lastInlineRange &&
                inlineRange &&
                lastInlineRange.index === inlineRange.index &&
                lastInlineRange.length === inlineRange.length)
                return;
            lastInlineRange = inlineRange;
            inlineRangeUpdatedSlot.emit([inlineRange, false]);
        });
    });
    return {
        setInlineRange,
        getInlineRange,
        inlineRangeUpdated: inlineRangeUpdatedSlot,
    };
};
//# sourceMappingURL=inline-range-provider.js.map