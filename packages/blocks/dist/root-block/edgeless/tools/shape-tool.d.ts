import type { ShapeName } from '@lumensuite/affine-model';
import type { PointerEventState } from '@lumensuite/block-std';
import type { SelectionArea } from '../services/tools-manager.js';
import type { EdgelessTool } from '../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type ShapeTool = {
    type: 'shape';
    shapeName: ShapeName;
};
export declare class ShapeToolController extends EdgelessToolController<ShapeTool> {
    private _disableOverlay;
    private _draggingElement;
    private _draggingElementId;
    private _moveWithSpaceShapePosTemp;
    private _moveWithSpaceStartPos;
    private _shapeOverlay;
    protected _draggingArea: SelectionArea | null;
    readonly tool: ShapeTool;
    private _addNewShape;
    private _hideOverlay;
    private _move;
    private _resize;
    private _updateOverlayPosition;
    afterModeSwitch(newTool: EdgelessTool): void;
    beforeModeSwitch(): void;
    clearOverlay(): void;
    createOverlay(): void;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(e: PointerEventState): void;
    onContainerPointerDown(): void;
    onContainerTripleClick(): void;
    onPressShiftKey(pressed: boolean): void;
    onPressSpaceBar(pressed: boolean): void;
    setDisableOverlay(disable: boolean): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            shape: ShapeToolController;
        }
    }
}
//# sourceMappingURL=shape-tool.d.ts.map