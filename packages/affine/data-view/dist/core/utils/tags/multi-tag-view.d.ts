import { ShadowlessElement } from '@lumensuite/block-std';
import type { SelectTag } from './multi-tag-select.js';
declare const MultiTagView_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class MultiTagView extends MultiTagView_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult;
    accessor options: SelectTag[];
    accessor selectContainer: HTMLElement;
    accessor value: string[];
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-multi-tag-view': MultiTagView;
    }
}
export {};
//# sourceMappingURL=multi-tag-view.d.ts.map