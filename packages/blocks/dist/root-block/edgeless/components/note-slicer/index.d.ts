import { LitElement, nothing, type PropertyValues } from 'lit';
import type { EdgelessRootBlockComponent, NoteBlockComponent } from '../../../../index.js';
declare const NoteSlicer_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class NoteSlicer extends NoteSlicer_base {
    static styles: import("lit").CSSResult;
    private _divingLinePositions;
    private _hidden;
    private _noteBlockIds;
    private _noteDisposables;
    get _editorHost(): import("@blocksuite/block-std").EditorHost;
    get _noteBlock(): NoteBlockComponent | null;
    get _selection(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get _viewportOffset(): {
        left: number;
        top: number;
    };
    get _zoom(): number;
    get selectedRectEle(): import("../rects/edgeless-selected-rect.js").EdgelessSelectedRect | null;
    private _sliceNote;
    private _updateActiveSlicerIndex;
    private _updateDivingLineAndBlockIds;
    private _updateSlicedNote;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    protected updated(_changedProperties: PropertyValues): void;
    private accessor _activeSlicerIndex;
    private accessor _anchorNote;
    private accessor _enableNoteSlicer;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'note-slicer': NoteSlicer;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map