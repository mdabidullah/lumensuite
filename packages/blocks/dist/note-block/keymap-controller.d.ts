import type { BlockComponent } from '@blocksuite/block-std';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class KeymapController implements ReactiveController {
    private _anchorSel;
    private _bindMoveBlockHotKey;
    private _bindQuickActionHotKey;
    private _bindTextConversionHotKey;
    private _focusBlock;
    private _onArrowDown;
    private _onArrowUp;
    private _onBlockShiftDown;
    private _onBlockShiftUp;
    private _onEnter;
    private _onEsc;
    private _onSelectAll;
    private _onShiftArrowDown;
    private _onShiftArrowUp;
    private _reset;
    bind: () => void;
    host: ReactiveControllerHost & BlockComponent;
    private get _std();
    constructor(host: ReactiveControllerHost & BlockComponent);
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=keymap-controller.d.ts.map