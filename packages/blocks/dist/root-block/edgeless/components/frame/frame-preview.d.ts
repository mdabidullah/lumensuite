import type { FrameBlockModel } from '@lumensuite/affine-model';
import { type EditorHost, ShadowlessElement } from '@lumensuite/block-std';
import { type Doc } from '@lumensuite/store';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const FramePreview_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class FramePreview extends FramePreview_base {
    static styles: import("lit").CSSResult;
    private _clearFrameDisposables;
    private _docFilter;
    private _frameDisposables;
    private _getViewportWH;
    private _previewDoc;
    private _previewSpec;
    private _initPreviewDoc;
    private _initSpec;
    private _refreshViewport;
    private _renderSurfaceContent;
    private _setFrameDisposables;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    willUpdate(_changedProperties: Map<PropertyKey, unknown>): void;
    accessor doc: Doc;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor fillScreen: boolean;
    accessor frame: FrameBlockModel;
    accessor host: EditorHost;
    accessor previewEditor: EditorHost | null;
    accessor surfaceHeight: number;
    accessor surfaceWidth: number;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-preview': FramePreview;
    }
}
export {};
//# sourceMappingURL=frame-preview.d.ts.map