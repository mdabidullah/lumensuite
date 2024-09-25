import { ShadowlessElement } from '@lumensuite/block-std';
import { type PropertyValues } from 'lit';
import type { AffineEditorContainer } from '../../index.js';
import './body/frame-panel-body.js';
import './header/frame-panel-header.js';
export declare const AFFINE_FRAME_PANEL = "affine-frame-panel";
declare const FramePanel_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class FramePanel extends FramePanel_base {
    static styles: import("lit").CSSResult;
    private _editorDisposables;
    get doc(): import("@lumensuite/store").Doc;
    get edgeless(): import("@lumensuite/blocks").EdgelessRootBlockComponent | null;
    get host(): import("@lumensuite/block-std").EditorHost | null;
    private _clearEditorDisposables;
    private _setEditorDisposables;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    accessor editor: AffineEditorContainer;
    accessor fitPadding: number[];
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FRAME_PANEL]: FramePanel;
    }
}
export {};
//# sourceMappingURL=frame-panel.d.ts.map