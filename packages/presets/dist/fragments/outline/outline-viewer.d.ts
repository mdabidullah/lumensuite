import { LitElement, nothing } from 'lit';
import type { AffineEditorContainer } from '../../editors/editor-container.js';
export declare const AFFINE_OUTLINE_VIEWER = "affine-outline-viewer";
declare const OutlineViewer_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class OutlineViewer extends OutlineViewer_base {
    static styles: import("lit").CSSResult;
    private _activeHeadingId$;
    private _highlightMaskDisposable;
    private _lockActiveHeadingId;
    private _scrollPanel;
    private _scrollToBlock;
    private _toggleOutlinePanel;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    private accessor _activeItem;
    private accessor _showViewer;
    accessor editor: AffineEditorContainer;
    accessor toggleOutlinePanel: (() => void) | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_VIEWER]: OutlineViewer;
    }
}
export {};
//# sourceMappingURL=outline-viewer.d.ts.map