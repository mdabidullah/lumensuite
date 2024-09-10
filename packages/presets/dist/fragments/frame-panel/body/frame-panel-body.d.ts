import type { Doc } from '@blocksuite/store';
import { type EditorHost, ShadowlessElement } from '@blocksuite/block-std';
import { type EdgelessRootBlockComponent, type FrameBlockModel } from '@blocksuite/blocks';
import { type PropertyValues } from 'lit';
import '../card/frame-card.js';
export declare const AFFINE_FRAME_PANEL_BODY = "affine-frame-panel-body";
declare const FramePanelBody_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramePanelBody extends FramePanelBody_base {
    static styles: import("lit").CSSResult;
    private _clearDocDisposables;
    /**
     * click at blank area to clear selection
     */
    private _clickBlank;
    private _docDisposables;
    private _frameElementHeight;
    private _frameItems;
    private _indicatorTranslateY;
    private _lastEdgelessRootId;
    private _selectFrame;
    private _updateFrameItems;
    get frames(): FrameBlockModel[];
    get viewportPadding(): [number, number, number, number];
    private _drag;
    private _fitToElement;
    private _renderEmptyContent;
    private _renderFrameList;
    private _reorderFrames;
    private _setDocDisposables;
    private _updateFrames;
    compare(a: FrameBlockModel, b: FrameBlockModel): 1 | 0 | -1;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    private accessor _dragging;
    private accessor _selected;
    accessor doc: Doc;
    accessor domHost: Document | HTMLElement;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor editorHost: EditorHost;
    accessor fitPadding: number[];
    accessor frameListContainer: HTMLElement;
    accessor insertIndex: number | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAME_PANEL_BODY]: FramePanelBody;
    }
}
export {};
//# sourceMappingURL=frame-panel-body.d.ts.map