import type { EditorHost } from '@lumensuite/block-std';
import type { Doc } from '@lumensuite/store';
import { ShadowlessElement } from '@lumensuite/block-std';
import { type EdgelessRootBlockComponent, type FrameBlockModel } from '@lumensuite/blocks';
import { type PropertyValues } from 'lit';
import './frame-card-title.js';
export type ReorderEvent = CustomEvent<{
    currentNumber: number;
    targetNumber: number;
    realIndex: number;
}>;
export type SelectEvent = CustomEvent<{
    id: string;
    selected: boolean;
    index: number;
    multiselect: boolean;
}>;
export type DragEvent = CustomEvent<{
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
}>;
export type FitViewEvent = CustomEvent<{
    block: FrameBlockModel;
}>;
export declare const AFFINE_FRAME_CARD = "affine-frame-card";
declare const FrameCard_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class FrameCard extends FrameCard_base {
    static styles: import("lit").CSSResult;
    private _clearFrameDisposables;
    private _frameDisposables;
    private _updateElement;
    private _dispatchDragEvent;
    private _dispatchFitViewEvent;
    private _dispatchSelectEvent;
    private _DraggingCardNumber;
    private _setFrameDisposables;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    accessor cardIndex: number;
    accessor containerElement: HTMLElement;
    accessor doc: Doc;
    accessor draggingCardNumber: number | undefined;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor frame: FrameBlockModel;
    accessor frameIndex: string;
    accessor host: EditorHost;
    accessor pos: {
        x: number;
        y: number;
    };
    accessor stackOrder: number;
    accessor status: 'selected' | 'dragging' | 'placeholder' | 'none';
    accessor width: number | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAME_CARD]: FrameCard;
    }
}
export {};
//# sourceMappingURL=frame-card.d.ts.map