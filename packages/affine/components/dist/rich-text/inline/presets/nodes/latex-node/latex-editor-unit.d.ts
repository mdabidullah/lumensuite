import type { AffineTextAttributes } from '@blocksuite/affine-components/rich-text';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
export declare class LatexEditorUnit extends ShadowlessElement {
    get latexMenu(): import("./latex-editor-menu.js").LatexEditorMenu | null;
    get vElement(): import("@blocksuite/inline").VElement<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }> | null;
    render(): import("lit").TemplateResult<1>;
    accessor delta: DeltaInsert<AffineTextAttributes>;
}
declare global {
    interface HTMLElementTagNameMap {
        'latex-editor-unit': LatexEditorUnit;
    }
}
//# sourceMappingURL=latex-editor-unit.d.ts.map