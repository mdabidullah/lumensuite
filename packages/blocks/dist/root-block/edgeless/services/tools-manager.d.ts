import type { SurfaceSelection } from '@blocksuite/block-std';
import type { Bound } from '@blocksuite/global/utils';
import { DisposableGroup } from '@blocksuite/global/utils';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
import type { EdgelessRootService } from '../edgeless-root-service.js';
import type { EdgelessToolController } from '../tools/index.js';
import type { EdgelessTool } from '../types.js';
import type { EdgelessSelectionState } from './selection-manager.js';
type Constructor<T = object> = new (...args: any[]) => T;
type AbstractClassConstructor<T = object> = Constructor<T> & {
    prototype: T;
};
export type EdgelessToolConstructor = AbstractClassConstructor<EdgelessToolController>;
export interface EdgelessHoverState {
    rect: Bound;
    content: BlockSuite.EdgelessModel;
}
export interface SelectionArea {
    start: DOMPoint;
    end: DOMPoint;
}
export declare class EdgelessToolsManager {
    private _add;
    private _container;
    private _controllers;
    private _dragging;
    private _edgelessTool;
    /** Latest mouse position in view coords */
    private _lastMousePos;
    private _mounted;
    private _onContainerClick;
    private _onContainerContextMenu;
    private _onContainerDblClick;
    private _onContainerDragEnd;
    private _onContainerDragMove;
    private _onContainerDragStart;
    private _onContainerPointerDown;
    private _onContainerPointerMove;
    private _onContainerPointerOut;
    private _onContainerPointerUp;
    private _onContainerTripleClick;
    private _service;
    private _shiftKey;
    private _spaceBar;
    protected readonly _disposables: DisposableGroup;
    setEdgelessTool: (edgelessTool: EdgelessTool, state?: EdgelessSelectionState | SurfaceSelection[], restoreToLastSelection?: boolean) => void;
    get container(): EdgelessRootBlockComponent;
    get controllers(): Record<string, EdgelessToolController<import("../tools/text-tool.js").TextTool | {
        type: "brush";
    } | import("../tools/connector-tool.js").ConnectorTool | {
        type: "copilot";
    } | {
        type: "eraser";
    } | {
        type: "frameNavigator";
        mode?: import("../../../index.js").NavigatorMode;
    } | {
        type: "frame";
    } | import("../tools/lasso-tool.js").LassoTool | {
        type: "mindmap";
    } | import("../tools/note-tool.js").NoteTool | {
        type: "pan";
        panning: boolean;
    } | import("../tools/shape-tool.js").ShapeTool | {
        type: "default";
    } | {
        type: "template";
    }>>;
    get currentController(): EdgelessToolController<import("../tools/text-tool.js").TextTool | {
        type: "brush";
    } | import("../tools/connector-tool.js").ConnectorTool | {
        type: "copilot";
    } | {
        type: "eraser";
    } | {
        type: "frameNavigator";
        mode?: import("../../../index.js").NavigatorMode;
    } | {
        type: "frame";
    } | import("../tools/lasso-tool.js").LassoTool | {
        type: "mindmap";
    } | import("../tools/note-tool.js").NoteTool | {
        type: "pan";
        panning: boolean;
    } | import("../tools/shape-tool.js").ShapeTool | {
        type: "default";
    } | {
        type: "template";
    }>;
    get dispatcher(): import("@blocksuite/block-std").UIEventDispatcher;
    get doc(): import("@blocksuite/store").Doc;
    get dragging(): boolean;
    get draggingArea(): DOMRect | null;
    get edgelessTool(): EdgelessTool;
    set edgelessTool(mode: EdgelessTool);
    get lastMousePos(): {
        x: number;
        y: number;
    };
    get selection(): import("./selection-manager.js").EdgelessSelectionManager;
    get service(): EdgelessRootService;
    set shiftKey(pressed: boolean);
    get shiftKey(): boolean;
    set spaceBar(pressed: boolean);
    get spaceBar(): boolean;
    constructor(service: EdgelessRootService);
    static create(service: EdgelessRootService, controllers: AbstractClassConstructor<EdgelessToolController>[]): EdgelessToolsManager;
    private _getToolFromLocalStorage;
    private _initMouseAndWheelEvents;
    private _isDocOnlyNote;
    private _updateLastMousePos;
    clear(): void;
    dispose(): void;
    getHoverState(): EdgelessHoverState | null;
    mount(container: EdgelessRootBlockComponent): void;
    register(Tool: EdgelessToolConstructor): void;
    switchToDefaultMode(state: EdgelessSelectionState): void;
}
export {};
//# sourceMappingURL=tools-manager.d.ts.map