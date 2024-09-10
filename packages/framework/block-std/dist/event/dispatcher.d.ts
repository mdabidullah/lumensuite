import { DisposableGroup } from '@blocksuite/global/utils';
import { LifeCycleWatcher } from '../extension/index.js';
import { type UIEventHandler, UIEventStateContext } from './base.js';
declare const eventNames: readonly ["click", "doubleClick", "tripleClick", "pointerDown", "pointerMove", "pointerUp", "pointerOut", "dragStart", "dragMove", "dragEnd", "pinch", "pan", "keyDown", "keyUp", "selectionChange", "compositionStart", "compositionUpdate", "compositionEnd", "cut", "copy", "paste", "beforeInput", "blur", "focus", "drop", "contextMenu", "wheel"];
export type EventName = (typeof eventNames)[number];
export type EventOptions = {
    flavour?: string;
    blockId?: string;
};
export type EventHandlerRunner = {
    fn: UIEventHandler;
    flavour?: string;
    blockId?: string;
};
export declare class UIEventDispatcher extends LifeCycleWatcher {
    private static _activeDispatcher;
    static readonly key = "UIEventDispatcher";
    private _active;
    private _clipboardControl;
    private _handlersMap;
    private _keyboardControl;
    private _pointerControl;
    private _rangeControl;
    bindHotkey: (keymap: Record<string, UIEventHandler>, options?: EventOptions | undefined) => () => void;
    disposables: DisposableGroup;
    private get _currentSelections();
    get active(): boolean;
    get host(): import("../view/index.js").EditorHost;
    constructor(std: BlockSuite.Std);
    private _bindEvents;
    private _buildEventScopeBySelection;
    private _buildEventScopeByTarget;
    private _getDeepActiveElement;
    private _getEventScope;
    private _isActiveElementOutsideHost;
    private _isEditableElementActive;
    private _setActive;
    add(name: EventName, handler: UIEventHandler, options?: EventOptions): () => void;
    buildEventScope(name: EventName, blocks: string[]): EventHandlerRunner[] | undefined;
    mounted(): void;
    run(name: EventName, context: UIEventStateContext, runners?: EventHandlerRunner[]): void;
    unmounted(): void;
}
export {};
//# sourceMappingURL=dispatcher.d.ts.map