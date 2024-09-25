import { IS_MAC } from '@lumensuite/global/env';
import { UIEventState, UIEventStateContext, } from '../base.js';
import { bindKeymap } from '../keymap.js';
import { KeyboardEventState } from '../state/index.js';
import { EventScopeSourceType, EventSourceState } from '../state/source.js';
export class KeyboardControl {
    constructor(_dispatcher) {
        this._dispatcher = _dispatcher;
        this._down = (event) => {
            if (!this._shouldTrigger(event)) {
                return;
            }
            const keyboardEventState = new KeyboardEventState({
                event,
                composing: this.composition,
            });
            this._dispatcher.run('keyDown', this._createContext(event, keyboardEventState));
        };
        this._shouldTrigger = (event) => {
            if (event.isComposing) {
                return false;
            }
            const mod = IS_MAC ? event.metaKey : event.ctrlKey;
            if (['c', 'v', 'x'].includes(event.key) &&
                mod &&
                !event.shiftKey &&
                !event.altKey) {
                return false;
            }
            return true;
        };
        this._up = (event) => {
            if (!this._shouldTrigger(event)) {
                return;
            }
            const keyboardEventState = new KeyboardEventState({
                event,
                composing: this.composition,
            });
            this._dispatcher.run('keyUp', this._createContext(event, keyboardEventState));
        };
        this.composition = false;
    }
    _createContext(event, keyboardState) {
        return UIEventStateContext.from(new UIEventState(event), new EventSourceState({
            event,
            sourceType: EventScopeSourceType.Selection,
        }), keyboardState);
    }
    bindHotkey(keymap, options) {
        return this._dispatcher.add('keyDown', ctx => {
            if (this.composition) {
                return false;
            }
            const binding = bindKeymap(keymap);
            return binding(ctx);
        }, options);
    }
    listen() {
        this._dispatcher.disposables.addFromEvent(document, 'keydown', this._down);
        this._dispatcher.disposables.addFromEvent(document, 'keyup', this._up);
        this._dispatcher.disposables.addFromEvent(document, 'compositionstart', () => {
            this.composition = true;
        });
        this._dispatcher.disposables.addFromEvent(document, 'compositionend', () => {
            this.composition = false;
        });
    }
}
//# sourceMappingURL=keyboard.js.map