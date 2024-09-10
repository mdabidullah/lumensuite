import type { Y } from '@blocksuite/store';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type AttributeRenderer, type DeltaInsert, type InlineRangeProvider, type KeyboardBindingContext, type VLine } from '@blocksuite/inline';
import { Text } from '@blocksuite/store';
import { type TemplateResult } from 'lit';
import { z } from 'zod';
import type { AffineTextAttributes } from './extension/index.js';
import type { AffineInlineEditor } from './inline/index.js';
declare const RichText_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class RichText extends RichText_base {
    #private;
    static styles: import("lit").CSSResult;
    private _inlineEditor;
    private _onCopy;
    private _onCut;
    private _onPaste;
    private _onStackItemAdded;
    private _onStackItemPopped;
    private get _yText();
    get inlineEditor(): AffineInlineEditor | null;
    get inlineEditorContainer(): HTMLDivElement;
    private _init;
    private _unmount;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): TemplateResult<1>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private accessor _inlineEditorContainer;
    accessor attributeRenderer: AttributeRenderer | undefined;
    accessor attributesSchema: z.ZodSchema | undefined;
    accessor embedChecker: <TextAttributes extends AffineTextAttributes = AffineTextAttributes>(delta: DeltaInsert<TextAttributes>) => boolean;
    accessor enableAutoScrollHorizontally: boolean;
    accessor enableClipboard: boolean;
    accessor enableFormat: boolean;
    accessor enableUndoRedo: boolean;
    accessor inlineEventSource: HTMLElement | undefined;
    accessor inlineRangeProvider: InlineRangeProvider | undefined;
    accessor markdownShortcutHandler: (<TextAttributes extends AffineTextAttributes = AffineTextAttributes>(context: KeyboardBindingContext<TextAttributes>, undoManager: Y.UndoManager) => boolean) | undefined;
    accessor readonly: boolean;
    accessor undoManager: Y.UndoManager;
    accessor verticalScrollContainerGetter: (() => HTMLElement | null) | undefined;
    accessor vLineRenderer: ((vLine: VLine) => TemplateResult) | undefined;
    accessor wrapText: boolean;
    accessor yText: Y.Text | Text;
}
declare global {
    interface HTMLElementTagNameMap {
        'rich-text': RichText;
    }
}
export {};
//# sourceMappingURL=rich-text.d.ts.map