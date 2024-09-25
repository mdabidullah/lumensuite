import type { EditorHost } from '@lumensuite/block-std';
import { LitElement, nothing } from 'lit';
import type { AIItemGroupConfig } from '../../../_common/components/ai-item/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import '../../../_common/components/ai-item/ai-item-list.js';
declare const EdgelessCopilotPanel_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessCopilotPanel extends EdgelessCopilotPanel_base {
    static styles: import("lit").CSSResult;
    private _getChain;
    connectedCallback(): void;
    hide(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor entry: 'toolbar' | 'selection' | undefined;
    accessor groups: AIItemGroupConfig[];
    accessor host: EditorHost;
    accessor onClick: (() => void) | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-copilot-panel': EdgelessCopilotPanel;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map