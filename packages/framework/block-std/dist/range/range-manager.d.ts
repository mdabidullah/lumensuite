import type { TextSelection } from '@blocksuite/block-std';
import type { BlockComponent } from '../view/element/block-component.js';
import { LifeCycleWatcher } from '../extension/index.js';
import { RangeBinding } from './range-binding.js';
/**
 * CRUD for Range and TextSelection
 */
export declare class RangeManager extends LifeCycleWatcher {
    static readonly key = "rangeManager";
    binding: RangeBinding | null;
    get value(): Range | null | undefined;
    private _isRangeSyncExcluded;
    clear(): void;
    getClosestBlock(node: Node): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null;
    getClosestInlineEditor(node: Node): import("@blocksuite/inline").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }> | null;
    /**
     * @example
     * aaa
     *   b[bb
     *     ccc
     * ddd
     *   ee]e
     *
     * all mode: [aaa, bbb, ccc, ddd, eee]
     * flat mode: [bbb, ccc, ddd, eee]
     * highest mode: [bbb, ddd]
     *
     * match function will be evaluated before filtering using mode
     */
    getSelectedBlockComponentsByRange(range: Range, options?: {
        match?: (el: BlockComponent) => boolean;
        mode?: 'all' | 'flat' | 'highest';
    }): BlockComponent[];
    mounted(): void;
    queryInlineEditorByPath(path: string): import("@blocksuite/inline").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }> | null;
    rangeToTextSelection(range: Range, reverse?: boolean): TextSelection | null;
    set(range: Range): void;
    syncRangeToTextSelection(range: Range, isRangeReversed: boolean): void;
    syncTextSelectionToRange(selection: TextSelection): void;
    textSelectionToRange(selection: TextSelection): Range | null;
}
//# sourceMappingURL=range-manager.d.ts.map