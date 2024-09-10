import { IS_IOS, IS_MAC } from '@blocksuite/global/env';
export function isTouchPadPinchEvent(e) {
    // two finger pinches on touch pad, ctrlKey is always true.
    // https://bugs.chromium.org/p/chromium/issues/detail?id=397027
    if (IS_IOS || IS_MAC) {
        return e.ctrlKey || e.metaKey;
    }
    return e.ctrlKey;
}
// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
export var MOUSE_BUTTONS;
(function (MOUSE_BUTTONS) {
    MOUSE_BUTTONS[MOUSE_BUTTONS["AUXILIARY"] = 4] = "AUXILIARY";
    MOUSE_BUTTONS[MOUSE_BUTTONS["FIFTH"] = 16] = "FIFTH";
    MOUSE_BUTTONS[MOUSE_BUTTONS["FORTH"] = 8] = "FORTH";
    MOUSE_BUTTONS[MOUSE_BUTTONS["NO_BUTTON"] = 0] = "NO_BUTTON";
    MOUSE_BUTTONS[MOUSE_BUTTONS["PRIMARY"] = 1] = "PRIMARY";
    MOUSE_BUTTONS[MOUSE_BUTTONS["SECONDARY"] = 2] = "SECONDARY";
})(MOUSE_BUTTONS || (MOUSE_BUTTONS = {}));
export var MOUSE_BUTTON;
(function (MOUSE_BUTTON) {
    MOUSE_BUTTON[MOUSE_BUTTON["AUXILIARY"] = 1] = "AUXILIARY";
    MOUSE_BUTTON[MOUSE_BUTTON["FIFTH"] = 4] = "FIFTH";
    MOUSE_BUTTON[MOUSE_BUTTON["FORTH"] = 3] = "FORTH";
    MOUSE_BUTTON[MOUSE_BUTTON["MAIN"] = 0] = "MAIN";
    MOUSE_BUTTON[MOUSE_BUTTON["SECONDARY"] = 2] = "SECONDARY";
})(MOUSE_BUTTON || (MOUSE_BUTTON = {}));
export function isMiddleButtonPressed(e) {
    return (MOUSE_BUTTONS.AUXILIARY & e.buttons) === MOUSE_BUTTONS.AUXILIARY;
}
export function isRightButtonPressed(e) {
    return (MOUSE_BUTTONS.SECONDARY & e.buttons) === MOUSE_BUTTONS.SECONDARY;
}
export function stopPropagation(event) {
    event.stopPropagation();
}
export function isControlledKeyboardEvent(e) {
    return e.ctrlKey || e.metaKey || e.altKey;
}
export function on(element, event, handler, options) {
    const dispose = () => {
        element.removeEventListener(event, handler, options);
    };
    element.addEventListener(event, handler, options);
    return dispose;
}
export function once(element, event, handler, options) {
    const onceHandler = (e) => {
        dispose();
        handler(e);
    };
    const dispose = () => {
        element.removeEventListener(event, onceHandler, options);
    };
    element.addEventListener(event, onceHandler, options);
    return dispose;
}
export function delayCallback(callback, delay = 0) {
    const timeoutId = setTimeout(callback, delay);
    return () => clearTimeout(timeoutId);
}
/**
 * A wrapper around `requestAnimationFrame` that only calls the callback if the
 * element is still connected to the DOM.
 */
export function requestConnectedFrame(callback, element) {
    return requestAnimationFrame(() => {
        // If element is not provided, fallback to `requestAnimationFrame`
        if (element === undefined) {
            callback();
            return;
        }
        // Only calls callback if element is still connected to the DOM
        if (element.isConnected)
            callback();
    });
}
/**
 * A wrapper around `requestConnectedFrame` that only calls at most once in one frame
 */
export function requestThrottledConnectedFrame(func, element) {
    let raqId = undefined;
    let latestArgs = [];
    return ((...args) => {
        latestArgs = args;
        raqId && cancelAnimationFrame(raqId);
        raqId = requestConnectedFrame(() => {
            raqId = undefined;
            func(...latestArgs);
        }, element);
    });
}
//# sourceMappingURL=event.js.map