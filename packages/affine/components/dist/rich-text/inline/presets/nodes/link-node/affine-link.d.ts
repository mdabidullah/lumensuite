import type { BlockComponent } from '@lumensuite/block-std';
import { ShadowlessElement } from '@lumensuite/block-std';
import { type DeltaInsert } from '@lumensuite/inline';
import type { AffineTextAttributes } from '../../../../extension/index.js';
export declare class AffineLink extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    private _whenHover;
    get block(): BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null | undefined;
    get inlineEditor(): import("@lumensuite/inline").InlineEditor<AffineTextAttributes> | undefined;
    get link(): string;
    get selfInlineRange(): import("@lumensuite/inline").InlineRange | null | undefined;
    get std(): import("@lumensuite/block-std").BlockStdScope | undefined;
    private _onMouseUp;
    render(): import("lit").TemplateResult<1>;
    accessor delta: DeltaInsert<AffineTextAttributes>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-link': AffineLink;
    }
}
//# sourceMappingURL=affine-link.d.ts.map