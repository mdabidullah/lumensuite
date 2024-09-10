import { type BlockStdScope, ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert, type InlineEditor } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../../../../extension/index.js';
import './latex-editor-menu.js';
import './latex-editor-unit.js';
declare const AffineLatexNode_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineLatexNode extends AffineLatexNode_base {
    static styles: import("lit").CSSResult;
    private _editorAbortController;
    readonly latex$: import("@preact/signals-core").Signal<string>;
    get deltaLatex(): string;
    get latexContainer(): HTMLElement | null;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    toggleEditor(): void;
    accessor delta: DeltaInsert<AffineTextAttributes>;
    accessor editor: InlineEditor<AffineTextAttributes>;
    accessor endOffset: number;
    accessor selected: boolean;
    accessor startOffset: number;
    accessor std: BlockStdScope;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-latex-node': AffineLatexNode;
    }
}
export {};
//# sourceMappingURL=latex-node.d.ts.map