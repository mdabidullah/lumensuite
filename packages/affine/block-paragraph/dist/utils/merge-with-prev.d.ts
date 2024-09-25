import type { EditorHost } from '@lumensuite/block-std';
import type { BlockModel } from '@lumensuite/store';
/**
 * Merge the paragraph with prev block
 *
 * Before press backspace
 * - line1
 *   - line2
 *   - |aaa
 *   - line3
 *
 * After press backspace
 * - line1
 *   - line2|aaa
 *   - line3
 */
export declare function mergeWithPrev(editorHost: EditorHost, model: BlockModel): boolean;
//# sourceMappingURL=merge-with-prev.d.ts.map