import { LitElement } from 'lit';
import type { NoteTool } from '../../../tools/note-tool.js';
import type { EdgelessTool } from '../../../types.js';
import '../../buttons/tool-icon-button.js';
import './note-menu.js';
declare const EdgelessNoteToolButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessNoteToolButton extends EdgelessNoteToolButton_base {
    static styles: import("lit").CSSResult;
    private _noteMenu;
    private _states;
    type: EdgelessTool['type'];
    private _disposeMenu;
    private _toggleNoteMenu;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor childFlavour: NoteTool['childFlavour'];
    accessor childType: string;
    accessor tip: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-note-tool-button': EdgelessNoteToolButton;
    }
}
export {};
//# sourceMappingURL=note-tool-button.d.ts.map