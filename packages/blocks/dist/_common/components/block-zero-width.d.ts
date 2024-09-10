import type { BlockComponent } from '@blocksuite/block-std';
import { LitElement } from 'lit';
export declare class BlockZeroWidth extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    handleClick(e: MouseEvent): void;
    render(): import("lit").TemplateResult<1>;
    accessor block: BlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'block-zero-width': BlockZeroWidth;
    }
}
//# sourceMappingURL=block-zero-width.d.ts.map