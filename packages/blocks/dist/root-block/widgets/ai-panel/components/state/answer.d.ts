import type { EditorHost } from '@lumensuite/block-std';
import { LitElement } from 'lit';
import type { AIPanelAnswerConfig, CopyConfig } from '../../type.js';
import '../finish-tip.js';
declare const AIPanelAnswer_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class AIPanelAnswer extends AIPanelAnswer_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor config: AIPanelAnswerConfig;
    accessor copy: CopyConfig | undefined;
    accessor finish: boolean;
    accessor host: EditorHost;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-answer': AIPanelAnswer;
    }
}
export {};
//# sourceMappingURL=answer.d.ts.map