import type { ConnectorElementModel, NoteBlockModel, ShapeElementModel } from '@blocksuite/affine-model';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import '../buttons/tool-icon-button.js';
declare const EdgelessAutoCompletePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessAutoCompletePanel extends EdgelessAutoCompletePanel_base {
    static styles: import("lit").CSSResult;
    private _overlay;
    constructor(position: [number, number], edgeless: EdgelessRootBlockComponent, currentSource: ShapeElementModel | NoteBlockModel, connector: ConnectorElementModel);
    private _addFrame;
    private _addNote;
    private _addShape;
    private _addText;
    private _autoComplete;
    private _connectorExist;
    private _generateTarget;
    private _getCurrentSourceInfo;
    private _getPanelPosition;
    private _getTargetXYWH;
    private _removeOverlay;
    private _showFrameOverlay;
    private _showNoteOverlay;
    private _showOverlay;
    private _showShapeOverlay;
    private _showTextOverlay;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor connector: ConnectorElementModel;
    accessor currentSource: ShapeElementModel | NoteBlockModel;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor position: [number, number];
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-auto-complete-panel': EdgelessAutoCompletePanel;
    }
}
export {};
//# sourceMappingURL=auto-complete-panel.d.ts.map