import type { PointerEventState } from '@blocksuite/block-std';
import type { GfxBlockModel } from '../block-model.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
import type { EdgelessRootService } from '../edgeless-root-service.js';
import type { SelectionArea } from '../services/tools-manager.js';
import type { EdgelessTool } from '../types.js';
export declare abstract class EdgelessToolController<Tool extends EdgelessTool = EdgelessTool> {
    protected _draggingArea: SelectionArea | null;
    protected _edgeless: EdgelessRootBlockComponent;
    protected _service: EdgelessRootService;
    enableHover: boolean;
    abstract tool: Tool;
    protected get _blocks(): GfxBlockModel[];
    protected get _doc(): import("@blocksuite/store").Doc;
    protected get _surface(): import("@blocksuite/affine-block-surface").SurfaceBlockComponent;
    get draggingArea(): SelectionArea | null;
    constructor(service: EdgelessRootService);
    abstract afterModeSwitch(newMode: Tool): void;
    abstract beforeModeSwitch(prevMode: Tool): void;
    mount(edgeless: EdgelessRootBlockComponent): void;
    abstract onContainerClick(e: PointerEventState): void;
    abstract onContainerContextMenu(e: PointerEventState): void;
    abstract onContainerDblClick(e: PointerEventState): void;
    abstract onContainerDragEnd(e: PointerEventState): void;
    abstract onContainerDragMove(e: PointerEventState): void;
    abstract onContainerDragStart(e: PointerEventState): void;
    abstract onContainerMouseMove(e: PointerEventState): void;
    abstract onContainerMouseOut(e: PointerEventState): void;
    abstract onContainerPointerDown(e: PointerEventState): void;
    abstract onContainerTripleClick(e: PointerEventState): void;
    /**
     * @warning Check `!ev.repeat` before calling this function in KeyboardEvents where needed
     */
    abstract onPressShiftKey(pressed: boolean): void;
    /**
     * @warning Check `!ev.repeat` before calling this function in KeyboardEvents where needed
     */
    abstract onPressSpaceBar(pressed: boolean): void;
}
//# sourceMappingURL=edgeless-tool.d.ts.map