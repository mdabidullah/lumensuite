import type { DatabaseBlockModel } from '@blocksuite/affine-model';
import type { DetailSlotProps, SingleView } from '@blocksuite/data-view';
import { type EditorHost, ShadowlessElement } from '@blocksuite/block-std';
declare const NoteRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class NoteRenderer extends NoteRenderer_base implements DetailSlotProps {
    static styles: import("lit").CSSResult;
    get databaseBlock(): DatabaseBlockModel;
    addNote(): void;
    connectedCallback(): void;
    protected render(): unknown;
    renderNote(): import("lit").TemplateResult<1> | undefined;
    accessor host: EditorHost;
    accessor model: DatabaseBlockModel;
    accessor rowId: string;
    accessor subHost: EditorHost;
    accessor view: SingleView;
}
export {};
//# sourceMappingURL=note-renderer.d.ts.map