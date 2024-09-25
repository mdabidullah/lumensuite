import type { PointerEventState } from '@lumensuite/block-std';
import type { SelectionArea } from '../services/tools-manager.js';
import type { EdgelessTool } from '../types.js';
import { type NoteChildrenFlavour } from '../../../_common/utils/index.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type NoteTool = {
    type: 'affine:note';
    childFlavour: NoteChildrenFlavour;
    childType: string | null;
    tip: string;
};
export declare class NoteToolController extends EdgelessToolController<NoteTool> {
    private _draggingNoteOverlay;
    private _noteOverlay;
    protected _draggingArea: SelectionArea | null;
    readonly tool: NoteTool;
    private _clearOverlay;
    private _disposeOverlay;
    private _hideOverlay;
    private _resize;
    private _updateOverlayPosition;
    afterModeSwitch(newTool: EdgelessTool): void;
    beforeModeSwitch(): void;
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
    onPressSpaceBar(_pressed: boolean): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            note: NoteToolController;
        }
    }
}
//# sourceMappingURL=note-tool.d.ts.map