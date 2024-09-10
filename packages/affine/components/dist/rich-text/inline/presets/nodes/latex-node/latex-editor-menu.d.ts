import type { Y } from '@blocksuite/store';
import { type BlockStdScope, ShadowlessElement } from '@blocksuite/block-std';
import { type Signal } from '@lit-labs/preact-signals';
import { type ThemedToken } from 'shiki';
export declare const LatexEditorInlineManagerExtension: import("@blocksuite/block-std").ExtensionType & {
    identifier: import("@blocksuite/global/di").ServiceIdentifier<import("../../../../extension/inline-manager.js").InlineManager>;
};
declare const LatexEditorMenu_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LatexEditorMenu extends LatexEditorMenu_base {
    static styles: import("lit").CSSResult;
    highlightTokens$: Signal<ThemedToken[][]>;
    yText: Y.Text;
    get inlineManager(): import("../../../../extension/inline-manager.js").InlineManager;
    get richText(): import("../../../../rich-text.js").RichText | null;
    private _updateHighlightTokens;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor abortController: AbortController;
    accessor latexSignal: Signal<string>;
    accessor std: BlockStdScope;
}
declare global {
    interface HTMLElementTagNameMap {
        'latex-editor-menu': LatexEditorMenu;
    }
}
export {};
//# sourceMappingURL=latex-editor-menu.d.ts.map