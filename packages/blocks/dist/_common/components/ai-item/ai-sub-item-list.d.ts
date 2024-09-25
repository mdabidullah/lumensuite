import { EditorHost } from '@lumensuite/block-std';
import { LitElement, nothing } from 'lit';
import type { AIItemConfig } from './types.js';
declare const AISubItemList_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class AISubItemList extends AISubItemList_base {
    static styles: import("lit").CSSResult;
    private _handleClick;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor abortController: AbortController;
    accessor host: EditorHost;
    accessor item: AIItemConfig;
    accessor onClick: (() => void) | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-sub-item-list': AISubItemList;
    }
}
export {};
//# sourceMappingURL=ai-sub-item-list.d.ts.map