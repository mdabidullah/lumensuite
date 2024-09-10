import type { PointerEventState } from '@blocksuite/block-std';
import type { EdgelessTool } from '../types.js';
import { LassoMode } from '../../../_common/types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type LassoTool = {
    type: 'lasso';
    mode: LassoMode;
};
export declare class LassoToolController extends EdgelessToolController<LassoTool> {
    private _currentSelectionState;
    private _isSelecting;
    private _lassoPoints;
    private _lastPoint;
    private _loop;
    private _overlay;
    private _raf;
    readonly tool: LassoTool;
    get isSelecting(): boolean;
    get selection(): import("../services/selection-manager.js").EdgelessSelectionManager;
    private _clearLastSelection;
    private _getElementsInsideLasso;
    private _getSelectionMode;
    private _reset;
    private _setSelectionState;
    private _updateSelection;
    private isInsideLassoSelection;
    private toModelCoord;
    abort(): void;
    afterModeSwitch(newTool?: EdgelessTool): void;
    beforeModeSwitch(edgelessTool?: EdgelessTool): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(): void;
    onContainerPointerDown(e: PointerEventState): void;
    onContainerTripleClick(): void;
    onPressShiftKey(): void;
    onPressSpaceBar(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            lasso: LassoToolController;
        }
    }
}
//# sourceMappingURL=lasso-tool.d.ts.map