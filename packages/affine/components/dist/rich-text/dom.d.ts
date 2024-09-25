import type { BlockStdScope, EditorHost } from '@lumensuite/block-std';
import type { InlineRange } from '@lumensuite/inline';
import type { BlockModel } from '@lumensuite/store';
import type { RichText } from './rich-text.js';
/**
 * In most cases, you not need RichText, you can use {@link getInlineEditorByModel} instead.
 */
export declare function getRichTextByModel(editorHost: EditorHost, id: string): RichText | null;
export declare function asyncGetRichText(editorHost: EditorHost, id: string): Promise<RichText | null>;
export declare function getInlineEditorByModel(editorHost: EditorHost, model: BlockModel | string): import("./index.js").AffineInlineEditor | null;
export declare function asyncSetInlineRange(editorHost: EditorHost, model: BlockModel, inlineRange: InlineRange): Promise<void>;
export declare function focusTextModel(std: BlockStdScope, id: string, offset?: number): void;
export declare function selectTextModel(std: BlockStdScope, id: string, index?: number, length?: number): void;
//# sourceMappingURL=dom.d.ts.map