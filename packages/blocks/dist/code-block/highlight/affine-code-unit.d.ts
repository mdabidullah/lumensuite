import type { AffineTextAttributes } from '@lumensuite/affine-components/rich-text';
import { ShadowlessElement } from '@lumensuite/block-std';
import { type DeltaInsert } from '@lumensuite/inline';
export declare class AffineCodeUnit extends ShadowlessElement {
    get codeBlock(): import("../code-block.js").CodeBlockComponent | null;
    get vElement(): import("@lumensuite/inline").VElement<{
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
        'affine-code-unit': AffineCodeUnit;
    }
}
//# sourceMappingURL=affine-code-unit.d.ts.map