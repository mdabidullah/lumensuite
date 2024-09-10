import type { FrameBlockModel } from '@blocksuite/affine-model';
import { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
declare const EdgelessFrameOrderMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameOrderMenu extends EdgelessFrameOrderMenu_base {
    static styles: import("lit").CSSResult;
    private _bindEvent;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _clone;
    private accessor _container;
    private accessor _curIndex;
    private accessor _indicatorLine;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor embed: boolean;
    accessor frames: FrameBlockModel[];
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frame-order-menu': EdgelessFrameOrderMenu;
    }
}
export {};
//# sourceMappingURL=frame-order-menu.d.ts.map