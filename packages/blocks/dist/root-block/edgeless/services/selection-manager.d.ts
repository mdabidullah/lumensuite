import type { SurfaceBlockModel } from '@blocksuite/affine-block-surface';
import type { CursorSelection, SurfaceSelection } from '@blocksuite/block-std';
import { MindmapElementModel } from '@blocksuite/affine-block-surface';
import { GroupElementModel } from '@blocksuite/affine-model';
import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import type { EdgelessRootService } from '../edgeless-root-service.js';
export interface EdgelessSelectionState {
    /**
     * The selected elements. Could be blocks or canvas elements
     */
    elements: string[];
    /**
     * Indicate whether the selected element is in editing mode
     */
    editing: boolean;
    /**
     *  Cannot be operated, only box is displayed
     */
    inoperable?: boolean;
}
export interface CursorSelectionState {
    x: number;
    y: number;
}
export declare class EdgelessSelectionManager {
    private _activeGroup;
    private _cursorSelection;
    private _lastSurfaceSelections;
    private _remoteCursorSelectionMap;
    private _remoteSelectedSet;
    private _remoteSurfaceSelectionsMap;
    private _selectedSet;
    private _surfaceSelections;
    disposable: DisposableGroup;
    service: EdgelessRootService;
    readonly slots: {
        updated: Slot<SurfaceSelection[]>;
        remoteUpdated: Slot<void>;
        cursorUpdated: Slot<CursorSelection>;
        remoteCursorUpdated: Slot<void>;
    };
    surfaceModel: SurfaceBlockModel;
    get activeGroup(): GroupElementModel | MindmapElementModel | null;
    get cursorSelection(): CursorSelection | null;
    get editing(): boolean;
    get empty(): boolean;
    get firstElement(): import("@blocksuite/block-std/gfx").GfxModel;
    get inoperable(): boolean;
    get lastSurfaceSelections(): SurfaceSelection[];
    get remoteCursorSelectionMap(): Map<number, CursorSelection>;
    get remoteSelectedSet(): Set<string>;
    get remoteSurfaceSelectionsMap(): Map<number, SurfaceSelection[]>;
    get selectedBound(): import("@blocksuite/global/utils").Bound;
    get selectedElements(): import("@blocksuite/block-std/gfx").GfxModel[];
    get selectedIds(): string[];
    get selectedSet(): Set<string>;
    get stdSelectionManager(): import("@blocksuite/block-std").SelectionManager;
    get surfaceSelections(): SurfaceSelection[];
    constructor(service: EdgelessRootService);
    clear(): void;
    clearLast(): void;
    dispose(): void;
    equals(selection: SurfaceSelection[]): boolean;
    /**
     * check if the element is selected in local
     * @param element
     */
    has(element: string): boolean;
    /**
     * check if element is selected by remote peers
     * @param element
     */
    hasRemote(element: string): boolean;
    isEmpty(selections: SurfaceSelection[]): boolean;
    isInSelectedRect(viewX: number, viewY: number): boolean;
    mount(): void;
    set(selection: EdgelessSelectionState | SurfaceSelection[]): void;
    setCursor(cursor: CursorSelection | CursorSelectionState): void;
}
//# sourceMappingURL=selection-manager.d.ts.map