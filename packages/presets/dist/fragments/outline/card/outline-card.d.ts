import type { Doc } from '@blocksuite/store';
import { type NoteBlockModel } from '@blocksuite/blocks';
import { LitElement, nothing } from 'lit';
import './outline-preview.js';
export declare const AFFINE_OUTLINE_NOTE_CARD = "affine-outline-note-card";
declare const OutlineNoteCard_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineNoteCard extends OutlineNoteCard_base {
    static styles: import("lit").CSSResult;
    private _displayModePopper;
    private _dispatchClickBlockEvent;
    private _dispatchDisplayModeChangeEvent;
    private _dispatchDragEvent;
    private _dispatchFitViewEvent;
    private _dispatchSelectEvent;
    private _getCurrentModeLabel;
    firstUpdated(): void;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    private accessor _displayModeButtonGroup;
    private accessor _displayModePanel;
    private accessor _showPopper;
    accessor activeHeadingId: string | null;
    accessor doc: Doc;
    accessor editorMode: 'page' | 'edgeless';
    accessor enableNotesSorting: boolean;
    accessor index: number;
    accessor invisible: boolean;
    accessor note: NoteBlockModel;
    accessor number: number;
    accessor showPreviewIcon: boolean;
    accessor status: 'selected' | 'placeholder' | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_OUTLINE_NOTE_CARD]: OutlineNoteCard;
    }
}
export {};
//# sourceMappingURL=outline-card.d.ts.map