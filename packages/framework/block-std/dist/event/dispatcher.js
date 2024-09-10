import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
import { DisposableGroup } from '@blocksuite/global/utils';
import { LifeCycleWatcher } from '../extension/index.js';
import { UIEventState, UIEventStateContext, } from './base.js';
import { ClipboardControl } from './control/clipboard.js';
import { KeyboardControl } from './control/keyboard.js';
import { PointerControl } from './control/pointer.js';
import { RangeControl } from './control/range.js';
import { EventScopeSourceType, EventSourceState } from './state/source.js';
import { toLowerCase } from './utils.js';
const bypassEventNames = [
    'beforeInput',
    'blur',
    'focus',
    'drop',
    'contextMenu',
    'wheel',
];
const eventNames = [
    'click',
    'doubleClick',
    'tripleClick',
    'pointerDown',
    'pointerMove',
    'pointerUp',
    'pointerOut',
    'dragStart',
    'dragMove',
    'dragEnd',
    'pinch',
    'pan',
    'keyDown',
    'keyUp',
    'selectionChange',
    'compositionStart',
    'compositionUpdate',
    'compositionEnd',
    'cut',
    'copy',
    'paste',
    ...bypassEventNames,
];
export class UIEventDispatcher extends LifeCycleWatcher {
    static { this._activeDispatcher = null; }
    static { this.key = 'UIEventDispatcher'; }
    get _currentSelections() {
        return this.std.selection.value;
    }
    get active() {
        return this._active;
    }
    get host() {
        return this.std.host;
    }
    constructor(std) {
        super(std);
        this._active = false;
        this._handlersMap = Object.fromEntries(eventNames.map((name) => [name, []]));
        this.bindHotkey = (...args) => this._keyboardControl.bindHotkey(...args);
        this.disposables = new DisposableGroup();
        this._pointerControl = new PointerControl(this);
        this._keyboardControl = new KeyboardControl(this);
        this._rangeControl = new RangeControl(this);
        this._clipboardControl = new ClipboardControl(this);
    }
    _bindEvents() {
        bypassEventNames.forEach(eventName => {
            this.disposables.addFromEvent(this.host, toLowerCase(eventName), event => {
                this.run(eventName, UIEventStateContext.from(new UIEventState(event), new EventSourceState({
                    event,
                    sourceType: EventScopeSourceType.Selection,
                })));
            }, eventName === 'wheel'
                ? {
                    passive: false,
                }
                : undefined);
        });
        this._pointerControl.listen();
        this._keyboardControl.listen();
        this._rangeControl.listen();
        this._clipboardControl.listen();
        let _dragging = false;
        this.disposables.addFromEvent(this.host, 'pointerdown', () => {
            _dragging = true;
            this._setActive(true);
        });
        this.disposables.addFromEvent(this.host, 'pointerup', () => {
            _dragging = false;
        });
        this.disposables.addFromEvent(this.host, 'click', () => {
            this._setActive(true);
        });
        this.disposables.addFromEvent(this.host, 'focusin', () => {
            this._setActive(true);
        });
        this.disposables.addFromEvent(this.host, 'focusout', e => {
            if (e.relatedTarget && !this.host.contains(e.relatedTarget)) {
                this._setActive(false);
            }
        });
        this.disposables.addFromEvent(this.host, 'blur', () => {
            if (_dragging) {
                return;
            }
            this._setActive(false);
        });
        this.disposables.addFromEvent(this.host, 'pointerenter', () => {
            if (this._isActiveElementOutsideHost()) {
                return;
            }
            this._setActive(true);
        });
        this.disposables.addFromEvent(this.host, 'pointerleave', () => {
            if ((document.activeElement &&
                this.host.contains(document.activeElement)) ||
                _dragging) {
                return;
            }
            this._setActive(false);
        });
    }
    _buildEventScopeBySelection(name) {
        const handlers = this._handlersMap[name];
        if (!handlers)
            return;
        const selections = this._currentSelections;
        const ids = selections.map(selection => selection.blockId);
        return this.buildEventScope(name, ids);
    }
    _buildEventScopeByTarget(name, target) {
        const handlers = this._handlersMap[name];
        if (!handlers)
            return;
        // TODO(mirone/#6534): find a better way to get block element from a node
        const el = target instanceof Element ? target : target.parentElement;
        const block = el?.closest('[data-block-id]');
        const blockId = block?.blockId;
        if (!blockId) {
            return this._buildEventScopeBySelection(name);
        }
        return this.buildEventScope(name, [blockId]);
    }
    _getDeepActiveElement() {
        let active = document.activeElement;
        while (active && active.shadowRoot && active.shadowRoot.activeElement) {
            active = active.shadowRoot.activeElement;
        }
        return active;
    }
    _getEventScope(name, state) {
        const handlers = this._handlersMap[name];
        if (!handlers)
            return;
        let output;
        switch (state.sourceType) {
            case EventScopeSourceType.Selection: {
                output = this._buildEventScopeBySelection(name);
                break;
            }
            case EventScopeSourceType.Target: {
                output = this._buildEventScopeByTarget(name, state.event.target);
                break;
            }
            default: {
                throw new BlockSuiteError(ErrorCode.EventDispatcherError, `Unknown event scope source: ${state.sourceType}`);
            }
        }
        return output;
    }
    _isActiveElementOutsideHost() {
        const activeElement = this._getDeepActiveElement();
        return (activeElement !== null &&
            this._isEditableElementActive(activeElement) &&
            !this.host.contains(activeElement));
    }
    _isEditableElementActive(element) {
        if (!element)
            return false;
        return (element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement ||
            element.isContentEditable);
    }
    _setActive(active) {
        if (active) {
            if (UIEventDispatcher._activeDispatcher !== this) {
                if (UIEventDispatcher._activeDispatcher) {
                    UIEventDispatcher._activeDispatcher._active = false;
                }
                UIEventDispatcher._activeDispatcher = this;
            }
            this._active = true;
        }
        else {
            if (UIEventDispatcher._activeDispatcher === this) {
                UIEventDispatcher._activeDispatcher = null;
            }
            this._active = false;
        }
    }
    add(name, handler, options) {
        const runner = {
            fn: handler,
            flavour: options?.flavour,
            blockId: options?.blockId,
        };
        this._handlersMap[name].unshift(runner);
        return () => {
            if (this._handlersMap[name].includes(runner)) {
                this._handlersMap[name] = this._handlersMap[name].filter(x => x !== runner);
            }
        };
    }
    buildEventScope(name, blocks) {
        const handlers = this._handlersMap[name];
        if (!handlers)
            return;
        const globalEvents = handlers.filter(handler => handler.flavour === undefined && handler.blockId === undefined);
        let blockIds = blocks;
        const events = [];
        const flavourSeen = {};
        while (blockIds.length > 0) {
            const idHandlers = handlers.filter(handler => handler.blockId && blockIds.includes(handler.blockId));
            const flavourHandlers = blockIds
                .map(blockId => this.std.doc.getBlock(blockId)?.flavour)
                .filter((flavour) => {
                if (!flavour)
                    return false;
                if (flavourSeen[flavour])
                    return false;
                flavourSeen[flavour] = true;
                return true;
            })
                .flatMap(flavour => {
                return handlers.filter(handler => handler.flavour === flavour);
            });
            events.push(...idHandlers, ...flavourHandlers);
            blockIds = blockIds
                .map(blockId => {
                const parent = this.std.doc.getParent(blockId);
                return parent?.id;
            })
                .filter((id) => !!id);
        }
        return events.concat(globalEvents);
    }
    mounted() {
        if (this.disposables.disposed) {
            this.disposables = new DisposableGroup();
        }
        this._bindEvents();
    }
    run(name, context, runners) {
        if (!this.active)
            return;
        const sourceState = context.get('sourceState');
        if (!runners) {
            runners = this._getEventScope(name, sourceState);
            if (!runners) {
                return;
            }
        }
        for (const runner of runners) {
            const { fn } = runner;
            const result = fn(context);
            if (result) {
                context.get('defaultState').event.stopPropagation();
                return;
            }
        }
    }
    unmounted() {
        this.disposables.dispose();
    }
}
//# sourceMappingURL=dispatcher.js.map