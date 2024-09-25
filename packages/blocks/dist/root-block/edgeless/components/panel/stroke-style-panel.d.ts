import { StrokeStyle } from '@lumensuite/affine-model';
import { LitElement } from 'lit';
import type { ColorEvent } from './color-panel.js';
import './color-panel.js';
import { type LineStyleEvent } from './line-styles-panel.js';
declare const StrokeStylePanel_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class StrokeStylePanel extends StrokeStylePanel_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor hollowCircle: boolean | undefined;
    accessor setStrokeColor: (e: ColorEvent) => void;
    accessor setStrokeStyle: (e: LineStyleEvent) => void;
    accessor strokeColor: string;
    accessor strokeStyle: StrokeStyle;
    accessor strokeWidth: number;
}
declare global {
    interface HTMLElementTagNameMap {
        'stroke-style-panel': StrokeStylePanel;
    }
}
export {};
//# sourceMappingURL=stroke-style-panel.d.ts.map