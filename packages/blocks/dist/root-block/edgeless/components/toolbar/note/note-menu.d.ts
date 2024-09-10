import { LitElement } from 'lit';
import type { NoteTool } from '../../../tools/note-tool.js';
import type { EdgelessTool } from '../../../types.js';
import { type NoteChildrenFlavour } from '../../../../../_common/utils/index.js';
import '../../buttons/tool-icon-button.js';
import '../common/slide-menu.js';
declare const EdgelessNoteMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessNoteMenu extends EdgelessNoteMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    private _addImages;
    private _onHandleLinkButtonClick;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _imageLoading;
    accessor childFlavour: NoteChildrenFlavour;
    accessor childType: string | null;
    accessor onChange: (props: Partial<{
        childFlavour: NoteTool['childFlavour'];
        childType: string | null;
        tip: string;
    }>) => void;
    accessor tip: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-note-menu': EdgelessNoteMenu;
    }
}
export {};
//# sourceMappingURL=note-menu.d.ts.map