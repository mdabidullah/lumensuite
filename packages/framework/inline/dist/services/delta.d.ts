import type { InlineEditor } from '../inline-editor.js';
import type { DeltaEntry, DeltaInsert, InlineRange } from '../types.js';
import type { BaseTextAttributes } from '../utils/index.js';
export declare class DeltaService<TextAttributes extends BaseTextAttributes> {
    readonly editor: InlineEditor<TextAttributes>;
    /**
     * Here are examples of how this function computes and gets the delta.
     *
     * We have such a text:
     * ```
     * [
     *   {
     *      insert: 'aaa',
     *      attributes: { bold: true },
     *   },
     *   {
     *      insert: 'bbb',
     *      attributes: { italic: true },
     *   },
     * ]
     * ```
     *
     * `getDeltaByRangeIndex(0)` returns `{ insert: 'aaa', attributes: { bold: true } }`.
     *
     * `getDeltaByRangeIndex(1)` returns `{ insert: 'aaa', attributes: { bold: true } }`.
     *
     * `getDeltaByRangeIndex(3)` returns `{ insert: 'aaa', attributes: { bold: true } }`.
     *
     * `getDeltaByRangeIndex(4)` returns `{ insert: 'bbb', attributes: { italic: true } }`.
     */
    getDeltaByRangeIndex: (rangeIndex: number) => DeltaInsert<TextAttributes> | null;
    /**
     * Here are examples of how this function computes and gets the deltas.
     *
     * We have such a text:
     * ```
     * [
     *   {
     *      insert: 'aaa',
     *      attributes: { bold: true },
     *   },
     *   {
     *      insert: 'bbb',
     *      attributes: { italic: true },
     *   },
     *   {
     *      insert: 'ccc',
     *      attributes: { underline: true },
     *   },
     * ]
     * ```
     *
     * `getDeltasByInlineRange({ index: 0, length: 0 })` returns
     * ```
     * [{ insert: 'aaa', attributes: { bold: true }, }, { index: 0, length: 3, }]]
     * ```
     *
     * `getDeltasByInlineRange({ index: 0, length: 1 })` returns
     * ```
     * [{ insert: 'aaa', attributes: { bold: true }, }, { index: 0, length: 3, }]]
     * ```
     *
     * `getDeltasByInlineRange({ index: 0, length: 4 })` returns
     * ```
     * [{ insert: 'aaa', attributes: { bold: true }, }, { index: 0, length: 3, }],
     *  [{ insert: 'bbb', attributes: { italic: true }, }, { index: 3, length: 3, }]]
     * ```
     *
     * `getDeltasByInlineRange({ index: 3, length: 1 })` returns
     * ```
     * [{ insert: 'aaa', attributes: { bold: true }, }, { index: 0, length: 3, }],
     *  [{ insert: 'bbb', attributes: { italic: true }, }, { index: 3, length: 3, }]]
     * ```
     *
     * `getDeltasByInlineRange({ index: 3, length: 3 })` returns
     * ```
     * [{ insert: 'aaa', attributes: { bold: true }, }, { index: 0, length: 3, }],
     *  [{ insert: 'bbb', attributes: { italic: true }, }, { index: 3, length: 3, }]]
     * ```
     *
     *  `getDeltasByInlineRange({ index: 3, length: 4 })` returns
     * ```
     * [{ insert: 'aaa', attributes: { bold: true }, }, { index: 0, length: 3, }],
     *  [{ insert: 'bbb', attributes: { italic: true }, }, { index: 3, length: 3, }],
     *  [{ insert: 'ccc', attributes: { underline: true }, }, { index: 6, length: 3, }]]
     * ```
     */
    getDeltasByInlineRange: (inlineRange: InlineRange) => DeltaEntry<TextAttributes>[];
    mapDeltasInInlineRange: <Result>(inlineRange: InlineRange, callback: (delta: DeltaInsert<TextAttributes>, rangeIndex: number, deltaIndex: number) => Result) => Result[];
    render: (syncInlineRange?: boolean) => Promise<void>;
    get deltas(): DeltaInsert<TextAttributes>[];
    constructor(editor: InlineEditor<TextAttributes>);
}
//# sourceMappingURL=delta.d.ts.map