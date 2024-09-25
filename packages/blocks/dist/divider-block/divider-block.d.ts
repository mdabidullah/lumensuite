import type { DividerBlockModel } from '@lumensuite/affine-model';
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
export declare class DividerBlockComponent extends CaptionedBlockComponent<DividerBlockModel> {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
    accessor useZeroWidth: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-divider': DividerBlockComponent;
    }
}
//# sourceMappingURL=divider-block.d.ts.map