import { LitElement } from 'lit';
import '../buttons/tool-icon-button.js';
declare const EdgelessNoteShadowPanel_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessNoteShadowPanel extends EdgelessNoteShadowPanel_base {
    static styles: import("lit").CSSResult;
    render(): unknown;
    accessor background: string;
    accessor onSelect: (value: string) => void;
    accessor value: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-note-shadow-panel': EdgelessNoteShadowPanel;
    }
}
export {};
//# sourceMappingURL=note-shadow-panel.d.ts.map