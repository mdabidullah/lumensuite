import type { AffineAIPanelState } from '@blocksuite/blocks';
import { type EditorHost } from '@blocksuite/block-std';
import { LitElement, nothing, type PropertyValues } from 'lit';
export type TextRendererOptions = {
    maxHeight?: number;
    customHeading?: boolean;
};
declare const TextRenderer_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TextRenderer extends TextRenderer_base {
    static styles: import("lit").CSSResult;
    private _answers;
    private _clearTimer;
    private _doc;
    private readonly _query;
    private _timer?;
    private _updateDoc;
    private _onWheel;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    updated(changedProperties: PropertyValues): void;
    private accessor _container;
    accessor answer: string;
    accessor host: EditorHost;
    accessor options: TextRendererOptions;
    accessor state: AffineAIPanelState | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'text-renderer': TextRenderer;
    }
}
export {};
//# sourceMappingURL=text-renderer.d.ts.map