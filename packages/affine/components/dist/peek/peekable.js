import { PeekableController } from './controller.js';
const symbol = Symbol('peekable');
export const isPeekable = (e) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Reflect.has(e, symbol) && e[symbol]?.peekable;
};
export const peek = (e, template) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isPeekable(e) && e[symbol]?.peek(template);
};
/**
 * Mark a class as peekable, which means the class can be peeked by the peek view service.
 *
 * Note: This class must be syntactically below the `@customElement` decorator (it will be applied before customElement).
 */
export const Peekable = (options = {
    action: ['double-click', 'shift-click'],
}) => (Class, context) => {
    var _a;
    if (context.kind !== 'class') {
        console.error('@Peekable() can only be applied to a class');
        return;
    }
    if (options.action === undefined)
        options.action = ['double-click', 'shift-click'];
    const actions = Array.isArray(options.action)
        ? options.action
        : options.action
            ? [options.action]
            : [];
    const derivedClass = class extends Class {
        constructor() {
            super(...arguments);
            this[_a] = new PeekableController(this, options.enableOn);
        }
        static { _a = symbol; }
        connectedCallback() {
            super.connectedCallback();
            const target = (options.selector ? this.querySelector(options.selector) : this) ||
                this;
            if (actions.includes('double-click')) {
                this.disposables.addFromEvent(target, 'dblclick', e => {
                    if (this[symbol].peekable) {
                        e.stopPropagation();
                        this[symbol].peek().catch(console.error);
                    }
                });
            }
            if (actions.includes('shift-click')) {
                this.disposables.addFromEvent(target, 'click', e => {
                    if (e.shiftKey && this[symbol].peekable) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        this[symbol].peek().catch(console.error);
                    }
                });
            }
        }
    };
    return derivedClass;
};
//# sourceMappingURL=peekable.js.map