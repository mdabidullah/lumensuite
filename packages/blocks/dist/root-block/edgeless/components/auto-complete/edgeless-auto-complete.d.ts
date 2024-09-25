import type { NoteBlockModel } from '@lumensuite/affine-model';
import { ShapeElementModel } from '@lumensuite/affine-model';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { SelectedRect } from '../rects/edgeless-selected-rect.js';
declare const EdgelessAutoComplete_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessAutoComplete extends EdgelessAutoComplete_base {
    static styles: import("lit").CSSResult;
    private _autoCompleteOverlay;
    private _onPointerDown;
    private _pathGenerator;
    private _timer;
    get canShowAutoComplete(): boolean;
    private _addConnector;
    private _addMindmapNode;
    private _computeLine;
    private _computeNextBound;
    private _createAutoCompletePanel;
    private _generateElementOnClick;
    private _getConnectedElements;
    private _getMindmapButtons;
    private _renderArrow;
    private _renderMindMapButtons;
    private _showNextShape;
    connectedCallback(): void;
    firstUpdated(): void;
    removeOverlay(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    private accessor _isHover;
    private accessor _isMoving;
    accessor current: ShapeElementModel | NoteBlockModel;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor selectedRect: SelectedRect;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-auto-complete': EdgelessAutoComplete;
    }
}
export {};
//# sourceMappingURL=edgeless-auto-complete.d.ts.map