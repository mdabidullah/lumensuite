import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import { type StyleInfo, styleMap } from 'lit/directives/style-map.js';
import type { AffineTextAttributes } from '../../../extension/index.js';
export declare function affineTextStyles(props: AffineTextAttributes, override?: Readonly<StyleInfo>): ReturnType<typeof styleMap>;
export declare class AffineText extends ShadowlessElement {
    render(): import("lit").TemplateResult<1>;
    accessor delta: DeltaInsert<AffineTextAttributes>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-text': AffineText;
    }
}
//# sourceMappingURL=affine-text.d.ts.map