import { INLINE_ROOT_ATTR } from '@lumensuite/inline';
import { FORMAT_TEXT_SUPPORT_FLAVOURS } from './consts.js';
import { clearMarksOnDiscontinuousInput } from './utils.js';
// for text selection
export const formatTextCommand = (ctx, next) => {
    const { styles, mode = 'merge' } = ctx;
    const textSelection = ctx.textSelection ?? ctx.currentTextSelection;
    if (!textSelection)
        return;
    const success = ctx.std.command
        .chain()
        .getSelectedBlocks({
        textSelection,
        filter: el => FORMAT_TEXT_SUPPORT_FLAVOURS.includes(el.model.flavour),
        types: ['text'],
    })
        .inline((ctx, next) => {
        const { selectedBlocks } = ctx;
        if (!selectedBlocks)
            return;
        const selectedInlineEditors = selectedBlocks.flatMap(el => {
            const inlineRoot = el.querySelector(`[${INLINE_ROOT_ATTR}]`);
            if (inlineRoot && inlineRoot.inlineEditor.getInlineRange()) {
                return inlineRoot.inlineEditor;
            }
            return [];
        });
        selectedInlineEditors.forEach(inlineEditor => {
            const inlineRange = inlineEditor.getInlineRange();
            if (!inlineRange)
                return;
            if (inlineRange.length === 0) {
                const delta = inlineEditor.getDeltaByRangeIndex(inlineRange.index);
                if (!delta)
                    return;
                inlineEditor.setMarks({
                    ...inlineEditor.marks,
                    ...Object.fromEntries(Object.entries(styles).map(([key, value]) => {
                        if (typeof value === 'boolean') {
                            return [
                                key,
                                (inlineEditor.marks &&
                                    inlineEditor.marks[key]) ||
                                    (delta.attributes &&
                                        delta.attributes[key])
                                    ? null
                                    : value,
                            ];
                        }
                        return [key, value];
                    })),
                });
                clearMarksOnDiscontinuousInput(inlineEditor);
            }
            else {
                inlineEditor.formatText(inlineRange, styles, {
                    mode,
                });
            }
        });
        Promise.all(selectedBlocks.map(el => el.updateComplete))
            .then(() => {
            ctx.std.range.syncTextSelectionToRange(textSelection);
        })
            .catch(console.error);
        next();
    })
        .run();
    if (success)
        next();
};
//# sourceMappingURL=format-text.js.map