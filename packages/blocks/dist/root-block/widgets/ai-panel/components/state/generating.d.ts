import { LitElement } from 'lit';
import type { AIPanelGeneratingConfig } from '../../type.js';
import '../generating-placeholder.js';
declare const AIPanelGenerating_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIPanelGenerating extends AIPanelGenerating_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    updateLoadingProgress(progress: number): void;
    accessor config: AIPanelGeneratingConfig;
    accessor loadingProgress: number;
    accessor stopGenerating: () => void;
    accessor withAnswer: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-generating': AIPanelGenerating;
    }
}
export {};
//# sourceMappingURL=generating.d.ts.map