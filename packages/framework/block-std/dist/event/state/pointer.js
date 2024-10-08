import { UIEventState } from '../base.js';
export class PointerEventState extends UIEventState {
    get x() {
        return this.point.x;
    }
    get y() {
        return this.point.y;
    }
    constructor({ event, rect, startX, startY, last }) {
        super(event);
        this.type = 'pointerState';
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        this.raw = event;
        this.point = { x: offsetX, y: offsetY };
        this.containerOffset = { x: rect.left, y: rect.top };
        this.start = { x: startX, y: startY };
        this.delta = last
            ? { x: offsetX - last.point.x, y: offsetY - last.point.y }
            : { x: 0, y: 0 };
        this.keys = {
            shift: event.shiftKey,
            cmd: event.metaKey || event.ctrlKey,
            alt: event.altKey,
        };
        this.button = last?.button || event.button;
        this.pressure = event.pressure;
    }
}
export class MultiPointerEventState extends UIEventState {
    constructor(event, pointers) {
        super(event);
        this.type = 'multiPointerState';
        this.pointers = pointers;
    }
}
//# sourceMappingURL=pointer.js.map