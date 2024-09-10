import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessNavigatorBlackBackground_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessNavigatorBlackBackground extends EdgelessNavigatorBlackBackground_base {
    static styles: import("lit").CSSResult;
    private _blackBackground;
    private _tryLoadBlackBackground;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor edgeless: EdgelessRootBlockComponent;
    private accessor frame;
    private accessor show;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-navigator-black-background': EdgelessNavigatorBlackBackground;
    }
}
export {};
//# sourceMappingURL=edgeless-navigator-black-background.d.ts.map