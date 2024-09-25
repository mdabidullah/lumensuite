import type { AffineInlineEditor } from '@lumensuite/affine-components/rich-text';
import type { EditorHost } from '@lumensuite/block-std';
import type { InlineEditor, InlineRange } from '@lumensuite/inline';
import { BlockModel } from '@lumensuite/store';
export declare function getQuery(inlineEditor: InlineEditor, startRange: InlineRange | null): string | null;
interface ObserverParams {
    target: HTMLElement;
    signal: AbortSignal;
    inlineEditor: InlineEditor;
    onInput?: () => void;
    onDelete?: () => void;
    onMove?: (step: 1 | -1) => void;
    onConfirm?: () => void;
    onAbort?: () => void;
    onPaste?: () => void;
    interceptor?: (e: KeyboardEvent, next: () => void) => void;
}
export declare const createKeydownObserver: ({ target, signal, inlineEditor, onInput, onDelete, onMove, onConfirm, onAbort, onPaste, interceptor, }: ObserverParams) => void;
/**
 * Remove specified text from the current range.
 */
export declare function cleanSpecifiedTail(editorHost: EditorHost, inlineEditorOrModel: AffineInlineEditor | BlockModel, str: string): void;
/**
 * You should add a container before the scrollbar style to prevent the style pollution of the whole doc.
 */
export declare const scrollbarStyle: (container: string) => import("lit").CSSResult;
export {};
//# sourceMappingURL=utils.d.ts.map