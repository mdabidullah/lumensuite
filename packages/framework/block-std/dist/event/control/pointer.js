import { IS_IPAD } from '@lumensuite/global/env';
import { UIEventState, UIEventStateContext } from '../base.js';
import { MultiPointerEventState, PointerEventState } from '../state/index.js';
import { EventScopeSourceType, EventSourceState } from '../state/source.js';
import { center, isFarEnough } from '../utils.js';
function createContext(event, state) {
    return UIEventStateContext.from(new UIEventState(event), new EventSourceState({
        event,
        sourceType: EventScopeSourceType.Target,
    }), state);
}
class PointerControllerBase {
    get _rect() {
        return this._dispatcher.host.getBoundingClientRect();
    }
    constructor(_dispatcher) {
        this._dispatcher = _dispatcher;
    }
}
class PointerEventForward extends PointerControllerBase {
    constructor() {
        super(...arguments);
        this._down = (event) => {
            const { pointerId } = event;
            const pointerState = new PointerEventState({
                event,
                rect: this._rect,
                startX: -Infinity,
                startY: -Infinity,
                last: null,
            });
            this._startStates.set(pointerId, pointerState);
            this._lastStates.set(pointerId, pointerState);
            this._dispatcher.run('pointerDown', createContext(event, pointerState));
        };
        this._lastStates = new Map();
        this._move = (event) => {
            const { pointerId } = event;
            const start = this._startStates.get(pointerId) ?? null;
            const last = this._lastStates.get(pointerId) ?? null;
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: start?.x ?? -Infinity,
                startY: start?.y ?? -Infinity,
                last,
            });
            this._lastStates.set(pointerId, state);
            this._dispatcher.run('pointerMove', createContext(event, state));
        };
        this._startStates = new Map();
        this._upOrOut = (up) => (event) => {
            const { pointerId } = event;
            const start = this._startStates.get(pointerId) ?? null;
            const last = this._lastStates.get(pointerId) ?? null;
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: start?.x ?? -Infinity,
                startY: start?.y ?? -Infinity,
                last,
            });
            this._startStates.delete(pointerId);
            this._lastStates.delete(pointerId);
            this._dispatcher.run(up ? 'pointerUp' : 'pointerOut', createContext(event, state));
        };
    }
    listen() {
        const { host, disposables } = this._dispatcher;
        disposables.addFromEvent(host, 'pointerdown', this._down);
        disposables.addFromEvent(host, 'pointermove', this._move);
        disposables.addFromEvent(host, 'pointerup', this._upOrOut(true));
        disposables.addFromEvent(host, 'pointerout', this._upOrOut(false));
    }
}
class ClickController extends PointerControllerBase {
    constructor() {
        super(...arguments);
        this._down = (event) => {
            // disable for secondary pointer
            if (event.isPrimary === false)
                return;
            if (this._downPointerState &&
                event.pointerId === this._downPointerState.raw.pointerId &&
                event.timeStamp - this._downPointerState.raw.timeStamp < 500 &&
                !isFarEnough(event, this._downPointerState.raw)) {
                this._pointerDownCount++;
            }
            else {
                this._pointerDownCount = 1;
            }
            this._downPointerState = new PointerEventState({
                event,
                rect: this._rect,
                startX: -Infinity,
                startY: -Infinity,
                last: null,
            });
        };
        this._downPointerState = null;
        this._pointerDownCount = 0;
        this._up = (event) => {
            if (!this._downPointerState)
                return;
            if (isFarEnough(this._downPointerState.raw, event)) {
                this._pointerDownCount = 0;
                this._downPointerState = null;
                return;
            }
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: -Infinity,
                startY: -Infinity,
                last: null,
            });
            const context = createContext(event, state);
            const run = () => {
                this._dispatcher.run('pointerUp', context);
                this._dispatcher.run('click', context);
                if (this._pointerDownCount === 2) {
                    this._dispatcher.run('doubleClick', context);
                }
                if (this._pointerDownCount === 3) {
                    this._dispatcher.run('tripleClick', context);
                }
            };
            run();
        };
    }
    listen() {
        const { host, disposables } = this._dispatcher;
        disposables.addFromEvent(host, 'pointerdown', this._down);
        disposables.addFromEvent(host, 'pointerup', this._up);
    }
}
class DragController extends PointerControllerBase {
    constructor() {
        super(...arguments);
        this._down = (event) => {
            if (!event.isPrimary) {
                if (this._dragging && this._lastPointerState) {
                    this._up(this._lastPointerState.raw);
                }
                this._reset();
                return;
            }
            const pointerState = new PointerEventState({
                event,
                rect: this._rect,
                startX: -Infinity,
                startY: -Infinity,
                last: null,
            });
            this._startPointerState = pointerState;
            this._dispatcher.disposables.addFromEvent(document, 'pointermove', this._move);
            this._dispatcher.disposables.addFromEvent(document, 'pointerup', this._up);
        };
        this._dragging = false;
        this._lastPointerState = null;
        this._move = (event) => {
            if (this._startPointerState === null ||
                this._startPointerState.raw.pointerId !== event.pointerId)
                return;
            const start = this._startPointerState;
            const last = this._lastPointerState ?? start;
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: start.x,
                startY: start.y,
                last,
            });
            this._lastPointerState = state;
            if (!this._dragging && isFarEnough(event, this._startPointerState.raw)) {
                this._dragging = true;
                this._dispatcher.run('dragStart', createContext(event, start));
            }
            if (this._dragging) {
                this._dispatcher.run('dragMove', createContext(event, state));
            }
        };
        this._reset = () => {
            this._dragging = false;
            this._startPointerState = null;
            this._lastPointerState = null;
            document.removeEventListener('pointermove', this._move);
            document.removeEventListener('pointerup', this._up);
        };
        this._startPointerState = null;
        this._up = (event) => {
            if (!this._startPointerState ||
                this._startPointerState.raw.pointerId !== event.pointerId)
                return;
            const start = this._startPointerState;
            const last = this._lastPointerState;
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: start.x,
                startY: start.y,
                last,
            });
            if (this._dragging) {
                this._dispatcher.run('dragEnd', createContext(event, state));
            }
            this._reset();
        };
    }
    // https://mikepk.com/2020/10/iOS-safari-scribble-bug/
    _applyScribblePatch() {
        if (!IS_IPAD)
            return;
        const { host, disposables } = this._dispatcher;
        disposables.addFromEvent(host, 'touchmove', (event) => {
            if (this._dragging &&
                this._startPointerState &&
                this._startPointerState.raw.pointerType === 'pen') {
                event.preventDefault();
            }
        });
    }
    listen() {
        const { host, disposables } = this._dispatcher;
        disposables.addFromEvent(host, 'pointerdown', this._down);
        this._applyScribblePatch();
    }
}
class DualDragControllerBase extends PointerControllerBase {
    constructor() {
        super(...arguments);
        this._down = (event) => {
            // Another pointer down
            if (this._startPointerStates.primary !== null &&
                this._startPointerStates.secondary !== null) {
                this._reset();
            }
            if (this._startPointerStates.primary === null && !event.isPrimary) {
                return;
            }
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: -Infinity,
                startY: -Infinity,
                last: null,
            });
            if (event.isPrimary) {
                this._startPointerStates.primary = state;
            }
            else {
                this._startPointerStates.secondary = state;
            }
        };
        this._lastPointerStates = {
            primary: null,
            secondary: null,
        };
        this._move = (event) => {
            if (this._startPointerStates.primary === null ||
                this._startPointerStates.secondary === null) {
                return;
            }
            const { pointerId } = event;
            const start1 = this._startPointerStates.primary.raw.pointerId === pointerId
                ? this._startPointerStates.primary
                : this._startPointerStates.secondary;
            const last1 = (this._lastPointerStates.primary?.raw.pointerId === pointerId
                ? this._lastPointerStates.primary
                : this._lastPointerStates.secondary) ?? start1;
            if (!isFarEnough(last1.raw, event))
                return;
            const state1 = new PointerEventState({
                event,
                rect: this._rect,
                startX: start1.x,
                startY: start1.y,
                last: last1,
            });
            const start2 = this._startPointerStates.primary.raw.pointerId !== pointerId
                ? this._startPointerStates.primary
                : this._startPointerStates.secondary;
            const last2 = (this._lastPointerStates.primary?.raw.pointerId !== pointerId
                ? this._lastPointerStates.primary
                : this._lastPointerStates.secondary) ?? start2;
            const state2 = new PointerEventState({
                event: last2.raw,
                rect: this._rect,
                startX: start2.x,
                startY: start2.y,
                last: last2,
            });
            if (!isFarEnough(state1.delta, state2.delta))
                return;
            const multiPointerState = new MultiPointerEventState(event, [
                state1,
                state2,
            ]);
            this._handleMove(event, multiPointerState);
            this._lastPointerStates = {
                primary: state1.raw.isPrimary ? state1 : state2,
                secondary: state1.raw.isPrimary ? state2 : state1,
            };
        };
        this._reset = () => {
            this._startPointerStates = {
                primary: null,
                secondary: null,
            };
            this._lastPointerStates = {
                primary: null,
                secondary: null,
            };
        };
        this._startPointerStates = {
            primary: null,
            secondary: null,
        };
        this._upOrOut = (event) => {
            const { pointerId } = event;
            if (pointerId === this._startPointerStates.primary?.raw.pointerId ||
                pointerId === this._startPointerStates.secondary?.raw.pointerId) {
                this._reset();
            }
        };
    }
    listen() {
        const { host, disposables } = this._dispatcher;
        disposables.addFromEvent(host, 'pointerdown', this._down);
        disposables.addFromEvent(host, 'pointermove', this._move);
        disposables.addFromEvent(host, 'pointerup', this._upOrOut);
        disposables.addFromEvent(host, 'pointerout', this._upOrOut);
    }
}
class PinchController extends DualDragControllerBase {
    _handleMove(event, state) {
        if (event.pointerType !== 'touch')
            return;
        // the changes of distance between two pointers is not far enough
        if (!isFarEnough(state.pointers[0].delta, state.pointers[1].delta))
            return;
        this._dispatcher.run('pinch', createContext(event, state));
    }
}
class PanController extends DualDragControllerBase {
    _handleMove(event, state) {
        if (event.pointerType !== 'touch')
            return;
        //  current center,          last center   = center move vector
        // 0.5 * (a + da + b + db) - 0.5 * (a + b) = 0.5 * (da + db)
        const centerMoveVec = center(state.pointers[0].delta, state.pointers[1].delta);
        // the center move distance is not far enough
        if (!isFarEnough({ x: 0, y: 0 }, centerMoveVec))
            return;
        this._dispatcher.run('pan', createContext(event, state));
    }
}
export class PointerControl {
    constructor(_dispatcher) {
        this.controllers = [
            new PointerEventForward(_dispatcher),
            new ClickController(_dispatcher),
            new DragController(_dispatcher),
            new PanController(_dispatcher),
            new PinchController(_dispatcher),
        ];
    }
    listen() {
        this.controllers.forEach(controller => controller.listen());
    }
}
//# sourceMappingURL=pointer.js.map