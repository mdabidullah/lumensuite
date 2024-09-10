import { LitElement } from 'lit';
import type { NoteTool } from '../../../tools/note-tool.js';
import './note-menu.js';
declare const EdgelessNoteSeniorButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessNoteSeniorButton extends EdgelessNoteSeniorButton_base {
    static styles: import("lit").CSSResult;
    private _noteBg$;
    private _states;
    enableActiveBackground: boolean;
    type: "affine:note";
    private _toggleNoteMenu;
    render(): import("lit").TemplateResult<1>;
    accessor childFlavour: NoteTool['childFlavour'];
    accessor childType: string;
    accessor tip: string;
}
export {};
//# sourceMappingURL=note-senior-button.d.ts.map