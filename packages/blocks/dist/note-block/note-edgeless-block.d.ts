import type { NoteBlockModel } from '@lumensuite/affine-model';
import type { EditorHost } from '@lumensuite/block-std';
import { ShadowlessElement } from '@lumensuite/block-std';
import { nothing } from 'lit';
import type { EdgelessRootService } from '../root-block/index.js';
import { NoteBlockComponent } from './note-block.js';
declare const EdgelessNoteMask_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessNoteMask extends EdgelessNoteMask_base {
    protected firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    accessor display: boolean;
    accessor editing: boolean;
    accessor host: EditorHost;
    accessor model: NoteBlockModel;
    accessor zoom: number;
}
declare const EdgelessNoteBlockComponent_base: typeof NoteBlockComponent & (new (...args: any[]) => import("@lumensuite/block-std").GfxBlockComponent);
export declare class EdgelessNoteBlockComponent extends EdgelessNoteBlockComponent_base {
    static styles: import("lit").CSSResult;
    private get _isShowCollapsedContent();
    get _zoom(): number;
    get rootService(): EdgelessRootService;
    private _collapsedContent;
    private _handleClickAtBackground;
    private _hovered;
    private _leaved;
    private _setCollapse;
    private _tryAddParagraph;
    connectedCallback(): void;
    firstUpdated(): void;
    getRenderingRect(): {
        x: number;
        y: number;
        w: number;
        h: string | number;
        zIndex: string;
    };
    renderGfxBlock(): import("lit").TemplateResult<1> | typeof nothing;
    private accessor _editing;
    private accessor _isHover;
    private accessor _isResizing;
    private accessor _isSelected;
    private accessor _noteFullHeight;
    private accessor _notePageContent;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-note': EdgelessNoteBlockComponent;
    }
}
export {};
//# sourceMappingURL=note-edgeless-block.d.ts.map