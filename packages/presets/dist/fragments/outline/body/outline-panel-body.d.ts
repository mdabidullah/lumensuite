import type { EdgelessRootBlockComponent } from '@lumensuite/blocks';
import type { Doc } from '@lumensuite/store';
import { LitElement, type PropertyValues } from 'lit';
import type { AffineEditorContainer } from '../../../editors/editor-container.js';
import '../card/outline-card.js';
import './outline-notice.js';
export declare const AFFINE_OUTLINE_PANEL_BODY = "affine-outline-panel-body";
declare const OutlinePanelBody_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class OutlinePanelBody extends OutlinePanelBody_base {
    static styles: import("lit").CSSResult;
    private _activeHeadingId$;
    private _changedFlag;
    private _clearHighlightMask;
    private _docDisposables;
    private _indicatorTranslateY;
    private _lockActiveHeadingId;
    private _oldViewport?;
    get viewportPadding(): [number, number, number, number];
    private _clearDocDisposables;
    private _clickHandler;
    private _deSelectNoteInEdgelessMode;
    private _doubleClickHandler;
    private _drag;
    private _EmptyPanel;
    private _fitToElement;
    private _handleDisplayModeChange;
    private _isEdgelessMode;
    private _moveNotes;
    private _PanelList;
    private _renderDocTitle;
    private _scrollToBlock;
    private _selectNote;
    private _setDocDisposables;
    /**
     * There are two cases that we should render note list:
     * 1. There are headings in the notes
     * 2. No headings, but there are blocks in the notes and note sorting option is enabled
     */
    private _shouldRenderNoteList;
    private _updateNotes;
    private _updateNoticeVisibility;
    private _zoomToFit;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    willUpdate(_changedProperties: PropertyValues): void;
    private accessor _dragging;
    private accessor _edgelessOnlyNotes;
    private accessor _pageVisibleNotes;
    /**
     * store the id of selected notes
     */
    private accessor _selected;
    accessor doc: Doc;
    accessor domHost: Document | HTMLElement;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor editor: AffineEditorContainer;
    accessor enableNotesSorting: boolean;
    accessor fitPadding: number[];
    accessor insertIndex: number | undefined;
    accessor noticeVisible: boolean;
    accessor OutlinePanelContainer: HTMLElement;
    accessor panelListElement: HTMLElement;
    accessor renderEdgelessOnlyNotes: boolean;
    accessor setNoticeVisibility: (visibility: boolean) => void;
    accessor showPreviewIcon: boolean;
    accessor toggleNotesSorting: () => void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_PANEL_BODY]: OutlinePanelBody;
    }
}
export {};
//# sourceMappingURL=outline-panel-body.d.ts.map