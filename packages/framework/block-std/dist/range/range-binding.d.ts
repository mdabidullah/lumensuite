import type { RangeManager } from './range-manager.js';
/**
 * Two-way binding between native range and text selection
 */
export declare class RangeBinding {
    manager: RangeManager;
    private _compositionStartCallback;
    private _computePath;
    private _onBeforeInput;
    private _onCompositionEnd;
    private _onCompositionStart;
    private _onNativeSelectionChanged;
    private _onStdSelectionChanged;
    private _prevTextSelection;
    isComposing: boolean;
    get host(): import("../view/index.js").EditorHost;
    get rangeManager(): RangeManager;
    get selectionManager(): import("../selection/manager.js").SelectionManager;
    constructor(manager: RangeManager);
    private _isBlockComponent;
}
//# sourceMappingURL=range-binding.d.ts.map