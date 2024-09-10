import type { FrameBlockModel } from '@blocksuite/blocks';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type PropertyValues } from 'lit';
export declare const AFFINE_FRAME_CARD_TITLE = "affine-frame-card-title";
declare const FrameCardTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FrameCardTitle extends FrameCardTitle_base {
    static styles: import("lit").CSSResult;
    private _clearTitleDisposables;
    private _mountTitleEditor;
    private _titleDisposables;
    private _updateElement;
    private _setFrameDisposables;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    accessor cardIndex: number;
    accessor frame: FrameBlockModel;
    accessor titleContainer: HTMLElement;
    accessor titleContentElement: HTMLElement;
    accessor titleIndexElement: HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAME_CARD_TITLE]: FrameCardTitle;
    }
}
export {};
//# sourceMappingURL=frame-card-title.d.ts.map