import { LitElement, nothing } from 'lit';
import type { DeltaInsert } from '../types.js';
import type { BaseTextAttributes } from '../utils/base-attributes.js';
export declare class VElement<T extends BaseTextAttributes = BaseTextAttributes> extends LitElement {
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor delta: DeltaInsert<T>;
    accessor endOffset: number;
    accessor lineIndex: number;
    accessor selected: boolean;
    accessor startOffset: number;
}
declare global {
    interface HTMLElementTagNameMap {
        'v-element': VElement;
    }
}
//# sourceMappingURL=v-element.d.ts.map