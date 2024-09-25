import { type EditorHost } from '@lumensuite/block-std';
import { LitElement } from 'lit';
import type { AIItemGroupConfig } from '../../../_common/components/ai-item/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessCopilotToolbarEntry_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessCopilotToolbarEntry extends EdgelessCopilotToolbarEntry_base {
    static styles: import("lit").CSSResult;
    private _showCopilotPanel;
    render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor groups: AIItemGroupConfig[];
    accessor host: EditorHost;
}
export {};
//# sourceMappingURL=toolbar-entry.d.ts.map