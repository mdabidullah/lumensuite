import { getDecoratorState } from './common.js';
import { convertProps } from './convert.js';
import { getDerivedProps, updateDerivedProps } from './derive.js';
import { startObserve } from './observer.js';
const yPropsSetSymbol = Symbol('yProps');
export function getFieldPropsSet(target) {
    const proto = Object.getPrototypeOf(target);
    // @ts-ignore
    if (!Object.hasOwn(proto, yPropsSetSymbol)) {
        // @ts-ignore
        proto[yPropsSetSymbol] = new Set();
    }
    // @ts-ignore
    return proto[yPropsSetSymbol];
}
export function field(fallback) {
    return function yDecorator(target, context) {
        const prop = context.name;
        return {
            init(v) {
                const yProps = getFieldPropsSet(this);
                yProps.add(prop);
                if (getDecoratorState(this.surface ?? Object.getPrototypeOf(this).constructor)?.skipField) {
                    return;
                }
                if (this.yMap) {
                    if (this.yMap.doc) {
                        this.surface.doc.transact(() => {
                            this.yMap.set(prop, v);
                        });
                    }
                    else {
                        this.yMap.set(prop, v);
                        this._preserved.set(prop, v);
                    }
                }
                return v;
            },
            get() {
                return (this.yMap.get(prop) ??
                    this._preserved.get(prop) ??
                    fallback);
            },
            set(originalVal) {
                const isCreating = getDecoratorState(this.surface)?.creating;
                if (getDecoratorState(this.surface)?.skipField) {
                    return;
                }
                const derivedProps = getDerivedProps(prop, originalVal, this);
                const val = isCreating
                    ? originalVal
                    : convertProps(prop, originalVal, this);
                const oldValue = target.get.call(this);
                if (this.yMap.doc) {
                    this.surface.doc.transact(() => {
                        this.yMap.set(prop, val);
                    });
                }
                else {
                    this.yMap.set(prop, val);
                    this._preserved.set(prop, val);
                }
                startObserve(prop, this);
                if (!isCreating) {
                    updateDerivedProps(derivedProps, this);
                    this.surface['hooks'].update.emit({
                        id: this.id,
                        props: {
                            [prop]: val,
                        },
                        oldValues: {
                            [prop]: oldValue,
                        },
                    });
                }
            },
        };
    };
}
//# sourceMappingURL=field.js.map