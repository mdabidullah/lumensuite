import type { EditorHost } from '@lumensuite/block-std';
import { LitElement } from 'lit';
import type { CopyConfig } from '../type.js';
declare const AIFinishTip_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class AIFinishTip extends AIFinishTip_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor copied: boolean;
    accessor copy: CopyConfig | undefined;
    accessor host: EditorHost;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-finish-tip': AIFinishTip;
    }
}
export {};
//# sourceMappingURL=finish-tip.d.ts.map