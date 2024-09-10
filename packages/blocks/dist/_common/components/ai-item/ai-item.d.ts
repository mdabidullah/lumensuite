import { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AIItemConfig } from './types.js';
import './ai-sub-item-list.js';
declare const AIItem_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIItem extends AIItem_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor host: EditorHost;
    accessor item: AIItemConfig;
    accessor menuItem: HTMLDivElement | null;
    accessor onClick: (() => void) | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-item': AIItem;
    }
}
export {};
//# sourceMappingURL=ai-item.d.ts.map