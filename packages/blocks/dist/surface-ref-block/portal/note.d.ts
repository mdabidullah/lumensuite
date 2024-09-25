import type { CanvasRenderer } from '@lumensuite/affine-block-surface';
import type { NoteBlockModel } from '@lumensuite/affine-model';
import { type EditorHost } from '@lumensuite/block-std';
import { ShadowlessElement } from '@lumensuite/block-std';
import { type Query } from '@lumensuite/store';
import { nothing } from 'lit';
declare const SurfaceRefNotePortal_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class SurfaceRefNotePortal extends SurfaceRefNotePortal_base {
    static styles: import("lit").CSSResult;
    ancestors: Set<string>;
    query: Query | null;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult | typeof nothing;
    renderPreview(): EditorHost | typeof nothing;
    updated(): void;
    accessor host: EditorHost;
    accessor index: number;
    accessor model: NoteBlockModel;
    accessor renderer: CanvasRenderer;
}
declare global {
    interface HTMLElementTagNameMap {
        'surface-ref-note-portal': SurfaceRefNotePortal;
    }
}
export {};
//# sourceMappingURL=note.d.ts.map