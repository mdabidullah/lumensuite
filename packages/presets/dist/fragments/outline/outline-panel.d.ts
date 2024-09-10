import { LitElement, type PropertyValues } from 'lit';
import type { AffineEditorContainer } from '../../editors/editor-container.js';
import './body/outline-notice.js';
import './body/outline-panel-body.js';
import './header/outline-panel-header.js';
export declare const AFFINE_OUTLINE_PANEL = "affine-outline-panel";
declare const OutlinePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlinePanel extends OutlinePanel_base {
    static styles: import("lit").CSSResult;
    private _editorDisposables;
    private _setNoticeVisibility;
    private _settings;
    private _toggleNotesSorting;
    private _toggleShowPreviewIcon;
    get doc(): import("@blocksuite/store").Doc;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    get host(): import("@blocksuite/block-std").EditorHost | null;
    get mode(): import("@blocksuite/affine-model").DocMode;
    private _clearEditorDisposables;
    private _loadSettingsFromLocalStorage;
    private _saveSettingsToLocalStorage;
    private _setEditorDisposables;
    private _updateAndSaveSettings;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1> | undefined;
    updated(_changedProperties: PropertyValues): void;
    private accessor _enableNotesSorting;
    private accessor _noticeVisible;
    private accessor _showPreviewIcon;
    accessor editor: AffineEditorContainer;
    accessor fitPadding: number[];
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_PANEL]: OutlinePanel;
    }
}
export {};
//# sourceMappingURL=outline-panel.d.ts.map