import type { EditorHost } from '@lumensuite/block-std';
import { LitElement } from 'lit';
import type { AIPanelErrorConfig, CopyConfig } from '../../type.js';
import '../finish-tip.js';
declare const AIPanelError_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class AIPanelError extends AIPanelError_base {
    static styles: import("lit").CSSResult;
    private _getResponseGroup;
    render(): import("lit").TemplateResult<1>;
    accessor config: AIPanelErrorConfig;
    accessor copy: CopyConfig | undefined;
    accessor host: EditorHost;
    accessor withAnswer: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-error': AIPanelError;
    }
}
export {};
//# sourceMappingURL=error.d.ts.map