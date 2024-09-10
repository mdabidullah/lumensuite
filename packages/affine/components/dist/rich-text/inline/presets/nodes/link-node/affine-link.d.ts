import type { BlockComponent } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../../../../extension/index.js';
export declare class AffineLink extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    private _whenHover;
    get block(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null | undefined;
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<AffineTextAttributes> | undefined;
    get link(): string;
    get selfInlineRange(): import("@blocksuite/inline").InlineRange | null | undefined;
    get std(): import("@blocksuite/block-std").BlockStdScope | undefined;
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